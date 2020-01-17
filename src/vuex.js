import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        cod: 122,
        ano: 2017,
        titulo: 'curso'
    },

    mutations: {
        setInfo(state, payload) {
            state.cod    = payload.cod;
            state.ano    = payload.ano;
            state.titulo = payload.titulo;  
        }
    },

    getters: {
        getInfo: state => state
    }
})