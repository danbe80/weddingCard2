<template>
  <q-card flat class="head-wrapper column justify-between">

    <div class="local-wrapper">
      <button
        @click="changeLang('kr')"
        class="local_btn"
      >
        <span :style="{
          color : lang === 'kr' ? '#F5BCA9' : '#585858'}">KR</span>
      </button>

      <span style="color: #585858">|</span>

      <button
        @click="changeLang('en')"
        class="local_btn"
      >
        <span :style="{color : lang === 'en' ? '#F5BCA9' : '#585858'}">EN</span>
      </button>

    </div>
  </q-card>
</template>

<script setup lang="ts">
import { watch, computed } from 'vue';
import { storeLang } from 'src/store/module/lang';
const lang = computed(() => storeLang.lang);

watch(lang, (newValue) => {
  storeLang.changeLang(newValue);
});

async function changeLang(value: string) {
  localStorage.setItem('lang', value);
  await storeLang.changeLang(value);
}
</script>

<style scoped>
.head-wrapper {
  position: fixed;
  top: 1dvh;
  right: 1dvh;
  z-index: 10;
  width: 100%;
  height: 50px;
  background-color: rgba(0, 0, 0, 0);
  margin: 0 auto;
  @media (min-width: 1026px) {
    width: 991px;
    margin: 0 auto;
  }
}
.local-wrapper {
  margin-left: auto;
  font-size: 2dvh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'NanumBarunGothic', sans-serif;
  font-weight: 700;
}
.local_btn {
  /* color: #72605c; */
  background-color: rgba(0, 0, 0, 0);
  border: none;
}

</style>
