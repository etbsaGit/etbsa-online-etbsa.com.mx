<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-app>
      <default-bar />
      <default-tabs/>
      <default-view />
      <default-footer/>
  </v-app>
</template>

<script setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
  import DefaultTabs from './Tabs.vue'
  import DefaultFooter from './Footer.vue'
</script>
