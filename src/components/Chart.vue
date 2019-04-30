<template>
  <div class="chart">
    <div class="chart-header">
      <h3 class="title">{{currentData.title}}</h3>
      <div class="chart-labels">
        <select v-if="cData.length > 1" v-model="currentLabelValue" @change="handleSelectChange">
          <option
            :value="item.label.value"
            v-for="item in cData"
            :key="item.label.value"
          >{{item.label.name}}</option>
        </select>
      </div>
    </div>
    <div class="chart-container">
      <component
        :is="currentView"
        height="100%"
        width="100%"
        :data="currentData.data"
        :extend="chartExtend"
      ></component>
    </div>
  </div>
</template>
<script>
// import Vue from "vue";
import "v-charts/lib/style.css";
import VeLine from "v-charts/lib/line.common";
import veHistogram from "v-charts/lib/histogram.common";
import vePie from "v-charts/lib/pie.common";
export default {
  props: {
    cData: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      dataIndex: 0,
      currentLabelValue: "",
      rules: {
        line: VeLine,
        histogram: veHistogram,
        pie: vePie
      },
      extends: {
        line: {
          grid: {
            top: 40,
            left: 10,
            bottom: 10,
            right: 10,
            containLabel: true
          }
        },
        histogram: {
          grid: {
            top: 40,
            left: 10,
            bottom: 10,
            right: 10,
            containLabel: true
          }
        },
        pie: {}
      }
    };
  },
  mounted() {
    debugger;
    this.currentLabelValue = this.cData[this.dataIndex].label.value;
  },
  methods: {
    handleSelectChange() {
      this.cData.forEach((element, index) => {
        if (element.label.value == this.currentLabelValue) {
          this.dataIndex = index;
        }
      });
    }
  },
  computed: {
    currentView() {
      let view = null;
      if (this.cData[this.dataIndex].type) {
        view = this.rules[this.cData[this.dataIndex].type] || null;
      }
      return view;
    },
    chartExtend() {
      let extend = {};
      if (this.cData[this.dataIndex].type) {
        extend = this.extends[this.cData[this.dataIndex].type] || {};
      }
      return extend;
    },
    currentData() {
      return this.cData[this.dataIndex] || {};
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
.chart-header {
  position: relative;
}
.chart-labels {
  position: absolute;
  right: 0;
  top: 5px;
  width: 200px;
  bottom: 0;
}
</style>