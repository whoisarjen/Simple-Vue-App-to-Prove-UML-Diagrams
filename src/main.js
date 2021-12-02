import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { jsPDF } from 'jspdf'

Vue.prototype.JSPDF = jsPDF

Vue.config.productionTip = false

Vue.prototype.$connectIndexedDB = () => { return window.indexedDB.open('uml') }

require('./plugins/indexedDB')

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
