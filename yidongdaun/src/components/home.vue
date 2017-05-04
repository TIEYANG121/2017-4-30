<template>
<div class="b1">
	 <img src="1.jpg" alt="">
	<span>标签</span>
	<button v-on:click="sub">踩</button>
	<span>{{num}}</span>
	<button v-on:click="add">赞</button>
    <div class="b2">
    	<h1>详细信息</h1>
    </div>
   <comment></comment>
</div>
   
</template>
<script>
import comment from './comment.vue' 
	export default {
		components:{comment},
 		data:function(){
 			return{
 				num:0,
 			}
 		},
		methods:{
			 

			add:function(ind){
					this.num++;
				},
			sub:function(ind){
					this.num--;
				}
		}
	}
</script>
<style scoped>

	img{
		width:8.5rem;
		height:8.5rem;
	}
	.b1{
		left: 0;
		/*width:25rem;*/
		height:50rem;
		border:1px solid blue;
		margin: 0;
		padding:0;
	}
	.b2{
		left: 0;
		/*width:25rem;*/
		height:25rem;
		border:1px solid blue;
	}
</style>