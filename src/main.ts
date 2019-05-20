import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/element.js'
// import VueApollo from 'vue-apollo';
// import apolloProvider from '../apollo';

Vue.config.productionTip = false;

// Vue.use(VueApollo);

new Vue({
  router,
  store,
  // provide: apolloProvider.provide(),
  render: (h) => h(App),
}).$mount('#app');
