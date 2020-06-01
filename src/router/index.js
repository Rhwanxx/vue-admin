import Vue from "vue";
import VueRouter from "vue-router";
import login from "../views/login/index.vue";
import logintest from "../views/login-test/index.vue"

Vue.use(VueRouter);

const routes = [{
        path: "/",
        redirect: "login"
    },
    {
        path: "/login",
        name: "login",
        component: login
    },
	{
	    path: "/login-test",
	    name: "login-test",
		component: logintest
	}
];

const router = new VueRouter({
    routes
});

export default router;