import Vue       from 'vue';
import VueRouter from 'vue-router';
import store from "@/store";

import HomePage         from '@/components/pages/HomePage.vue';
import NotFound         from '@/components/pages/NotFound.vue';
import RegistrationPage from '@/components/pages/RegistrationPage.vue';
import LoginPage        from '@/components/pages/LoginPage.vue';

// Админка
import HomePageAdmin from '@/components/admin/HomePageAdmin.vue';
import axios from 'axios';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/registration",
    name: "RegistrationPage",
    component: RegistrationPage,
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/admin",
    name: "HomePageAdmin",
    component: HomePageAdmin,
    beforeEnter: (to, from, next) => {
      axios({
        method: 'post',
        url: 'http://localhost:3000/auth/admin',
        headers: {
          Authorization: `Bearer ${store.state.Auth.token}`
        }
      }).then(res => {

        if(res.data.adminAccess) {
          next()
        } else {
          next('/')
        }
      })
    }
  },
  { 
    path: '*',
    name: "NotFound",
    component: NotFound,
  }
]

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;