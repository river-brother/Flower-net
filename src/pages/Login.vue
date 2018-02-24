<template>
	<div class="login">
		<header>
			<img src="//img02.hua.com/m/icon/headChevronLeft.png"/>
			<p>会员登录</p>
			<img src="//img02.hua.com/m/icon/headerIconMore.png"/>
		</header>
		<div class="content">
			<p>使用手机验证登录</p>
			<div class="user">
				<input type="text" id="user" value="请输入邮箱、手机号码" />
			</div>
			<div class="pswd">
				<input type="text" id="pswd" value="请输入登录密码" />
			</div>
			<div class="mianfei">
				<input type="radio" id="rad"/> <p>一个月内免费登录</p>
			</div>
			<input type="button" id="btn" value="登录" />
			<ul class="login_an">
				<li>
					<i class="iconfont icon-shouji"></i>
					<p><router-link to="/register">快速注册</router-link></p>
				</li>
				<li>
					<i class="iconfont icon-jiesuo"></i>
					<p>找回密码</p>
				</li>
			</ul>
			<div class="login_qt">
				<div class="xian"></div>
				<p>其他方式登录</p>
			</div>
			<div class="login_qw">
				<div class="">
					<i class="iconfont icon-qq"></i>
					<span>QQ</span>
				</div>
				<div class="">
					<i class="iconfont icon-zhifubao"></i>
					<span>支付宝</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'login',
	}
</script>

<style>
	.login header{height: 0.9rem;display: flex;justify-content: space-between;align-items: center;background: #fafafa;border: 1px solid #e4e4e4;}
	.login header img{width: 0.48rem;height: 0.48rem;}
	.login header img:nth-child(1){margin-left: 0.4rem;}
	.login header img:nth-child(3){margin-right: 0.28rem;}
	.login .content{display: flex;flex-direction: column;justify-content: center;align-items: center;}
	.login .content p:nth-child(1){color: red;font-size: 12px;float: right;margin-right: -5rem;margin-top: 0.24rem;margin-bottom: 0.36rem;}
	.login .content .user{margin-bottom: 0.2rem;}
	.login .content .user,.pswd{width: 7.2rem;height: 0.8rem;border: 1px solid;border: 1px solid #e2e2e2;background: #f9f9f9;font-size: 14px;
	 		display: flex;align-items: center;}
	.login .content #user,#pswd{outline:none;color: #758989;width: 100%;border: none;margin-left: 0.1rem;}
	.login .mianfei{display: flex;margin-top: 0.6rem;align-items: center;margin-left: -4.2rem;margin-bottom: 0.2rem;}
	.login .mianfei #rad{width: 0.3rem;height: 0.3rem;}
	.login .mianfei p{font-size: 12px;color: #666666;}
	.login #btn{width: 7.2rem;height: 0.8rem;border: none;background: red;color: white;font-size: 15px;}
	.login_an{display: flex;justify-content: space-between;width:100%;padding: 0 0.13rem;margin-top: 0.48rem;}
	.login_an li{display: flex;align-items: center;font-size: 12px;color: #666666;}
	.login_an li i{margin-right: 0.1rem;}
	.login_qt{display: flex;flex-direction: column;align-items: center;text-align: center;}
	.login_qt .xian{width: 5.76rem;height: 1px;border: 1px solid #dddddd;margin-top: 1.08rem;}
	.login_qt p{font-size: 13px;width: 2.24rem;background: white;margin-top:-0.2rem;margin-bottom: 0.4rem;}
	.login_qw i{font-size: 38px!important;color: #79b0d1;margin-bottom: 0.3rem;}
	.login_qw span{color: #666666;font-size: 12px;}
	.login_qw{display: flex;}
	.login_qw div{display: flex;flex-direction: column;align-items: center;padding: 0 0.8rem;}
</style>