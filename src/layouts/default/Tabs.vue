<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-app-bar density="compact">
    <v-bottom-navigation>

      <v-btn value="home" href="/">
        <span>Home</span>
      </v-btn>
      
      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <v-btn
            color="primary"
            v-bind="props"
          >
            Shop
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :value="index"
            href="/shop"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      
      <v-btn value="product" href="/product">
        <span>Product</span>
      </v-btn>
      
      <v-btn value="blog" href="/blog">
        <span>Blog</span>
      </v-btn>

   </v-bottom-navigation>
  </v-app-bar>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
  { title: 'Click Me' },
  { title: 'Click Me' },
  { title: 'Click Me' },
  { title: 'Click Me 2' },
]);


</script>

<styles>

</styles>

