<script setup lang="ts">
import { defineComponent, ref } from "vue";

const temperature = ref<number>();
const humidity = ref<number>();
const light = ref<number>();

const data = ref([
  { temperature: 20, humidity: 30, light: 700, time: '2021-10-10 10:10:10' },
  { temperature: 22, humidity: 32, light: 710, time: '2021-10-10 10:20:10' },
  { temperature: 19, humidity: 29, light: 690, time: '2021-10-10 10:30:10' },
  { temperature: 21, humidity: 31, light: 705, time: '2021-10-10 10:40:10' },
  { temperature: 23, humidity: 33, light: 715, time: '2021-10-10 10:50:10' },
  { temperature: 18, humidity: 28, light: 685, time: '2021-10-10 11:00:10' },
  { temperature: 24, humidity: 34, light: 720, time: '2021-10-10 11:10:10' },
  { temperature: 17, humidity: 27, light: 680, time: '2021-10-10 11:20:10' },
  { temperature: 25, humidity: 35, light: 725, time: '2021-10-10 11:30:10' },
  { temperature: 16, humidity: 26, light: 675, time: '2021-10-10 11:40:10' },
  { temperature: 26, humidity: 36, light: 730, time: '2021-10-10 11:50:10' },
  { temperature: 15, humidity: 25, light: 670, time: '2021-10-10 12:00:10' },
  { temperature: 27, humidity: 37, light: 735, time: '2021-10-10 12:10:10' },
  { temperature: 14, humidity: 24, light: 665, time: '2021-10-10 12:20:10' },
  { temperature: 28, humidity: 38, light: 740, time: '2021-10-10 12:30:10' },
  { temperature: 13, humidity: 23, light: 660, time: '2021-10-10 12:40:10' },
  { temperature: 29, humidity: 39, light: 745, time: '2021-10-10 12:50:10' },
  { temperature: 12, humidity: 22, light: 655, time: '2021-10-10 13:00:10' },
  { temperature: 30, humidity: 40, light: 750, time: '2021-10-10 13:10:10' },
  { temperature: 11, humidity: 21, light: 650, time: '2021-10-10 13:20:10' }
]);


const currentPage = ref(1);
const pageSize = ref(5);
const tableData = ref(data.value.slice(0,pageSize.value));
const tableLayout = ref<TableInstance['tableLayout']>('fixed')
const size = ref<ComponentSize>('default')

function search() {

}

function handleSizeChange(val: number) {
  pageSize.value = val;
  tableData.value = data.value.slice((currentPage.value - 1) * pageSize.value, currentPage.value * pageSize.value);
  console.log(`${val} items per page`)
}

function handleCurrentChange(val: number, filteredData = data.value, page = currentPage.value) {
  const start = (page - 1) * pageSize.value
  const end = start + pageSize.value
  tableData.value = filteredData.slice(start, end)
  console.log(`current page: ${val}`)
}

</script>

<template>
  <div>
    <h1 class="m-6 text-4xl font-semibold text-center text-[var(--paragraph-color-1)]">Thống kê nhiệt độ - độ ẩm - ánh sáng</h1>
    <div class = "flex justify-center items-center">
      <el-table :data="tableData" stripe max-height="450" style="width: 80%"
                :table-layout="tableLayout"
                :header-cell-style="{ background: 'var(--headline-color)', color: 'var(--neutral-color-5)'}"
      >
        <el-table-column
            type="index"
            label="ID"
            :index="(index) => (currentPage - 1) * pageSize + index + 1"
        />
        <el-table-column prop="temperature" label="Nhiệt độ (°C)" align="center" />
        <el-table-column prop="humidity" label="Độ ẩm (%)" align="center" />
        <el-table-column prop="light" label="Độ sáng (lux)" align="center" />
        <el-table-column prop="time" label="Thời gian" align="center" />
      </el-table>
    </div >

    <div class = "flex justify-end m-6">
      <el-pagination
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :page-sizes="[5, 10, 15, 20]"
          :size="size"
          :disabled="false"
          :background="false"
          layout="total, sizes, prev, pager, next, jumper"
          :total="data.length"

          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      />
    </div>
  </div>

</template>

<style scoped>

</style>