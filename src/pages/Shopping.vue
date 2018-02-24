<template>
	<div class="shopping">
		<header>
			<img src="//img02.hua.com/m/icon/headChevronLeft.png"/>
			<p>购物车</p>
			<img src="//img02.hua.com/m/icon/headerIconMore.png"/>
		</header>
		<div class="che">
			<img src="//img02.hua.com/m/empty_cart2.png"/>
			<p>这里什么都没有啊～</p>
			<p>去逛逛</p>
		</div>
		<div class="cake_lb">
			<p>为你推荐</p>
			<div class="main">
				<ul class="">
					<li  v-for="img in imgs">
						<img :src="img.tu"/>
						<span>{{img.money}}</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import $ from 'jquery';
	export default{
		name:'shopping',
		data(){
			return{
				imgs:[]
			}
		},
		mounted(){
			this.getData();
		},
		methods:{
			getData:function(){
				var _this=this;
				this.$http.get("../../static/shopp.json").then(function(res){
					console.log(res.data)
					_this.imgs=res.data
				})
			}
			 
  		}
  	}
  </script>
		

<style>
	.shopping{margin-bottom: 1rem;}
	.shopping header{height: 0.9rem;display: flex;justify-content: space-between;align-items: center;}
	.shopping header img{width: 0.48rem;height: 0.48rem;}
	.shopping header img:nth-child(1){margin-left: 0.4rem;}
	.shopping header img:nth-child(3){margin-right: 0.28rem;}
	.shopping .che{text-align: center;border-bottom: 0.2rem solid #EEEEEE;}
	.shopping .che img{width: 4.5rem;height: 3.9rem;margin-top: 0.6rem;}
	.shopping .che p:nth-child(2){font-size: 14px;text-align: center;color: rgb(75,75,75);padding-bottom: 0.4rem;margin-top: 0.2rem;}
	.shopping .che p:nth-child(3){width: 1.6rem;height: 0.64rem;border: 1px solid red;color: red;margin: 0 auto;font-size: 12px;line-height: 0.64rem;margin-bottom: 0.36rem;}
	.shopping .cake_lb p{font-size: 12px;margin-top: 0.24rem;margin-bottom: 0.44rem;margin-left: 0.3rem;}
	
	.shopping .cake_lb .main{width: 100%;height: 2.3rem;}
	.shopping .cake_lb .main ul{max-width: 555px;display: flex;overflow: auto;}
	.shopping .cake_lb .main ul li{display: flex;flex-direction: column;padding: 0 0.2rem;}
	
	.shopping .cake_lb img{width: 1.3rem;height: 1.4rem;}
	.shopping .cake_lb span{font-size: 12px;color: black;margin-left: 0.2rem;}






</style>