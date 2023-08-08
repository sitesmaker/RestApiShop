import axios from "axios";

import { 
    UPDATE_PRODUCTS,
} from "@/store/mutation-types.js";

export default {
  namespaced: true,
  state: {
    urlRequest: "http://localhost:3000/api/goods",
    products: [],
  },
  getters: {
    productsList(state) {
      return state.products;
    }
  },
  mutations: {
    [UPDATE_PRODUCTS](state, payload) {
      state.products = payload;
    }
  },
  actions: {
    getProducts({ commit, state }) {
      axios.get(state.urlRequest).then((res) => {
        if (res.status === 200) commit("UPDATE_PRODUCTS", res.data);
      });
    },
    addCart({ state, commit, dispatch }, cart) {
      axios({
          method: 'post',
          headers: { 'Content-Type': 'multipart/form-data' },
          url: state.urlRequest,
          data: {
              title: cart['title'],
              description: cart['description'],
              price: cart['price'],
              file: cart['file'],
          }
      }).then((res) => {
        commit("Modal/MODAL_ADD_MESSAGE", res.data, { root: true });
        commit("Modal/MODAL_OPEN", null, { root: true });
        dispatch("getProducts");
      }).catch((err) => {
        commit("Modal/MODAL_ADD_MESSAGE", err.data, { root: true });
        commit("Modal/MODAL_OPEN", null, { root: true });
      })
    },
    deleteCart({ state, dispatch }, data) {
      axios({
          method: 'delete',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          url: `${state.urlRequest}/${data.id}`,
          params: {
              image: data.image,
          }
      }).then((res) => {
          if (res.status === 200) dispatch("getProducts");
      })
    },
  }
}