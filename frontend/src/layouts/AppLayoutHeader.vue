<template v-slot:header>
    <header class="header">
      <div class="row">
        <div class="header__menu">
          <router-link to="/" class="header__menu-item">
            <span>Главная</span>
          </router-link>
          <router-link to="/admin" class="header__menu-item" v-show="isAdmin">
            <span>Админка</span>
          </router-link>
          <router-link to="/cart" class="header__menu-item header__menu-item_cart" />
        </div>
        <div class="header__user" v-show="!token">
          <router-link to="/login" class="header__login">
            <span>Войти</span>
          </router-link>
        </div>
        <div class="header__user" v-show="token">
          <div class="header__login">
            <a @click.prevent="logout"><span>Выйти</span></a>
          </div>
        </div>
      </div>
    </header>
  </template>
  
<script>
import { mapGetters, mapMutations } from "vuex";
import {
  REMOVE_TOKEN
} from "@/store/mutation-types.js";

  export default {
    name: "AppLayoutHeader",
    methods: {
      ...mapMutations("Auth", [REMOVE_TOKEN]),
      logout() {
        this.REMOVE_TOKEN();
      }
    },
    computed: {
      ...mapGetters("Auth", ["token", "isAdmin"]),
    }
  };
</script>

<style lang="scss">

.header {
  background-color: $main-color;
  color: #fff;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;

  & + * {
    height: 100%;
    padding-top: 60px;
  }

  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 60px;
  }

  a {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
  }
}

.header__menu {
  display: flex;
  align-items: center;
  width: 100%;
}

.header__menu-item {
  margin-left: 15px;
  margin-right: 15px;

  &_cart {
    margin-left: auto;
    background-image: url(../assets/images/icons/cart.svg);
    background-repeat: no-repeat;
    background-size: contain;
    width: 24px;
    height: 24px;
    padding-right: 50px;
  }
}
</style>