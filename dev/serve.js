import Vue from 'vue';
import Dev from './serve.vue';
import Flutterwave from "../src/entry";

Vue.config.productionTip = false;

Vue.use(Flutterwave, { publicKey: 'FLWPUBK_TEST-xxxxxxxxxxxxxxxxxxxxx-X' } )



new Vue({
  render: (h) => h(Dev),
}).$mount('#app');
