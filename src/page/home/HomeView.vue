<script setup lang="ts">
import { defineComponent } from "vue";
import LineChart from "./LineChart.vue";
import WeatherCard from "./WeatherCard.vue";
import HomeCard from "./HomeCard.vue";

</script>

<template>
  <div class = "grid grid-rows-3 grid-cols-5 h-[100%] w-[100%]">
    <div class = "col-span-3 m-4">
      <WeatherCard />
    </div>

    <div class = "row-span-3 col-span-2 m-4">
      <HomeCard />
    </div>

    <div class = "row-start-2 row-span-2 col-span-3">
      <LineChart />
    </div>
  </div>

</template>

<style scoped>


</style>