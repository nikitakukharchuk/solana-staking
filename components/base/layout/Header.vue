<script setup lang="ts">
import {ROUTE_LINKS} from "~/constants/navigation.js";
const params = useRoute()

</script>


<template>
  <header class="mx-auto container fixed top-5 left-0 right-0 bg-black rounded-full border shadow-2xl shadow-cool-700 z-50">
    <div class="flex items-center justify-between px-5 py-2">
      <div>
        <NuxtLink to="/"><img class="rounded-full w-36 hover:scale-105 transition-all" src="/logo.svg" alt="logo"></NuxtLink>
      </div>
      <nav>
        <ul class="flex gap-10">
          <li v-for="link in ROUTE_LINKS"><NuxtLink :to="link.to" active-class="text-green-400">{{ link.label }}</NuxtLink></li>
        </ul>
      </nav>
      <div>
        <UButton :ui="{ rounded: 'rounded-full' }" size="xl">Contact us</UButton>
      </div>
    </div>
  </header>
</template>
