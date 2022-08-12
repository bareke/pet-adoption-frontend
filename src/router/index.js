import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/LoginView.vue"),
  },
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/example-list",
    name: "ExampleList",
    component: () => import("@/views/example/ExampleList.vue"),
  },
  {
    path: "/pet/list",
    name: "PetList",
    component: () => import("@/views/pet/PetListView.vue"),
  },
  {
    path: "/pet/create",
    name: "PetCreateView",
    component: () => import("@/views/pet/PetCreateView.vue"),
  },
  {
    path: "/pet/update/:id",
    name: "PetUpdateView",
    component: () => import("@/views/pet/PetUpdateView.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
