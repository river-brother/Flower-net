<template>
	<div>
		<router-view></router-view>
		<footer>
			<ul>
				<li>
					<router-link to="/" class="foo">
						<img src="//img02.hua.com/m/icon/home_icon_click_new.png"/>
						<span>首页</span>
					</router-link>
				</li>
				<li>
					<router-link to="/classify" class="foo">
						<img src="//img02.hua.com/m/icon/classify_icon_new.png"/>
						<span>分类</span>
					</router-link>
				</li>
				<li>
					<router-link to="/shopping" class="foo">
						<img src="//img02.hua.com/m/icon/cart_icon_new.png"/>
						<span>购物车</span>
					</router-link>
				</li>
				<li>
					<router-link to="/mine" class="foo">
						<img src="//img02.hua.com/m/icon/my_icon_new.png"/>
						<span>我的</span>
					</router-link>
				</li>
			</ul>
		</footer>
	</div>
</template>

<script>
	export default{
		name:'footer',

	}
	
</script>

<style>
	footer{
		width: 100%;
		height: 1rem;
		position: fixed;
		bottom: 0;
		background: #fafafa;
		border-top: 1px solid #EEEEEE;
		z-index: 1000;
	}
	footer a{
		color: #494949;
	}

	footer ul{
		height: 1rem;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	footer ul li .foo{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	footer ul li img{
		width: 0.48rem;
		height: 0.48rem;
	}
	footer ul li span{
		font-size: 12px;
	}
	/*.router-link-active{   //这个有错，主页切到其他页面还有类名加的颜色
        color:red;
    }*/
    .router-link-exact-active{   
    	color: red;
    }
</style>

