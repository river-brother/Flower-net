

<template>
	<div class="section">
		<div class="min">
			<header class="bgMask">
				<img src="//img02.hua.com/m/icon/logo@2x.png"/>
				<div class="search">
					<i class="iconfont icon-sousuo"></i>
					<input type="text" id="" value="教师节" />
				</div>
				<div class="login">
					登录
				</div>
			</header>
			<div class="banner swiper-container">
				<ul class="swiper-wrapper">
					<li class="swiper-slide"><img src="//img02.hua.com/slider/new_banner_jsj_m.jpg"/></li>
					<li class="swiper-slide"><img src="//img02.hua.com/slider/new_banner_xingzuo_chunv.jpg"/></li>
					<li class="swiper-slide"><img src="//img02.hua.com/slider/new_banner_yongganai.png"/></li>
				</ul>
				<div class="swiper-pagination"></div>
			</div>
		</div>
		<div class="conpany_info">
			<li>· 认证龙头企业</li>
			<li>· 12年品牌</li>
			<li>· 3小时送达</li>
			<li>
				· 最近
				<a href="">88888</a>
				条好评
			</li>
		</div>
		<div class="pro_type_box">
			<ul>
				<li>
					<a href="">
						<img src="//img02.hua.com/m/icon/xianhua_icon.png"/>
						<span>鲜花</span>
					</a>
				</li>
				
			</ul>
			<ul>
				<li>
					<a href="">
						<img src="//img02.hua.com/m/icon/yongshenghua_icon.png"/>
						<span>永生花</span>
					</a>
				</li>
			</ul>
			<ul>
				<li>
					<a href="">
						<img src="//img02.hua.com/m/icon/cake_icon.png"/>
						<span>蛋糕</span>
					</a>
				</li>
			</ul>
			<ul>
				<li>
					<a href="">
						<img src="//img02.hua.com/m/icon/gift_icon.png"/>
						<span>礼品</span>
					</a>
				</li>
			</ul>
			<ul>
				<li>
					<a href="">
						<img src="//img02.hua.com/m/icon/choclate_icon.png"/>
						<span>巧克力</span>
					</a>
				</li>
			</ul>
		</div>
		
		<div class="featured">
			<div class="xian"></div>
			<div class="spirit">鲜花精选</div>
		</div>
		<div class="line" >
			<ul>
				<li v-for="item in items">
					<a href="">
						<img :src="item.lazyimg"/>
						<div class="referral">
							<p class="p1">{{item.name}}</p>
							<p class="p2"><nobr>{{item.detail}}</nobr></p>
							<p class="p3">{{item.price}}</p>
						</div>
					</a>
				</li>
			</ul>
			<div class="more_btn">全部鲜花></div>
		</div>
		
		<div class="featured">
			<div class="xian"></div>
			<div class="spirit">永生花精选</div>
		</div>
		<div class="line" >
			<ul>
				<li v-for="inx in idxs">
					<a href="">
						<img :src="inx.lazyimg"/>
						<div class="referral">
							<p class="p1">{{inx.name}}</p>
							<p class="p2"><nobr>{{inx.detail}}</nobr></p>
							<p class="p3">{{inx.price}}</p>
						</div>
					</a>
				</li>
			</ul>
			<div class="more_btn">全部永生花></div>
		</div>

		<div class="business">
			<div class="business_box">
			<ul>
				<li><img src="//img02.hua.com/m/pro_detail/brand_icon01.png"/></li>
				<span>行业龙头</span>
			</ul>
			<ul>
				<li><img src="//img02.hua.com/m/pro_detail/brand_icon02.png"/></li>
				<span>品牌理念</span>
			</ul>
			<ul>
				<li><img src="//img02.hua.com/m/pro_detail/brand_icon03.png"/></li>
				<span>3小时送达</span>
			</ul>
			<ul>
				<li><img src="//img02.hua.com/m/pro_detail/brand_icon04.png"/></li>
				<span>送前实拍</span>
			</ul>
		</div>
		<div class="banner2 swiper-container">	
			<ul class="swiper-wrapper">
				<li class="swiper-slide">
					<img src="//img02.hua.com/m/pro_detail/brand001.jpg?a"/>
					<p>专注鲜花礼品12年，2016年获评“鲜花行业龙头企业”</p>
				</li>
				<li class="swiper-slide">
					<img src="//img02.hua.com/m/pro_detail/brand002feben.jpg?"/>
					<p>花礼网倡导勇敢表达爱，享受爱的美好</p>
				</li>
				<li class="swiper-slide">
					<img src="//img02.hua.com/m/pro_detail/brand003.jpg?a"/>
					<p>覆盖全国1000+城市，最快1~3小时送达</p>
				</li>
				<li class="swiper-slide">
					<img src="//img02.hua.com/m/pro_detail/brand004.jpg?a"/>
					<p>坚持公开所有花款实拍，严格管控质量s</p>
				</li>
			</ul>
			<div class="swiper-pagination paging"></div>
		</div>
		</div>
			
	</div>
	
</template>

<script>
	import $ from 'jquery';
	export default{
		name:'section',
		data(){
			return{
				items:[],
				idxs:[]
			}	
		},
		mounted(){
			this.getData();
			
			var mySwiper = new Swiper ('.banner', {
			    direction: 'horizontal', //控制那个方向上的滑动
			    loop: true, //无缝的切换
			    speed:800,  //一张走的速度
			    autoplay:2000, //自动切换的时间间隔（单位ms），不设定该参数slide不会自动切换。
			    // freeMode:true,
			    effect:"slide",   //样式
			    noSwiping:true,   //设置swiper-no-swiping 禁止切换
			    paginationClickable:true,  //点击分页器的指示点分页器会控制Swiper切换
			    // 如果需要分页器
			    pagination: '.swiper-pagination', //需要分页器 就配置它，value是当前分页器的容器的选择器
			})
			var mySwiper = new Swiper ('.banner2', {
			    direction: 'horizontal', //控制那个方向上的滑动
			    speed:500,  //一张走的速度
			    effect:"slide",  //样式
			    noSwiping:true,   //设置swiper-no-swiping 禁止切换
			    paginationClickable:true,  //点击分页器的指示点分页器会控制Swiper切换
			    // 如果需要分页器
			    pagination: '.swiper-pagination', //需要分页器 就配置它，value是当前分页器的容器的选择器
			})
			
			var $window = $(window),
			$body = $('body'),
			$bgMask = $('header .bgMask');
			$window.on('scroll', function() {
				if (parseInt($window.scrollTop()) > 40) {
					$(".bgMask").css('background', 'white');
				} else {
					$(".bgMask").css('background', '');
				}
			});
			    
                
		},
		methods:{
			getData:function(){
				var _this=this;
				this.$http.get("../../static/s_list.json").then(function(res){
					console.log(res.data)
					_this.items=res.data
				});
				this.$http.get("../../static/s2_list.json").then(function(res){
					console.log(res.data)
					_this.idxs=res.data
				})
			}
		}
	}
</script>


<style>
	.section{margin-bottom: 1rem;}
	.section .min{height: 4rem;width: 100%;}
	
	.section .min header{width: 100%;height: 0.84rem;position: fixed;top: 0;display: flex;justify-content: space-around;align-items: center;z-index: 100;}
	
	.section header img{width: 1.4rem;height: 0.32rem;}
	.section .search{width: 4.1rem;height: 0.6rem;background: #f5f5f5;display:flex;align-items:center;justify-content: space-around;border-radius: 5px;}
	.section input{outline:none;border: none;background: #f5f5f5;}
	.section .login{font-size: 12px;}
	
	.section .banner {height: 4rem;position: relative;overflow: hidden;}
	.section .banner ul{position: absolute;}
	.section .banner ul li{float: left;}
	.section .banner ul li img{height: 4rem;width:100%;}
	
	.conpany_info{height: 0.6rem;border: 1px solid #EEEEEE;display: flex;color: #b0a1a1;font-size: 12px;align-items: center;justify-content: space-around;}
	.pro_type_box{height: 1.7rem;border-bottom: 0.16rem solid #EEEEEE;display: flex;justify-content: space-around;align-items: center;}
	.pro_type_box ul{float: left;}
	.pro_type_box ul li a{display: flex;flex-direction: column;align-items: center;}
	.pro_type_box img{width: 0.96rem;}
	.pro_type_box span{font-size: 12px;color: black;}
	
	.section .featured{height: 0.9rem;overflow: hidden;}
	.section .xian{background:#bbb;height: 1px;width: 3.2rem;margin: 0.44rem auto;}
	.section .spirit{width: 90px; text-align: center;background-color: #fff;font-size: 16px;color: #222;margin: -36px auto 13px;}
	.section .line{border-bottom: 0.16rem solid #EEEEEE;}
	.section .line ul{display: flex;flex-wrap: wrap;justify-content: space-around;}
	.section .line ul li{float: left;width: 3.6rem;height: 5rem;border: 1px solid #efefef;margin-bottom: 0.16rem;}
	.section .line ul li a{display: block;}
	.section .line ul li img{width: 3.36rem;height: 3.6rem;display:block;margin: 0.1rem auto;}
	.section .line ul li p{font-size: 12px;margin-left: 0.1rem;color: black;}
	.section .line ul li .p2{color: #bf8ca1;overflow: hidden;text-overflow: ellipsis;}
	.section .more_btn{width: 2.4rem;margin: 0 auto;height: 0.68rem;line-height: 0.68rem;font-size: 12px;border: 1px solid #ddd;border-radius: 2px;text-align: center;margin-top: 0.1rem;margin-bottom: 0.4rem;color: #777;}
	
	.business{height: 7.52rem;border-bottom: 0.16rem solid #F5F5F5;}
	.business_box{height: 1.96rem;display: flex;justify-content: space-around;align-items: center;}
	.business_box img{width: 0.96rem;}
	.business_box span{font-size: 12px;color: #b4a7c3;}
	.section .banner2{margin-left: 13px;height: 269px;}
	.section .banner2 ul li{width: 7rem;height: 4.44rem;display: flex;justify-content: center;}
	.section .banner2 ul li img{width: 7rem;height: 4.44rem;position: absolute;}
	.section .banner2 ul li p{top: 240px;position: absolute;font-size: 12px;}
	.section .banner2 .paging{top: 3.8rem;position: absolute;}
	
	
	
</style>

