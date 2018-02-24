<template>
	<div class="mine">
		<header>
			<img src="//img02.hua.com/m/member/center/goBack.png"/>
			<img src="//img02.hua.com/m/member/center/backgroundv3.png"/>
			<div class="login">
				<p>Hi,欢迎来到花礼网</p>
				<router-link to="/login">登录/注册</router-link>
			</div>
		</header>
		<div class="top-bar">
			<ul>
				<li>
					<img src="//img02.hua.com/m/member/center/iconPcObligation@2x.png"/>
					<p>待付款</p>
				</li>
				<li>
					<img src="//img02.hua.com/m/member/center/iconPcExpress@2x.png"/>
					<p>今日配送</p>
				</li>
				<li>
					<img src="//img02.hua.com/m/member/center/iconPcEvaluate@2x.png"/>
					<p>待评价</p>
				</li>
				<li>
					<img src="//img02.hua.com/m/member/center/iconPcAllOrder@2x.png"/>
					<p>全部订单</p>
				</li>
			</ul>
		</div>
		<div class="link-box">
			<ul>
				<li>
					<img src="//img02.hua.com/m/member/center/iconPcTicket@2x.png"/>
					<p>优惠卷</p>
				</li>
				<li>
					<img src="//img02.hua.com/m/member/center/iconPcIntegral@2x.png"/>
					<p>积分</p>
				</li>
				<li>
					<img src="//img02.hua.com/m/member/center/iconClock@2x.png" style="margin-top: 0.3rem;"/>
					<p>生日/纪念日<br>提醒</p>
				</li>
				<li>
					<img src="//img02.hua.com/m/member/center/iconCollectDefault@2x.png"/>
					<p>我的收藏</p>
				</li>
				<li>
					<img src="//img02.hua.com/m/member/center/iconPcPay@2x.png"/>
					<p>在线付款</p>
				</li>
				<li>
					<img src="//img02.hua.com/m/member/center/bottomIconSeviceDefault@2x.png"/>
					<p>联系客服</p>
				</li>
				<li>
					<img src="//img02.hua.com/m/member/center/iconHelp@2x.png"/>
					<p>帮助</p>
				</li>
				<li>
					<img src="//img02.hua.com/m/member/center/iconAbout@2x.png"/>
					<p>关于花礼</p>
				</li>
				
			</ul>
		</div>
		<div class="account">
			<p>账户管理</p>
			<a href="">管理收货地址等 ></a>
		</div>
		<div class="banner-maidian">
			<a href="">
				<img src="//img02.hua.com/m/member/center/banner@2x.png"/>
			</a>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.mine header{height: 2.64rem;position: relative;}
	.mine header img:nth-child(1){width:0.48rem;height: 0.48rem;position: absolute;margin: 0.24rem 0.38rem;}
	.mine header img:nth-child(2){height: 2.64rem;}
	.mine header p,a{font-size: 12px;color: white;}
	.mine header .login{position: absolute;top: 0.8rem;left: 2.64rem;text-align: center;}
	.mine header .login a{display: block;line-height: 0.48rem;background: #fe6600;border-radius: 12px;letter-spacing: 2px;margin-top: 0.1rem;}
	.mine .top-bar{height:1.7rem;border-bottom: 0.2rem solid #f0efed;}
	.mine .top-bar img{width: 0.64rem;}
	.mine .top-bar p{font-size: 12px;color: #956695;}
	.mine .top-bar ul{height: 1.5rem;display: flex;justify-content: space-around;align-items: center;background:url(../../static/img/未标题-1.jpg)no-repeat 5.6rem center;}
	.mine .top-bar ul li{display: flex;flex-direction: column;align-items: center;}
	.mine .link-box{overflow: hidden;}
	.mine .link-box ul li{width: 25%;height: 1.86rem;float: left;border-right: 1px solid #eee;border-top: 1px solid #eee;text-align: center;display: flex;flex-direction: column;justify-content: center;align-items: center;}
	.mine .link-box img{width: 0.64rem;}
	.mine .link-box p{font-size: 12px;color: #666666;}
	.mine .account p{font-size: 14px;}
	.mine .account a{font-size: 11px;color: #666666;}
	.mine .account{height: 1.2rem;border-bottom: 0.2rem solid #f0efed;border-top: 0.2rem solid #f0efed;display: flex;justify-content: space-between;align-items: center;padding: 0 0.34rem;}
	.banner-maidian img{width: 100%;height: auto;}
	.banner-maidian{background: #f0efed;width: 100%;min-height: 3.2rem;}
</style>