"use strict";

import Vue from "vue";
import Router from "vue-router";

// 1. Use plugin.
Vue.use(Router);

// 2. Define route components
// 페이지 호출
import loginVue from "../components/template/login/login.vue";
import memberVue from "../components/template/member/member.vue";
import searchVue from "../components/template/search/search.vue";
import error from "../components/template/error.vue";

// 3. Create the router
const index = new Router({
  mode: 'history',
  routes: [
    { path: "/", name: "home", component: loginVue },
    { path: "/login", name: "login", component: loginVue },
    { path: "/member", name: "member", component: memberVue },
    { path: "/search", name: "search", component: searchVue },
    { path: '*', component: error }
  ]
});

export default index;
