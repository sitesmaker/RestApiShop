import axios from "axios";
import jwt_decode from "jwt-decode";

import { 
    SET_TOKEN,
    REMOVE_TOKEN 
} from "@/store/mutation-types.js";
import router from "@/router";

const isExpire = () =>{
    let token = localStorage.getItem("AccessToken");

    if(token) {
        let expire = jwt_decode(token).exp * 1000,
            currentTime = new Date().getTime();

        if(currentTime > expire) {
            token = null;
            localStorage.removeItem('AccessToken');
        }
    }

    return token;
}

const isAdmin = () =>{
    let token = localStorage.getItem("AccessToken"),
        access = false;

    if(token) {
        let role = jwt_decode(token).role;

        if(role === "admin") {
            access = true;
        }
    }

    return access;
}

export default {
    namespaced: true,
    state: {
        token: isExpire(),
        isAdmin: isAdmin(),
    },
    getters: {
        token: state => {
            return state.token;
        },
        isAdmin: state => {
            return state.isAdmin;
        },
    },
    mutations: {
        [SET_TOKEN](state, payload) {
            console.log(state.isAdmin)
            if(!state.token) {
                localStorage.setItem('AccessToken', payload);
                state.token = localStorage.getItem('AccessToken');
                state.isAdmin = jwt_decode(localStorage.getItem('AccessToken')).role === "admin";
            }

            if(state.isAdmin) {
                router.push("/admin/products");
            } else {
                router.push("/");
            }
        },
        [REMOVE_TOKEN](state) {
            localStorage.removeItem('AccessToken');
            state.token = null;
            state.isAdmin = null;
            router.push("/");
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
                commit("Modal/MODAL_OPEN", null, { root: true });
                commit("Modal/MODAL_ADD_MESSAGE", error.response.data.message, { root: true });
            })
        },
    }
}