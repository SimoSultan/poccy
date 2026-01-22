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
  <div class="space-y-6">
    <header class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold text-gray-900">Welcome to Poccy</h1>
        <p class="mt-2 text-gray-600">
          Your playground for experimental web ideas.
        </p>
      </div>
    </header>

    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card
        v-for="feat in features"
        :key="feat.title"
        class="border-gray-100 transition-shadow hover:shadow-md"
      >
        <CardHeader>
          <CardTitle class="text-lg">{{ feat.title }}</CardTitle>
        </CardHeader>
        <CardContent>
          <p class="text-gray-600">{{ feat.desc }}</p>
        </CardContent>
      </Card>
    </div>

    <Card class="border-blue-100 bg-blue-50/50 text-center">
      <CardHeader>
        <CardTitle class="text-xl text-blue-900">Ready to start?</CardTitle>
        <CardDescription class="text-blue-700">
          Create a new folder in <code>src/modules</code> and add a
          <code>routes.ts</code> file.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button @click="router.push('/example-poc')">View Example POC</Button>
      </CardContent>
    </Card>
  </div>
</template>
