<template>
  <q-page class="wedding_info_wrapper">
    <!--  백그라운드  -->

    <div class="bg_img_wrapper">
      <q-img src="../assets/page4/page4_bg.jpg" />
    </div>

    <div class="img_list_wrapper">
      <!--      <div class="tab_wrapper">-->
      <div class="tab_wrapper">
        <q-tabs
          v-model="panel"
          active-class="clickActive"
          animated
          swipeable
          infinite
          indicator-color="transparent"
          outline
          class="tab_wrap"
        >
          <q-tab name="First" class="tab_items" :ripple="false">
            <span class="tab_title">모시는 글</span>
          </q-tab>
          <q-tab name="Second" class="tab_items" :ripple="false">
            <span class="tab_title">오시는 길</span>
          </q-tab>
          <q-tab name="Third" class="tab_items" :ripple="false">
            <span class="tab_title">웨딩일정</span>
          </q-tab>
        </q-tabs>
      </div>
      <!--      </div>-->

      <div class="slide_wrap">
        <q-tab-panels
          v-model="panel"
          animated
          swipeable
          infinite
          class="rounded-borders slide_container"
        >
          <q-tab-panel name="First" class="q-pa-none" style="height: 100%">
            <NoticeComponent />
          </q-tab-panel>

          <q-tab-panel name="Second" class="q-pa-none" style="height: 100%">
            <ComeHowComponent />
          </q-tab-panel>

          <q-tab-panel name="Third" class="q-pa-none" style="height: 100%">
            <CalendarComponent />
          </q-tab-panel>
        </q-tab-panels>
      </div>

      <div class="data_info_wrap" style="">
        <span>2024년 7월 13일 토요일 오후 12시</span>
      </div>
    </div>
  </q-page>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import CalendarComponent from 'components/weddingInfo/CalendarComponent.vue';
import ComeHowComponent from 'components/weddingInfo/ComeHowComponent.vue';
import NoticeComponent from 'components/weddingInfo/NoticeComponent.vue';

const panel = ref('First');
</script>
<style scoped>
.wedding_info_wrapper {
  height: 100dvh;
  color: #72605c;
}
.bg_img_wrapper {
  width: 100%;
  height: 35dvh;

  /* 태블릿 크기 */
  @media (min-width: 991px) {
    height: 35dvh;
  }

  /* 아이폰 크기 */
  @media (min-width: 765px) and (max-width: 991px) {
    height: 40dvh;
  }

  /* 아이폰 크기 */
  @media (min-width: 390px) and (max-width: 991px) {
    height: 40dvh;
  }
}

.img_list_wrapper {
  height: 75dvh;
  position: relative;
  z-index: 1;
  top: -16dvh;
  /* 아이폰 크기 */
  @media (min-width: 390px) and (max-width: 710px) {
    top: -18dvh;
  }
  @media (min-width: 270px) and (max-width: 389px) {
    top: -14dvh;
  }
}
.tab_wrapper {
  width: 100%;
  background-color: #ffffff;
  border-bottom: 4px solid #d6bbb4;
  border-top: 4px solid #d6bbb4;
  box-sizing: border-box;
}
.tab_wrap {
}
.tab_items {
  width: 33.333%;
}
.tab_title {
  background-color: rgba(214, 187, 180, 0);
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5dvh;
}
.clickActive span.tab_title {
  color: #000000;
  background-color: rgba(214, 187, 180, 1);
  transition: background-color 0.3s ease-in;
  border-radius: 2.5dvh;
  width: 100%;
  padding: 1dvh 2.5dvh;
}
.slide_wrap {
  background-color: rgba(0, 0, 0, 0);
  height: 58dvh;
  padding: 1dvh;
  /* 아이폰 크기 */
  @media (min-width: 390px) and (max-width: 710px) {
    height: 55dvh;
  }
  @media (min-width: 270px) and (max-width: 389px) {
    height: 56dvh;
  }
}
.slide_container {
  height: 100%;
  color: #72605c;
  border: 4px solid #d6bbb4;
}
.data_info_wrap {
  height: 5dvh;
  font-size: 3dvh;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
