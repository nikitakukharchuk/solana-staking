<script lang="ts" setup>
</script>

<template>
  <section class="flex flex-col justify-center items-start h-screen">
    <div class="absolute z-0 top-0 left-0 bottom-0 right-0">
      <video class="object-cover w-full h-full hidden lg:block" src="https://videos.ctfassets.net/qqk6u6a33mqj/4lcGTeQNYGCElWZUwITLRG/7bdd395d72fbaf05e340bce3a65c842a/ill_home.mp4" preload="auto" autoplay loop playsinline muted></video>
      <img class="block lg:hidden object-cover w-full h-full" src="~/assets/img/pages/home/hero/hero.png" alt="logo">
    </div>
    <div class="flex flex-col gap-10 z-10 container mx-auto">
      <h1 class="text-green-400 w-2/4 text-40-48-h1 lg:text-80-80-h1-lg">
        {{ $t('home.hero.hero_title') }}
      </h1>
      <p class="lg:w-2/4 text-14-20 lg:text-18-28">{{ $t('home.hero.hero_subtitle') }}</p>
    </div>
  </section>
</template>
