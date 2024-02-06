<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<template>
    <v-card>
  <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white-text align-center"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="400px"
              cover
            >
              <v-card-title class="text-white text-center" v-text="card.title"></v-card-title>
                <div class="text-center">
                    <v-btn class="text-white" href="/shop" variant="outlined" density="compact">SHOP NOW</v-btn>
                </div>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</v-card>

<v-card>
  <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards2"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white-text align-center"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="300px"
              cover
            >
              <v-card-title class="text-white text-center" v-text="card.title"></v-card-title>
                <div class="text-center">
                    <v-btn class="text-white" href="/shop" variant="text" append-icon="mdi-arrow-right" density="compact">SHOP NOW</v-btn>
                </div>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</v-card>

<v-container>
    <v-card>
        <v-card-title class="subheading ">Deals of the Day</v-card-title>
            <v-divider></v-divider>
    <v-row>
        <v-col v-for="card in cards3"
          :key="card.title"
          :cols="card.flex">
          <v-card>
            <v-img
              :src="card.src"
              class="white-text align-center"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
              cover
            >
              <v-card-title class="text-white text-center text-caption" v-text="card.title"></v-card-title>
              <v-card-text class="text-white text-center text-caption" >
                {{ card.promo }}
                {{ card.category }}
              </v-card-text>
                
            </v-img>
            <v-card-actions>
                <v-btn href="/shop"
                      class="ma-2"
                      variant="outlined"
                      color="info"
                    >
                      Explore
                    </v-btn>
            </v-card-actions>
          </v-card>

        </v-col>

    </v-row>
</v-card>



</v-container>
    </template>

<script setup>
import { ref } from 'vue';

const cards = ref([
    { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
    { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
])

const cards2 = ref([
    { title: 'Clone', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 4 },
    { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 4 },
    { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
])

const cards3 = ref([
    { title: 'Clone', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 3, promo:"Upto 60% + Extra 10%",category:"Baggit, Zara, Fossil"},
    { title: 'Clone2', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 3, promo:"Upto 60% + Extra 10%",category:"Baggit, Zara, Fossil"},
    { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 3, promo:"Upto 60% + Extra 10%",category:"Baggit, Zara, Fossil" },
    { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 3, promo:"Upto 60% + Extra 10%",category:"Baggit, Zara, Fossil" },
])
</script>