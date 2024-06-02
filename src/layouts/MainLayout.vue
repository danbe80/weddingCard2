<template>
  <q-layout>
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

</script>

<style scoped>
.main-wrapper {
  min-height: 100svh;
  height: 100svh;
  padding: 0;
}

</style>
