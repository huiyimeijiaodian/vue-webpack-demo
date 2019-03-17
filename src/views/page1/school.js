/**
 * Created by 回忆没了焦点 on 2019/3/13.
 */
import Vue from "vue";
import School from "./School.vue";
// import router from "../router";
// import store from "../../store";

Vue.config.productionTip = false;

new Vue({
    render: h => h(School)
}).$mount("#school");
