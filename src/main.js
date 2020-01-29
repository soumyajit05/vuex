import Vue from 'vue'
import App from './App.vue'
// import vuex from 'vuex'
import vuex from 'vuex'
Vue.use(vuex)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
