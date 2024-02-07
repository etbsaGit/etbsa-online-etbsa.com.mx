<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="5">
                    <v-carousel>
                        <v-carousel-item
                            src= "../../../public/image/image3.jpg"
                            cover
                        />
                        <v-carousel-item
                            src= "../../../public/image/image3.jpg"
                            cover
                        />
                        <v-carousel-item
                            src= "../../../public/image/image3.jpg"
                            cover
                        />
                        <v-carousel-item
                            src= "../../../public/image/image3.jpg"
                            cover
                        />
                    </v-carousel>
                </v-col>
                <v-col cols="7">
                    <v-breadcrumbs class="pb-0" :items="breadcrums">
                        <template v-slot:title="{ item }">
                            {{ item.text.toUpperCase() }}
                        </template>
                    </v-breadcrumbs>
                    <div class="pl-6">
                        <p class="display-1 mb-0">Modern Black T-Shirt</p>
                        <v-card-actions class="pa-0">
                            <p class="headline font-weight-light pt-3">$65.00 <del style="" class="subtitle-1 font-weight-thin">$80.00</del></p>
                            <v-spacer></v-spacer>
                            <v-rating v-model="rating" class="" background-color="warning lighten-3" color="warning" density="compact"></v-rating>
                            <span class="body-2	font-weight-thin"> 25 REVIEWS</span>
                        </v-card-actions>
                        <p class="subtitle-1 font-weight-thin">
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Tincidunt arcu non sodales neque sodales ut etiam. Lectus arcu bibendum at varius vel pharetra. Morbi tristique senectus et netus et malesuada.
                        </p>
                        <p class="title">SIZE</p>
                        <v-radio-group v-model="radio" inline>
                            <v-radio label="XS" value="XS"></v-radio>
                            <v-radio label="S" value="s"></v-radio>
                            <v-radio label="M" value="m"></v-radio>
                            <v-radio label="L" value="l"></v-radio>
                            <v-radio label="XL" value="xl"></v-radio>
                        </v-radio-group>
                        <p class="title">ITEMS</p>
                        <v-text-field
                            variant="outlined"
                            style="width:100px"
                            :value="1"
                            density="compact"
                        ></v-text-field>
                        <v-btn class="white-text" color="primary"><v-icon>mdi-cart</v-icon> ADD TO CART</v-btn>
                        <v-btn class="ml-4" variant="outlined" tile>ADD TO WISHLIST</v-btn>
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="col-sm-12 col-xs-12 col-md-12">
                    <v-tabs v-model="model">
                        <v-tab key="1" value="1">Description</v-tab>
                        <v-tab key="2" value="2">Materials</v-tab>
                        <v-tab key="3" value="3">REVIEWS</v-tab>
                    </v-tabs>
                    <v-window v-model="model">
                    <v-window-item
                        key="1"
                        value="1"
                    >
                        <v-card>
                        <v-card-text>{{ text }}</v-card-text>
                        </v-card>
                    </v-window-item>
                    <v-window-item
                        key="2"
                        value="2"
                    >
                        <v-card>
                        <v-card-text>{{ text }}</v-card-text>
                        </v-card>
                    </v-window-item>
                    <v-window-item
                        key="3"
                        value="3">
                        <v-list
                            lines="three"
                            >
                            <v-list-item
                                v-for="(item, i) in items"
                                :key="i"
                                inactive="true"
                                :prepend-avatar="item.avatar"
                            >
                                <v-list-item-title v-html="item.title"/>
                                <v-rating v-model="rating" class="" background-color="warning lighten-3" color="warning" density="compact"/>
                                <v-list-item-subtitle v-html="item.subtitle"/>
                            </v-list-item>
                        </v-list>
                    </v-window-item>
                    </v-window>
                </v-col>
            </v-row>
            <v-card-text
                class="pa-0 pt-4"
                tile
                variant="outlined"
            >
            <p class="subtitle-1 font-weight-light pt-3 text-center">YOU MIGHT ALSO LIKE</p>
            <div><br></div>
            <v-divider></v-divider>
            <div><br></div>
            <v-row align="center">
                <v-col class="col-md-2 col-sm-4 col-xs-12 text-center">
                    <v-hover
                        v-slot:default="{ hover }"
                        open-delay="200"
                        >
                        <v-card
                            :elevation="hover ? 16 : 2"
                        >
                            <v-img
                            class="white-text align-end"
                            height="200px"
                            src= "../../../public/image/image3.jpg"
                            cover
                            >
                            <v-card-title class="text-white text-center">Bags & Purses</v-card-title>
                            </v-img>

                            <v-card-text class="text-primary text-center">
                            <div>Upto 60% + Extra 10%</div>
                            <div>Baggit, Zara, Fossil</div>
                            </v-card-text>

                            <div class="text-center">
                            <v-btn
                                class="ma-2"
                                variant="outlined"
                                color="info"
                            >
                                Explore
                            </v-btn>
                            </div>
                        </v-card>
                        </v-hover>
                </v-col>
                <v-col class="col-md-2 col-sm-4 col-xs-12 text-center">
                    <v-hover
                        v-slot:default="{ hover }"
                        open-delay="200"
                        >
                        <v-card
                            :elevation="hover ? 16 : 2"
                        >
                            <v-img
                            class="white-text align-end"
                            height="200px"
                            src= "../../../public/image/image3.jpg"
                            cover
                            >
                            <v-card-title class="text-white text-center">Bags & Purses</v-card-title>
                            </v-img>

                            <v-card-text class="text-primary text-center">
                            <div>Upto 60% + Extra 10%</div>
                            <div>Baggit, Zara, Fossil</div>
                            </v-card-text>

                            <div class="text-center">
                            <v-btn
                                class="ma-2"
                                variant="outlined"
                                color="info"
                            >
                                Explore
                            </v-btn>
                            </div>
                        </v-card>
                        </v-hover>
                </v-col>
                <v-col class="col-md-2 col-sm-4 col-xs-12 text-center">
                    <v-hover
                        v-slot:default="{ hover }"
                        open-delay="200"
                        >
                        <v-card
                            :elevation="hover ? 16 : 2"
                        >
                            <v-img
                            class="white-text align-end"
                            height="200px"
                            src= "../../../public/image/image3.jpg"
                            cover
                            >
                            <v-card-title class="text-white text-center">Bags & Purses</v-card-title>
                            </v-img>

                            <v-card-text class="text-primary text-center">
                            <div>Upto 60% + Extra 10%</div>
                            <div>Baggit, Zara, Fossil</div>
                            </v-card-text>

                            <div class="text-center">
                            <v-btn
                                class="ma-2"
                                variant="outlined"
                                color="info"
                            >
                                Explore
                            </v-btn>
                            </div>
                        </v-card>
                        </v-hover>
                </v-col>
                <v-col class="col-md-2 col-sm-4 col-xs-12 text-center">
                    <v-hover
                        v-slot:default="{ hover }"
                        open-delay="200"
                        >
                        <v-card
                            :elevation="hover ? 16 : 2"
                        >
                            <v-img
                            class="white-text align-end"
                            height="200px"
                            src= "../../../public/image/image3.jpg"
                            cover
                            >
                            <v-card-title class="text-white text-center">Bags & Purses</v-card-title>
                            </v-img>

                            <v-card-text class="text-primary text-center">
                            <div>Upto 60% + Extra 10%</div>
                            <div>Baggit, Zara, Fossil</div>
                            </v-card-text>

                            <div class="text-center">
                            <v-btn
                                class="ma-2"
                                variant="outlined"
                                color="info"
                            >
                                Explore
                            </v-btn>
                            </div>
                        </v-card>
                        </v-hover>
                </v-col>
                <v-col class="col-md-2 col-sm-4 col-xs-12 text-center">
                    <v-hover
                        v-slot:default="{ hover }"
                        open-delay="200"
                        >
                        <v-card
                            :elevation="hover ? 16 : 2"
                        >
                            <v-img
                            class="white-text align-end"
                            height="200px"
                            src= "../../../public/image/image3.jpg"
                            cover
                            >
                            <v-card-title class="text-white text-center">Bags & Purses</v-card-title>
                            </v-img>

                            <v-card-text class="text-primary text-center">
                            <div>Upto 60% + Extra 10%</div>
                            <div>Baggit, Zara, Fossil</div>
                            </v-card-text>

                            <div class="text-center">
                            <v-btn
                                class="ma-2"
                                variant="outlined"
                                color="info"
                            >
                                Explore
                            </v-btn>
                            </div>
                        </v-card>
                        </v-hover>
                </v-col>
                <v-col class="col-md-2 col-sm-4 col-xs-12 text-center">
                    <v-hover
                        v-slot:default="{ hover }"
                        open-delay="200"
                        >
                        <v-card
                            :elevation="hover ? 16 : 2"
                        >
                            <v-img
                            class="white-text align-end"
                            height="200px"
                            src= "../../../public/image/image3.jpg"
                            cover
                            >
                            <v-card-title class="text-white text-center">Bags & Purses</v-card-title>
                            </v-img>

                            <v-card-text class="text-primary text-center">
                            <div>Upto 60% + Extra 10%</div>
                            <div>Baggit, Zara, Fossil</div>
                            </v-card-text>

                            <div class="text-center">
                            <v-btn
                                class="ma-2"
                                variant="outlined"
                                color="info"
                            >
                                Explore
                            </v-btn>
                            </div>
                        </v-card>
                        </v-hover>
                </v-col>
            </v-row>
            </v-card-text>
        </v-container>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const rating = ref(4.5);

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

const items = ref([
    {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Lorem ipsum dolor?',
        subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Tincidunt arcu non sodales neque sodales ut etiam. Lectus arcu bibendum at varius vel pharetra. Morbi tristique senectus et netus et malesuada.\n" +
            "\n",
    },
    {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Lorem ipsum dolor <span class="grey--text text--lighten-1">4</span>',
        subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
    },
    {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Lorem ipsum dolor',
        subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Lorem ipsum dolor',
        subtitle: ""
    },
    {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Lorem ipsum dolor',
        subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
])

const model = ref('tab-2');

const text = ref('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',)

const radio = ref('xs')
</script>