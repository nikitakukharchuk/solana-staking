<script setup lang="ts">
import AlertModal from "~/components/base/layout/AlertModal.vue";
import ContactUsModal from "~/components/base/layout/ContactUsModal.vue";
</script>

<template>
    <LazyBaseLayoutHeader/>
    <div class="min-h-screen flex flex-col justify-between">
      <slot />
      <LazyBaseLayoutFooter class="bg-black rounded-t-[80px]"/>
    </div>
    <AlertModal/>
    <ContactUsModal />
</template>
