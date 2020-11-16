import Vue from 'vue';
import Dev from './serve.vue';
import Flutterwave from "../src/entry";

Vue.config.productionTip = false;

Vue.use(Flutterwave, { publicKey: 'FLWPUBK_TEST-0b04581c8d73fd08d5c720e1e0f803b4-X' } )



new Vue({
  render: (h) => h(Dev),
}).$mount('#app');
