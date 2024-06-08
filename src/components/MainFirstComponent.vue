<template>
  <q-card flat class="first-wrapper">
    <div class="slide_panel_wrap">
      <q-img
        src="../assets/page1/bg/page1_panel_new.png"
        loading="lazy"
        spinner-color="white"
        @contextmenu="$event.preventDefault()"
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
          @contextmenu="$event.preventDefault()"
          img-src="../assets/page1/Page1_Photo1.png"
        />
        <q-carousel-slide
          :name="2"
          class="carousel_wrap"
          @contextmenu="$event.preventDefault()"
          img-src="../assets/page1/Page1_Photo2.png"
        >
        </q-carousel-slide>
        <q-carousel-slide
          :name="3"
          class="carousel_wrap"
          @contextmenu="$event.preventDefault()"
          img-src="../assets/page1/Page1_Photo3.png"
        >
        </q-carousel-slide>
        <q-carousel-slide
          :name="4"
          class="carousel_wrap"
          @contextmenu="$event.preventDefault()"
          img-src="../assets/page1/Page1_Photo4.png"
        >
        </q-carousel-slide>
        <q-carousel-slide
          :name="5"
          class="carousel_wrap"
          @contextmenu="$event.preventDefault()"
          img-src="../assets/page1/Page1_Photo5.png"
        >
        </q-carousel-slide>
      </q-carousel>
    </div>

    <q-card flat class="data_info_wrap">
      <p class="date_info">
        {{ lang == 'kr' ? langText[0].kr : langText[0].en }}
      </p>
      <p
        class="location_info"
        v-html="lang == 'kr' ? langText[1].kr : langText[1].en"
      ></p>
    </q-card>
  </q-card>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import { storeLang } from 'src/store/module/lang';
const slide = ref(1);
const lang = computed(() => storeLang.lang);

const langText = [
  {
    kr: '2024.07.13 토요일 12시',
    en: 'Saturday, 13th July,  2024, 12PM',
  },
  {
    kr: '인터컨티넨탈 파르나스 5층 그랜드볼룸',
    en: 'Grand InterContinental Seoul Parnas <br /> 5 Floor, Grand Bloom',
  },
];


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
  height: 75dvh;
  /* 태블릿 크기 */
  @media (min-width: 1026px) {
    height: 80dvh;
  }
}

/* 슬라이드 배경 이미지 */
.slide_panel_img {
  width: 100%;
  height: 75dvh;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  -webkit-touch-callout:none;
  pointer-events: none;
}
/* 슬라이드 wrapper */
.carousel_wrapper {
  width: 100%;
  height: 75dvh;
}

/* 슬라이드 */
.carousel_wrap {
  width: 100%;
  height: 100%;
  padding: 0;
  -webkit-touch-callout:none;
}

.data_info_wrap {
  width: 100%;
  height: 15dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 3;
  letter-spacing: -1px;
  padding: 0 5px;
  background-color: rgba(0, 0, 0, 0);
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
