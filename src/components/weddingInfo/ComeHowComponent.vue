

<template>
  <q-card
    flat class="column q-pa-md"
    style="height: 100%; background-size: cover;"
    :style="{
                backgroundImage: `url(${bgImg})`,
              }">
    <div class="col-2">
      <p class="q-mb-none">인터컨티넨탈 파르나스 “5층 그랜드볼룸”</p>
      <div class="row justify-center items-center text-center" style="width: 100%; margin: 0 auto; background-color: #e8d2cc; border-radius: 30px; border: 1.5px solid #bd988d">
        <p class="q-mb-none" style="">서울 강남구 테헤란로 521</p>
        <q-btn flat :ripple="false" class="row items-center text-center justify-center" style="color: #b19791" >
          <div style="width: 15px; height: 15px; margin-bottom: 4px">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="fill:rgb(177,151,145);">
              <title>content-copy</title>
              <path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"/></svg>
          </div>
          <span>주소 복사</span>
        </q-btn>
      </div>
    </div>

    <div class="col-9 column justify-around q-mt-md" style="width: 100%; background-color: #f1e3e0; border-radius: 15px;">

      <div class="col-4 row justify-center items-start" style="">
        <q-btn flat :ripple="false" class="col-3 q-mr-sm" style="border: 1px solid #bd988d; border-radius: 10px; background-color: #ffffff" >
          <q-card flat class="row justify-center items-center text-center" style="background-color: rgba(0,0,0,0)">
            <div style="width: 100%;">
              <q-img src="../../assets/mapIcon/googlemap_icon.png" style="margin-bottom: 4px"></q-img>
              <q-btn :ripple="false" style="background-color: #e8d2cc; width: 100%; min-height: 15px; letter-spacing: -1.5px; padding: 0 2px; font-size: 12px; border-radius: 15px; font-weight: bold;" label="바로가기">
              </q-btn>
            </div>
          </q-card>
        </q-btn>
        <q-btn flat :ripple="false" class="col-3 q-mr-sm" style="border: 1px solid #bd988d; border-radius: 10px; background-color: #ffffff" >
          <q-card flat class="row justify-center items-center text-center" style="background-color: rgba(0,0,0,0)">
            <div style="width: 100%;">
              <q-img src="../../assets/mapIcon/kakaomap_icon.png" style="margin-bottom: 4px"></q-img>
              <q-btn :ripple="false" style="background-color: #e8d2cc; width: 100%; min-height: 15px; letter-spacing: -1.5px; padding: 0 2px; font-size: 12px; border-radius: 15px; font-weight: bold" label="바로가기" />
            </div>
          </q-card>
        </q-btn>
        <q-btn flat :ripple="false" class="col-3" style="border: 1px solid #bd988d; border-radius: 10px; background-color: #ffffff" >
          <q-card flat class="row justify-center items-center text-center" style="background-color: rgba(0,0,0,0)">
            <div style="width: 100%;">
              <q-img src="../../assets/mapIcon/navermap_icon.png" style="margin-bottom: 4px"></q-img>
              <q-btn :ripple="false" style="background-color: #e8d2cc; width: 100%; min-height: 15px; letter-spacing: -1.5px; padding: 0 2px; font-size: 12px; border-radius: 15px; font-weight: bold" label="바로가기" />
            </div>
          </q-card>
        </q-btn>
      </div>

      <div class="col-4" style="width: 100%">
        <q-card flat style="width: 100%; height: 100%;">
          <q-img src="../../assets/mapIcon/page6_map_slot.png" width="100%" height="100%"></q-img>
        </q-card>
      </div>

      <div class="col-3"  style="width: 100%">
        ddd
      </div>
    </div>


  </q-card>
</template>
<script setup lang="ts">
const bgImg = new URL(
  '../../assets/background/page2_bg.png',
  import.meta.url
).href

</script>
<style scoped>

</style>
