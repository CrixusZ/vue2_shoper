import Vue from 'vue'

const state = {
	orderList: [],
	params: {}
}

const getters = {
//	orderList: function (state) {
//		return state.orderList
//	}
	getOrderList: state => state.orderList
}

const actions = {
	fetcgOrderList({ commit, state }){
		Vue.http.post('/api/getOrderList',state.params)
		.then((res)=>{
			commit('updateOrderList',res.data.list)
//			state.orderList = res.data.list
//			state.total = res.data.total
		}, (err)=>{
			
		})
	}
}
//vuex原则上只允许state在mutation上进行更改,不允许在action上进行更改
const mutations = {
	updateOrderList (state, payload) {
		state.orderList = payload
	}
}
export default {
	state,
	getters,
	actions,
	mutations
}
