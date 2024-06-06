<template>
  <q-page class="slide_wrapper">
    <q-carousel
      v-model="slide"
      swipeable
      animated
      transition-prev="slide-right"
      transition-next="slide-left"
      class="slide_wrap"
    >
      <q-carousel-slide :name="1" class="slide_component">
        <MainFirstComponent />
      </q-carousel-slide>

      <q-carousel-slide :name="2" class="slide_component">
        <MainSeconeComponnet />
      </q-carousel-slide>

      <q-carousel-slide :name="3" class="slide_component">
        <MainThirdComponent />
      </q-carousel-slide>

      <q-carousel-slide :name="4" class="slide_component">
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

/* 페이지 위치 타입 */
/*enum pageType {
  FIRST = 1,
  SECOND = 2,
  THIRD = 3,
  FOUR = 4,
}*/
const slide = ref(1);


</script>

<style scoped>
/* 갤러리 페이지 css */
.slide_wrapper {
  width: 100%;
  height: 100dvh;
  min-height: 100dvh;
  text-align: center;
  color: #72605c;
}

.slide_wrap {
  height: 100dvh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0);
  @media (min-width: 1026px) {
    width: 991px;
    margin: 0 auto;
  }
}

.slide_component {
  padding: 0;
  height: 100%;
}
</style>
