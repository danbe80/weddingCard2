<template>
  <q-card flat class="notice_wrapper">
    <div>
      <p v-html="lang != 'kr' ? firstText.en : firstText.kr"> </p>
    </div>

    <div>
      <p v-html="lang != 'kr' ? manInfo.en : manInfo.kr"></p>
      <p style="color: #b2918f" v-html="lang != 'kr' ? womanInfo.en : womanInfo.kr"></p>
    </div>

    <div class="thanks_wrap" v-html="lang != 'kr' ? seconeText.en : seconeText.kr">
    </div>
  </q-card>
</template>
<script setup lang="ts">

import { computed } from 'vue';
import { storeLang } from 'src/store/module/lang';

const lang = computed(() => storeLang.lang);

  const firstText = {
    kr : [
      '바쁘신 가운데 두 사람의 앞날을 가까이에서 <br />' +
      '축복해주시면 감사하겠습니다. <br />' +
      '보답하는 마음으로 행복하게 잘 살겠습니다.'
    ],
    en : [
      'Request the honor of your presence <br />' +
      'at the marriage of our wedding'
    ]
  }

const manInfo = {
    kr : [
      '<span>유상열 • (<span style="font-family: \'NanumBarunGothic\', sans-serif">故</span>) 이숙향의 장남</span><span style="font-size: 2.5dvh; font-weight: bold; margin-left: 8px;">재환</span>'
    ],
    en : [
      '<span>Mr. Sangyul You’s Son</span><span style="font-size: 2.5dvh; font-weight: bold; margin-left: 8px;">Jaehwan You</span>'
    ]
}
const womanInfo = {
  kr : [
    '<span>박필규<span style="margin-right: 5dvh"></span>김은임의 외동</span><span style="font-size: 2.5dvh; font-weight: bold; margin-left: 8px;">지은</span>'
  ],
  en : [
    '<span>Mr. Pirgeu Park and Eunim Kim’s Daughter</span><span style="font-size: 2.5dvh; font-weight: bold; margin-left: 8px;">Jenny Park</span>'
  ]
}

const seconeText = {
  kr : [
    '<p style="margin: 0;">마음 전하실 곳</p><p style="margin: 0;">축의금은 따로 받고 있지 않습니다.<br />마음만 감사히 받겠습니다.</p>'
  ],
  en : [
    '<p style="margin: 0;">Wedding Gift</p><p style="margin: 0;">We don\'t receive any gifts.<br />Just accept your heart with thanks.</p><p style="margin: 0;">Come and Enjoy.</p>'
  ]
}

</script>
<style scoped>
p {
  margin: 0;
  line-height: 4dvh;
}
.notice_wrapper {
  width: 100%;
  height: 100%;
  font-size: 2.3dvh;
  letter-spacing: -1px;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
}
.thanks_wrap {
  background-color: #f1e3e0;
  padding: 10px 0;
  width: 95%;
  height: 35%;
  border-radius: 15px !important;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
