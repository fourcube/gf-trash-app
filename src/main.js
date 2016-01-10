import Vue from 'vue'
import App from './App'
import Store from './Store'

Vue.config.debug = true
/* eslint-disable no-new */
new Vue({
  el: 'body',
  data: {
    model: Store.data
  },
  components: { App }
})
