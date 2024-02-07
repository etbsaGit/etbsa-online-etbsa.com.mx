<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<template>
    <div>
        <v-container>
            <h1 class="font-weight-light text-center">Read About Fashion</h1>

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
                          class="white-text align-end"
                          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                          height="500px"
                          cover
                        >
                    </v-img>
                    <v-card-title class="text-black text-bottom" v-text="card.title"></v-card-title>
                    <v-divider></v-divider>
                        <v-card-text>{{ card.text }}</v-card-text>
                        <v-divider></v-divider>
                        <v-card-actions>
                            <v-btn class="text-orange" href="/post">Read more</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>
            </v-card>

        </v-container>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const lorem = ref('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh venenatis cras sed felis eget velit aliquet sagittis id. Enim praesent elementum facilisis leo vel fringilla est ullamcorper')

const cards2 = ref([
  { title: 'Clone', src: "../../../public/image/image3.jpg", flex: 4, text: lorem },
  { title: 'Favorite road trips', src: "../../../public/image/image3.jpg", flex: 4, text: lorem },
  { title: 'Best airlines', src: "../../../public/image/image3.jpg", flex: 4, text: lorem },
])
</script>