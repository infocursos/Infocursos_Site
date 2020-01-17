import Vue from 'vue';
import Vuex from 'vuex';
import Form from './Form.vue'
//import Teste from './Teste.vue'
import Outro from './outro.vue'

import { store } from './vuex'

Vue.config.productionTip = false
Vue.use(Vuex);

new Vue({
  render: h => h(Form),store
}).$mount('#form')

new Vue({
  render: h => h(Outro),store
}).$mount('#planilhas')
