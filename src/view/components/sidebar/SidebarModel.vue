<script lang="ts">
import { collapsed, toggleSidebar, sidebarWidth } from "./state";
import { defineComponent } from "vue";

export default defineComponent({
  name: "SidebarModel",
  data() {
    return { collapsed, toggleSidebar, sidebarWidth };
  },
});
</script>

<template>
  <div class="sidebar justify-start" :style="{ width: sidebarWidth }">
    <div class = "logo items-center">
      <h1> Hello</h1>
    </div>
    <div class = "menu-items">

      <RouterLink to="/home" class="side-btn flex items-center" active-class="active">
        <i class = "ml-0.5">
          <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#173660"><path d="M233.85-193.85h156.92v-238.46h178.46v238.46h156.92v-369.23L480-749.49 233.85-563.25v369.4ZM200-160v-420l280-211.54L760-580v420H535.38v-238.46H424.62V-160H200Zm280-311.74Z"/></svg>
        </i>
        <span class = "ml-3.5 mt-0.5"> Home </span>
      </RouterLink>

      <RouterLink to="/report" class="side-btn flex items-center" active-class="active">
        <i class = "ml-0.5">
          <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#173660"><path d="M318.52-300.41q11.81 0 19.72-7.96 7.91-7.97 7.91-19.79 0-11.81-7.96-19.72-7.96-7.91-19.78-7.91t-19.73 7.96q-7.91 7.96-7.91 19.78t7.96 19.73q7.97 7.91 19.79 7.91Zm0-151.9q11.81 0 19.72-7.96 7.91-7.97 7.91-19.78 0-11.82-7.96-19.73t-19.78-7.91q-11.82 0-19.73 7.96-7.91 7.97-7.91 19.78 0 11.82 7.96 19.73 7.97 7.91 19.79 7.91Zm0-151.9q11.81 0 19.72-7.96 7.91-7.96 7.91-19.78t-7.96-19.73q-7.96-7.91-19.78-7.91t-19.73 7.96q-7.91 7.97-7.91 19.79 0 11.81 7.96 19.72 7.97 7.91 19.79 7.91Zm126.92 293.03h216.51v-33.85H445.44v33.85Zm0-151.9h216.51v-33.84H445.44v33.84Zm0-151.89h216.51v-33.85H445.44v33.85ZM218.46-160q-24.58 0-41.52-16.94Q160-193.88 160-218.46v-523.08q0-24.58 16.94-41.52Q193.88-800 218.46-800h523.08q24.58 0 41.52 16.94Q800-766.12 800-741.54v523.08q0 24.58-16.94 41.52Q766.12-160 741.54-160H218.46Zm0-33.85h523.08q9.23 0 16.92-7.69 7.69-7.69 7.69-16.92v-523.08q0-9.23-7.69-16.92-7.69-7.69-16.92-7.69H218.46q-9.23 0-16.92 7.69-7.69 7.69-7.69 16.92v523.08q0 9.23 7.69 16.92 7.69 7.69 16.92 7.69Zm-24.61-572.3V-193.85-766.15Z"/></svg>
        </i>
        <span class = "ml-3.5 mt-0.5"> Report </span>
      </RouterLink>

      <RouterLink to="/device" class="side-btn flex items-center" active-class="active">
        <i class = "ml-0.5">
          <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#173660"><path d="M120-200v-50.77h80v-450.77q0-23.72 17.37-41.09Q234.74-760 258.46-760H800v33.85H258.46q-10.77 0-17.69 6.92-6.92 6.92-6.92 17.69v450.77h219.23V-200H120Zm466.92 0q-12.42 0-20.82-8.4-8.41-8.41-8.41-20.83v-378.46q0-12.43 8.41-20.83 8.4-8.4 20.82-8.4h224.62q12.42 0 20.83 8.4 8.4 8.4 8.4 20.83v378.46q0 12.42-8.4 20.83-8.41 8.4-20.83 8.4H586.92Zm4.62-50.77h215.38v-352.31H591.54v352.31Zm0 0h215.38-215.38Z"/></svg>
        </i>
        <span class = "ml-3.5 mt-0.5"> Device </span>
      </RouterLink>

      <RouterLink to="/profile" tag="button" class="side-btn flex items-center" active-class="active" >
        <i class = "ml-0.5">
          <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#173660"><path d="M480-504.77q-49.5 0-83.21-33.71-33.71-33.71-33.71-83.47t33.71-83.21q33.71-33.46 83.21-33.46 49.5 0 83.21 33.46 33.71 33.45 33.71 83.21 0 49.76-33.71 83.47T480-504.77ZM200-215.38v-60.52q0-25.89 14.91-46.98 14.91-21.09 39.45-32.86 58.41-26.49 114.44-39.99 56.04-13.5 111.18-13.5 55.15 0 111.12 13.58 55.98 13.57 114.11 40.14 25.09 11.64 39.94 32.68Q760-301.79 760-275.9v60.52H200Zm33.85-33.85h492.3v-26.67q0-14.59-9.7-27.89-9.71-13.31-26.65-22.21-52.47-25.56-104.35-37.47-51.89-11.91-105.45-11.91t-105.86 11.91Q321.85-351.56 270.05-326q-16.95 8.9-26.58 22.21-9.62 13.3-9.62 27.89v26.67ZM480-538.62q34.95 0 59.01-24.06 24.07-24.06 24.07-59.01t-24.07-59.02q-24.06-24.06-59.01-24.06t-59.01 24.06q-24.07 24.07-24.07 59.02t24.07 59.01q24.06 24.06 59.01 24.06Zm0-83.07Zm0 372.46Z"/></svg>
        </i>
        <span class = "ml-3.5 mt-0.5"> Profile </span>
      </RouterLink>
    </div>
  </div>
</template>

<style>

</style>

<style scoped>
.sidebar {
  color: var(--headline-color);
  background: var(--sidebar-bg-color);
  font-family: "Mulish", sans-serif;

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;
  transition: 0.3s ease;

}
</style>

<style scoped>
.logo {
  justify-content: center;
  text-align: center;
}

.menu-items{
  display: flex;
  flex-direction: column;
  font-size: 1.2em;
}

.menu-items > * {
  margin-bottom: 2em;
}

.side-btn {
  display: flex;
  align-items: center;

  cursor: pointer;
  position: relative;
  font-weight: 580;

  margin: 0.1em 0;
  padding: 0.4em;
  border-radius: 0.25em;
  height: 3em;

  color: var(--headline-color);
  text-decoration: none;
}

.side-btn:focus {
  outline: none;
}

.side-btn:hover {
  background: var(--sidebar-item-hover);
  opacity: 90%;

}

.side-btn.active{
  color: var(--paragraph-color-1);
  background: var(--sidebar-item-active);

}
</style>
