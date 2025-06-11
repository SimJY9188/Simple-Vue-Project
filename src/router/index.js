import { createRouter, createWebHistory } from "vue-router";
import ShowManager from "../views/ShowManager.vue";

const routes = [
   {
      path: "/",
      name: "show-manager",
      component: ShowManager,
   },
];

const router = createRouter({
   history: createWebHistory(),
   routes,
});

export default router;
