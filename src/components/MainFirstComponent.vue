<template>
  <q-card flat class="first-wrapper">
    <div class="slide_panel_wrap">
      <q-img
        src="../assets/page1/bg/page1_panel_new.png"
        loading="lazy"
        spinner-color="white"
        fit="fill"
        class="slide_panel_img"
      />
      <q-carousel
        v-model="slide"
        animated
        infinite
        :autoplay="4000"
        transition-prev="slide-right"
        transition-next="slide-left"
        class="carousel_wrapper"
      >
        <q-carousel-slide
          :name="1"
          class="carousel_wrap"
          img-src="../assets/page1/Page1_Photo1.png"
        />
        <q-carousel-slide
          :name="2"
          class="carousel_wrap"
          img-src="../assets/page1/Page1_Photo2.png"
        >
        </q-carousel-slide>
        <q-carousel-slide
          :name="3"
          class="carousel_wrap"
          img-src="../assets/page1/Page1_Photo3.png"
        >
        </q-carousel-slide>
        <q-carousel-slide
          :name="4"
          class="carousel_wrap"
          img-src="../assets/page1/Page1_Photo4.png"
        >
        </q-carousel-slide>
        <q-carousel-slide
          :name="5"
          class="carousel_wrap"
          img-src="../assets/page1/Page1_Photo5.png"
        >
        </q-carousel-slide>
      </q-carousel>
    </div>

    <q-card flat class="data_info_wrap">
      <p class="date_info" style="">2024.07.13 토요일 12시</p>
      <p class="location_info">인터컨티넨탈 파르나스 5층 그랜드볼룸</p>
    </q-card>
  </q-card>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { onMounted } from 'vue';
const slide = ref(1);

onMounted(() => {
  console.log('넓이 ::: ', window.outerWidth);
  console.log('높이 ::: ', window.outerHeight);
  document.documentElement.style.setProperty(
    '--vh',
    window.innerHeight * 0.01 + 'px'
  );
});
</script>

<style scoped>
/* 첫번째 페이지 css */
.first-wrapper {
  width: 100%;
  min-height: 100dvh;
  height: 100dvh;
  border-radius: 0;
}

/* 슬라이드 배경 패널 wrap */
.slide_panel_wrap {
  width: 100%;
  height: 70dvh;
  /* 태블릿 크기 */
  @media (min-width: 1026px) {
    height: 80dvh;
  }
}

/* 슬라이드 배경 이미지 */
.slide_panel_img {
  width: 100%;
  height: 80dvh;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
}
/* 슬라이드 wrapper */
.carousel_wrapper {
  width: 100%;
  height: 80dvh;
}

/* 슬라이드 */
.carousel_wrap {
  width: 100%;
  height: 100%;
  padding: 0;
}

.data_info_wrap {
  width: 100%;
  height: 25dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 3;
  letter-spacing: -1px;
  padding: 0 5px;
  /* 태블릿 크기 */
  @media (min-width: 1026px) {
    height: 15dvh;
  }
}

.date_info {
  width: 100%;
  border: 3px solid #dbc7c2;
  font-size: 3.5dvh;
  font-weight: bold;
  margin: 0;
  border-radius: 5px;
}
.location_info {
  font-size: 2.5dvh;
  margin-top: 1dvh;
}
</style>
