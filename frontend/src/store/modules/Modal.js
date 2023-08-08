import { 
    MODAL_OPEN,
    MODAL_CLOSE,
    MODAL_ADD_MESSAGE,
} from "@/store/mutation-types.js";

export default {
  namespaced: true,
  state: {
    modalOpen: false,
    modalMessage: false,
  },
  mutations: {
    [MODAL_OPEN](state) {
      state.modalOpen = true;
    },
    [MODAL_CLOSE](state){
      state.modalOpen = false;
      state.modalMessage = null;
    },
    [MODAL_ADD_MESSAGE](state, payload) {
      state.modalMessage = payload;
    }
  },
}