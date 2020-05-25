import Vue from 'vue'
import Vuex from 'vuex'
import autorization from './modules/autorization'
import register from './modules/register'

Vue.use(Vuex)

export default new Vuex.Store({
  mutations: {
    // выход из аккаунта
    closeWindwoLogout(state){
      state.logoutWindow = false;
      autorization.state.logIn.data.token = null;
      autorization.state.logIn.data.user.name = null;
      autorization.state.error.error = null;
      state.hideOrShowBackground = false;
      state.name = false;
    },
    // открывает модальное окно выхода из аккаунта
    openWindwoLogout(state){
      state.logoutWindow = true;
    },
    // Открывает модальное окно авторизации и бекграунд темный
    openWindowAuto(state){
        state.hideOrShowBackground = true;
    },
    // Закрывает модальное окно авторизации и бекграунд темный
    closeWindwoAuto(state){
        state.hideOrShowBackground = false;
    }
  },
  state: {
    logoutWindow: false,
    hideOrShowBackground: false,
  },
  getters: {
    // Выводит перемению logoutWindow для hide/show модального окна
    checkLogout(state){
      return state.logoutWindow;
    },
    // Вывод переменной за hide/show авторизации и бекграунда
    conclusionBackground(state) {
      return state.hideOrShowBackground;
    }
  },
  modules: {
    autorization,
    register,
  }
})