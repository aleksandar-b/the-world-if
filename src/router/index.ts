import { createRouter, createWebHistory } from "vue-router";

import DetailView from "../views/Page/Detail/index.vue";
import HomeView from "../views/Page/Main.vue";
import TestView from "../views/Page/View.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:id?/view",
      name: "detail",
      component: DetailView,
    },
    {
      path: "/:id?/:type?",
      name: "home",
      component: HomeView,
    },
    {
      path: "/view",
      name: "view",
      component: TestView,
    },
  ],
});

export default router;
