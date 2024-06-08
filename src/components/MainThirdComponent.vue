<template>
  <q-card flat class="third_wrapper">
    <div class="third_slide-wrap">
      <q-img
        src="../assets/page3/page3_bg_new.png"
        loading="lazy"
        spinner-color="white"
        fit="fill"
        class="slide_panel"
        @contextmenu="$event.preventDefault()"
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
          img-src="../assets/page3/Page3_Photo1.png"
          @contextmenu="$event.preventDefault()"
        />
        <q-carousel-slide
          :name="2"
          class="carousel_wrap"
          img-src="../assets/page3/Page3_Photo2.png"
          @contextmenu="$event.preventDefault()"
        />
        <q-carousel-slide
          :name="3"
          class="carousel_wrap"
          img-src="../assets/page3/Page3_Photo3.png"
          @contextmenu="$event.preventDefault()"
        />
      </q-carousel>
    </div>

    <q-card flat class="intro_wrap">
      <p v-for="text in lang == 'kr' ? introText.kr : introText.en" :key="text">
        {{ text }}
      </p>
    </q-card>
  </q-card>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
import { storeLang } from 'src/store/module/lang';

const lang = computed(() => storeLang.lang);

const introText =
  {
    kr : [
      '서로가 마주 보며 다져온 사랑을',
      '이제 함께 한곳을 바라보며 걸어갈 수 있는',
      '큰 사랑으로 키우고자 합니다.',
      '저희 두 사람의 앞날을 축복해주시면 감사하겠습니다.'
    ],
    en: [
      'We embark on this new journey together.',
      'Let’s celebrate the beginning of our new life together',
      'Celebrate with us as we commit to a lifetime of love and happiness.',
    ]
  }

const slide = ref(1);
</script>
<style scoped>
p {
  margin: 0;
  line-height: 3.5dvh;
  /* 태블릿 크기 */
  @media (min-width: 1026px) {
    line-height: 3dvh;
  }
}
.third_wrapper {
  width: 100%;
  min-height: 100dvh;
  height: 100dvh;
  border-radius: 0;
}

.third_slide-wrap {
  width: 100%;
  height: 72dvh;
  padding-top: 3dvh;
  /* 태블릿 크기 */
  @media (min-width: 1026px) {
    height: 80dvh;
    padding-top: 0;
  }
}
.slide_panel {
  width: 100%;
  height: 70dvh;
  position: absolute;
  top: 3dvh;
  right: 0;
  z-index: 2;
  -webkit-touch-callout:none;
  pointer-events: none;
  /* 태블릿 크기 */
  @media (min-width: 1026px) {
    height: 80dvh;
    top: 0;
  }
}

.carousel_wrapper {
  width: 100%;
  height: 75dvh;
  pointer-events: none;
  /* 태블릿 크기 */
  @media (min-width: 1026px) {
    padding-top: 2dvh;
    height: 80dvh;
  }
}

/* 슬라이드 */
.carousel_wrap {
  width: 100%;
  height: 100%;
  padding: 0;
  -webkit-touch-callout:none;
  pointer-events: none;
}

.intro_wrap {
  position: relative;
  z-index: 3;
  letter-spacing: -1px;
  font-size: 2.5dvh;
  font-weight: bold;
  text-align: left;
  padding: 2dvh 2dvh;
  /* 태블릿 크기 */
  @media (min-width: 1026px) {
    padding-top: 1dvh;
  }
}
</style>
