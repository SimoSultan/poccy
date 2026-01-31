<script setup lang="ts">
import { Monitor, Moon, Sun } from "lucide-vue-next";

import { useTheme } from "../lib/theme";

const { theme, setTheme } = useTheme();
</script>

<template>
  <div
    class="bg-secondary border-border flex items-center gap-1 rounded-lg border p-1"
  >
    <button
      @click="setTheme('light')"
      :class="[
        'rounded-md p-1.5 transition-all duration-200',
        theme === 'light'
          ? 'bg-background text-foreground shadow-sm'
          : 'text-muted-foreground hover:text-foreground hover:bg-background/50',
      ]"
      title="Light Mode"
    >
      <Sun class="h-4 w-4" />
    </button>
    <button
      @click="setTheme('dark')"
      :class="[
        'rounded-md p-1.5 transition-all duration-200',
        theme === 'dark'
          ? 'bg-background text-foreground shadow-sm'
          : 'text-muted-foreground hover:text-foreground hover:bg-background/50',
      ]"
      title="Dark Mode"
    >
      <Moon class="h-4 w-4" />
    </button>
    <button
      @click="setTheme('system')"
      :class="[
        'rounded-md p-1.5 transition-all duration-200',
        theme === 'system'
          ? 'bg-background text-foreground shadow-sm'
          : 'text-muted-foreground hover:text-foreground hover:bg-background/50',
      ]"
      title="System Preference"
    >
      <Monitor class="h-4 w-4" />
    </button>
  </div>
</template>
