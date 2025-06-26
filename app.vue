<template>
  <v-layout>
    <Header />
    <v-main class="bg-grey-lighten-3" style="min-height: 100vh">
      <NuxtPage />
    </v-main>
  </v-layout>
</template>

<script lang="ts" setup>
useHead({
  htmlAttrs: {
    lang: "ar",
    dir: "rtl",
  },
});
</script>

<style>
body {
  font-family: "Cairo", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>
