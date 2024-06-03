<template>
  <q-page
        class="slide_wrapper"
          >

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

      <q-carousel-slide
        :name="2"
        class="slide_component"
      >
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

const slide = ref(1);
</script>

<style scoped>
.bg-panel {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100svh;
  min-height: 100svh;
  z-index: 0;
}

.slide_wrapper {
  height: 100dvh;
  min-height: 100svh;
  text-align: center;
  color: #72605c;
}

.slide_wrap {
  height: 100svh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0);
}

.slide_component {
  padding: 0;
  height: 100%;
}
</style>
