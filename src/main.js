import Vue from 'vue';
import Vuex from 'vuex';

import Form from './Form.vue';
import Info from './Info.vue';

import { store } from './vuex'

Vue.config.productionTip = false
Vue.use(Vuex);

new Vue({
  render: h => h(Form),store
}).$mount('#form')

new Vue({
  render: h => h(Info),store
}).$mount('#planilhas')
