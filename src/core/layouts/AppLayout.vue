<script setup lang="ts">
import {
  DashboardBrowsingIcon,
  HelpCircleIcon,
  Menu01Icon,
  TestTubeIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/vue";

import { computed, ref } from "vue";
import { useRouter } from "vue-router";

import { cn } from "@/lib/utils";

const router = useRouter();
const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

// Map icon strings to imported icon objects
const iconMap: Record<string, any> = {
  DashboardBrowsingIcon,
  TestTubeIcon,
  Menu01Icon,
};

const routes = computed(() => {
  return router
    .getRoutes()
    .filter(
      (r) =>
        r.path !== "/" &&
        !r.path.includes(":") &&
        r.path.split("/").length === 2 &&
        r.name !== "Dashboard",
    )
    .map((r) => ({
      name: r.name ? String(r.name) : r.path.substring(1),
      path: r.path,
      icon: r.meta?.icon
        ? iconMap[r.meta.icon as string] || HelpCircleIcon
        : HelpCircleIcon,
    }));
});

const dashboardRoute = computed(() => {
  const r = router.getRoutes().find((r) => r.path === "/dashboard");
  return r
    ? {
        name: "Dashboard",
        path: "/dashboard",
        icon: DashboardBrowsingIcon,
      }
    : null;
});
</script>

<template>
  <div class="flex h-screen flex-col overflow-hidden bg-gray-50 font-sans">
    <!-- Top Header - Persistent and full width -->
    <header
      class="relative z-50 flex h-20 shrink-0 items-center justify-between border-b bg-white px-6"
    >
      <div class="flex items-center gap-4">
        <!-- Animated Hamburger Button -->
        <button
          class="relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-1.25 focus:outline-none lg:invisible"
          aria-label="Toggle menu"
          @click="toggleSidebar"
        >
          <span
            :class="
              cn(
                'block h-0.5 w-5 origin-center rounded-full bg-gray-600 transition-all duration-300 ease-in-out',
                isSidebarOpen ? 'translate-y-[6.5px] rotate-45' : '',
              )
            "
          ></span>
          <span
            :class="
              cn(
                'block h-0.5 w-5 rounded-full bg-gray-600 transition-all duration-300 ease-in-out',
                isSidebarOpen ? 'scale-x-0 opacity-0' : '',
              )
            "
          ></span>
          <span
            :class="
              cn(
                'block h-0.5 w-5 origin-center rounded-full bg-gray-600 transition-all duration-300 ease-in-out',
                isSidebarOpen ? '-translate-y-[6.5px] -rotate-45' : '',
              )
            "
          ></span>
        </button>

        <div class="flex items-center gap-3">
          <div
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-100"
          >
            <span class="text-xl leading-none font-bold italic">P</span>
          </div>
          <div class="flex flex-col">
            <h1
              class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-xl leading-none font-bold text-transparent"
            >
              Poccy
            </h1>
            <span
              class="mt-1 text-[10px] font-semibold tracking-tighter text-gray-400 uppercase"
              >Idea Lab</span
            >
          </div>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <div
          class="flex h-8 w-8 items-center justify-center rounded-full border border-blue-200 bg-blue-100"
        >
          <span class="text-xs font-bold text-blue-600">SC</span>
        </div>
      </div>
    </header>

    <!-- Main Layout Container -->
    <div class="relative flex flex-1 overflow-hidden">
      <!-- Content Overlay (only for Mobile/Tablet) -->
      <transition
        enter-active-class="transition-opacity duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isSidebarOpen"
          class="fixed inset-0 z-30 bg-black/20 lg:hidden"
          :style="{ top: '5rem' }"
          @click="isSidebarOpen = false"
        />
      </transition>

      <!-- Sidebar - Overlaying on Tablet/Mobile -->
      <aside
        :class="
          cn(
            'z-40 flex flex-col border-r bg-white transition-all duration-300 ease-in-out',
            // Mobile/Tablet: Fixed so it overlays content
            'fixed inset-y-0 left-0 lg:static lg:w-64 lg:translate-x-0',
            !isSidebarOpen
              ? '-translate-x-full md:w-20 md:translate-x-0'
              : 'w-[85vw] translate-x-0 shadow-2xl sm:w-80 md:w-80',
          )
        "
        :style="{ top: '5rem' }"
      >
        <nav class="flex-1 space-y-1 overflow-y-auto px-3 py-6 md:px-2 lg:px-4">
          <!-- Dashboard Link -->
          <router-link
            v-if="dashboardRoute"
            :to="dashboardRoute.path"
            class="group relative flex items-center rounded-xl p-3 text-gray-500 transition-all hover:bg-gray-50 hover:text-blue-600 md:justify-center lg:justify-start"
            active-class="bg-blue-50/50 text-blue-600 font-bold"
            @click="isSidebarOpen = false"
          >
            <div
              :class="
                cn(
                  'flex flex-1 items-center justify-between overflow-hidden lg:flex',
                  !isSidebarOpen ? 'md:hidden' : 'flex',
                )
              "
            >
              <span class="truncate">Dashboard</span>
              <HugeiconsIcon
                :icon="dashboardRoute.icon"
                size="20"
                class="ml-2 shrink-0"
              />
            </div>
            <HugeiconsIcon
              v-if="!isSidebarOpen"
              :icon="dashboardRoute.icon"
              size="24"
              class="hidden md:block lg:hidden"
            />
          </router-link>

          <!-- Section Label -->
          <div class="pt-6 pb-2">
            <p
              :class="
                cn(
                  'px-4 text-[10px] font-bold tracking-[0.2em] text-gray-300 uppercase lg:block',
                  !isSidebarOpen ? 'hidden md:hidden' : 'block',
                )
              "
            >
              POCs
            </p>
            <div
              class="mx-auto hidden h-px w-8 bg-gray-100 md:block lg:hidden"
              v-if="!isSidebarOpen"
            />
          </div>

          <!-- POC Links -->
          <router-link
            v-for="route in routes"
            :key="route.path"
            :to="route.path"
            class="group relative flex items-center rounded-xl p-3 text-gray-500 transition-all hover:bg-gray-50 hover:text-blue-600 md:justify-center lg:justify-start"
            active-class="bg-blue-50/50 text-blue-600 font-bold"
            @click="isSidebarOpen = false"
          >
            <div
              :class="
                cn(
                  'flex flex-1 items-center justify-between overflow-hidden lg:flex',
                  !isSidebarOpen ? 'md:hidden' : 'flex',
                )
              "
            >
              <span class="truncate">{{ route.name }}</span>
              <HugeiconsIcon
                :icon="route.icon"
                size="20"
                class="ml-2 shrink-0"
              />
            </div>
            <HugeiconsIcon
              v-if="!isSidebarOpen"
              :icon="route.icon"
              size="24"
              class="hidden md:block lg:hidden"
            />
          </router-link>
        </nav>

        <div class="mt-auto flex justify-center border-t p-4">
          <div
            :class="
              cn(
                'text-[10px] text-gray-300 lg:block',
                !isSidebarOpen ? 'md:hidden' : 'block',
              )
            "
          >
            v0.1.0 Alpha
          </div>
          <div
            class="hidden text-[10px] font-bold text-gray-300 md:block lg:hidden"
            v-if="!isSidebarOpen"
          >
            v1
          </div>
        </div>
      </aside>

      <!-- Main Content Area -->
      <main
        :class="
          cn(
            'flex-1 overflow-auto bg-gray-50/50 p-6 transition-all sm:p-8 lg:p-12',
            // md:pl-28 = 20 (sidebar width) + 8 (standard gutter)
            'md:pl-28 lg:pl-12',
          )
        "
      >
        <div class="mx-auto max-w-7xl">
          <router-view v-slot="{ Component }">
            <transition
              enter-active-class="transition ease-out duration-300"
              enter-from-class="opacity-0 translate-y-4"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-200"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-4"
              mode="out-in"
            >
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
aside {
  will-change: transform, width;
}
</style>
