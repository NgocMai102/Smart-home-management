<script setup lang="ts">
import {computed, ref} from "vue";

const props = defineProps({
  light: {
    type: Number,
    required: true
  },
  temperature: {
    type: Number,
    required: true
  },
  humidity: {
    type: Number,
    required: true
  }
});

const lightColor = computed(() => {
  const normalizedLux = Math.min(Math.max(props.light, 0), 1000)
  const lightness = (normalizedLux / 1000) * 100
  return `hsl(60, 100%, ${lightness}%)`
});

const temperatureColor = computed(() => {
  const normalized = Math.max(0, Math.min(props.temperature, 40));
  const hue = ((1 - normalized / 40) * 240);
  return `hsl(${hue}, 100%, 50%)`;
});

const humidityColor = computed(() => {
  const normalizedHumidity = Math.min(Math.max(props.humidity, 0), 100);
  const lightness = 100 - (normalizedHumidity / 100) * 50;
  return `hsl(240, 100%, ${lightness}%)`;
});
</script>

<template>
  <div class = "grid grid-cols-3 gap-10 h-[100%] w-[100%]">
    <div class="card grid grid-cols-3 grid-rows-3 text-[var(--headline-color)]">
      <div class = "justify-self-center">
        <div class = "w-[56px] h-[56px] rounded-[50px] justify-items-center" :style="{'background-color': temperatureColor }">
          <svg xmlns="http://www.w3.org/2000/svg" height="56px" viewBox="0 -960 960 960" width="56px" :style="{ fill: props.temperature < 40 ? 'black' : 'white' }" fill="#fff" ><path d="M480-120q-66.85 0-113.42-46.58Q320-213.15 320-280q0-44.08 22.23-82.54 22.23-38.46 62.62-57.38v-344.93q0-32.34 21.61-53.74Q448.07-840 479.82-840t53.54 21.41q21.79 21.4 21.79 53.74v344.93q40.39 18.92 62.62 57.21Q640-324.41 640-280q0 66.85-46.58 113.42Q546.85-120 480-120Zm-44.38-382.69h88.76V-568H480v-30.54h44.38v-92.38H480v-30.04h44.38v-43.89q0-18.86-12.79-31.62-12.8-12.76-31.71-12.76-18.92 0-31.59 12.76-12.67 12.76-12.67 31.62v262.16Z"/></svg>
        </div>
      </div>

      <div class = "col-start-1 row-start-2 col-span-3 justify-end mr-1.5">
        <div class="text-6xl text-right"> {{props.temperature}}°C</div>
      </div>

      <div class = "row-start-3 col-span-3 justify-items-end">
        <div class="text-base text-right m-1.5">Nhiệt độ hiện tại trong ngôi nhà của bạn</div>
      </div>
    </div>

    <div class="card grid grid-cols-3 grid-rows-3 text-[var(--headline-color)]">
      <div class = "justify-self-center">
        <div class = "w-[56px] h-[56px] rounded-[50%]" :style="{'background-color': humidityColor }">
          <svg xmlns="http://www.w3.org/2000/svg" height="56px" viewBox="0 -960 960 960" width="56px" :style="{ fill: props.humidity < 50 ? 'black' : 'white' }" fill="#ffffff"><path d="M480-140q-116.38 0-198.19-80.33T200-415.19q0-55 22.19-105.24 22.19-50.25 59.5-89.67L480-804.62 678.31-610.1q37.31 39.42 59.5 89.7Q760-470.13 760-415.04q0 114.7-81.81 194.87T480-140ZM230.77-415h498.46q0-48.69-18.91-93.02-18.9-44.32-52.78-78.06L480-760.62 302.46-586.08q-33.88 33.71-52.78 78.04-18.91 44.33-18.91 93.04Z"/></svg>
        </div>
      </div>

      <div class = "col-start-1 row-start-2 col-span-3 justify-end mr-1.5">
        <div class="text-6xl text-right"> {{props.humidity}}% </div>
      </div>

      <div class = "row-start-3 col-span-3 justify-items-end">
        <div class="text-base text-right m-1.5">Độ ẩm hiện tại trong ngôi nhà của bạn</div>
      </div>
    </div>

    <div class="card grid grid-cols-3 grid-rows-3 text-[var(--headline-color)]">
      <div class = "justify-self-center ">
        <div class = "w-[56px] h-[56px] rounded-[50px]" :style="{'background-color': lightColor }">
          <svg xmlns="http://www.w3.org/2000/svg" height="56px" viewBox="0 -960 960 960" width="56px" :style="{ fill: props.light > 400 ? '#173660' : 'white' }" fill="#fff"><path d="M464.62-747.69v-130.77h30.76v130.77h-30.76Zm215.23 89.84-21.23-21.23L750-773.77l22.77 23-92.92 92.92Zm67.84 193.23v-30.76h130.77v30.76H747.69ZM464.62-81.54v-130h30.76v130h-30.76ZM281.46-658.85l-95-91.15L210-772l92.92 92.15-21.46 21ZM751-186.46l-92.38-94.46 21-20.23 92.61 90.92L751-186.46ZM81.54-464.62v-30.76h130.77v30.76H81.54Zm127.92 278.16L188-210l91.15-91.15 11.23 10.7 12 11.07-92.92 92.92ZM480.18-280q-83.26 0-141.72-58.28Q280-396.56 280-479.82q0-83.26 58.28-141.72Q396.56-680 479.82-680q83.26 0 141.72 58.28Q680-563.44 680-480.18q0 83.26-58.28 141.72Q563.44-280 480.18-280Zm-.3-30.77q70.5 0 119.93-49.3 49.42-49.3 49.42-119.81 0-70.5-49.3-119.93-49.3-49.42-119.81-49.42-70.5 0-119.93 49.3-49.42 49.3-49.42 119.81 0 70.5 49.3 119.93 49.3 49.42 119.81 49.42ZM480-480Z"/></svg>
        </div>
      </div>

      <div class = "col-start-1 row-start-2 col-span-3 justify-end mr-1.5">
        <div class="text-6xl text-right"> {{props.light}} lux </div>
      </div>

      <div class = "row-start-3 col-span-3 justify-items-end">
        <div class="text-base text-right m-1.5">Ánh sáng hiện tại trong ngôi nhà của bạn</div>
      </div>
    </div>
  </div>

</template>

<style scoped>

.card{
  background-color: var(--neutral-color-5);

  border-radius: 20px;
  padding: 10px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 100%;
  height: 100%;
  box-shadow: 4px 4px 6px 0px rgba(66, 66, 66, 0.34);
  transition: 0.3s;
}

</style>