<template>
  <div class="side-bar">
    <div class="side-bar-item" v-for="(chartArr,index) in list" :key="index">
      <div class="chart-item" v-for="chartData in chartArr" :key="chartData.key">
        <Chart :cData="chartData"></Chart>
      </div>
    </div>
  </div>
</template>

<script>
import { list } from "@/data";
import Chart from "@/components/Chart";
export default {
  data() {
    return {
      list
    };
  },
  components: {
    Chart
  }
};
</script>
<style lang="scss" scoped>
.side-bar {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.side-bar-item {
  flex: 1;
  display: flex;
}
.chart-item{
    flex: 1;
}
</style>