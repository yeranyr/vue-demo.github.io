import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import login from "./login.vue";
import axios from "axios";
Vue.prototype.$axios = axios;

Vue.use(ElementUI);

new Vue({
  el: "#app",
  render: h => h(login)
});
