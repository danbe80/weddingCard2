<template>
  <q-card flat class="four_wrapper">
    <div class="bg_img_wrapper">
      <q-img
        src="../assets/page4/page4_bg.jpg"
        loading="lazy"
        spinner-color="white"
        fit="fill"
        class="ba_img"
        @contextmenu="$event.preventDefault()"
      />
    </div>

    <div class="img_list_wrapper">
      <q-card flat class="list_wrap row justify-evenly items-center">
        <div
          v-for="(num,idx) in allUrlObjList"
          :key="`text${num}`"
          class="col-12 row justify-evenly photo_img"
          :style="{
                backgroundImage: `url(${num.weddingIcon})`,
              }"
          @click="onClickImg(idx)"
        >
        </div>
      </q-card>
    </div>

        <div class="wedding_info_wrapper">
      <div class="wedding_info_text" v-html="lang != 'kr' ? cautionText.en : cautionText.kr">

      </div>
      <div style="width: 3dvh;">
        <q-img
          src="../assets/page4/page4_arrow2.png"
          loading="lazy"
          spinner-color="white"
          @contextmenu="$event.preventDefault()"
          fit="fill"
          style="-webkit-touch-callout:none;pointer-events: none;"
          @click="$event.preventDefault()"
        />
      </div>
    </div>

    <q-dialog v-model="icon" >
      <q-card
        class="dialog_wrap"
      >

        <q-carousel
          ref="waddingImg"
          v-model="slide"
          animated
          swipeable
          infinite
          thumbnails
          style="width: 100vw; height: 100%"
        >
          <q-carousel-slide
            v-for="(img, idx) in allUrlObjList"
            :key="img.weddingPhoto"
            :name="idx + 1"
            style="padding: 0; border-radius: 15px; -webkit-touch-callout:none; pointer-events: none;"
            @contextmenu="$event.preventDefault()"
            :img-src="img.weddingPhoto"
            @click="$event.preventDefault()"
          >
            <q-img
              @contextmenu="$event.preventDefault()"
              fit="cover"
              position="50% 50%"
              style="height: 100%; width: 100%; pointer-events: none;"
              :src="img.weddingPhoto"
              @click="$event.preventDefault()"
            />


          </q-carousel-slide>
        </q-carousel>



      </q-card>


    </q-dialog>
  </q-card>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import { storeLang } from 'src/store/module/lang';

const slide = ref(1);
const lang = computed(() => storeLang.lang);
const allUrlObjList = [
  {
    weddingIcon: new URL('../assets/page4/Page4_Photo_icon_1.png', import.meta.url).href,
    weddingPhoto: new URL('../assets/page4/Photo_1.jpg', import.meta.url).href,
  },
  {
    weddingIcon: new URL('../assets/page4/Page4_Photo_icon_2.png', import.meta.url).href,
    weddingPhoto: new URL('../assets/page4/Photo_2.jpg', import.meta.url).href,
  },
  {
    weddingIcon: new URL('../assets/page4/Page4_Photo_icon_3.png', import.meta.url).href,
    weddingPhoto: new URL('../assets/page4/Photo_3.jpg', import.meta.url).href,
  },
  {
    weddingIcon: new URL('../assets/page4/Page4_Photo_icon_4.png', import.meta.url).href,

    weddingPhoto: new URL('../assets/page4/Photo_4.jpg', import.meta.url).href,
  },
  {
    weddingIcon: new URL('../assets/page4/Page4_Photo_icon_5.png', import.meta.url).href,

    weddingPhoto: new URL(
      '../assets/page4/Photo_5.jpg',
      import.meta.url
    ).href,
  },
  {
    weddingIcon: new URL('../assets/page4/Page4_Photo_icon_6.png', import.meta.url).href,

    weddingPhoto: new URL(
      '../assets/page4/Photo_6.jpg',
      import.meta.url
    ).href,
  },
  {
    weddingIcon: new URL('../assets/page4/Page4_Photo_icon_7.png', import.meta.url).href,

    weddingPhoto: new URL(
      '../assets/page4/Photo_7.jpg',
      import.meta.url
    ).href,
  },
  {
    weddingIcon: new URL('../assets/page4/Page4_Photo_icon_8.png', import.meta.url).href,

    weddingPhoto: new URL(
      '../assets/page4/Photo_8.jpg',
      import.meta.url
    ).href,
  },
  {
    weddingIcon: new URL('../assets/page4/Page4_Photo_icon_9.png', import.meta.url).href,

    weddingPhoto: new URL(
      '../assets/page4/Photo_9.jpg',
      import.meta.url
    ).href,
  },
];
const icon = ref(false);
function onClickImg(idx: number) {
  icon.value = true;
  slide.value = idx + 1;
}

const cautionText = {
  kr: '자세한 예식 정보는 <span style="color: #dbc7c2">“예식정보 보기”</span> 클릭!',
  en: 'Want to see the <span style="color: #dbc7c2">detail of wedding</span> button Click please.',
}
</script>
<style scoped>
.four_wrapper {
  height: 100dvh;
  padding: 0;
  color: #72605c;
}

/*뒷배경 이미지*/
.bg_img_wrapper {
  width: 100%;
  height: 35dvh;

  /* 태블릿 크기 */
  @media (min-width: 991px) {
    height: 35dvh;
  }

  /* 아이폰 크기 */
  @media (min-width: 765px) and (max-width: 991px) {
    height: 40dvh;
  }


  /* 아이폰 크기 */
  @media (min-width: 390px) and (max-width: 991px) {
    height: 40dvh;
  }
}
.ba_img {
  width: 100%;
  height: 100%;
  -webkit-touch-callout:none;
}

.img_list_wrapper {
  width: 100%;
  height: 58dvh;
  position: relative;
  top: -10dvh;
  padding: 1.5dvh;
  /* 컴퓨터 크기 */
  @media (min-width: 991px) {
    height: 66dvh;
    padding: 2dvh;
  }
  /* 패드 크기 */
  @media (min-width: 710px) and (max-width: 990px) {
    height: 58dvh;
  }

  /* 아이폰 크기 */
  @media (min-width: 390px) and (max-width: 710px) {
    height: 55dvh;
  }
}

.list_wrap {
  width: 100%;
  height: 100%;
  border: 2px solid #dbc7c2;
  box-sizing: border-box;
  //padding: 1dvh;
}

.photo_img {
  width: 31%;
  height: 31%;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  -webkit-touch-callout:none;
}

.bg_text {
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
}
/* 예식 정보 텍스트 */
.wedding_info_wrapper {
  width: 100%;
  height: 5dvh;
  position: relative;
  top: -10dvh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-size: 2.5dvh;
  letter-spacing: -1px;
  /* 컴퓨터 크기 */
  @media (min-width: 991px) {
    height: 4dvh;
    font-size: 1.5dvh;
    top: -11dvh;
  }
  /* 패드 크기 */
  @media (min-width: 710px) and (max-width: 990px) {
    height: 4dvh;
    font-size: 1.5dvh;
  }

  @media (min-width: 578px) and (max-width: 709px) {
    font-size: 18px;
    top: -11%;
  }
}
.wedding_info_text {
  letter-spacing: -1px;
  margin-bottom: 0;
}

/* 사진 팝업 css */
.dialog_wrap {
  height: 75dvh;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
}

.arrow_btn {
  position: absolute;
  font-size: 3dvh;
  color: #ffffff;
}
.right_btn {
  right: 5px;
}
.left_btn {
  left: 5px;
}
</style>
