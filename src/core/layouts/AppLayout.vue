<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const routes = computed(() => {
  // A simple hack to list available modules for the sidebar
  // In a real app we might want a manifest or metadata
  return router
    .getRoutes()
    .filter(
      (r) =>
        r.path !== "/" &&
        r.path !== "/dashboard" &&
        !r.path.includes(":") &&
        r.path.split("/").length === 2,
    )
    .map((r) => ({
      name: r.name ? String(r.name) : r.path.substring(1),
      path: r.path,
    }));
});
</script>

<template>
  <div class="flex h-screen bg-gray-100 font-sans">
    <!-- Sidebar -->
    <aside class="flex w-64 flex-col bg-white shadow-md">
      <div class="border-b p-6">
        <h1
          class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-2xl font-bold text-transparent"
        >
          Poccy
        </h1>
        <p class="mt-1 text-sm text-gray-500">Idea Lab</p>
      </div>

      <nav class="flex-1 space-y-2 overflow-y-auto p-4">
        <router-link
          to="/dashboard"
          class="flex items-center rounded-lg px-4 py-3 text-gray-700 transition-colors hover:bg-gray-50"
          active-class="bg-blue-50 text-blue-600 font-medium"
        >
          Dashboard
        </router-link>

        <div v-if="routes.length > 0" class="pt-4 pb-2">
          <p
            class="px-4 text-xs font-semibold tracking-wider text-gray-400 uppercase"
          >
            POCs
          </p>
        </div>

        <router-link
          v-for="route in routes"
          :key="route.path"
          :to="route.path"
          class="flex items-center rounded-lg px-4 py-3 text-gray-700 transition-colors hover:bg-gray-50"
          active-class="bg-blue-50 text-blue-600 font-medium"
        >
          {{ route.name }}
        </router-link>
      </nav>

      <div class="border-t p-4 text-center text-xs text-gray-400">
        v0.1.0 Alpha
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 overflow-auto p-8">
      <div class="mx-auto max-w-7xl">
        <router-view v-slot="{ Component }">
          <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-1"
            mode="out-in"
          >
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </main>
  </div>
</template>
