

<template>
  <q-card
    flat class="row justify-center items-center q-pa-lg"
    style="height: 100%; background-size: cover;"
    :style="{
                backgroundImage: `url(${bgImg})`,
              }">
    <div class="col-12">
      <p class="q-mb-none">인터컨티넨탈 파르나스 “5층 그랜드볼룸”</p>
      <div class="row justify-center items-center text-center" style="width: 80%; margin: 0 auto; background-color: #f1e3e0; border-radius: 30px; border: 1px #b19791 ">
        <p class="q-mb-none" style="">서울 강남구 테헤란로 521</p>
        <q-btn flat class="row items-center text-center justify-center" style="color: #b19791">
          <div style="width: 15px; height: 15px; margin-bottom: 4px">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="fill:rgb(177,151,145);">
              <title>content-copy</title>
              <path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"/></svg>
          </div>
          <span>주소 복사</span>
        </q-btn>
      </div>
    </div>

    <div class="col-12 q-mt-md row justify-center items-center text-center" style="background-color: #f1e3e0; height: 80%">

      <div class="col-12 row">
        <q-btn>
          
        </q-btn>
        <q-btn></q-btn>
        <q-btn></q-btn>
      </div>

      <div class="col-12">
        <q-img></q-img>
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
