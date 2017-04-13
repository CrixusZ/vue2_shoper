import Vue from 'vue'
//import App from './App'
import Layout from './components/layout'
import IndexPage from './pages/index'
import DetailPage from './pages/detail'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import Analysis from './pages/detail/analysis'
import Count from './pages/detail/count'
import Forecast from './pages/detail/forecast'
import Publish from './pages/detail/publish'
import OrderListPage from './pages/orderList'

import store from './store/index'
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Vuex)
//let store = new Vuex.Store({
//	state: {
//		
//	},
//	getters: {
//		
//	},
//	actions: {
//		
//	},
//	mutations: {
//		
//	}
//})

let router = new VueRouter({
	mode: 'history',
	routes : [
		{
			path: '/',
			component: IndexPage
		},
		{
			path: '/orderList',
			component: OrderListPage
		},
		{
			path: '/detail',
			component: DetailPage,
			redirect: '/detail/count',
			children: [
				{
					path: 'analysis',
					component: Analysis
				},
				{
					path: 'count',
					component: Count
				},
				{
					path: 'forecast',
					component: Forecast
				},
				{
					path: 'publish',
					component: Publish
				}
			]
		}
	]
})
new Vue({
  	el: '#app',
  	router,
//	store: Store,
	store,
  	template: '<Layout/>',
  	components: { Layout }
//	render: h => h(App),
	//相当于render: function(h){return h(App)}
})

