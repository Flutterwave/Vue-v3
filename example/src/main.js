import Vue from 'vue'
import App from './App.vue'
import Flutterwave from 'flutterwave-vue-v3'

Vue.config.productionTip = false

Vue.use( Flutterwave, { publicKey: 'FLWPUBK_TEST-xxxxxxxxxxxxxxxxxxxxx-X' } ) //use your public key here

new Vue({
  render: h => h(App),
}).$mount('#app')
