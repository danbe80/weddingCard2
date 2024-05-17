<template>
  <q-page class="row items-center justify-evenly" style="min-height: 100%">
    <q-page-container>

      <q-intersection
        v-for="index in 4"
        :key="index"
        once
        transition="slide-down"
        class="example-item"
      >
        <q-card  flat style="width: 100vw; height: 100vh">
          <img src="../assets/page1_panel.png" alt="ddd" style="position: relative; top: 0; right: 0; z-index: 2"/>
          <img src="../assets/Page1_Photo5.png"  style="position: absolute; top: 0; right: 0; z-index: 1" />
          <!--        <img src="../assets/Page1_Photo1.png"  style="position: absolute; top: 0; right: 0; width: 100%; height: 100%; z-index: 1" />-->
        </q-card>
      </q-intersection>


    </q-page-container>
  </q-page>
</template>

<script lang="ts" setup>

</script>
