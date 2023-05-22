import axios from "axios";

import { 
    SET_TOKEN,
    REMOVE_TOKEN 
} from "@/store/mutation-types.js";

export default {
    namespaced: true,
    state: {
        token: localStorage.getItem("AccessToken"),
    },
    getters: {
        token: state => {
            return state.token;
        },
    },
    mutations: {
        [SET_TOKEN](state, payload) {
            if(!state.token) {
                localStorage.setItem('AccessToken', payload);
                state.token = localStorage.getItem('AccessToken');
            }
        },
        [REMOVE_TOKEN](state) {
            localStorage.removeItem('AccessToken');
            state.token = null;
        }
    },
    actions: {
        auth({ commit }, payload) {
            axios({
                method: 'post',
                url: payload.urlRequest,
                data: {
                    login: payload.login,
                    password: payload.password,
                }
            })
            .then((res) => {
                if(res.status === 200) {
                    commit("SET_TOKEN", res.data);
                }
            })
            .catch((error) => {
                console.log(error.response.data.message);   
            })
        },
    }
}
