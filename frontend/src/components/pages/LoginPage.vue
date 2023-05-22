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
            <router-link to="/registration" class="header__login">
              <span>зарегистрироваться</span>
            </router-link>
          </div>
        </form>
    </div>
</template>

<script>

import { mapActions } from "vuex";
  
  export default {
    name: 'HomePage',
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
    }
  }
</script>

<style lang="scss">
    .form_login {
        display: flex;
        flex-direction: column;
        max-width: 380px;
        margin-top: 60px;

        input,
        textarea {
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