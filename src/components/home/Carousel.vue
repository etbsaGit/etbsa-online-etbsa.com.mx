<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <v-carousel hide-delimiters class="imagen">
  <v-carousel-item
    src="../../../public/image/image3.jpg"
    cover
  >
    <v-row
        class="fill-height"
        align="center"
        justify="center"
    >
    <div class="text-white"><strong><h1>Upto 60% + Extra 10%</h1></strong></div><br/>
    </v-row>
    </v-carousel-item>

  <v-carousel-item
    src="../../../public/image/image3.jpg"
    cover
  >
  <v-row
        class="fill-height"
        align="center"
        justify="center"
    >
    <div class="text-white"><strong><h1>Upto 60% + Extra 10%</h1></strong></div><br/>
    </v-row>
</v-carousel-item>

  <v-carousel-item
  src="../../../public/image/image3.jpg"
    cover
  >
  <v-row
        class="fill-height"
        align="center"
        justify="center"
    >
    <div class="text-white"><strong><h1>Upto 60% + Extra 10%</h1></strong></div><br/>
    </v-row>
</v-carousel-item>
</v-carousel>
</template>

<style>
.imagen {
  max-width: auto; /* Ajusta el ancho máximo de la imagen al 100% del contenedor */
  height: auto; /* Permite que la altura se ajuste automáticamente para mantener la relación de aspecto */
}
</style>