<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<template>
    <div>
        <v-container>
            <h3 class="text-center">Best brands for fashion</h3>
            <p class="text-center">By <b>John Doe</b> | January 24,2020</p>
            <br/>
            <div class="row">
                <div>
                <v-img
                    class="align-end"
                    height="400px"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    cover
                />
                <p class="pt-5">Lorem ipsum</p>
                <p class="pt-5 font-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p class="font-weight-light pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <v-img
                    class="white--text align-end"
                    height="400px"
                    src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
                    cover
                />
                <p class="display-1 mb-0 pt-5">Lorem ipsum</p>
                <p class="subtitle-1 font-weight-light pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p class="subtitle-1 font-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p class="body-1 font-weight-light pt-10"><b>3 COMMENTS</b></p>
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
                </div>
            </div>

        </v-container>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const rating = ref(4.5);
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

</script>