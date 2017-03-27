import Vue from 'vue'
//import App from './App'
import Layout from './components/layout'
import IndexPage from './pages/index'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

Vue.use(VueRouter)
Vue.use(Vuex)
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
		{
			path: '/',
			component: IndexPage
		}
	]
})
new Vue({
  	el: '#app',
  	router,
	store,
  	template: '<Layout/>',
  	components: { Layout }
//	render: h => h(App),
	//相当于render: function(h){return h(App)}
})

