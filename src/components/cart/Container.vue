<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <v-container>
            <h1 class="font-weight-light text-center pa-4">SHOPPING CART</h1>
            <v-row>
                <v-col :cols="12" md="9" sm="12" >
                    <v-table>
                        <template v-slot:default>
                        <thead>
                        <tr>
                            <th class="text-center">ITEM</th>
                            <th class="text-center">PRICE</th>
                            <th class="text-center">QUANTITY</th>
                            <th class="text-center">TOTAL</th>
                            <th class="text-center"></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                            <v-list-item
                            key="1"
                            @click.stop=""
                            prepend-avatar="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
                            >
                                <v-list-item-title >Item 1</v-list-item-title>
                                <v-list-item-subtitle>Lorem Ipsum</v-list-item-subtitle>
                            </v-list-item></td>
                            <td>$40.00</td>
                            <td>
                            <v-text-field
                                class="pt-10"
                                variant="outlined"
                                style="width: 80px;"
                                single-line
                                :model-value="quantity"
                                type="number"
                            ></v-text-field>
                            </td>
                            <td>$80.00</td>
                            <td><v-btn color="red">X</v-btn></td>
                        </tr>
                        <tr>
                            <td>
                            <v-list-item
                            key="1"
                            @click.stop=""
                            prepend-avatar="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
                            >
                                <v-list-item-title >Item 2</v-list-item-title>
                                <v-list-item-subtitle>Lorem Ipsum</v-list-item-subtitle>
                            </v-list-item></td>
                            <td>$40.00</td>
                            <td>
                            <v-text-field
                                class="pt-10"
                                variant="outlined"
                                style="width: 80px;"
                                single-line
                                :model-value="quantity"
                                type="number"
                            ></v-text-field>
                            </td>
                            <td>$80.00</td>
                            <td><v-btn color="red">X</v-btn></td>
                        </tr>
                        </tbody>
                        </template>
                    </v-table>
                    </v-col>
                    <v-col :cols="12" md="3" sm="12" style="background-color: lightgray">
                        <h2 class="headline"><strong>Order Summary</strong></h2>
                        <p>Shipping and additional costs are calculated based on values you have entered.
                        </p>
                        <v-table>
                            <template v-slot:default>
                            <tbody>
                            <tr>
                                <td>Order Subtotal</td>
                                <td class="text-right" style="width: 50px;">$160.00</td>
                            </tr>
                            <tr>
                                <td>Shipping Charges</td>
                                <td class="text-right" style="width: 50px;">$10.00</td>
                            </tr>
                            <tr>
                                <td>Tax</td>
                                <td class="text-right" style="width: 50px;">$5.00</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td class="text-right" style="width: 50px;"><b>$175.00</b></td>
                            </tr>
                            </tbody>
                            </template>
                        </v-table>
                        <div class="text-center">
                            <v-btn class="white-text mt-5" color="primary">PROCEED TO PAY</v-btn>
                        </div>
                    </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script setup>
import { ref
 } from 'vue';
const quantity = ref(2)
</script>