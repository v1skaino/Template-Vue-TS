import { createRouter, createWebHistory } from "vue-router";
import HomeScreen from "../modules/home/index.vue";
import LoginScreen from "../modules/login/index.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeScreen,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginScreen,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
