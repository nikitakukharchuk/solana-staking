<script setup lang="ts">
import {useNavigationLinks} from "~/constants/navigation";
const localePath = useLocalePath()
const { setLocale, locale, availableLocales } = useI18n()
const modalState = useModalsStore()
const isModalShow = computed(() => modalState.contactModalShow)

const { ROUTE_LINKS } = useNavigationLinks();
const showMenu = ref(false)

function switchMenu() {
  showMenu.value = !showMenu.value
}
</script>


<template>
  <header
      class="mx-auto container fixed top-5 left-0 right-0 z-50"
      :class="{
        'right-[15px]': isModalShow,
      }"
  >
    <div class="bg-black rounded-full border shadow-2xl shadow-cool-700 z-50 flex"
         :class="{
        'flex-col rounded-xl lg:rounded-full items-start': showMenu,
        'items-center': !showMenu
      }">
      <div class="grid grid-cols-2 lg:grid-cols-3 items-center px-5 py-2 w-full">
        <div>
          <NuxtLink :to="localePath('/')"><img class="rounded-full w-36 hover:scale-105 transition-all" src="/logo.svg" alt="logo"></NuxtLink>
        </div>
        <nav class="hidden lg:block">
          <ul class="flex justify-center gap-10">
            <li v-for="link in ROUTE_LINKS" class="text-nowrap"><NuxtLink :to="localePath(link.to)" active-class="text-green-400">{{ link.label }}</NuxtLink></li>
          </ul>
        </nav>
        <div class="hidden lg:flex gap-5 items-center justify-end">
          <div class="flex gap-2">
            <button v-for="item in availableLocales" @click="setLocale(item)" class="hover:text-green-400 transition-all" :class="{'text-green-400' : item === locale}">{{item}}</button>
          </div>
          <UButton @click="modalState.setContactModalShow(true)" :ui="{ rounded: 'rounded-full' }" size="xl">{{ $t("layout.header.contact_btn") }}</UButton>
        </div>
        <div class="flex lg:hidden justify-end">
          <UButton
              :padded="false"
              color="gray"
              variant="link"
              @click="switchMenu"
          >
            <Icon name="mdi:menu" size="40"></Icon>
          </UButton>
        </div>
      </div>
      <div :class="{
      'flex flex-col gap-5 px-5 lg:hidden': showMenu,
      'hidden': !showMenu,
    }">
        <nav>
          <ul class="flex flex-col justify-start gap-10">
            <li v-for="link in ROUTE_LINKS"><NuxtLink :to="localePath(link.to)" active-class="text-green-400">{{ link.label }}</NuxtLink></li>
          </ul>
        </nav>
        <div class="flex gap-2">
          <button v-for="item in availableLocales" @click="setLocale(item)" class="hover:text-green-400 transition-all" :class="{'text-green-400' : item === locale}">{{item}}</button>
        </div>
      </div>
    </div>
  </header>
</template>
