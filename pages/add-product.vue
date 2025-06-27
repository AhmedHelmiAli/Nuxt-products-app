<template>
  <div>
    <v-card class="mx-auto px-6 pb-4 mb-12 pt-2 mt-12" max-width="580">
      <v-card-title class="mb-4 text-h4 cairo">إضافة منتج</v-card-title>

      <v-text-field class="mb-2" label="اسم المنتج" variant="outlined" />

      <v-text-field class="mb-2" label="السعر" variant="outlined" />

      <v-textarea label="الوصف" variant="outlined"></v-textarea>

      <v-btn color="primary" size="large" variant="flat" block>
        اضافة جديد
      </v-btn>
    </v-card>
  </div>
</template>
