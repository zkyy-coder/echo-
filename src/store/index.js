import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	id: []
}

export default new Vuex.Store({
  state,
  mutations: {
		add(state, payload) {
			state.id.unshift(payload)
		},
		sub(state, payload) {
			state.id.splice(payload, 1)
		}
  },
	getters: {
		getMusicList(state) {
			return state.id
		}
	},
  actions: {
		addToMusic(context, payload) {
			return new Promise((resolve, reject) => {
				context.commit('add', payload)
				resolve()
			})
		},
		subToMusic(context, payload) {
			return new Promise((resolve, reject) => {
				context.commit('sub', payload)
			})
		}
  },
  modules: {
  }
})
