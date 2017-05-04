<template>
	<div>
		<router-view></router-view>
		<ul class="ul1">
			<li class="li1"><router-link to="/">商品列表</router-link></li>
			<li class="li1"><router-link to="/comment">评论区</router-link></li>
			<li class="li1"><router-link to="/userinfo">信息区</router-link></li>
		</ul>
	
	</div>
</template>
<script>
	
</script>
<style scoped>
	

	.ul1{
		position: fixed;
		bottom: 0;
		left: 0;
	}
	 .li1{
	 	width:8.5rem;
	 	height:5rem;
	 	float: left;
	 	border: 1px solid blue;
	 	font-size:2rem;
	 	list-style: none;
	 	line-height: 5rem;
	 	text-align:center;
	 	margin-bottom: 0;
	 }
</style>