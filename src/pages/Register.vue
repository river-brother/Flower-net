<template>
	<div class="register">
		<header>
			<img src="//img02.hua.com/m/icon/headChevronLeft.png"/>
			<p>注册新用户</p>
			<img src="//img02.hua.com/m/icon/headerIconMore.png"/>
		</header>
	
		<div class="swiper-container">
			
		    <div class="swiper-wrapper">
		        <div class="swiper-slide swiper-no-swiping sj">
		        	<div>
		        		<input type="text" id="user"placeholder="请输入手机号" />
		        	</div>
		        	
		        	<div class="">
		        		<input type="text" id="user"placeholder="请输入验证码" />
		        		<span></span>
		        	</div>
		        	<div class="">
		        		<input type="text" id="" placeholder="请输入短信验证码" />
		        		<span></span>
		        	</div>
		        	<input type="button" id="btn" value="下一步" />
		        	<p>找回密码</p>
		        </div>
		        <div class="swiper-slide swiper-no-swiping yx">
		        	<div class="">
		        		<input type="text" id="" placeholder="请输入短信验证码" />
		        		<span></span>
		        	</div>
		        	<div class="">
		        		<input type="text" id="" placeholder="请输入邮箱" />
		        	</div>
		        	<div class="">
		        		<input type="password" name="" placeholder="请设置6-20位字母和数字登录密码"/>
		        	</div>
		        	<input type="button" id="btn" value="注册" />
		        	<p>找回密码</p>
		        </div>
		    </div>
		    <!-- 如果需要分页器 -->
		    <div class="swiper-pagination pagination"></div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'register',
		data(){
			return{
				
			}
		},
		mounted(){
			var mySwiper = new Swiper ('.swiper-container', {
	  				paginationType:"bullets",  //分页器类型  默认
    				paginationClickable:true,  //点击分页器的指示点分页器会控制Swiper切换
				 	direction: 'horizontal', //控制那个方向上的滑动  左右
				  	effect:"slide",  //样式
					speed:0,	//可选，切换速度，
				    noSwiping:true,  //设置swiper-no-swiping 禁止切换
					pagination: '.swiper-pagination', //需要分页器 就配置它，value是当前分页器的容器的选择器
					paginationBulletRender: function (swiper, index, className) {
				      		var arr = ["手机注册","邮箱注册"];
				     		return '<span class="' + className + '">' + arr[index] + '</span>';
				    },
					bulletClass:"bullet", //pagination分页器内元素的类名
					bulletActiveClass:"active",//pagination分页器内活动(active)元素的类名，哪页显示哪页有
					lazyLoading:true, //设为true开启图片延迟加载，需要将图片img标签的src改写成data-src，并且增加类名swiper-lazy
					zoom:true,//双击slide会放大，并且在手机端可双指触摸缩放。需要在slide中增加类名swiper-zoom-container，
				})
		}
	}
</script>

<style>
	.register header{width: 100%;height: 0.9rem;display: flex;justify-content: space-between;align-items: center;background: #fafafa;border-bottom: 1px solid #e4e4e4;}
	.register header img{width: 0.48rem;height: 0.48rem;}
	.register header img:nth-child(1){margin-left: 0.4rem;}
	.register header img:nth-child(3){margin-right: 0.28rem;}
	
	.register .pagination{width:7.2rem;height:0.6rem;border: 1px solid #fe6c6c;top: 0;display: flex;left: 0.16rem;margin-top: 0.16rem;}
	.register .pagination .bullet{width: 50%;display: block;color: black;font-size: 12px;line-height: 0.6rem;}
	.register .pagination .active{background: #fe6c6c;color: white;}
	.register .swiper-slide{margin-top: 1.1rem;}
	
	.register .sj,.yx{display: flex;flex-direction: column;align-items: center;}
	.register .sj div,#btn{width: 7.2rem;height: 0.8rem;border: 1px solid #e2e2e2;}
	.register .yx div,#btn{width: 7.2rem;height: 0.8rem;border: 1px solid #e2e2e2;}
	.register .sj div{display: flex;align-items: center;margin-bottom: 0.2rem;}
	.register .yx div{display: flex;align-items: center;margin-bottom: 0.2rem;}
	.register .sj input{width: 100%;border: none;font-size: 12px;margin-left: 0.2rem;}
	.register .yx input{width: 100%;border: none;font-size: 12px;margin-left: 0.2rem;}
	.register #btn{background: #ff6600;color: white;font-size: 16px;margin: 0 auto;margin-top: 0.28rem;}
	.register .sj p{color: #666666;font-size: 12px;border-bottom: 1px solid #666666;margin: 0.5rem 0;margin-left: -6.16rem;}
	.register .yx p{color: #666666;font-size: 12px;border-bottom: 1px solid #666666;margin: 0.5rem 0;margin-left: -6.16rem;}

</style>