<script setup lang="ts">
import { defineComponent, ref } from "vue";

const temperature = ref<number>();
const humidity = ref<number>();
const Đèn = ref<number>();

const data = ref([
  {type: "Đèn", state: "on", time: '2021-10-10 09:00:00'},
  {type: "Điều hòa", state: "on", time: '2021-10-10 09:00:00'},
  {type: "Quạt", state: "off", time: '2021-10-10 09:00:00'},

  {type: "Đèn", state: "off", time: '2021-10-10 09:30:00'},
  {type: "Điều hòa", state: "off", time: '2021-10-10 09:30:00'},
  {type: "Quạt", state: "on", time: '2021-10-10 09:30:00'},

  {type: "Đèn", state: "on", time: '2021-10-10 10:00:00'},
  {type: "Điều hòa", state: "on", time: '2021-10-10 10:00:00'},
  {type: "Quạt", state: "off", time: '2021-10-10 10:00:00'},

  {type: "Đèn", state: "off", time: '2021-10-10 10:30:00'},

  {type: "Điều hòa", state: "off", time: '2021-10-10 10:30:00'},
  {type: "Quạt", state: "on", time: '2021-10-10 10:30:00'},

  {type: "Đèn", state: "on", time: '2021-10-10 11:00:00'},
  {type: "Điều hòa", state: "on", time: '2021-10-10 11:00:00'},
  {type: "Quạt", state: "off", time: '2021-10-10 11:00:00'},

  {type: "Đèn", state: "off", time: '2021-10-10 11:30:00'},
  {type: "Điều hòa", state: "off", time: '2021-10-10 11:30:00'},
  {type: "Quạt", state: "on", time: '2021-10-10 11:30:00'},

  {type: "Đèn", state: "on", time: '2021-10-10 12:00:00'},
  {type: "Điều hòa", state: "on", time: '2021-10-10 12:00:00'},
]);


const currentPage = ref(1);
const pageSize = ref(5);
const tableData = ref(data.value.slice(0,pageSize.value));

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

function sortData(key: string, order: string) {
  sortKey.value = key;
  sortOrder.value = order;

  if(key==null || order == null) {
    key = "time";
    order = "descending";
  }

  data.value.sort((a, b) => {
    if (order == 'ascending') {
      return a[key] > b[key] ? 1 : -1;
    } else {
      return a[key] < b[key] ? 1 : -1;
    }
  });

  // Cập nhật lại dữ liệu hiển thị sau khi sắp xếp
  updateDataSort();
}

const filterTag = (value: string, row: User) => {
  return row.tag === value
}

</script>

<template>
  <div>
    <h1 class="m-6 text-4xl font-semibold text-center text-[var(--paragraph-color-1)]">Thống kê trạng thái các thiết bị</h1>
    <div class = "flex justify-center items-center">
      <el-table :data="tableData" stripe max-height="450" style="width: 80%"
                :table-layout="tableLayout"
                :header-cell-style="{ background: 'var(--headline-color)', color: 'var(--neutral-color-5)'}"
                @sort-change="sortData"
      >
        <el-table-column
            type="index"
            label="ID"
            :index="(index) => (currentPage - 1) * pageSize + index + 1"
        />
        <el-table-column
            prop="type"
            label="Thiết bị"
            align="center"
            :filters = "[
              { text: 'Đèn', value: 'Đèn' },
              { text: 'Điều hòa', value: 'Điều hòa' },
              { text: 'Quạt', value: 'Quạt' }
            ]"
            :filter-method="filterTag"
        />
        <el-table-column prop="state" label="Trạng thái" align="center"/>
        <el-table-column prop="time" label="Thời gian" align="center" sortable/>
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