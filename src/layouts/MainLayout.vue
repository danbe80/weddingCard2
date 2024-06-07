<template>
  <q-layout class="all_wrapper">
    <!--  공통  -->
    <CommonComponent />

    <!--  메인  -->
    <q-page-container class="main-wrapper">
      <router-view />
    </q-page-container>

    <!-- 푸터  -->
    <FooterComponent />
  </q-layout>
</template>

<script lang="ts" setup>
import CommonComponent from 'components/CommonComponent.vue';
import FooterComponent from 'components/FooterComponent.vue';
import { onMounted } from 'vue';

onMounted(() => {
  localStorage.setItem('lang', 'kr');
})

</script>

<style scoped>

/* 전체 적용 css */
.all_wrapper {
  width: 100%;
  height: 100dvh;
  @media (min-width: 1026px) {
    width: 991px;
    margin: 0 auto;
  }
}
/* 메인 화면 */
.main-wrapper {
  width: 100%;
  min-height: 100dvh;
  height: 100dvh;
  padding: 0;
  @media (min-width: 1026px) {
    width: 991px;
    margin: 0 auto;
  }

}

</style>
