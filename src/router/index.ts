import { createRouter, createWebHashHistory } from "vue-router";
import AppLayout from "../layouts/AppLayout.vue";

import HomeView from "../page/home/HomeView.vue";
import ProfileView from "../page/profile/ProfileView.vue";
import DeviceView from "../page/device/DeviceView.vue";
import ReportView from "../page/report/ReportView.vue";

const routes = [{
  path: "",
  name: "AppLayout",
  // redirect: { name: "HomeView" },
  component: AppLayout,
  children: [
    {
      path: "profile",
      name: "ProfileView",
      component: ProfileView,
    },
    {
      path: "home",
      name: "HomeView",
      component: HomeView,
    },
    {
      path: "device",
      name: "DeviceView",
      component: DeviceView,
    },
    {
      path: "report",
      name: "ReportView",
      component: ReportView,
    },
  ],
},];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
