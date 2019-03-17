/**
 * Created by 回忆没了焦点 on 2019/3/13.
 */
import Vue from "vue";
import Vip from "./Vip.vue";

Vue.config.productionTip = false;

new Vue({
    render: h => h(Vip)
}).$mount("#vip");
