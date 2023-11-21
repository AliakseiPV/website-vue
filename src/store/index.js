import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		slider: []
	},
	mutations: {
		SET_SLIDER_STATE(state, slider) {
			state.slider = slider
		}
	},
	actions: {
		fetchSlider({ commit }) {
			
			commit('SET_SLIDER_STATE', [
				{
					id: 0,
					img: require('../assets/project-details-slide01.jpg'),
				},
				{
					id: 1,
					img: require('../assets/project-details-slide01.jpg'),
				},
				{
					id: 2,
					img: require('../assets/project-details-slide01.jpg'),
				}
			])
		}
	},
	getters: {
		slider(state) {
			return state.slider
		}
	}
});