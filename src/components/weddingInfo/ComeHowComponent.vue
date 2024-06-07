<template>
  <q-card flat class="come_wrapper">
    <div class="address_wrapper">
      <p class="q-mb-none">{{ lang != 'kr' ? addressText[0].en : addressText[0].kr }}</p>
      <div class="address_wrap">
        <p class="address_text">{{ lang != 'kr' ? addressText[1].en : addressText[1].kr }}</p>
        <q-btn
          flat
          :ripple="false"
          class="row items-center text-center justify-center"
          style="color: #b19791"
          @click="copyAddress"
        >
          <div class="copy_wrap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              style="fill: rgb(177, 151, 145)"
            >
              <title>content-copy</title>
              <path
                d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"
              />
            </svg>
          </div>
          <span class="copy_text">{{ lang != 'kr' ? copyText.en : copyText.kr }}</span>
        </q-btn>
      </div>
    </div>

    <div class="map_wrapper">
      <div class="map_btn_list_wrap">
        <q-btn
          flat
          :ripple="false"
          class="map_btn_wrap justify-center"
          @click="openMapApp(idx)"
          v-for="(btn, idx) in mapList"
          :key="btn.mapIcon"
        >
          <q-img :src="btn.mapIcon" class="map_img" fit="fill"></q-img>
          <span class="quick_btn">{{ lang != 'kr' ? quickText.en[idx] : quickText.kr }}</span>
        </q-btn>
      </div>

      <div class="location_wrapper">
        <q-card
          flat
          style="width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0)"
        >
          <img
            src="../../assets/mapIcon/page6_map_slot.png"
            style="width: 100%; height: 100%"
          />
        </q-card>
      </div>

      <div class="caution_wrapper">
        <p style="line-height: 2dvh; letter-spacing: -1px">
          {{ lang != 'kr' ? warningText.en : warningText.kr }}
        </p>
        <q-btn class="how_btn" @click="openNotice"> {{ lang != 'kr' ? howBtn.en : howBtn.kr }}</q-btn>
      </div>
    </div>

    <q-dialog v-model="transportNotice">
      <q-card class="popup_wrapper">
        <div class="com_how_info_wrap">
          <div
            class="title_wrapper"
          >
            <div style="width: 25%;">
              <q-img
                fit="fill"
                src="../../assets/mapIcon/car_icon.png"
              />
            </div>
            <span style="margin-left: 1dvh">{{ lang != 'kr' ? dailogText[0].en : dailogText[0].kr }}</span>
          </div>
        </div>

        <div class="com_how_info_wrap" style="padding-top: 0; margin-bottom: 1dvh">
          <p v-html="lang != 'kr' ? dailogText[1].en : dailogText[1].kr"></p>
        </div>

        <div class="com_how_info_wrap">
          <div
            class="title_wrapper">
            <div style="width: 18%;">
              <q-img
                fit="fill"
                src="../../assets/mapIcon/subway_icon.png"
              />
            </div>
            <span style="margin-left: 1dvh">{{ lang != 'kr' ? dailogText[2].en : dailogText[2].kr }}</span>
          </div>
        </div>

        <div class="com_how_info_wrap" style="padding-top: 0">
          <p v-html="lang != 'kr' ? dailogText[3].en : dailogText[3].kr"></p>
          <p v-html="lang != 'kr' ? dailogText[4].en : dailogText[4].kr"></p>
        </div>
      </q-card>
    </q-dialog>
  </q-card>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import { useQuasar } from 'quasar';
import { storeLang } from 'src/store/module/lang';

const transportNotice = ref(false);
const $q = useQuasar();
const lang = computed(() => storeLang.lang);
const addressText = [
  {
    kr: '인터컨티넨탈 파르나스 “5층 그랜드볼룸”',
    en: 'Parnas, IHG hotel,  5 Floor'
  },
  {
    kr: '서울 강남구 테헤란로 521',
    en: '521, Teheran-ro,Gangnam-gu,Seoul',
  }
]

const copyText = {
  kr: '주소 복사',
  en: 'copy'
}
const quickText = {
  kr: '바로가기',
  en: [
    'Google',
    'Kakao',
    'Naver',
  ]
}
const warningText = {
  kr: '인터컨티넨탈 서울 코엑스 아닙니다. 주의 부탁드립니다.',
  en: 'Upper buttons are Map Link to the Wedding'
}

const howBtn = {
  kr: '교통편 안내',
  en: 'Transportation Guide',
}

const dailogText = [
  {
    kr: '주차 안내',
    en: 'Parking',
  },
  {
    kr: '그랜드 인터컨티넨탈 호텔 파르나스 주차장 <br />' + '4시간 무료 제공',
    en: 'Grand InterContinental Seoul Parnas Parking Lot  <br />' + '4 Hours Free',
  },
  {
    kr: '지하철 안내',
    en: 'Subway',
  },
  {
    kr: '<span style="color: #6ea545">2호선</span> 삼성역 5번, 6번 출구 앞에서 도보 1분',
    en: '<span style="color: #6ea545">Line 2</span> Samseong Station, 1 minute walk from Exits 5 and 6.',
  },
  {
    kr: '<span style="color: #b08256">9호선</span> 봉은사역 6번출구 앞에서 도보 12분',
    en: '<span style="color: #b08256">Line 9</span> Bongeunsa Station, 12-minute walk from Exit 6.',
  },
]

const mapList = [
  {
    mapIcon: new URL('../../assets/mapIcon/googlemap_icon.png', import.meta.url)
      .href,
  },
  {
    mapIcon: new URL('../../assets/mapIcon/kakaomap_icon.png', import.meta.url)
      .href,
  },
  {
    mapIcon: new URL('../../assets/mapIcon/navermap_icon.png', import.meta.url)
      .href,
  },
];

function openNotice() {
  transportNotice.value = true;
}

function copyAddress() {
  let data = ref('서울 강남구 테헤란로 521');
  navigator.clipboard.writeText(data.value).then(() => console.log(data.value));
  $q.notify({
    message: '주소를 복사하였습니다.',
    color: '#e8d2cc',
    timeout: 500,
  });
}

// enum 으로 변경
function openMapApp(type: number) {
  switch (type) {
    case 0: // 구글맵
      window.location.href = 'https://maps.app.goo.gl/xLKYgZuccV6Sc9FF9';
      break;
    case 1: // 카카오맵
      window.location.href = 'https://kko.to/pDCwDLOEgg';
      break;
    case 2: // 네이버
      window.location.href =
        'https://map.naver.com/p/entry/place/11583199?c=11.00,0,0,0,dh';
      break;
  }
}
</script>
<style scoped>
p {
  margin: 0;
  line-height: 4dvh;
}
.come_wrapper {
  width: 100%;
  height: 100%;
  font-size: 2.3dvh;
  letter-spacing: -1px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* 아이폰 크기 */
  @media (min-width: 390px) and (max-width: 710px) {
    font-size: 2.5dvh;
  }
  @media (min-width: 270px) and (max-width: 389px) {
    font-size: 2.5dvh;
  }
}
.address_wrapper {
  height: 10dvh;
}
.address_wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85%;
  height: 50%;
  margin: 0 auto;
  background-color: #e8d2cc;
  border-radius: 30px;
  border: 1.5px solid #bd988d;
}
.address_text {
  font-size: 2.5dvh;
  /* 패드 크기 */
  @media (min-width: 710px) and (max-width: 990px) {
    font-size: 2dvh;
  }
  /* 아이폰 크기 */
  @media (min-width: 390px) and (max-width: 710px) {
    font-size: 2.8dvh;
  }
  @media (min-width: 270px) and (max-width: 389px) {
    font-size: 2.8dvh;
  }
}
.copy_wrap {
  width: 15px;
  height: 15px;
  margin-bottom: 4px;
}
.copy_text {
  font-size: 1.5dvh;
  /* 아이폰 크기 */
  @media (min-width: 390px) and (max-width: 710px) {
    font-size: 2dvh;
  }
  @media (min-width: 270px) and (max-width: 389px) {
    font-size: 2dvh;
  }
}
.map_wrapper {
  width: 95%;
  height: 43dvh;
  background-color: #f1e3e0;
  border-radius: 15px;
  margin: 0 auto;
  /* 아이폰 크기 */
  @media (min-width: 390px) and (max-width: 710px) {
    height: 39dvh;
  }
  @media (min-width: 270px) and (max-width: 389px) {
    height: 40dvh;
  }
}
.map_btn_list_wrap {
  width: 90%;
  height: 30%;
  display: flex;
  justify-content: center;
  margin: 1dvh auto;
  /* 아이폰 크기 */
  @media (min-width: 390px) and (max-width: 710px) {
    height: 30%;
  }
  @media (min-width: 270px) and (max-width: 389px) {
    height: 30%;
  }
}
.map_btn_wrap {
  width: 28%;
  height: 100%;
  border: 1px solid #bd988d;
  border-radius: 10px;
  background-color: #ffffff;
  margin: 0 auto;
  padding: 0;
}
.map_img {
  width: 60%;
  height: 50%;
  /* 태블릿 크기 */
  @media (min-width: 768px) {
    width: 70%;
    height: 60%;
  }
}
.quick_btn {
  background-color: #e8d2cc;
  width: 65%;
  min-height: 15px;
  letter-spacing: -1.5px;
  padding: 0 2px;
  font-size: 1.8dvh;
  border-radius: 15px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  /* 태블릿 크기 */
  @media (min-width: 768px) {
    height: 3dvh;
    min-height: 3dvh;
  }
}
.location_wrapper {
  width: 90%;
  height: 35%;
  margin: 0 auto;
  /* 태블릿 크기 */
  @media (min-width: 768px) {
    height: 40%;
  }
}
.caution_wrapper {
  width: 100%;
  height: 33%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* 태블릿 크기 */
  @media (min-width: 768px) {
    height: 25%;
  }
}
.how_btn {
  background-color: #925959;
  color: #ffffff;
  margin-top: 1.2dvh;
  font-size: 2dvh;
  /* 태블릿 크기 */
  @media (min-width: 768px) {
    margin-top: 1dvh;
  }
}
.popup_wrapper {
  width: 100vw;
  height: 60dvh;
  border-radius: 15px;
  font-size: 2dvh;
  letter-spacing: -1px;
  display: flex;
  flex-direction: column;
  padding: 3dvh;

}
.title_wrapper {
  width: 40%;
  height: 100%;
  padding: 1.5dvh 0 1.5dvh 1dvh;
  background-color: #d6bbb4;
  border-radius: 15dvh;
  display: flex;
  align-items: center;
  /* 아이폰 크기 */
  @media (min-width: 390px) and (max-width: 710px) {
    padding: 1dvh 0 1dvh 1.5dvh;
  }
  @media (min-width: 270px) and (max-width: 389px) {
    padding: 1dvh 0 1dvh 1.5dvh;
  }
}
.com_how_info_wrap {
  //padding: 5% 5% 0 5%;
}
</style>
