<template>
	<div class="classify">
		<div class="search">
			<input type="text" id="" value="搜索鲜花、蛋糕、礼品" />
			<i class="iconfont icon-sousuo"></i>
		</div>
		
		<div class="swiper-container container">
			<!-- 如果需要分页器 -->
		    <div class="swiper-pagination nav"></div>
		    
		    <div class="swiper-wrapper wrapper">
		        <div class="swiper-slide slide swiper-no-swiping">Slide 1</div>
		        <div class="swiper-slide slide swiper-no-swiping" >Slide 2</div>
		        <div class="swiper-slide slide swiper-no-swiping">Slide 3</div>
		        <div class="swiper-slide slide swiper-no-swiping">Slide 4</div>
		        <div class="swiper-slide slide swiper-no-swiping" >Slide 5</div>
		        <div class="swiper-slide slide swiper-no-swiping">Slide 6</div>
		        <div class="swiper-slide slide swiper-no-swiping">Slide 7</div>
		        <div class="swiper-slide slide swiper-no-swiping">Slide 8</div>
		        <div class="swiper-slide slide swiper-no-swiping">Slide 9</div>
		    </div>
		    
		 
		</div>
	</div>
</template>
	
<script>
	export default{
		name:'classify',
		data(){
			return{
				
			}
		},
		mounted(){
			//dom结构，包括类 都不要修改 。
   			var mySwiper = new Swiper ('.swiper-container', {
			    direction: 'vertical', //控制那个方向上的滑动
			    speed:0,	//可选，切换速度
			  	noSwiping:true,  //设置swiper-no-swiping 禁止切换
    			paginationType:"bullets",  //分页器类型  默认
    			paginationClickable:true,  //点击分页器的指示点分页器会控制Swiper切换
			    pagination: '.swiper-pagination', //需要分页器 就配置它，value是当前分页器的容器的选择器
			    paginationBulletRender: function (swiper, index, className) {
      				var arr = ["热门推荐","鲜花","永生花","蛋糕","巧克力","特色礼品","品牌公仔","礼篮","绿植花卉"];
     				 return '<span class="' + className + '">' + arr[index] + '</span>';
    			},
				bulletClass:"bullet",//pagination分页器内元素的类名
				bulletActiveClass:"active",//pagination分页器内活动(active)元素的类名，哪页显示哪页有
				lazyLoading:true, //设为true开启图片延迟加载，需要将图片img标签的src改写成data-src，并且增加类名swiper-lazy
				zoom:true,//双击slide会放大，并且在手机端可双指触摸缩放。需要在slide中增加类名swiper-zoom-container，
			})
		}
	}
</script>

<style>
	.classify{background: #f6f6f6;width: 100%;height:100%;padding-top: 0.2rem;}
	.classify .search{width: 90%;height: 0.6rem;background: white;margin: 0 auto;margin-bottom: 0.16rem;
			display: flex;justify-content: space-around;align-items: center;}
	.classify input{border: none;outline:none;width: 6rem;}
	.classify .container{position: relative;height: 11.36rem;width: 100%;}
	.classify .nav{width: 26%;display: flex;flex-wrap: wrap;flex-direction: column;line-height: 0.96rem;left: 0;top:4.32rem;}
	.classify .nav .active{background: white;}
	.classify .wrapper{height: 11.36rem;width: 74%;float: right;}
	.classify .wrapper .slide{background: white;overflow: hidden;overflow: auto;}
			
</style>