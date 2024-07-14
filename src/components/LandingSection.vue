<script setup>
import CTAButton from '@/components/CTAButton.vue'
import RegularButton from '@/components/RegularButton.vue'
</script>

<template>
  <section class="flex flex-col justify-center bg-no-repeat bg-black">
  <div class="flex justify-center flex-col gap-y-10 w-5/6 mx-auto">
    <h1 class="io-title tracking-tight ">VOS <span class="text-io-accent">IDÉES</span><br>NOS MÉTHODES<br>UN WEB
      <span class="relative inline-block">
      DURABLE
      <img src="@/assets/img/yellowLine.png" alt="" class="absolute -bottom-5 left-0 w-full">
    </span>
    </h1>
    <div class="w-1/2">
      <p class="font-sans text-2xl font-normal text-io-light">ioweb est une entreprise québecoise se spécialisant dans le développement d’applications et de sites web durables.</p>
    </div>
    <div class="flex w-1/2 gap-16 pt-2">
      <CTAButton></CTAButton>
      <RegularButton></RegularButton>
    </div>
    </div>
  </section>
</template>

<style scoped>
section{
  background-image: url("@/assets/img/landingImage4.png");
}
</style>
