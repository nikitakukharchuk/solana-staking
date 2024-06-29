<script setup lang="ts">
useSeoMeta({
  title: 'Home page',
  description: 'Solana validator description',
})
</script>


<template>
  <div class="bg-black rounded-b-[80px] h-full relative overflow-hidden">
    <lazy-pages-home-hero-section />
  </div>
  <section class="container mx-auto">
    <lazy-pages-home-about-us-section class="text-black py-10"/>
  </section>
  <section class="bg-black rounded-[40px] py-10">
    <lazy-pages-home-services-section class="mx-auto container"/>
  </section>
  <lazy-pages-home-contact-us-section class="text-black py-10"/>
</template>