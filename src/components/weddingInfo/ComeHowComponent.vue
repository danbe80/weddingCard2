

<template>
  <q-card
    flat class="q-pa-md"
    style="height: 100%; background-size: cover"
    :style="{
                backgroundImage: `url(${bgImg})`,
              }">
    <div style="height: 10svh">
      <p class="q-mb-none">인터컨티넨탈 파르나스 “5층 그랜드볼룸”</p>
      <div class="row justify-center items-center text-center" style="width: 100%; margin: 0 auto; background-color: #e8d2cc; border-radius: 30px; border: 1.5px solid #bd988d">
        <p class="q-mb-none" style="">서울 강남구 테헤란로 521</p>
        <q-btn flat :ripple="false" class="row items-center text-center justify-center" style="color: #b19791" @click="copyAddress" >
          <div style="width: 15px; height: 15px; margin-bottom: 4px">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="fill:rgb(177,151,145);">
              <title>content-copy</title>
              <path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"/></svg>
          </div>
          <span>주소 복사</span>
        </q-btn>
      </div>
    </div>

    <div class="" style="width: 100%; height: 40svh; background-color: #f1e3e0; border-radius: 15px;">
      <div class="col-3 row justify-center items-start" style="height: 33%">
        <q-btn flat :ripple="false" class="col-3 q-mr-sm" style="border: 1px solid #bd988d; border-radius: 10px; background-color: #ffffff" @click="openMapApp(1)">
          <q-card flat class="row justify-center items-center text-center" style="background-color: rgba(0,0,0,0)">
            <div style="width: 100%;">
              <q-img src="../../assets/mapIcon/googlemap_icon.png" style="margin-bottom: 4px"></q-img>
              <q-btn :ripple="false" style="background-color: #e8d2cc; width: 100%; min-height: 15px; letter-spacing: -1.5px; padding: 0 2px; font-size: 12px; border-radius: 15px; font-weight: bold;" label="바로가기">
              </q-btn>
            </div>
          </q-card>
        </q-btn>
        <q-btn flat :ripple="false" class="col-3 q-mr-sm" style="border: 1px solid #bd988d; border-radius: 10px; background-color: #ffffff" @click="openMapApp(0)" >
          <q-card flat class="row justify-center items-center text-center" style="background-color: rgba(0,0,0,0)">
            <div style="width: 100%;">
              <q-img src="../../assets/mapIcon/kakaomap_icon.png" style="margin-bottom: 4px"></q-img>
              <q-btn :ripple="false" style="background-color: #e8d2cc; width: 100%; min-height: 15px; letter-spacing: -1.5px; padding: 0 2px; font-size: 12px; border-radius: 15px; font-weight: bold" label="바로가기" />
            </div>
          </q-card>
        </q-btn>
        <q-btn flat :ripple="false" class="col-3" style="border: 1px solid #bd988d; border-radius: 10px; background-color: #ffffff" @click="openMapApp(2)">
          <q-card flat class="row justify-center items-center text-center" style="background-color: rgba(0,0,0,0)">
            <div style="width: 100%;">
              <q-img src="../../assets/mapIcon/navermap_icon.png" style="margin-bottom: 4px"></q-img>
              <q-btn :ripple="false" style="background-color: #e8d2cc; width: 100%; min-height: 15px; letter-spacing: -1.5px; padding: 0 2px; font-size: 12px; border-radius: 15px; font-weight: bold" label="바로가기" />
            </div>
          </q-card>
        </q-btn>
      </div>

      <div class="col-5" style="width: 100%; padding: 0 10px; height: 33%">
        <q-card flat style="width: 100%; height: 100%; background-color: rgba(0,0,0,0)">
          <img src="../../assets/mapIcon/page6_map_slot.png" style="width: 100%; height: 100%"/>
        </q-card>
      </div>

      <div class="col-3"  style="width: 100%; height: 33%">
        <p>인터컨티넨탈 서울 코엑스 아닙니다. 주의 부탁드립니다.</p>
        <q-btn  style="background-color: #925959; color: #ffffff" @click="openNotice">교통편 안내</q-btn>
      </div>
    </div>


    <q-dialog v-model="transportNotice">
      <q-card class="column justify-start items-start" style="width: 100vw; height: 60lvh; border-radius: 15px;">
        <div class="col-1 com_how_info_wrap">
          <div class="row justify-center items-center text-center" style="width: 150px; padding: 5px 0; background-color: #d6bbb4; border-radius: 5vw;">
            <span class="col-1"></span>
            <div style="width: 45px; height: 35px;">
              <img class="col-3" src="../../assets/mapIcon/car_icon.png" style="width: 100%; height: 100%;"/>
            </div>
            <span class="col">주자 안내</span>
            <span class="col-1"></span>
          </div>
        </div>

        <div class="col-1 com_how_info_wrap">
          <p>
            그랜드 인터컨티넨탈 호텔 파르나스 주차장 <br>
            4시간 무료 제공
          </p>

        </div>

        <div class="col-1 com_how_info_wrap">
          <div class="row justify-center items-center text-center" style="width: 150px; padding: 5px 0; background-color: #d6bbb4; border-radius: 5vw;">
            <span class="col-1"></span>
            <div style="width: 40px; height: 35px;">
              <img class="col-3" src="../../assets/mapIcon/subway_icon.png" style="width: 100%; height: 100%;"/>
            </div>
            <span class="col">지하철 안내</span>
            <span class="col-1"></span>
          </div>
        </div>

        <div class="col-1 com_how_info_wrap">
          <p>
            <span style="color: #6ea545">2호선</span> 삼성역 5번, 6번 출구 앞에서 도보 1분 <br>
            <span style="color: #b08256">9호선</span> 봉은사역 6번출구 앞에서 도보 12분
          </p>

        </div>


      </q-card>

    </q-dialog>
  </q-card>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';

const bgImg = new URL(
  '../../assets/background/page2_bg.png',
  import.meta.url
).href

const transportNotice = ref(false);
const $q = useQuasar();

function openNotice() {
    transportNotice.value = true;
}

function copyAddress() {
  let data = ref('서울 강남구 테헤란로 521');
  navigator.clipboard.writeText(data.value)
    .then(() => console.log(data.value));
  $q.notify({
    message: '주소를 복사하였습니다.',
    color: '#e8d2cc',
    timeout: 500
  })
}

// enum 으로 변경
function openMapApp(type: number) {
  switch (type) {
    case 0: // 카카오맵
      window.location.href = 'https://kko.to/pDCwDLOEgg';
      break;
    case 1: // 구글맵
      window.location.href = 'https://maps.app.goo.gl/xLKYgZuccV6Sc9FF9'
      break;
    case 2: // 네이버
    window.location.href = 'https://map.naver.com/p/entry/place/11583199?c=11.00,0,0,0,dh'
    break;
  }
}

</script>
<style scoped>
  .com_how_info_wrap {
    height: 10%;
    padding: 5%;
  }
</style>
