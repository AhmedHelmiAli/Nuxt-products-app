<template>
  <div>
    <v-app-bar :elevation="2" color="primary">
      <v-btn
        v-for="link in links"
        :key="link.title"
        :text="link.title"
        :to="link.route"
        size="x-large"
      />
      <template v-slot:append>
        <v-btn :icon="themeIcon" @click="isDark = !isDark" />
      </template>
    </v-app-bar>
  </div>
</template>

<script lang="ts" setup>
const { isDark, themeIcon } = useMode();
const links = [
  { title: "المنتجات", route: "/" },
  { title: "اضافة منتج", route: "/add-product" },
];
</script>
