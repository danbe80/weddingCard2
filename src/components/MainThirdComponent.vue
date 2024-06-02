<template>
  <q-card flat class="third_wrapper">
    <div
      class="third_slide-wrap"
    >
      <img
        src="../assets/page3/page3_bg.png"
        class="slide_panel"
      />
    </div>
    <q-carousel
      v-model="slide"
      animated
      infinite
      :autoplay="4000"
      transition-prev="slide-right"
      transition-next="slide-left"
      style="width: 100%; height: 64lvh"
    >
      <q-carousel-slide :name="1" style="padding: 0">
        <div style="width: 100vw; height: 75lvh">
          <img
            src="../assets/page3/Page3_Photo1.png"
            class="slide-img"
          />
        </div>
      </q-carousel-slide>

      <q-carousel-slide :name="2" style="padding: 0">
        <div style="width: 100vw; height: 75lvh">
          <img
            src="../assets/page3/Page3_Photo2.png"
            class="slide-img"
          />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" style="padding: 0">
        <div style="width: 100vw; height: 75lvh">
          <img
            src="../assets/page3/Page3_Photo3.png"
            class="slide-img"
          />
        </div>
      </q-carousel-slide>
    </q-carousel>

    <q-card
      flat
      style="
        position: relative;
        z-index: 3;
        background-color: rgba(0, 0, 0, 0);
        letter-spacing: -1px;
      "
    >
      <p
        class="text-left row justify-center"
        style="font-size: 4.2vw; letter-spacing: -1px; font-weight: bold; margin: 0"
      >
        서로가 마주 보며 다져온 사랑을<br />
        이제 함께 한곳을 바라보며 걸어갈 수 있는<br />
        큰 사랑으로 키우고자 합니다.<br />
        저희 두 사람의 앞날을 축복해주시면 감사하겠습니다.
      </p>
    </q-card>
  </q-card>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const slide = ref(1);
</script>
<style scoped>
.third_wrapper {
  width: 100vw;
  height: 100svh;
  border-radius: 0;
  border: none;
  background-color: rgba(0, 0, 0, 0);
}

.third_slide-wrap {
  height: 90svh;
  width: 100vw;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  overflow: hidden;
}
.slide_panel {
  height: 90lvh;
  width: 100%;
}
.slide-img {
  width: 100%;
  height: 100%;
}
</style>
