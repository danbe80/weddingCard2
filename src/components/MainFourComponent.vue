<template>
  <q-page
    class="row items-start text-center"
    style="height: 100vh; padding: 0; color: #72605c"
  >
    <div class="col-12 bg_img_wrapper">
      <img
        src="../assets/page4/page4_bg.jpg"
        style="width: 100%; height: 100%"
      />
    </div>

    <div class="col-12 q-pa-sm justify-center img_list_wrapper">
      <q-card
        flat
        style="
          width: 100%;
          height: 100%;
          border: 2px solid #dbc7c2;
          box-sizing: border-box;
          padding: 5px 5px;
        "
        class="row justify-around items-center"
      >
        <div
          v-for="(num, idx) in IMG_ROW_NUM"
          :key="`text${num}`"
          class="col-12 row justify-evenly"
          style="height: 32%"
        >
          <div
            v-for="(sm, i) in IMG_ROW_NUM"
            :key="`text${sm}`"
            class="col-3"
            style="width: 31%; height: 100%"
            @click="onClickImg(idx, i)"
          >
            <div
              class="bg_text"
              :style="{
                backgroundImage: `url(${rowUrlObjList[idx][i].weddingImg})`,
              }"
            ></div>
          </div>
        </div>
      </q-card>


    </div>

    <div class="col-12 wedding_info_wrapper column">
      <div class="wedding_info_text w-100">
        자세한 예식 정보는 <span style="color: #dbc7c2">“예식정보 보기”</span> 클릭!
      </div>
      <div class="w-100" style="width: 32px; height: 22px">
          <img src="../assets/page4/page4_arrow2.png" style="width: 100%; height: 100%"/>
      </div>
    </div>


    <q-dialog v-model="icon">
      <q-card style="width: 100vw; height: 60vh; display: flex; align-items: center; justify-content: center">
          <q-carousel
            ref="carousel"
            v-model="slide"
            swipeable
            arrows
            infinite
            padding
            style="width: 100vw; height: 100%; padding: 15px; background-color: rgba(0,0,0,0)"
          >
            <q-carousel-slide v-for="(img, idx) in allUrlObjList" :key="img.weddingPhoto" :name="idx + 1" style="padding: 0" :img-src="`${img.weddingPhoto}`" />

          </q-carousel>

      </q-card>
    </q-dialog>

  </q-page>

</template>
<script setup lang="ts">
import { ref } from 'vue';

const  slide = ref(1);
const IMG_ROW_NUM = 3;


const rowUrlObjList = [
  [
    // 첫번째 줄
    {
      weddingImg: new URL(
        '../assets/page4/Page4_Photo_icon_1.png',
        import.meta.url
      ).href,
    },
    {
      weddingImg: new URL(
        '../assets/page4/Page4_Photo_icon_2.png',
        import.meta.url
      ).href,
    },
    {
      weddingImg: new URL(
        '../assets/page4/Page4_Photo_icon_3.png',
        import.meta.url
      ).href,
    },
  ],
  [
    // 두번째 줄
    {
      weddingImg: new URL(
        '../assets/page4/Page4_Photo_icon_4.png',
        import.meta.url
      ).href,
    },
    {
      weddingImg: new URL(
        '../assets/page4/Page4_Photo_icon_5.png',
        import.meta.url
      ).href,
    },
    {
      weddingImg: new URL(
        '../assets/page4/Page4_Photo_icon_6.png',
        import.meta.url
      ).href,
    },
  ],
  [
    // 세번째 줄
    {
      weddingImg: new URL(
        '../assets/page4/Page4_Photo_icon_7.png',
        import.meta.url
      ).href,
    },
    {
      weddingImg: new URL(
        '../assets/page4/Page4_Photo_icon_8.png',
        import.meta.url
      ).href,
    },
    {
      weddingImg: new URL(
        '../assets/page4/Page4_Photo_icon_9.png',
        import.meta.url
      ).href,
    },
  ],
];
const allUrlObjList = [
  {
    weddingPhoto:  new URL(
      '../assets/page4/Photo_1.jpg',
      import.meta.url
    ).href,
  },
  {
    weddingPhoto:  new URL(
      '../assets/page4/Photo_2.jpg',
      import.meta.url
    ).href,
  },
  {
    weddingPhoto:  new URL(
      '../assets/page4/Photo_3.jpg',
      import.meta.url
    ).href,
  },
  {
    weddingPhoto:  new URL(
      '../assets/page4/Photo_4.jpg',
      import.meta.url
    ).href,
  },
]
const icon = ref(false);
function onClickImg(rowIdx: number, colIdx: number) {
  console.log('이미지 클릭');
  icon.value = true;
  let slideNum = ref(0);
  switch (rowIdx) {
    case 0:
      slideNum.value = colIdx + 1;
      break;

    case 1:
      slideNum.value = IMG_ROW_NUM + (colIdx + 1);
      break;

    case 2:
      slideNum.value = (IMG_ROW_NUM * 2) + (colIdx + 1);
      break;
  }

  slide.value = slideNum.value;
}

</script>
<style scoped>
/*뒷배경 이미지*/
.bg_img_wrapper {
  width: 100%;
  height: 40vh;

  @media screen and (max-width: 578px) {
    height: 38vh;
  }
  @media (min-width: 578px) and (max-width: 1023px) {
    height: 35vh;
  }

  @media (min-width: 1024px) and (max-width: 1044px) {
    height: 35vh;
  }
}

.img_list_wrapper {
  width: 100%;
  position: relative;
  height: 50vh;
  top: -8%;

  @media screen and (max-width: 578px) {
    height: 50vh;
    top: -8%;
  }
  @media (min-width: 578px) and (max-width: 1023px) {
    height: 58vh;
    top: -10%;
  }

  @media (min-width: 1024px) and (max-width: 1044px) {
    height: 62vh;
    top: -10%;
  }
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
  height: 10%;
  position: relative;
  top: -10%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 5vw;
  @media (min-width: 578px) and (max-width: 1023px) {
    font-size: 4vw;
    top: -11%;
  }
}
.wedding_info_text {
  letter-spacing: -1px;
  margin-bottom: 0;
}
</style>
