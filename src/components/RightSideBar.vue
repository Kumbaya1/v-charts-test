<template>
  <div class="side-bar">
    <div class="side-bar-item" v-for="(chartArr,index) in list" :key="index">
      <div class="chart-item" v-for="(chartData,idx) in chartArr" :key="idx">
        <Chart :cData="chartData"></Chart>
      </div>
    </div>
  </div>
</template>

<script>
// import { list } from "@/data";
import Chart from "@/components/Chart";
export default {
  data() {
    return {};
  },
  created() {
    this.$store.commit("init");
  },
  computed: {
    list() {
      console.log(this.$store.state.chartDataList)
      return this.$store.state.chartDataList;
    }
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
  overflow: hidden;
}
.side-bar-item {
  flex: 1;
  display: flex;
}
.chart-item {
  flex: 1;
}
</style>