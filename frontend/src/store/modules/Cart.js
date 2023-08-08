import { 
    ADD_TO_CART,
    DELETE_TO_CART,
} from "@/store/mutation-types.js";

export default {
  namespaced: true,
  state: {
    cartData: localStorage.getItem("Cart") ? JSON.parse(localStorage.getItem("Cart")) : [],
  },
  mutations: {
    [ADD_TO_CART](state, payload) {
      if(state.cartData === null || !state.cartData.length) {
        state.cartData.push(payload);
        localStorage.setItem("Cart", JSON.stringify(state.cartData));
      } else {
        let isProductExists = false;
        state.cartData.forEach(element => {
          if(element.id === payload.id) {
            isProductExists = true;
            element.count = payload.count;
            localStorage.setItem("Cart", JSON.stringify(state.cartData));
          }
        });

        if(!isProductExists) {
          state.cartData.push(payload);
          localStorage.setItem("Cart", JSON.stringify(state.cartData));
        }
      }
    },
    [DELETE_TO_CART](state, id) {
      const updated_array = state.cartData.filter(el => el.id !== id);
      localStorage.setItem("Cart", JSON.stringify(updated_array));
    }
  }
}