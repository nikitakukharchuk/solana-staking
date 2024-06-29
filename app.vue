<script lang="ts" setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - SOLANA` : 'SOLANA';
  }
})
</script>

<template >
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>