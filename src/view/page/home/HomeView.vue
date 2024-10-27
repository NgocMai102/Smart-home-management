<script setup lang="ts">
import { defineComponent, ref } from "vue";
import LineGraph  from "./LineGraph.vue";
import WeatherCard from "./WeatherCard.vue";
import HomeCard from "./HomeCard.vue"
import axios from 'axios'

const labels = ref<string[]>(["00:00", "01:00", "02:00", "03:00", "04:00", "05:00",
  "06:00", "07:00", "08:00", "09:00", "10:00", "11:00",
  "12:00", "13:00", "14:00", "15:00", "16:00", "17:00",
  "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"])
const temperatureData = ref<number[]>([10, 20, 30, 40, 50, 60, 70])
const humidityData = ref<number[]>([65, 70, 60, 50, 40, 30, 20])
const lightData = ref<number[]>([100, 800, 950, 1000, 300, 350, 400])

const light = ref(100);
const temperature = ref(30);
const humidity = ref(70);

async function fetchData() {
  const response = await axios.get('http://localhost:3000/data')
  const data = response.data
  light.value = data.light
  temperature.value = data.temperature
  humidity.value = data.humidity
}

</script>

<template>
  <div class = "grid grid-rows-3 grid-cols-5 h-[100%] w-[100%]">
    <div class = "col-span-3 m-4">
      <WeatherCard :light="light" :humidity="humidity" :temperature="temperature" />
    </div>

    <div class = "row-span-3 col-span-2 m-4">
      <HomeCard />
    </div>

    <div class = "row-start-2 row-span-3 col-span-3 h-[100%] w-[100%]">
      <LineGraph :light-data=lightData :humidity-data=humidityData :temperature-data=temperatureData :labels=labels />
    </div>
  </div>

</template>

<style scoped>


</style>