<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-footer color="accent">
    <v-row no-gutters>
            <v-col class="text-body-2 text-primary">
              <v-row >
                <v-col align="right">
                  <v-icon>mdi-truck</v-icon>
                </v-col>
                <v-col>
                  <h3>FREE SHIPPING & RETURN</h3><p>Free Shipping over $300</p>
                </v-col>
              </v-row>
            </v-col>

            <v-col class="text-body-2 text-primary">
              <v-row >
                <v-col align="right">
                  <v-icon class="display-2">mdi-cash</v-icon>
                </v-col>
                <v-col >
                  <h3>MONEY BACK GUARANTEE</h3>
                  <p>30 Days Money Back Guarantee</p>
                </v-col>
              </v-row>
            </v-col>
            
            <v-col class="text-body-2 text-primary">
              <v-row>
                <v-col align="right">
                  <v-icon>mdi-headset</v-icon>
                </v-col>
                <v-col>
                  <h3>020-800-456-747</h3>
                  <p>24/7 Available Support</p>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
  </v-footer>

  <v-footer
    class="bg-indigo-lighten-1 text-center d-flex flex-column"
  >
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="text"
      ></v-btn>
    </div>

    <div class="pt-0">
      Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </div>

    <v-divider></v-divider>

    <div>
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </div>
  </v-footer>
</template>

<script setup>
import { ref } from 'vue';

const icons = ref([
  'mdi-home',
  'mdi-email',
  'mdi-calendar',
  'mdi-delete',
])
</script>