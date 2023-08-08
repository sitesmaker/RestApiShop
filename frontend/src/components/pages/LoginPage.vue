<template>
  <div class="row">
    <form method="POST"
            class="form form_login"
            @submit.prevent="auth({ urlRequest, login, password })"
    > 
      <input type="text" name="login" v-model="login" placeholder="Логин">
      <input type="password" name="password" v-model="password" placeholder="Пароль">
      <input type="submit" value="Войти" class="btn">
      <div>
        <span>Если у вас нет аккаунта перейдите чтобы - </span>
        <router-link to="/registration" class="link">
          <span>зарегистрироваться</span>
        </router-link>
      </div>
    </form>
    <BaseModal v-if="modalMessage">
      {{ modalMessage }}
    </BaseModal>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import BaseModal from "@/components/pages/BaseModal.vue";
  
  export default {
    name: 'LoginPage',
    components: {
      BaseModal,
    },
    props: {
      modalVisible: {
        type: Boolean,
      }
    },
    data() {
      return {
        login: '',
        password: '',
        urlRequest: "http://localhost:3000/auth/login",
        response: [],
      }
    },
    methods: {
      ...mapActions("Auth", ["auth"]),
      ...mapMutations('Modal', ["MODAL_OPEN", "MODAL_ADD_MESSAGE"]),
    },
    computed: {
      ...mapState("Modal", ["modalMessage"])
    },
  }
</script>

<style lang="scss">
    .form_login {

      max-width: 400px;
      text-align: center;

      input,
      textarea {
          width: 100%;
          padding: 10px;
          border-radius: 10px;
          margin-bottom: 10px;
      }

      
      .btn {
          max-width: 220px;
          cursor: pointer;
      }
    }
</style>