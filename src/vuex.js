import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        cod: null,
        ano: null,
        titulo: null
    },

    mutations: {
        setInfo(state, payload) {                   
            state.cod    = String( payload.cod );
            state.ano    = String( payload.ano );
            state.titulo = payload.curso + ' - ' + payload.campus + ' - ' + payload.ano;
        }
    },

    getters: {
        getInfo: state => state
    }
})