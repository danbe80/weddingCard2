
<template>
  <q-page class="row items-center justify-evenly text-center" style="min-height: 100vh; padding: 0; color: #72605c;">

    <!-- 백그라운드 -->
<!--    <img src="../assets/background/page2_bg.png" style="position: relative; width: 100%; height: 100vh; z-index: 0"/>-->
    <!--  백그라운드  -->


    <q-page-container style="position: absolute; top: 0; width: 100vw; height: 100vh">
      <q-card  flat style="width: 100vw; height: 100vh; border-radius: 0; border: none; background-color: rgba(0,0,0,0)">
        <img src="../assets/page1_panel.png" style="width: 100vw; height: 100vh; position: absolute; top: 0; right: 0; z-index: 2" />
        <q-carousel
          v-model="slide"
          animated
          infinite
          :autoplay="4000"
          transition-prev="slide-right"
          transition-next="slide-left"
          style="width: 100%; height: 74%"
        >
          <q-carousel-slide :name="1" img-src="../assets/Page1_Photo1.png" />
          <q-carousel-slide :name="2" img-src="../assets/Page1_Photo3.png" />
          <q-carousel-slide :name="3" img-src="../assets/Page1_Photo4.png" />
          <q-carousel-slide :name="4" img-src="../assets/Page1_Photo5.png" />
        </q-carousel>
        <q-card flat class="q-mt-md" style="position: relative; z-index: 3; background-color: rgba(0,0,0,0); letter-spacing: -1px">
          <p style="border: 3px solid #dbc7c2; font-size: 24px; font-weight: bold; margin: 0 5px; border-radius: 5px">2024.07.13 토요일 12시</p>
          <p style="font-size: 18px; margin-top: 5px">인터컨티넨탈 파르나스 5층 그랜드볼룸</p>
        </q-card>



      </q-card>


    </q-page-container>

  </q-page>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const slide = ref(1);
</script>

<style scoped>

</style>
