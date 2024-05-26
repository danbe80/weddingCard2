<template>
  <q-page class="row items-center justify-evenly text-center" style="height: 100vh; color: #72605c;">

    <!-- 백그라운드 -->
    <img src="../assets/background/page2_bg.png" style="position: absolute; width: 100%; height: 100vh; z-index: 0"/>
    <!--  백그라운드  -->

    <q-carousel
      v-model="slide"
      swipeable
      animated
      transition-prev="slide-right"
      transition-next="slide-left"
      style="height: 100vh; width: 100vw;background-color: rgba(0,0,0,0)"
    >
      <q-carousel-slide :name="1" style="padding: 0">
        <MainFirstComponent />
      </q-carousel-slide>

      <q-carousel-slide :name="2" style="padding: 0">
        <MainSeconeComponnet />
      </q-carousel-slide>

      <q-carousel-slide :name="3" style="padding: 0">
        <MainThirdComponent />
      </q-carousel-slide>

      <q-carousel-slide :name="4"  style="padding: 0">
        <MainFourComponent />
      </q-carousel-slide>
    </q-carousel>

  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import MainFirstComponent from 'components/MainFirstComponent.vue';
import MainSeconeComponnet from 'components/MainSeconeComponnet.vue';
import MainThirdComponent from 'components/MainThirdComponent.vue';
import MainFourComponent from 'components/MainFourComponent.vue';

const slide = ref(1);

</script>
