import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dataV from '@jiaminghi/data-view';
import echarts from 'echarts'
//5.x 引用方式为按需引用
//希望使用5.x版本的话,需要在package.json中更新版本号,并切换引用方式
// import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false;

// import 'echarts/map/js/china'
Vue.use(dataV)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
