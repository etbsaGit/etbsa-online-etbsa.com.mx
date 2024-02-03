<template>
  <v-app-bar flat color="primary">
    <v-app-bar-title style="width: 350px">
      <a href="/" style="color: white; text-decoration: none"><v-icon>mdi-truck</v-icon>&nbsp;ShipIT</a>
    </v-app-bar-title>
    <v-text-field
        density="compact"
        hide-details
        variant="outlined"
        prepend-inner-icon="mdi-magnify"
        label="Search"
      />
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
      <v-btn icon>
        <v-badge
          content="2"
          value="2"
          color="green"
          overlap
        >
          <v-icon>mdi-bell</v-icon>
        </v-badge>
      </v-btn>
      <v-btn href="/cart" icon>
        <v-badge
          content="2"
          value="2"
          color="green"
          overlap
        >
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
  </v-app-bar>
</template>


<script setup>
//
</script>
