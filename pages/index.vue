<template>
  <div>
    <v-container>
      <h3 class="text-h3 cairo">المنتجات</h3>
      <v-row class="mt-4">
        <v-col
          v-for="product in products"
          :key="product.id"
          cols="12"
          md="6"
          lg="3"
        >
          <v-card>
            <v-img :src="product.image" height="280" cover />
            <v-card-title>{{ product.name }}</v-card-title>
            <v-card-subtitle>{{ `${product.price} جنيه` }}</v-card-subtitle>
            <v-card-text>{{ product.description }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
const products = ref([
  {
    id: 1,
    name: "موبايل سامسونج جالكسي",
    price: 8000,
    image: "/products/samsung-galaxy.jpg",
    description:
      "موبايل سامسونج جالكسي ايه 55 الجيل الخامس 5G، ثنائي شرائح الاتصال، ذاكرة رام 8 جيجا، تخزين 256 ازرق ثلجي",
  },
  {
    id: 2,
    name: "موبايل ايفون 12 برو ماكس",
    price: 15000,
    image: "/products/12pro-max.jpg",
    description:
      "موبايل ايفون 12 برو ماكس ذاكرة 256 جيجا، شريحة واحدة، ازرق - ضمان لمدة عام اصدار محلي",
  },
  {
    id: 3,
    name: "موبايل هواوي P40 برو",
    price: 10000,
    image: "/products/Huawei-P40-Pro.jpg",
    description:
      "موبايل هواوي P40 برو ذاكرة 256 جيجا، شريحة واحدة، اسود - ضمان لمدة عام اصدار محلي",
  },
  {
    id: 4,
    name: "موبايل ريلمي 7",
    price: 5000,
    image: "/products/realme-7.jpg",
    description:
      "موبايل ريلمي 7 ذاكرة 128 جيجا، شريحة واحدة، ازرق - ضمان لمدة عام اصدار محلي",
  },
]);
</script>
