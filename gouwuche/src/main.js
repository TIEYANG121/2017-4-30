//es2015 引入外部模块
import  Vue from 'vue';
import  App from './components/App.vue';
import  store from './store/index.js';

new Vue({
	el:'#app',
	components:{App},
	store,
	
})