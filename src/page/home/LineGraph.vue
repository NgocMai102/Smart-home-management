// src/components/LineChart.vue
<template>
  <div class="ml-2 max-w-4xl w-full h-[430px] mt-6 bg-white rounded-2xl shadow md:p-6">
    <canvas ref="lineGraphCanvas" ></canvas>
  </div>
</template>

<script setup lang="js">

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

</style>
