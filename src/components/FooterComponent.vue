<template>
  <q-btn class="footer_btn" :style="{backgroundColor : btnColor}" @click="onMoveWeddingInfo">
    <span>{{ lang == 'kr' ? btnText[selBtn].kr : btnText[selBtn].en }}</span>
  </q-btn>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { computed, onMounted, ref } from 'vue';
import { storeFooter } from 'src/store/module/footer';
import { storeLang } from 'src/store/module/lang';

const btnText =[{
  kr : '예식정보 보기',
  en : 'Wedding Detail',
  },
  {
    kr : '갤러리 보기',
    en : 'Wedding Gallery',
  }
];
const selBtn = ref(0);
const router = useRouter();
const route = useRoute();
const btnColor = ref('#c1957a');

const lang = computed(() => storeLang.lang);
const currentPath = computed(() => storeFooter.curtPath);

onMounted(() => {
  if(currentPath.value === '/wedding') {
    btnColor.value = '#925959';
    selBtn.value = 1;
  } else {
    btnColor.value = '#c1957a';
    selBtn.value = 0;
  }
})

function onMoveWeddingInfo() {
  let chgPath = '';

  switch (route.path) {
    case '/':
      chgPath = '/wedding';
      btnColor.value = '#925959';
      selBtn.value = 1;
      break;
    case '/wedding':
      chgPath = '/';
      btnColor.value = '#c1957a';
      selBtn.value = 0;
      break;
  }
  localStorage.setItem('path', chgPath);
  storeFooter.changePath(chgPath);
  router.push({ path: chgPath });
}
</script>

<style scoped>
.footer_btn {
  position: fixed;
  z-index: 10;
  background-color: #c1957a;
  width: 100%;
  height: 5dvh;
  border-radius: 30px 30px 0 0;
  font-size: 24px;
  letter-spacing: -2px;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: 0;
  color: #ffffff;
  @media (min-width: 1026px) {
    width: 991px;
  }
}
</style>
