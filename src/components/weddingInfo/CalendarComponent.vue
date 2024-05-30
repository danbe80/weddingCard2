<template>
  <q-card
      flat class="row q-pa-lg"
      style="height: 100%; background-size: cover; font-weight: bold "
      :style="{
                backgroundImage: `url(${bgImg})`,
              }">


    <div class="justify-center items-center flex col-12">
      <span style="font-size: 5vw; font-weight: bold">7월</span>
    </div>

    <div class="col-12 week_date_wrapper justify-between items-center row q-mt-sm">
      <span v-for="day in aweekDate" :key="day" class="date col-1" style="font-size:  4vw; font-weight: bold">{{
        day
      }}</span>
    </div>

    <div class="col-12 week_date_wrapper justify-between items-center row q-mt-sm">
      <span  class="date col-1" ></span>
      <span v-for="day in 6" :key="day" class="date col-1" style="font-size: 4vw; color: #d6bbb4;">{{
          day
        }}</span>
    </div>
    <div class="col-12 week_date_wrapper justify-between items-center row q-mt-sm">
      <span v-for="day in 6" :key="day" class="date col-1" style="font-size:  4vw;  color: #d6bbb4;">{{
          6 + day
        }}</span>
      <span  class="wedding_date col-1" style="font-size: 18px; color: #72605c">13</span>
    </div>
    <div class="col-12 week_date_wrapper justify-between items-center row q-mt-sm">
      <span v-for="day in 7" :key="day" class="date col-1" style="font-size:  4vw;  color: #d6bbb4;">{{
          13 + day
        }}</span>
    </div>
    <div class="col-12 week_date_wrapper justify-between items-center row q-mt-sm">
      <span v-for="day in 7" :key="day" class="date col-1" style="font-size:  4vw;  color: #d6bbb4;">{{
          20 + day
        }}</span>
    </div>
    <div class="col-12 week_date_wrapper justify-between items-center row q-mt-sm">
      <span v-for="day in 4" :key="day" class="date col-1" style="font-size:  4vw;  color: #d6bbb4;">{{
          27 + day
        }}</span>
      <span  class="date col-1"></span>
      <span  class="date col-1"></span>
      <span  class="date col-1"></span>
    </div>
  </q-card>
</template>
<script setup lang="ts">
const aweekDate = ['일', '월', '화', '수', '목', '금', '토'];
const bgImg = new URL(
  '../../assets/background/page2_bg.png',
  import.meta.url
).href

</script>

<style scoped>
.wedding_date {
  background-color: #d6bbb4;
}

</style>
