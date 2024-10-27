<script lang="ts">
import { defineComponent } from "vue";
import { sidebarWidth } from "@/view/components/sidebar/state";
import AppLayout from "@/view/layouts/AppLayout.vue";
import SidebarModel from "@/view/components/sidebar/SidebarModel.vue";


export default defineComponent({
  name: "App",
  components: {
    SidebarModel,
    AppLayout
  },
  data() {
    return { sidebarWidth };
  },
});
</script>

<template>
  <SidebarModel />
  <RouterView />
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins");
@import url("https://fonts.googleapis.com/css?family=Mulish");

:root {
  --primary-color: #fef6e4;
  --secondary-color: #8bd3dd;

  --headline-color: #001858;
  --paragraph-color-1: #0a054d;
  --paragraph-color-2: #172c66;

  --neutral-color-1: #f582ae;
  --neutral-color-2: #f3d2c1;
  --neutral-color-3: #ffc8e6;
  --neutral-color-4: #ffdfec;
  --neutral-color-5: #fffffe;
  --neutral-color-6: #dc2c46;
  --neutral-color-7: #f3e8e3;


  --sidebar-bg-color: var(--neutral-color-2);
  --sidebar-item-hover: var(--neutral-color-7);
  --sidebar-item-active: var(--primary-color);
}
</style>

<style>
#app {
  display: flex;
}

body{
  background-color: var(--primary-color);
  font-family: "Mulish", sans-serif;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
