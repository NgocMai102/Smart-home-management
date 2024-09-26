// src/components/LineChart.vue
<template>

  <div class="ml-2 max-w-4xl w-full h-[430px] mt-6 bg-white rounded-2xl shadow md:p-6">
    <div id="line-chart">
      <Line :key="dataChange" :data="chartData" :options="chartOptions" class="w-[800px] h-[300px]" />
    </div>
    <div class="grid grid-cols-1 items-center border-gray-200 border-t justify-between mt-1">
      <div class="pt-5">
        <RouterLink to="/report" class="px-5 py-2.5 text-sm font-medium text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center">
          <svg class="w-3.5 h-3.5 text-white me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2Zm-3 15H4.828a1 1 0 0 1 0-2h6.238a1 1 0 0 1 0 2Zm0-4H4.828a1 1 0 0 1 0-2h6.238a1 1 0 1 1 0 2Z"/>
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
          </svg>
          View full report
        </RouterLink>
      </div>
    </div>
  </div>

</template>

<script setup lang="js">

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'
import {reactive, ref} from "vue";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const dataChange = ref(0);
const chartData = reactive({
  labels: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00",
    "06:00", "07:00", "08:00", "09:00", "10:00", "11:00",
    "12:00", "13:00", "14:00", "15:00", "16:00", "17:00",
    "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
  datasets: [
    {
      label: 'Temperature',
      data: [12, 19, 3, 5, 2, 3, 7, 1, 2, 3, 4, 5, 6, 7, 8],
      borderColor: '#FF3B3B',
      backgroundColor: '#FF3B3B',
      borderWidth: 2,
      pointBackgroundColor: '#FF3B3B',
      pointBorderColor: '#FF3B3B',
      pointHoverBackgroundColor: '#FF3B3B',
      pointHoverBorderColor: '#FF3B3B',
      pointRadius: 0,
      pointHoverRadius: 6
    },
    {
      label: 'Humility',
      data: [51, 52, 50, 58, 57, 65, 66],
      borderColor: '#3BA1FF',
      backgroundColor: '#3BA1FF',
      borderWidth: 3,
      pointBackgroundColor: '#3BA1FF',
      pointBorderColor: '#3BA1FF',
      pointHoverBackgroundColor: '#3BA1FF',
      pointHoverBorderColor: '#3BA1FF',
      pointRadius: 0,
      pointHoverRadius: 3
    },
    {
      label: 'Light',
      data: [5, 35, 10, 15, 20, 30, 40],
      borderColor: '#bfc703',
      backgroundColor: '#bfc703',
      borderWidth: 3,
      pointBackgroundColor: '#bfc703',
      pointBorderColor: '#bfc703',
      pointHoverBackgroundColor: '#bfc703',
      pointHoverBorderColor: '#bfc703',
      pointRadius: 0,
      pointHoverRadius: 3
    },
  ]});

const chartOptions = {
  scales: {
    x: {
      display: true,
      grid: {
        display: false // Disable X-axis grid lines ("net")
      },
      ticks: {
        display: true,
        font: {
          size: 12

        }
      }
    },
    y: {
      display: true,
      grid: {
        display: false // Disable Y-axis grid lines ("net")
      },
      ticks: {
        display: true,
        font: {
          size: 12

        }
      },
      beginAtZero: true
    }
  },
  elements: {
    line: {
      borderWidth: 2
    }
  },
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: 'nearest'
  },
  tension: 0.3,
  plugins: {
    legend: {
      display: true,
      font: {
        size: 12
      }
    },
    tooltip: {
      enabled: true,
      mode: 'nearest',
      intersect: false
    }
  }
}
</script>

<style scoped>

</style>
