import Vue from "vue";
import Vuex from "vuex";
import Auth from "@/store/modules/Auth";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    Auth: Auth,
  },
});