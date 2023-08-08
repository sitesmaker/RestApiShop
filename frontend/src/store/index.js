import Vue from "vue";
import Vuex from "vuex";
import Auth from "@/store/modules/Auth";
import Modal from "@/store/modules/Modal";
import Products from "@/store/modules/Products";
import Cart from "@/store/modules/Cart";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    Auth: Auth,
    Modal: Modal,
    Products: Products,
    Cart: Cart,
  },
});