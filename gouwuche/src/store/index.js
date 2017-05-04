import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
	state:{
			total:0,
			cart:[],
			fruits:[
					{
						name:'香蕉',
						imgurl:'1.jpg',
						price:'5.5',
						count:0
					},
					{
						name:'苹果',
						imgurl:'2.jpg',
						price:'6.5',
						count:0
					},
					{
						name:'鸭梨',
						imgurl:'3.jpg',
						price:'7.5',
						count:0
					}	
	]
}
})
export default store;