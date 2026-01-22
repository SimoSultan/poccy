import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/example-poc",
    name: "Example POC",
    component: () => import("./views/ExamplePoc.vue"),
    meta: {
      icon: "TestTubeIcon",
    },
  },
];

export default routes;
