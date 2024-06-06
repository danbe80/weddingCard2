<template>
  <q-card flat class="head-wrapper column justify-between">
    <q-btn
      flat
      :label="lang?.toUpperCase()"
      class="local_btn"
    >
      <q-menu
        style="width: 80px;" :offset="[ 0, 8 ]">
        <q-list style="min-width: 80px;">
          <q-item
            v-for="lang in ['kr', 'en']"
            :key="lang"
            clickable
            v-close-popup
            class="lang_list" @click="changeLang(lang)">
            <q-item-section style="height: 100%">{{ lang.toUpperCase() }}</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>



  </q-card>
</template>

<script setup lang="ts">
import { watch, computed } from 'vue';
import { storeLang } from 'src/store/module/lang';

const lang = computed(() => storeLang.lang);


watch(lang,(newValue) => {
  storeLang.changeLang(newValue);
})

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
.local_btn {
  color: #72605c;
  width: 80px;
  height: 4dvh;
  min-height: 3dvh;
  background-color: #cfc6bc;
  margin-left: auto;
}

.lang_list {

}
.lang_list:after {
  background-color: red;
}
</style>
