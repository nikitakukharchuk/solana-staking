<template>
  <section class="mx-auto container flex justify-center items-center h-screen text-black">
    <div class="flex flex-col gap-10">
      <div class="flex flex-col gap-5">
        <h1>
          About Us
        </h1>
        <p>
          Welcome to our website dedicated to providing staking services for SOL cryptocurrency!
          We are a team of blockchain technology and cryptocurrency enthusiasts, striving to make staking accessible and profitable for everyone.
        </p>
      </div>
      <div class="flex flex-col gap-5">
        <h3>Our Team</h3>
        <p>
          Our team consists of experienced professionals in blockchain technology, programming, finance, and marketing.
          We have combined our efforts to create a platform that is not only user-friendly and secure but also highly profitable for our users.
        </p>
        <ul class="list-disc list-inside">
          <li v-for="item in COMMAND"><span class="font-bold">{{ item.name }}</span> - {{ item.description }}</li>
        </ul>
      </div>
      <div class="flex flex-col gap-5">
        <h3>Our Mission</h3>
        <p>
          Our mission is to provide everyone with the opportunity to participate in SOL cryptocurrency staking with minimal effort and maximum profit.
          We strive to make the staking process simple, secure, and accessible to all, regardless of their knowledge and experience in the cryptocurrency sphere.
          Our goal is to create a community where every participant can earn a stable passive income and contribute to the development of the Solana ecosystem.
        </p>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import {COMMAND} from "~/constants/static";
</script>