<script setup lang="ts">


import {ref} from "vue";

const lightActive = ref(false)
const fanActive = ref(false)
const airConditionActive = ref(false)


</script>

<template>
  <div class = "grid grid-rows-3 gap-8 h-[100%] pl-2">
    <div class="card grid grid-cols-4 grid-rows-3 text-[var(--headline-color)]">
      <div class = "row-start-1 col-start-1 justify-self-center">
        <svg :class="{ rotate: fanActive }" xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#0a054d"><path d="M420.61-47.22q-57.83 0-87.98-34.45-30.15-34.46-30.15-80.41 0-28.94 12.78-56.16 12.78-27.21 40.44-45.41 20.86-13.44 35.08-35.81 14.22-22.37 21.78-61.67.7.57 2.11.91 1.42.35 1.14.48l-118.85 41.57q-18.68 7.13-36.67 11.41-17.99 4.28-36.12 4.28-70.35 0-123.65-60.34-53.3-60.33-53.3-176.57 0-57.26 34.17-87.7 34.17-30.43 78.39-30.43 29.39 0 57.5 12.63t46.37 40.59q13.44 20.86 37.52 36.36 24.09 15.5 59.96 20.5.43.7.09 1.11-.35.42-1.48 1.14l-41.57-117.85q-7.13-18.1-11.41-35.81-4.28-17.7-4.28-35.4 0-70.8 60.17-124.95 60.17-54.15 176.74-54.15 57.26 0 87.7 34.74 30.43 34.74 30.43 77.83 0 29.39-12.91 57.78t-40.31 46.09q-24.86 17-39.08 43.58-14.22 26.59-16.78 55.46-.7.43-1.61-.91-.92-1.35-1.64-.48l117.85-44.13q18.13-6.57 35.57-10.35 17.43-3.78 35.45-3.78 90.25 0 134.77 73.37 44.52 73.38 44.52 163.54 0 57.55-36.52 87.84-36.52 30.29-80.59 30.29-28.41 0-55.02-13.19-26.61-13.2-44.31-40.03-14-20.86-36.37-35.36-22.37-14.5-61.67-22.5-.43-.27-.09-.4.35-.13.48-.85l43.13 117.85q6.57 17.13 10.85 33.9 4.28 16.76 4.28 33.89.44 71.81-59.63 126.88-60.08 55.07-177.28 55.07Zm59.46-376.17q23.8 0 40.17-16.72t16.37-39.96q0-23.8-16.44-40.17-16.43-16.37-40.24-16.37-23.23 0-39.89 16.44-16.65 16.43-16.65 40.24 0 23.23 16.72 39.89 16.72 16.65 39.96 16.65Z"/></svg>
      </div>

      <div class = "row-start-2 col-start-2 col-span-2">
        <div class="text-5xl text-center"> Fan </div>
      </div>

      <div class = "row-start-3 col-start-2 col-span-2">
        <el-switch v-model="fanActive" style="--el-switch-on-color: #5087ff;" size="large" inline-prompt active-text="ON" inactive-text="OFF" border-color="#13ce66" />
      </div>
    </div>

    <div class="card grid grid-cols-4 grid-rows-3 text-[var(--headline-color)]">
      <div class = "row-start-1 col-start-1 justify-self-center">
        <img :src="lightActive ? '/light-on.png' : '/light-off.png'"  height="56" width="56" alt = "light"/>
      </div>
      <div class = "row-start-2 col-start-2 col-span-2">
        <div class="text-5xl text-center"> Light </div>
      </div>

      <div class = "row-start-3 col-start-2 col-span-2">
        <el-switch v-model="lightActive" style="--el-switch-on-color: #5087ff;" size="large" inline-prompt active-text="ON" inactive-text="OFF" border-color="#13ce66" />
      </div>
    </div>

    <div class="card grid grid-cols-4 grid-rows-3 text-[var(--headline-color)]">
      <div class = "row-start-1 col-start-1 justify-self-center">
        <img :src="airConditionActive ? '/air-on.png' : '/air-off.png'"  height="60" width="60" alt = "air-condition"/>
      </div>

      <div class = "row-start-2  col-span-4">
        <div class="text-5xl text-center"> Air-condition </div>
      </div>

      <div class = "row-start-3 col-start-2 col-span-2">
        <el-switch v-model="airConditionActive" style="--el-switch-on-color: #5087ff;" size="large" inline-prompt active-text="ON" inactive-text="OFF" border-color="#13ce66" />
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

.rotate {
  animation: rotation 2s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>