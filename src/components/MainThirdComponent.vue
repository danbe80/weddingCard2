

<template>
  <q-page class="row items-center justify-evenly text-center" style="min-height: 100vh; padding: 0; color: #72605c;">
    <q-page-container style="position: absolute; top: 0; width: 100vw; height: 100vh">
      <q-card  flat style="width: 100vw; height: 100vh; border-radius: 0; border: none; background-color: rgba(0,0,0,0)">
        <q-card flat style="height: 20px"></q-card>
        <img src="../assets/page3/page3_bg.png" style="width: 100vw; height: 100%; position: absolute; top: 0; right: 0; z-index: 2" />
        <q-carousel
          v-model="slide"
          animated
          infinite
          :autoplay="4000"
          transition-prev="slide-right"
          transition-next="slide-left"
          style="width: 100%; height: 74%; "
        >
          <q-carousel-slide :name="1" img-src="../assets/page3/Page3_Photo1.png" />
          <q-carousel-slide :name="2" img-src="../assets/page3/Page3_Photo2.png" />
          <q-carousel-slide :name="3" img-src="../assets/page3/Page3_Photo3.png" />
        </q-carousel>


        <q-card flat style="height: 10vh; position: relative; z-index: 3; background-color: rgba(0,0,0,0); letter-spacing: -1px; padding: 0 5%">
          <p class="text-left" style="font-size: 16px; font-weight: bold; margin: 0 8px;">
            서로가 마주 보며 다져온 사랑을<br />
            이제 함께 한곳을 바라보며 걸어갈 수 있는<br />
            큰 사랑으로 키우고자 합니다.<br />
            저희 두 사람의 앞날을 축복해주시면 감사하겠습니다.
          </p>
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
