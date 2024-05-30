

<template>
  <q-card
    flat class="row q-pa-lg"
    style="height: 100%; background-size: cover; font-weight: bold "
    :style="{
                backgroundImage: `url(${bgImg})`,
              }">



  </q-card>
</template>
<script setup lang="ts">
const bgImg = new URL(
  '../../assets/background/page2_bg.png',
  import.meta.url
).href

</script>
<style scoped>

</style>
