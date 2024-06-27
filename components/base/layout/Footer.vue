<script setup lang="ts">

import {SOCIAL_LINKS} from "~/constants/navigation";
</script>

<template>
  <footer>
    <div class="grid grid-cols-3 items-center text-center container mx-auto py-10">
      <div class="text-12-18">Start your journey into the Solana ecosystem !</div>
      <div class="flex justify-center"><NuxtLink to="/"><img class="rounded-full w-36 hover:scale-105 transition-all" src="/logo.svg" alt="logo"></NuxtLink></div>
      <div class="flex gap-10 justify-center">
        <NuxtLink v-for="link in SOCIAL_LINKS" :to="link.to" target="_blank" class="flex items-center"><Icon size="25" :name="link.icon" class="hover:text-green-400 transition-colors"/></NuxtLink>
      </div>
    </div>
  </footer>
</template>
