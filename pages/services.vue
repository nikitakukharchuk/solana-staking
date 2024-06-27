<template>
  <section class="mx-auto container flex justify-center items-center h-screen text-black">
    <div class="flex flex-col gap-10">
      <div class="flex flex-col gap-5">
        <h1>
          Services
        </h1>
        <p class="text-18-28">
          On our platform, we offer various staking services for SOL cryptocurrency so that everyone can find the optimal solution for themselves.
        </p>
      </div>
      <div class="flex flex-col gap-5">
        <h3>SOL Staking</h3>
        <p class="text-18-28">
          Staking is the process of locking up SOL cryptocurrency on our platform to support the Solana blockchain network.
          In return, users receive rewards in the form of new SOL coins. Our services include:
        </p>
        <ul class="list-disc list-inside">
          <li v-for="item in SERVICES"><span class="font-bold">{{ item.name }}</span> - {{ item.description }}</li>
        </ul>
      </div>
      <div class="flex flex-col gap-5">
        <h3>Our Mission</h3>
        <p class="text-18-28">
          Our mission is to provide everyone with the opportunity to participate in SOL cryptocurrency staking with minimal effort and maximum profit.
          We strive to make the staking process simple, secure, and accessible to all, regardless of their knowledge and experience in the cryptocurrency sphere.
          Our goal is to create a community where every participant can earn a stable passive income and contribute to the development of the Solana ecosystem.
        </p>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import {SERVICES} from "~/constants/static";
</script>