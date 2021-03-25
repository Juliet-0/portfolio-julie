import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import GraphicDesign from "../views/GraphicDesign.vue";
import Webdevelopment from "../views/Webdevelopment.vue";
import Webdesign from "../views/Webdesign.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/graphic-design",
    name: "graphic-design",
    component: GraphicDesign,
  },
  {
    path: "/web-development",
    name: "web-development",
    component: Webdevelopment,
  },
  {
    path: "/webdesign",
    name: "webdesign",
    component: Webdesign,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
