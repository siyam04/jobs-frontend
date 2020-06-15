/*system*/
import Vue from 'vue'
import App from './App.vue'

/*custom route file*/
// router (export const variable array)
import {router} from "./routers/router"


/*production setting*/
Vue.config.productionTip = false

/*Vue framework*/
new Vue({
  render: h => h(App),
  // export const variable array
  router: router
}).$mount('#app')
