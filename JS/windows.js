$(document).ready(function(){

	// 登录
	$('.btn1').on('click',function(){
		// alert('1');
		$('#window').removeClass('windows-show');
		$('#loginbox').removeClass('windows-show')
	});

	// 注册
	$('.btn2').on('click',function(){
		// alert('1');
		$('#window').removeClass('windows-show');
		$('#registeredbox').removeClass('windows-show')
	});

	// 第三方内容
	$('.other-login').on('click',function(){
		$('#loginbox').addClass('windows-show');
		$('#Thirdbox').removeClass('windows-show');
	});


	$('.other-reg').on('click',function(){
		$('#registeredbox').addClass('windows-show');
		$('#Thirdbox').removeClass('windows-show');
	});

	// 立即注册
	$('#now').on('click',function(){
		$('#loginbox').addClass('windows-show');
		$('#VIP-data').removeClass('windows-show');
	});


	// 忘记密码
	$('#forget').on('click',function(){
		$('#loginbox').addClass('windows-show');
		$('#f-password').removeClass('windows-show');
	});

	// 关闭按钮
	$('#close1').on('click',function(){
		$('#window').addClass('windows-show');
		$('#loginbox').addClass('windows-show');
	});

	$('#close2').on('click',function(){
		$('#window').addClass('windows-show');
		$('#registeredbox').addClass('windows-show');
	});

	$('#close3').on('click',function(){
		$('#window').addClass('windows-show');
		$('#Thirdbox').addClass('windows-show');
	});

	$('#close4').on('click',function(){
		$('#window').addClass('windows-show');
		$('#VIP-data').addClass('windows-show');
	});

	$('#close5').on('click',function(){
		$('#window').addClass('windows-show');
		$('#f-password').addClass('windows-show');
	});




});