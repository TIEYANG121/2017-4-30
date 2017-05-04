//es2015 引入外部模块
import Vue from 'vue';
import Vuex from 'vuex'
import App from './components/App.vue';
import store from './store/index.js';
import router from './router/index.js';

new Vue({
	el:'#app',
	components:{App},
	store,
	router
})
