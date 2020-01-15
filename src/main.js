import Vue from 'vue';
import Form from './Form.vue'
//import Teste from './Teste.vue'
import Outro from './outro.vue'

Vue.config.productionTip = false

export const eventBus = new Vue();

new Vue({
  render: h => h(Form),
}).$mount('#form')

new Vue({
  render: h => h(Outro),
}).$mount('#planilhas')
