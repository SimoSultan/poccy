<script setup lang="ts">
import { ref } from "vue";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const count = ref(0);
</script>

<template>
  <div class="mt-10 flex justify-center">
    <Card class="w-full max-w-lg border-gray-100 shadow-sm">
      <CardHeader class="text-center">
        <div
          class="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            />
          </svg>
        </div>
        <CardTitle class="text-2xl font-bold">Example POC</CardTitle>
        <CardDescription>
          This is a fully isolated module with its own state.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="flex items-center justify-center space-x-4">
          <Button variant="outline" size="icon" @click="count--"> - </Button>
          <span class="w-12 text-center font-mono text-3xl font-bold">{{
            count
          }}</span>
          <Button
            variant="default"
            size="icon"
            class="shadow-primary/20 shadow-lg"
            @click="count++"
          >
            +
          </Button>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
