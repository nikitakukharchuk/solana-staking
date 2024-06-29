<script lang="ts" setup>
import type {LocaleMessageValue} from "@intlify/core-base";
import type {MessagesStructure} from "~/types/i18nType";

const { messages } = useI18n();

const messValue: LocaleMessageValue<MessagesStructure> = messages.value

const ourTeamLength = computed(() => Object.keys(messValue.en.services.sol_staking).length)

</script>


<template>
  <div class="flex flex-col gap-10">
    <div class="flex flex-col gap-5">
      <h2 class="text-30-30-h2 lg:text-50-50-h2-lg">
        {{$t('services.title')}}
      </h2>
      <p class="text-14-20 lg:text-18-28">
        {{$t('services.subtitle')}}
      </p>
    </div>
    <div class="flex flex-col gap-5">
      <h3 class="text-20-20-h3 lg:text-30-30-h3-lg">{{$t('services.sol_staking_title')}}</h3>
      <p class="text-14-20 lg:text-18-28">
        {{$t('services.sol_staking_subtitle')}}
      </p>
      <ul class="list-disc list-inside">
        <li v-for="(item) in ourTeamLength" :key="item" class="text-14-20 lg:text-18-28"><span class="font-bold">{{$t(`services.sol_staking.sol_staking_${item}.name`)}}</span> - {{$t(`services.sol_staking.sol_staking_${item}.description`)}}</li>
      </ul>
    </div>
    <div class="flex flex-col gap-5">
      <p class="text-14-20 lg:text-18-28">
        {{$t('services.join_us_title')}}
      </p>
    </div>
  </div>
</template>