import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/util/directive"

import {Sticky,Tab, Tabs,Swipe, SwipeItem,Toast} from 'vant'
Vue.use(Sticky).use(Tab).use(Tabs).use(Swipe).use(SwipeItem).use(Toast)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
