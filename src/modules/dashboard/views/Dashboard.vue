<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const router = useRouter();

const features = ref([
  {
    title: "Rapid Prototyping",
    desc: "Create new modules instantly by adding a folder.",
  },
  {
    title: "Isolated Scope",
    desc: "Each POC has its own components, api, and state.",
  },
  {
    title: "Auto Routing",
    desc: "Routes are automatically discovered from modules.",
  },
]);
</script>

<template>
  <div class="mx-auto max-w-6xl space-y-8 p-8">
    <header class="flex flex-col gap-2">
      <h1 class="text-foreground text-4xl font-extrabold tracking-tight">
        Welcome to Poccy
      </h1>
      <p class="text-muted-foreground text-xl">
        Your playground for experimental web ideas, built with a robust
        dark/light design system.
      </p>
    </header>

    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card
        v-for="feat in features"
        :key="feat.title"
        class="border-border bg-card text-card-foreground transition-all hover:-translate-y-1 hover:shadow-lg"
      >
        <CardHeader>
          <CardTitle class="text-lg">{{ feat.title }}</CardTitle>
        </CardHeader>
        <CardContent>
          <p class="text-muted-foreground">{{ feat.desc }}</p>
        </CardContent>
      </Card>
    </div>

    <section class="space-y-4">
      <h2 class="text-foreground text-2xl font-bold">Theme Switcher Demo</h2>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div class="bg-primary text-primary-foreground rounded-xl p-6">
          <h3 class="text-lg font-bold">Primary Surface</h3>
          <p class="mt-1 text-sm opacity-90">
            This surface uses the primary color token which adapts to the theme.
          </p>
        </div>
        <div
          class="bg-secondary text-secondary-foreground border-border rounded-xl border p-6"
        >
          <h3 class="text-lg font-bold">Secondary Surface</h3>
          <p class="text-muted-foreground mt-1 text-sm">
            This surface uses the secondary color token.
          </p>
        </div>
      </div>
    </section>

    <Card class="border-primary/20 bg-primary/5 py-8 text-center">
      <CardHeader>
        <CardTitle class="text-foreground text-2xl">Ready to start?</CardTitle>
        <CardDescription class="text-muted-foreground">
          Create a new folder in
          <code class="bg-muted text-foreground rounded px-1">src/modules</code>
          and add a
          <code class="bg-muted text-foreground rounded px-1">routes.ts</code>
          file.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          size="lg"
          @click="router.push('/example-poc')"
          class="font-semibold shadow-md"
          >View Example POC</Button
        >
      </CardContent>
    </Card>
  </div>
</template>
