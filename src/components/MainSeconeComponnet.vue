<template>
  <q-page-container class="sec_wrapper">
    <q-card flat class="sec-wrap man_wrap">
      <div class="man_info_wrap info_wrap" v-html='lang == "kr" ? manText.kr : manText.en'>
      </div>
      <q-card class="img_wrap">
        <q-img
          src="../assets/page2/Photo_Groom.jpg"
          fit="fill"
          class="main_info_img"
          style="border-radius: 30px 15px 15px 0"
        />
      </q-card>
    </q-card>

    <q-card flat class="sec-wrap woman_wrap">
      <q-card flat class="img_wrap">
        <q-img
          src="../assets/page2/Photo_Bride.jpg"
          fit="fill"
          class="main_info_img"
          style="border-radius: 15px 0 15px 30px"
        />
      </q-card>
      <div class="woman_info_wrap info_wrap" v-html='lang == "kr" ? womanText.kr : womanText.en'>
      </div>
    </q-card>
  </q-page-container>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { storeLang } from 'src/store/module/lang';

const lang = computed(() => storeLang.lang);
  const manText = {
    kr : `<p style="margin: 0">코딩을 하는</p>
          <p style="margin: 0">컴퓨터공학 전공인, 그</p>
          <span style="font-size: 3.5dvh;font-weight: bold;">재환</span>`,
    en: `<p style="margin: 0">a Software Devloper,</p>
          <span style="font-size: 2.2dvh;font-weight: bold;">Jaehwan You</span>`,
  }
  const womanText = {
    kr : `<p style="margin: 0">게임그래픽을  하는</p>
          <p style="margin: 0">동양화 전공 인, 그녀</p>
          <span style="font-size: 3.5dvh;font-weight: bold;">지은</span>`,
    en: `<p style="margin: 0">Game Graphic Designer,</p>
          <span style="font-size: 2.2dvh;font-weight: bold;">Jenny Park</span>`,
  }


</script>

<style scoped>
p {
  margin: 0;
}

.sec_wrapper {
  width: 100%;
  min-height: 100dvh;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0;
  padding: 0 2dvh 2dvh;
  /* 패드 크기 */
  @media (min-width: 710px) and (max-width: 990px) {
    padding: 0 2dvh 5dvh;
  }
  /* 아이폰 크기 */
  @media (min-width: 390px) and (max-width: 710px) {
    padding: 0 2dvh 8dvh;
  }
  @media (min-width: 270px) and (max-width: 389px) {
    padding: 0 2dvh 10dvh;
  }
}

.sec-wrap {
  width: 100%;
  height: 40dvh;
  display: flex;
  justify-content: center;
  /* 아이폰 크기 */
  @media (min-width: 390px) and (max-width: 710px) {
    height: 42dvh;
  }
}

.man_wrap {
  //margin-bottom: 5dvh;
}
.woman_wrap {
  margin-top: 2dvh;
}

.img_wrap {
  width: 60%;
  height: 100%;
  /* 아이폰 크기 */
  @media (min-width: 390px) and (max-width: 710px) {
    width: 70%;
  }
}

.main_info_img {
  width: 100%;
  height: 100%;
}

.info_wrap {
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 2dvh;
  font-size: 2dvh;
  /* 아이폰 크기 */
  @media (min-width: 390px) and (max-width: 710px) {
    width: 35%;
    font-size: 1.8dvh;
  }
}

.man_info_wrap {
  text-align: right;
}

.woman_info_wrap {
  text-align: left;
}

.name_info {

}
</style>
