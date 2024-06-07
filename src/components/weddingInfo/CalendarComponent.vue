<template>
  <q-card
    flat
    class="row q-pa-lg"
    style="height: 100%; font-weight: bold; text-align: center"
  >
    <div class="justify-center items-center flex col-12">
      <span style="font-size: 5vw; font-weight: bold">{{ lang != 'kr' ? calendarText.en : calendarText.kr }}</span>
    </div>

    <div
      class="col-12 week_date_wrapper justify-between items-center row q-mt-sm"
    >
      <span
        v-for="(day, idx) in aweekDate"
        :key="day.en"
        class="date col-1"
        style="font-size: 4vw; font-weight: bold"
        >{{ lang != 'kr' ? aweekDate[idx].en : aweekDate[idx].kr }}</span
      >
    </div>

    <div
      class="col-12 week_date_wrapper justify-between items-center row q-mt-sm"
    >
      <span class="date col-1"></span>
      <span
        v-for="day in 6"
        :key="day"
        class="date col-1"
        style="font-size: 4vw; color: #d6bbb4"
        >{{ day }}</span
      >
    </div>
    <div
      class="col-12 week_date_wrapper justify-between items-center row q-mt-sm"
    >
      <span
        v-for="day in 6"
        :key="day"
        class="date col-1"
        style="font-size: 4vw; color: #d6bbb4"
        >{{ 6 + day }}</span
      >
      <span class="wedding_date col-1" style="font-size: 4vw; color: #72605c"
        >13</span
      >
    </div>
    <div
      class="col-12 week_date_wrapper justify-between items-center row q-mt-sm"
    >
      <span
        v-for="day in 7"
        :key="day"
        class="date col-1"
        style="font-size: 4vw; color: #d6bbb4"
        >{{ 13 + day }}</span
      >
    </div>
    <div
      class="col-12 week_date_wrapper justify-between items-center row q-mt-sm"
    >
      <span
        v-for="day in 7"
        :key="day"
        class="date col-1"
        style="font-size: 4vw; color: #d6bbb4"
        >{{ 20 + day }}</span
      >
    </div>
    <div
      class="col-12 week_date_wrapper justify-between items-center row q-mt-sm"
    >
      <span
        v-for="day in 4"
        :key="day"
        class="date col-1"
        style="font-size: 4vw; color: #d6bbb4"
        >{{ 27 + day }}</span
      >
      <span class="date col-1"></span>
      <span class="date col-1"></span>
      <span class="date col-1"></span>
    </div>
  </q-card>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { storeLang } from 'src/store/module/lang';

const lang = computed(() => storeLang.lang);
const aweekDate = [
  {
    kr: '일',
    en: 'Sun'
  },
  {
    kr :'월',
    en: 'Mon'
  },
  {
    kr :'화',
    en: 'Tue'
  },
  {
    kr :'수',
    en: 'Wed'
  },
  {
    kr :'목',
    en: 'Thu'
  },
  {
    kr :'금',
    en: 'Fri'
  },
  {
    kr :'토',
    en: 'Sat'
  },
];
const calendarText =
  {
    kr: '7월',
    en: 'July',
  };
</script>

<style scoped>
.wedding_date {
  background-color: #d6bbb4;
}
</style>
