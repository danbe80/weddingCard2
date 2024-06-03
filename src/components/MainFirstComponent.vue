<template>
  <q-card flat class="first-wrapper">
    <div class="slide_default_wrap">
      <img src="../assets/page1/page1_panel.png" class="slide_panel_img" />
    </div>

    <q-carousel
      v-model="slide"
      animated
      infinite
      :autoplay="4000"
      transition-prev="slide-right"
      transition-next="slide-left"
      style="width: 100%; height: 65lvh"
    >
      <q-carousel-slide :name="1" style="padding: 0">
        <div style="width: 100vw; height: 80lvh">
          <img
            src="../assets/page1/Page1_Photo1.png"
            class="slide-img"
          />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" style="padding: 0">
        <div style="width: 100vw; height: 75lvh">
          <img
            src="../assets/page1/Page1_Photo2.png"
            class="slide-img"
          />
        </div>
      </q-carousel-slide>
        <q-carousel-slide :name="3" style="padding: 0">
        <div style="width: 100vw; height: 70lvh">
          <img
            src="../assets/page1/Page1_Photo3.png"
            class="slide-img"
          />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" style="padding: 0">
        <div style="width: 100vw; height: 80lvh">
          <img
            src="../assets/page1/Page1_Photo4.png"
            class="slide-img"
          />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="5" style="padding: 0">
        <div style="width: 90vw; height: 65lvh">
          <img src="../assets/page1/Page1_Photo5.png" class="slide-img"/>
        </div>
      </q-carousel-slide>
    </q-carousel>

    <q-card flat class="column justify-center items-center data_info_wrap">
      <p class="date_info" style="">2024.07.13 토요일 12시</p>
      <p style="font-size: 18px; margin-top: 5px">
        인터컨티넨탈 파르나스 5층 그랜드볼룸
      </p>
    </q-card>
  </q-card>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const slide = ref(1);
</script>

<style scoped>
.first-wrapper {
  width: 100vw;
  min-height: 100%;
  height: 100%;
  border-radius: 0;
  background-color: rgba(0, 0, 0, 0);
}
.slide_default_wrap {
  width: 100vw;
  height: 65lvh;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  overflow: hidden;
}
.slide_panel_img {
  width: 100vw;
  height: 90lvh;
}
.data_info_wrap {
  height: 15svh;
  margin-top: 8svh;
  position: relative;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0);
  letter-spacing: -1px;
  padding: 0 5px;
  @media screen and (max-width: 391px) {
    height: 15svh;
    margin-top: 4svh;
  }

  @media screen and (max-height: 690px) {
    margin-top: 2svh;
  }
}

.date_info {
  width: 100%;
  border: 3px solid #dbc7c2;
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  border-radius: 5px;
}

.slide-img {
  width: 100%;
  height: 100%;
}
</style>
