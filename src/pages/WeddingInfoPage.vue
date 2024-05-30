<template>


  <q-page class="row justify-evenly text-center" style="height: 100vh; color: #72605c;">

    <!-- 백그라운드 -->
    <img src="../assets/background/page2_bg.png" style="position: absolute; width: 100%; height: 100vh; z-index: 0"/>
    <!--  백그라운드  -->

    <div class="col-12 bg_img_wrapper" style="position: relative; z-index: 1; height: 38vh">
      <img
        src="../assets/page4/page4_bg.jpg"
        style="width: 100%; height: 100%"
      />
    </div>

    <div class="col-12 justify-center img_list_wrapper" style="height: 62vh; position: relative; z-index: 1; top: -15%">
      <div style="width: 100%; background-color: #ffffff;">
        <div style="border-bottom: 4px solid #d6bbb4; border-top: 4px solid #d6bbb4; box-sizing: border-box;">
          <q-tabs
            v-model="panel"
            active-class="clickActive"
            animated
            swipeable
            indicator-color="transparent"
            outline style="width: 100%; " class="row">
            <q-tab name="First" class="col-4" :ripple="false">
              <div class="tab_title items-center">
                <span style="position: relative; z-index: 10">웨딩일정</span>
              </div>

            </q-tab>
            <q-tab name="Second" class="col-4" :ripple="false">
              <span class="tab_title items-center">오시는 길</span>
            </q-tab>
            <q-tab name="Third" class="col-4" :ripple="false">
              <span class="tab_title items-center">모시는 글</span>
            </q-tab>
          </q-tabs>

        </div>
      </div>

      <div class="q-pa-sm q-mt-md" style="background-color: rgba(0,0,0,0); height: 50vh; ">
          <q-tab-panels
            v-model="panel"
            animated
            swipeable
            class="rounded-borders"
            style="height: 100%; color: #72605c; border: 4px solid #d6bbb4"
          >
            <q-tab-panel name="First" class="q-pa-none">
                <CalendarComponent />
            </q-tab-panel>

            <q-tab-panel name="Second" class="q-pa-none">
              <ComeHowComponent />
            </q-tab-panel>

            <q-tab-panel name="Third" class="q-pa-none">
              <ComeHowComponent />
            </q-tab-panel>
          </q-tab-panels>
        </div>

      <div class="text-center flex justify-center items-center" style="height: 8vh; font-size: 5vw; font-weight: bold">
        <span>2024년 7월 13일 토요일 오후 12시</span>
      </div>

    </div>


  </q-page>
</template>
<script setup lang="ts">

import { ref } from 'vue';
import CalendarComponent from 'components/weddingInfo/CalendarComponent.vue';
import ComeHowComponent from 'components/weddingInfo/ComeHowComponent.vue';

const panel = ref('First')


</script>
<style scoped>
.tab_title {
  background-color: rgba(214,187,180, 0);
}
.clickActive span.tab_title {
  color: #000000;
  background-color: rgba(214,187,180, 1);
  transition: background-color .3s ease-in;;
  border-radius: 15px;
  width: 100%;
  padding: 5px 32px;
}
</style>
