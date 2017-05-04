import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
	state:{
			requires:[]
	},
	mutations:{
		addcomment:function(state,messages){
			state.requires.push(messages)
		}
	}
})
export default store; 