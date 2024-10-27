// src/components/LineChart.vue
<template>
  <div class="background ml-5 mt-4 mr-1">
    <canvas ref="lineGraphCanvas" ></canvas>
    <div class = "mt-2.5 mr-2 mb-0.5 text-right">
      <router-link to="/report">
        <el-button type="primary" :icon="WarningFilled" round>Xem chi tiết</el-button>
      </router-link>

    </div>

  </div>
</template>

<script setup lang="js">
import { WarningFilled } from '@element-plus/icons-vue'

import Chart from 'chart.js/auto'
import {defineComponent, onMounted, watch, ref, reactive, defineProps} from 'vue';

const props = defineProps({
  labels: {
    type: Array,
    required: true
  },
  temperatureData: {
    type: Array,
    required: true
  },
  humidityData: {
    type: Array,
    required: true
  },
  lightData: {
    type: Array,
    required: true
  },
});

const lineGraphCanvas = ref(null)

// Tạo chartData với reactive để chứa dữ liệu biểu đồ
const chartData = reactive({
  labels: props.labels,
  datasets: [
    {
      label: 'Nhiệt độ',
      data: props.temperatureData,
      borderColor: 'rgb(255, 99, 132)',
      yAxisID: 'y1',
      xAxisID: 'x',
    },
    {
      label: 'Độ ẩm',
      data: props.humidityData,
      borderColor: 'rgb(54, 162, 235)',
      yAxisID: 'y1',
      xAxisID: 'x',
    },
    {
      label: 'Ánh sáng',
      data: props.lightData,
      borderColor: 'rgb(255, 206, 86)',
      yAxisID: 'y2',
      xAxisID: 'x',
    }
  ]
})

// Tạo biểu đồ khi component đã mount
onMounted(() => {
  if (lineGraphCanvas.value) {
    new Chart(lineGraphCanvas.value, {
      type: 'line',
      data: chartData,
      options: {
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        stacked: false,
        plugins: {
          title: {
            display: true,
            text: 'Dữ liệu cảm biến',
            font: {
              fontFamily: "Mulish",
              size: 20,
            },
            color: '#001858',
          }
        },
        scales: {
          x: {
            type: 'category', // Đổi thành category nếu chỉ cần hiển thị giờ
            labels: props.labels,
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'left',
          },
          y2: {
            type: 'linear',
            display: true,
            position: 'right',

            grid: {
              drawOnChartArea: false,
            },
          },
        }
      },
    })
  }
})

</script>

<style scoped>

.background {
  background-color: var(--neutral-color-5);

  border-radius: 20px;
  padding: 10px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  box-shadow: 4px 4px 6px 0px rgba(66, 66, 66, 0.34);
  transition: 0.3s;
}

</style>
