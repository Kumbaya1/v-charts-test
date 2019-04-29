<template>
  <div class="chart">
    <h3 class="title">{{cData.title}}</h3>
    <div class="chart-container">
      <component :is="currentView" height="100%" width="100%" :data="cData.data"></component>
    </div>
  </div>
</template>

<script>
// import Vue from "vue";
import VeLine from "v-charts/lib/line.common";
import veHistogram from "v-charts/lib/histogram.common";
import vePie from "v-charts/lib/pie.common";
export default {
  props: {
    cData: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      rules: {
        line: VeLine,
        histogram: veHistogram,
        pie: vePie
      }
    };
  },
  computed: {
    currentView() {
      let view;
      if (this.cData.type) {
        view = this.rules[this.cData.type] || null;
      } else {
        view = null;
      }
      return view;
    }
  }
};
</script>

<style lang="scss" scoped>
.chart {
  width: 100%;
  height: 100%;
}
.title {
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  font-weight: 300;
  color: #000;
  padding: 5px 20px;
  text-align: left;
}
.chart-container {
  height: calc(100% - 30px);
}
</style>