<template>
  <q-btn class="footer_btn" style="" @click="onMoveWeddingInfo">
    <span>{{ btnText }}</span>
  </q-btn>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';

let btnText = ref('예식정보 보기');
const router = useRouter();
const route = useRoute();
function onMoveWeddingInfo() {
  console.log('예식정보 보기로 이동', route.path);
  let chgPath = '';

  switch (route.path) {
    case '/':
      btnText.value = '갤러리 보기';
      chgPath = '/wedding';
      break;
    case '/wedding':
      btnText.value = '예식정보 보기';
      chgPath = '/';
      break;
  }
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
