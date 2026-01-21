import {
  type RouteRecordRaw,
  createRouter,
  createWebHistory,
} from "vue-router";

import AppLayout from "../layouts/AppLayout.vue";

const layoutRoute: RouteRecordRaw = {
  path: "/",
  component: AppLayout,
  children: [
    {
      path: "",
      redirect: "/dashboard",
    },
  ],
};

// Auto-load module routes
const moduleRoutes = import.meta.glob("../../modules/**/routes.ts", {
  eager: true,
});

for (const path in moduleRoutes) {
  const mod = moduleRoutes[path] as { default: RouteRecordRaw[] };
  if (mod.default && layoutRoute.children) {
    layoutRoute.children.push(...mod.default);
  }
}

const router = createRouter({
  history: createWebHistory(),
  routes: [layoutRoute],
});

export default router;
