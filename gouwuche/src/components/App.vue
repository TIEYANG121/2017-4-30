<template>
<div id="app">
		<ul class="goodslist clearFix">
			<li v-for="fruit in fruits">
				<img v-bind:src="fruit.imgurl" alt="">
				<p>单价：{{fruit.price}}</p>
				<button v-on:click="insert(fruit)">购买</button>
			</li>
		</ul>
		<h1 class="clearFix">总价:{{total}}</h1>
		<ul class="cart clearFix">
			<li v-for="fruit in cart">
				<p>名称：{{fruit.name}}</p>
				<p>价格：{{(fruit.count * fruit.price).toFixed(2)}}元</p>
				<p>数量：
				<button v-on:click="sub(fruit)">-</button>
				{{fruit.count}}
				<button v-on:click="add(fruit)">+</button>
				</p>
			</li>
		</ul>
	</div>
	
</template>
<script>
	export default {
		data:function(){
			return{
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
				],
			}
		},
		methods:{
			getTotal:function(){
					var sum = 0;
					this.cart.map(function(val,ind){
						var priceAll = val.count * val.price;
						sum += priceAll;
					});
					this.total = sum.toFixed(2);
				},
				insert:function(fruit){
					for(var i = 0;i<this.cart.length;i++){
						if(this.cart[i]==fruit){
							this.cart[i].count++;
							this.getTotal();
							return;
						}
					}
					this.cart.push(fruit);
				},
				add:function(fruit){
					fruit.count++;
					this.getTotal();
				},
				sub:function(fruit){
					if(fruit.count > 0){
						fruit.count--;
						this.getTotal();
					}
				}
			}
		}
				
</script>
<style type="text/css">
	*{
			margin:0px;
			padding:0px;
		}
		.clearFix:before,.clearFix:after{
			content:"";
			display: block;
			clear:both;
		}
		
		#app{
			width:500px;
			height:600px;
			border:5px solid blue;
			margin:0 auto;
		}
		.goodslist li{
			float: left;
			list-style:none;
			margin-left:30px;
			text-align: center;
		}
		.goodslist li img{
			width:100px;
			height:100px;
		}
		.cart li{
			border:1px solid red;
			list-style: none;
		}
</style>