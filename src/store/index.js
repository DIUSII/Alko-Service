import Vue from 'vue'
import Vuex from 'vuex'
import autorization from './modules/autorization'
import register from './modules/register'

Vue.use(Vuex)

export default new Vuex.Store({
  mutations: {
    closeWindwoLogout(state){
      state.logoutWindow = false;
      state.name = false;
    },
    openWindwoLogout(state){
      state.logoutWindow = true;
    },
  },
  state: {
    logoutWindow: false,
    name: true,
  },
  getters: {
    checkLogout(state){
      return state.logoutWindow;
    },
    nameForAuto(state){
      return state.name;
  }
  },
  modules: {
    autorization,
    register,
  }
})