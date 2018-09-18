
const cookie = require('../../../javascripts/index');


getNum();
$('.yzm').click(function(){
	getNum();
})
$('.change').click(function(){
	getNum();
})
//转换注册模式    
var flag1 = true;
$('.phone').click(function(){
	if(flag1){
		$(this).html('使用邮箱注册')
		
		$('#reg_e').addClass('hide')
		$('#reg_p').removeClass('hide')
		flag1 = !flag1;
	}else{
		$(this).html('使用手机号吗注册')
		$('#reg_p').addClass('hide')
		$('#reg_e').removeClass('hide')
		flag1 = !flag1;
	}
	getNum();  //过去随机验证码
//	let str = cookie.getCookie('list0');
})


//登录
$('#myform_e').submit(function(){
	
	let str = cookie.getCookie('user');
	
	//验证邮箱
	if( $('#pname_e').val() != str ){
		$('.clear1').css('display','block').html('请输入正确邮箱地址')
		return false;
	}
	
	//验证密码
	let reg2 = /^.{6,}$/ ;
	if( !reg2.test($('#pwd_e').val()) ){
		$('.clear1').css('display','block').html('请输入正确密码(6位以上字符)')
		return false;
	}
	
	//再次输入密码
	if( $('#re_pwd_e').val() != $('#pwd_e').val() ){
		$('.clear1').css('display','block').html('两次密码输入不同')
		return false;
	}
	
	//验证码
	if( $('#yzm_e').val() == "" ){
		$('.clear1').css('display','block').html('请输入验证码')
		return false;
	}else if( $('#yzm_e').val() != $('.yzm_e').html() ){
		$('.clear1').css('display','block').html('验证码错误')
		return false;
	}
	return true;
})
//
//
//$('#myform_p').submit(function(){
//	//验证手机号
//	let reg1 = /^[1][3,4,5,7,8][0-9]{9}$/;
//	if( !reg1.test($('#pname_p').val())){
//		$('.clear2').css('display','block').html('请输入正确的手机号')
//		return false;
//	}
//	
//	//验证密码
//	let reg2 = /^.{6,}$/ ;
//	if( !reg2.test($('#pwd_p').val()) ){
//		$('.clear2').css('display','block').html('请输入正确密码(6位以上字符)')
//		return false;
//	}
//	
//	//验证码
//	if( $('#yzm_p').val() == "" ){
//		$('.clear2').css('display','block').html('请输入验证码')
//		return false;
//	}else if( $('#yzm_p').val() != $('.yzm_p').html() ){
//		$('.clear2').css('display','block').html('验证码错误')
//		return false;
//	}
//	return true;
//})


















function rand( min,max ){
	return Math.round( Math.random()*(max-min)+min );
}

function getNum(){
	var str = "";
	for( var i=0 ; i<4 ; i++ ){
		str += rand( 0,9 );
	}
	$('.yzm').html(str)
}
getNum();