import Vue from 'vue';
import Form from './Form.vue'
import Teste from './Teste.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Form),
}).$mount('#form')

new Vue({
  render: h => h(Teste),
}).$mount('#planilhas')
