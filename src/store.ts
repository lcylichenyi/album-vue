import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    json: '',
  },
  mutations: {
    setJson(state, db) {
      state.json = db;
    },
  },
  actions: {
    getJson(context) {
      // 调用我们的后端getJson接口
      fetch('http://127.0.0.1:3000/getJson', {
        method: 'GET',
        // mode:'cors',
        headers: {
          'Accept': 'text/html',
          'Content-Type': 'text/html',
        },
      });
    },
  },
});
