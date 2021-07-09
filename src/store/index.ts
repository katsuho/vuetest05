import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    monthDeposit: 0, // 積立金（月）
    interestRate: 0, // 利率
  },
  mutations: {
    updMonthDeposit: (state, monthDeposit) => {
      state.monthDeposit=monthDeposit;
    },
    updInterestRate: (state,interestRate) => {
      state.interestRate=interestRate;
    }
  },
  actions: {
  },
  modules: {
  }
})
