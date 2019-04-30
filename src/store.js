import Vue from 'vue'
import Vuex from 'vuex'
import { getBarOrLineChartData, getPieChartData } from "@/mock/mock";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chartDataList: []
  },
  mutations: {
    init(state) {
      let chartDataList = [];
      // const random = Math.round(Math.random() * 3 + 1);
      const random = Math.random() > 0.5 ? 3 : 4;
      for (let i = 0; i < random; i++) {
        let row = [], num;
        Math.random() > 0.5 ? num = 2 : num = 1;
        for (let j = 0; j < num; j++) {
          let labelNum, labelArr = [];
          Math.random() > 0.5 ? labelNum = 2 : labelNum = 1;
          for (let k = 0; k < labelNum; k++) {
            const type = Math.random() > 0.5 ? 'histogram' : 'line';
            Math.random() > 0.5 ? labelArr.push(getBarOrLineChartData(type)) : labelArr.push(getPieChartData());
          }
          row.push(labelArr)
        }
        chartDataList.push(row);
      }
      state.chartDataList = chartDataList;
    }
  },
  actions: {

  }
})
