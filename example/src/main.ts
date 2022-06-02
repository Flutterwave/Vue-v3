import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Flutterwave from "flw-ts";

Vue.config.productionTip = false;
Vue.use(Flutterwave, { publicKey: "FLWPUBK_TEST-4550165677fdcf951548729e3ff6b950-X" });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
