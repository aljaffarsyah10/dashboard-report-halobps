import Vue from "vue";
import App from "./App.vue";
import { Laue } from "laue";
import Chart from "chart.js";
import VueChartkick from "vue-chartkick";

Vue.config.productionTip = false;

Vue.use(Laue);
Vue.use(VueChartkick, {
  adapter: Chart,
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
