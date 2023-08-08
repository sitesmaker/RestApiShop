<template>
  <div class="row">
    <form action="/api" method="POST" class="form form_login" @submit.prevent="registration">
      <input type="text" name="email" v-model="email" placeholder="Email">
      <input type="text" name="login" v-model="login" placeholder="Логин">
      <input type="password" name="password" v-model="password" placeholder="Пароль">
      <input type="submit" value="Зарегистрироваться" class="btn">
      <div>
        <span>Если у вас уже есть аккаунт перейдите по ссылке чтобы - </span>
        <router-link to="/login" class="link">
          <span>войти</span>
        </router-link>
      </div>
    </form>

    <BaseModal v-if="modalMessage">
      {{ modalMessage }}
    </BaseModal>
  </div>
</template>

<script>
import axios from 'axios';
import { mapMutations, mapState } from 'vuex';
import BaseModal from '@/components/pages/BaseModal.vue';

export default {
    name: "RegistrationPage",
    data() {
        return {
            login: "",
            password: "",
            email: "",
            urlRequest: "http://rest/api/registration",
            response: [],
        };
    },
    components: { BaseModal },
    methods: {
      ...mapMutations("Modal", ["MODAL_OPEN", "MODAL_ADD_MESSAGE"]),
      registration() {
          axios({
              method: "post",
              headers: { "Content-Type": "multipart/form-data" },
              url: this.urlRequest,
              data: {
                  login: this.login,
                  password: this.password,
                  email: this.email,
              }
          }).then((res) => {
            this.modalText = null;
            if (res.status === 200) {
              this.MODAL_ADD_MESSAGE(res.data);
              this.MODAL_OPEN();
            }
          }).catch((err) => {
            this.MODAL_ADD_MESSAGE(err.data);
            this.MODAL_OPEN();
          })
      }
    },
    computed: {
      ...mapState("Modal", ["modalMessage"]),
    }, 
}
</script>

<style>

</style>