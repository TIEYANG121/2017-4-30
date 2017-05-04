<template>
	<div class="b4">
		 <h1>神回复</h1>
		 <ul>
			<li v-for="req in requires">{{req}}</li>
		</ul>
		<div class="b5">
			<input type="text" v-model="message">
			<button v-on:click="add(message)">神回复</button>
		</div>
		
	</div>
</template>
<script>
	export default {
		computed:{
			requires:function(){
				return this.$store.state.requires
			}
		},
 		data:function(){
 			return{
 				message:'',
 			}
 		},
		methods:{
			 

			add:function(message){
					this.$store.commit('addcomment',message)
				}
		}
	}
</script>
<style scoped>
	*{
		margin: 0;
		padding: 0;

	}
	.b4{
		
		left: 0;
		/*width:25rem;*/
		height:50rem;
		border:1px solid blue;
	}
	.b5{
		position: fixed;
		bottom:9rem;
		left:0;
	}
</style>