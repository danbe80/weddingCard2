<template>
  <q-page-container class="sec_wrapper row justify-center items-center">
    <q-card flat class="row items-center justify-center sec-wrap">
      <div style="text-align: right" class="col-5">
        <p class="q-mr-sm">
          코딩을 하는 <br />
          컴퓨터공학 전공인, 그 <br />
          <span style="font-size: 24px; font-weight: bold">재환</span>
        </p>
      </div>
      <div class="col-7" style="height: 100%;">
        <img
          src="../assets/Photo_Groom.jpg"
          style="border-radius: 30px 15px 15px 0; width: 100%; height: 100%"
        />
      </div>
    </q-card>

    <q-card flat class="row items-center justify-center sec-wrap q-mt-md">
      <div class="col-7" style="height: 100%;">
        <img
          src="../assets/Photo_Bride.jpg"
          style="border-radius: 15px 0 15px 30px; width: 100%; height: 100%"
        />
      </div>
      <div style="text-align: left" class="col-5">
        <p class="q-ml-sm">
          게임그래픽을 하는<br />
          동양화 전공 인, 그녀 <br />
          <span style="font-size: 24px; font-weight: bold">지은</span>
        </p>
      </div>
    </q-card>
  </q-page-container>

</template>
<script setup lang="ts"></script>

<style scoped>
.sec_wrapper {
  padding: 10px;
  min-height: 85svh;
  height: 85svh;

}

.sec-wrap {
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  height: 50%;

}
</style>
