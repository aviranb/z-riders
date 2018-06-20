// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import Firebase from 'firebase'
import VeeValidate from 'vee-validate'

Vue.config.productionTip = false
Vue.use(VueFire)
Vue.use(VeeValidate)

// let config = {
//     apiKey: "AIzaSyATTnM_ZQJVi_ZNYaXTEEV5ujjR7dZkaDY",
//     authDomain: "z-riders.firebaseapp.com",
//     databaseURL: "https://z-riders.firebaseio.com",
//     projectId: "z-riders",
//     storageBucket: "z-riders.appspot.com",
//     messagingSenderId: "636493068785"
//   };
  
// let app = Firebase.initializeApp(config)
// let db = app.database()
// let booksRef = db.ref('books')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  //firebase: {
   // usersRef : db.ref('users')
    // simple syntax, bind as an array by default
    // anArray: db.ref('url/to/my/collection'),
    // // can also bind to a query
    // // anArray: db.ref('url/to/my/collection').limitToLast(25)
    // // full syntax
    // anObject: {
    //   source: db.ref('url/to/my/object'),
    //   // optionally bind as an object
    //   asObject: true,
    //   // optionally provide the cancelCallback
    //   cancelCallback: function () {},
    //   // this is called once the data has been retrieved from firebase
    //   readyCallback: function () {}
    // }
  //}
})
