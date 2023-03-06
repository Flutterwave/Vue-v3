import Vue, { VNode } from 'vue';
import Flutterwave from '@/entry.esm';
import Dev from './serve.vue';
// To register individual components where they are used (serve.vue) instead of using the
// library as a whole, comment/remove this import and it's corresponding "Vue.use" call
Vue.use(Flutterwave, {
  // publicKey: "FLWPXXX_XXXXXXXXXXXX",
  publicKey: 'FLWPUBK_TEST-c085776c333a632aa0e6556ff32570c7-X',
});

Vue.config.productionTip = false;

new Vue({
  render: (h): VNode => h(Dev),
}).$mount('#app');
