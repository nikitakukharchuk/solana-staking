<script setup lang="ts">
  import {useNavigationLinks} from "~/constants/navigation";
  const localePath = useLocalePath()
  const { SOCIAL_LINKS } = useNavigationLinks();
</script>

<template>
  <footer>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center text-center container mx-auto py-10">
      <div class="text-14-20 lg:text-18-28">{{ $t('layout.footer.description') }}</div>
      <div class="flex justify-center"><NuxtLink :to="localePath('/')"><img class="rounded-full w-36 hover:scale-105 transition-all" src="/logo.svg" alt="logo"></NuxtLink></div>
      <div class="flex gap-10 justify-center">
        <NuxtLink v-for="link in SOCIAL_LINKS" :to="link.to" target="_blank" class="flex items-center"><Icon size="25" :name="link.icon" class="hover:text-green-400 transition-colors"/></NuxtLink>
      </div>
    </div>
  </footer>
</template>
