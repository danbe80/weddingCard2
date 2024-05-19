<template>
  <q-layout view="lHh Lpr lFf" style="color: #ffffff; background-color: #000000;">

    <!--  공통  -->
  <CommonComponent />


    <!--  메인  -->
    <q-page-container style="padding: 0">
      <router-view />
    </q-page-container>
  </q-layout>


    <!-- 푸터  -->
  <FooterComponent />
</template>

<script lang="ts" setup>
import CommonComponent from 'components/CommonComponent.vue';
import FooterComponent from 'components/FooterComponent.vue';
</script>
