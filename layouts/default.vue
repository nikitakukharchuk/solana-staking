<script setup lang="ts">
import AlertModal from "~/components/base/layout/AlertModal.vue";
</script>

<template>
    <LazyBaseLayoutHeader />
      <slot />
    <LazyBaseLayoutFooter class="bg-black rounded-t-[80px]"/>
    <AlertModal/>
</template>
