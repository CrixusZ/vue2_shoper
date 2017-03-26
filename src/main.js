import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

Vue.use(VueRouter)
Vue.use(Vuex)
/*初始化的一个vuex实例*/
let store = new Vuex.Store({
	state: {
		
	},
	getters: {
		
	},
	actions: {
		
	},
	mutations: {
		
	}
})

let router = new VueRouter({
	mode: 'history',
	routes : [
		
	]
})
/*编程式的导航，在用户登录前检阅用户信息，如果在未登录状态导入指定的路由*/
//router.beforEach(router.push())
new Vue({
	router,
	store,
  	el: '#app',
  	render: h => h(App),
	//相当于render: function(h){return h(App)}
	
})

