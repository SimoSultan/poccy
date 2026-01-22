import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("./views/Dashboard.vue"),
    meta: {
      icon: "DashboardBrowsingIcon",
    },
  },
];

export default routes;
