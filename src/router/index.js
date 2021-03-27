import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import GraphicDesign from "../views/GraphicDesign.vue";
import Audiovisuel from "../views/Audiovisuel.vue";
import Photographie from "../views/Photographie.vue";

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
    path: "/audiovisuel",
    name: "audiovisuel",
    component: Audiovisuel,
  },
  {
    path: "/photographie",
    name: "photographie",
    component: Photographie,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
