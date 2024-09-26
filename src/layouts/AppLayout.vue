<script setup lang="ts">
import SidebarModel from "../components/sidebar/SidebarModel.vue";
import {sidebarWidth} from "../components/sidebar/state.ts";

</script>

<template>
  <SidebarModel />
  <div class="dashboard">
    <div class="content">
      <RouterView class=""/>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  display: grid;
  height: 100vh;
  background-color: var(--sidebar-bg-color);
  width:99.7vw;
}

.content{
  background-color: var(--primary-color);
  border-radius: 20px;
  margin: 6px 6px 6px 180px;
}
</style>