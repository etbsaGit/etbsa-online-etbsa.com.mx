<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="3">
                    <v-card variant="outlined">
                        <v-card-title>Filters</v-card-title>
                        <v-divider></v-divider>
                        <v-expansion-panels>
                            <v-expansion-panel
                                :title="items[0].name"
                            >
                                <v-expansion-panel-text v-for="(item, index) in items[0].children" :key="index">
                                    <v-btn variant="text">{{ item.name }}</v-btn>
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                        </v-expansion-panels>
                        <v-expansion-panels>
                            <v-expansion-panel
                                :title="items[1].name"
                            >
                                <v-expansion-panel-text v-for="(item, index) in items[1].children" :key="index">
                                    <v-btn variant="text">{{ item.name }}</v-btn>
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                        </v-expansion-panels>
                        <v-divider></v-divider>
                        <v-card-title>Price</v-card-title>
                        <v-container>
                            <v-range-slider
                                v-model="range"
                                :max=max
                                :min=min
                                :step="1"
                                hide-details
                                class="align-center"
                            >
                            </v-range-slider>

                            <v-row>
                                <v-col>
                                    <v-text-field
                                        v-model="range[0]"
                                        hide-details
                                        single-line
                                        type="number"
                                        variant="outlined"
                                        density="compact"
                                        style="width: 100px"
                                    ></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-text-field
                                        v-model="range[1]"
                                        hide-details
                                        single-line
                                        type="number"
                                        variant="outlined"
                                        style="width: 100px"
                                        density="compact"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                        <v-divider></v-divider>
                        <v-card-title class="pb-0">Customer Rating</v-card-title>
                        <v-container class="pt-0"  fluid>
                            <v-checkbox label="5" hide-details density="compact">
                                <template v-slot:append>
                                    <v-icon color="amber-darken-1">mdi-star</v-icon>
                                    <v-icon color="amber-darken-1">mdi-star</v-icon>
                                    <v-icon color="amber-darken-1">mdi-star</v-icon>
                                    <v-icon color="amber-darken-1">mdi-star</v-icon>
                                    <v-icon color="amber-darken-1">mdi-star</v-icon>
                                </template>
                            </v-checkbox>
                            <v-checkbox label="4" hide-details density="compact">
                                <template v-slot:append>
                                    <v-icon color="amber-darken-1">mdi-star</v-icon>
                                    <v-icon color="amber-darken-1">mdi-star</v-icon>
                                    <v-icon color="amber-darken-1">mdi-star</v-icon>
                                    <v-icon color="amber-darken-1">mdi-star</v-icon>
                                </template>
                            </v-checkbox>
                            <v-checkbox label="3" hide-details density="compact">
                                <template v-slot:append>
                                    <v-icon color="amber-darken-1">mdi-star</v-icon>
                                    <v-icon color="amber-darken-1">mdi-star</v-icon>
                                    <v-icon color="amber-darken-1">mdi-star</v-icon>
                                </template>
                            </v-checkbox>
                            <v-checkbox label="2" hide-details density="compact">
                                <template v-slot:append>
                                    <v-icon color="amber-darken-1">mdi-star</v-icon>
                                    <v-icon color="amber-darken-1">mdi-star</v-icon>
                                </template>
                            </v-checkbox>
                            <v-checkbox label="1" hide-details density="compact">
                                <template v-slot:append>
                                    <v-icon color="amber-darken-1">mdi-star</v-icon>
                                </template>
                            </v-checkbox>
                            <v-checkbox label="0" hide-details density="compact">
                                <template v-slot:append>
                                    <v-icon color="red">mdi-thumb-down</v-icon>
                                </template>
                            </v-checkbox>
                        </v-container>
                        <v-divider></v-divider>
                        <v-card-title class="pb-0">Size</v-card-title>
                        <v-container class="pt-0" fluid>
                            <v-checkbox  label="XS" hide-details density="compact"></v-checkbox>
                            <v-checkbox  label="S" hide-details density="compact"></v-checkbox>
                            <v-checkbox  label="M" hide-details density="compact"></v-checkbox>
                            <v-checkbox  label="L" hide-details density="compact"></v-checkbox>
                            <v-checkbox  label="XL" hide-details density="compact"></v-checkbox>
                            <v-checkbox  label="XXL" hide-details density="compact"></v-checkbox>
                            <v-checkbox  label="XXXL" hide-details density="compact"></v-checkbox>
                        </v-container>
                    </v-card>
                </v-col>
                <v-col cols="9">
                    <v-breadcrumbs class="pb-0" :items="breadcrums">
                        <template v-slot:title="{ item }">
                            {{ item.text.toUpperCase() }}
                        </template>
                    </v-breadcrumbs>

                    <v-row density="compact">
                        <v-col cols="12" sm="8" class="pl-6 pt-6">
                        <small>Showing 1-12 of 200 products</small>
                        </v-col>
                        <v-col cols="12" sm="4">
                        <v-select class="pa-0" v-model="select" :items="options" style="margin-bottom: -20px;" variant="outlined" density="compact"></v-select>
                        </v-col>
                    </v-row>

                    <div><br></div>

                    <v-divider></v-divider>

                    <div><br></div>

                    <v-row class="text-center">

                        <v-col cols="3" :key="pro.id" v-for="pro in products">
                            <v-hover>
                                <v-card
                                class="mx-auto"
                                color="grey-lighten-4"
                                max-width="600"
                                >
                                <v-img
                                    class="white-text align-end"
                                    :aspect-ratio="16/9"
                                    height="200px"
                                    :src="pro.src"
                                    cover
                                >
                                    <v-card-title class="text-white text-center">{{pro.type}} </v-card-title>
                                </v-img>
                                <v-card-text class="text-primary">
                                    <div><a href="/product" style="text-decoration: none">{{pro.name}}</a></div>
                                    <div>${{pro.price}}</div>
                                    <div> <v-btn href="/product" class="" variant="outlined">VIEW</v-btn></div>
                                </v-card-text>
                                </v-card>
                            </v-hover>
                        </v-col>
                    </v-row>
                    <div class="text-center mt-12">
                        <v-pagination
                        v-model="page"
                        :length="6"
                        ></v-pagination>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
    {
        id: 2,
        name: 'Shoes',
        children: [
            { id: 2, name: 'Casuals' },
            { id: 3, name: 'Formals' },
            { id: 4, name: 'Sneakers' },
        ],
    },
    {
        id: 1,
        name: 'Clothing',
        children: [
            { id: 5, name: 'Shirts' },
            { id: 6, name: 'Tops' },
            { id: 7, name: 'Tunics' },
            { id: 8, name: 'Bodysuit' },
        ],
    }
])

const range = ref([0, 10000]);
const min = ref(0);
const max = ref(10000);
const breadcrums = ref([
    {
        text: 'Home',
        disabled: false,
        href: 'breadcrumbs_home',
    },
    {
        text: 'Clothing',
        disabled: false,
        href: 'breadcrumbs_clothing',
    },
    {
        text: 'T-Shirts',
        disabled: true,
        href: 'breadcrumbs_shirts',
    },
]);

const select = ref('Popularity')
const options = ref([
    'Default',
    'Popularity',
    'Relevance',
    'Price: Low to High',
    'Price: High to Low',
])

const products = ref([
    {
        id: 1,
        name: 'BLACK TEE',
        type: 'Jackets',
        price: '18.00',
        src: "../../../public/image/image3.jpg"
    },
    {
        id: 2,
        name: 'WHITE TEE',
        type: 'Polo',
        price: '40.00',
        src: "../../../public/image/image3.jpg"
    },
    {
        id: 3,
        name: 'Zara limited...',
        type: 'Denim',
        price: '25.00',
        src: "../../../public/image/image3.jpg"
    },
    {
        id: 4,
        name: 'SKULL TEE',
        type: 'Jackets',
        price: '30.00',
        src: "../../../public/image/image3.jpg"
    },
    {
        id: 5,
        name: 'MANGO WINTER',
        type: 'Sweaters',
        price: '50.00',
        src: "../../../public/image/image3.jpg"
    },
    {
        id: 6,
        name: 'SHIRT',
        type: 'Denim',
        price: '34.00',
        src: "../../../public/image/image3.jpg"
    },
    {
        id: 7,
        name: 'TRUCKER JACKET',
        type: 'Jackets',
        price: '38.00',
        src: "../../../public/image/image3.jpg"
    },
    {
        id: 8,
        name: 'COATS',
        type: 'Jackets',
        price: '25.00',
        src: "../../../public/image/image3.jpg"
    }, {
        id: 9,
        name: 'MANGO WINTER',
        type: 'Sweaters',
        price: '50.00',
        src: "../../../public/image/image3.jpg"
    },
    {
        id: 10,
        name: 'SHIRT',
        type: 'Denim',
        price: '34.00',
        src: "../../../public/image/image3.jpg"
    },
    {
        id: 11,
        name: 'TRUCKER JACKET',
        type: 'Jackets',
        price: '38.00',
        src: "../../../public/image/image3.jpg"
    },
    {
        id: 12,
        name: 'COATS',
        type: 'Jackets',
        price: '25.00',
        src: "../../../public/image/image3.jpg"
    }
]);
 const page = ref(1)
</script>

<style>
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .8;
    position: absolute;
    width: 100%;
  }
</style>