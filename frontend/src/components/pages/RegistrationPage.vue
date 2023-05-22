<template>
  <div class="row">
    <form action="/api" method="POST" class="form form_login" @submit.prevent="registration">
      <input type="text" name="email" v-model="email" placeholder="Email">
      <input type="text" name="login" v-model="login" placeholder="Логин">
      <input type="password" name="password" v-model="password" placeholder="Пароль">
      <input type="submit" value="Зарегистрироваться" class="btn">
      <div>
        <span>Если у вас уже есть аккаунт перейдите по ссылке чтобы - </span>
        <router-link to="/login" class="header__login">
          <span>войти</span>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'RegistrationPage',
  data() {
    return {
      login: '',
      password: '',
      email: '',
      urlRequest: "http://rest/api/registration",
      response: [],
    }
  },
  methods: {
    registration() {
      axios({
        method: 'post',
        headers: { 'Content-Type': 'multipart/form-data' },
        url: this.urlRequest,
        data: {
          login: this.login,
          password: this.password,
          email: this.email,
        }
      }).then((res) => {
        if(res.status === 200) console.log(res);
      })
    }
  }
}
</script>

<style>

</style>