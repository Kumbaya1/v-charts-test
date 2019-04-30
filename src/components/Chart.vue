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
        :legend="legendOption"
        :after-set-option="afterSetOption"
        :settings="chartSettings"
      ></component>
    </div>
  </div>
</template>
<script>
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
      legendOption: {
        icon: "rect",
        textStyle: {
          color: "#ffffff",
          fontSize: 12
        },
        pageIconColor: "#aaa",
        pageIconInactiveColor: "#2f4554",
        type: "scroll",
        pageIconSize: [15, 15],
        bottom: 5,
        width: "84%",
        orient: "horizontal",
        itemWidth: 12,
        itemHeight: 10,
        itemGap: 5
      },
      extends: {
        line: {
          grid: {
            top: 40,
            left: 10,
            bottom: 30,
            right: 10,
            containLabel: true
          }
        },
        histogram: {
          grid: {
            top: 40,
            left: 10,
            bottom: 30,
            right: 10,
            containLabel: true
          }
        },
        pie: {
          grid: {
            top: 40,
            left: 10,
            bottom: 30,
            right: 10,
            containLabel: true
          }
        }
      },
      chartSettings: {
          radius:50,
          offsetY:100
      }
    };
  },
  mounted() {
    this.currentLabelValue = this.cData[this.dataIndex].label.value;
  },
  methods: {
    handleSelectChange() {
      this.cData.forEach((element, index) => {
        if (element.label.value == this.currentLabelValue) {
          this.dataIndex = index;
        }
      });
    },
    beforeConfig() {
      // console.log(arguments)
    },
    afterSetOption(initstance) {
      let option = initstance.getOption();
      console.log(option);
      //   option.legend[0].type = "scroll";
      //   initstance.clear();
      //   initstance.setOption(option);
      //   console.log(initstance.setOption({ legend: { type: "scroll" } }));
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
      let extend;
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
  color: #f2efe6;
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
  bottom: 0;
}
</style>