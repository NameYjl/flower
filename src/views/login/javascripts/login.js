
const index = require('../../../javascripts/index');

//随机验证产生码
index.getNum();
//验证码刷新
$('.yzm').click(function(){
	index.getNum();
})
$('.change').click(function(){
	index.getNum();
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
	index.getNum();  //过去随机验证码
//	let str = index.getCookie('user');
//let str = index.getCookie('user');
//	let json_e = JSON.parse(str);
//	console.log(json_e[0].userpwd)
})


//登录
$('#myform_e').submit(function(){
	
	let str = index.getCookie('user');
	let json_e = JSON.parse(str);
	//验证邮箱
	if( $('#pname_e').val() == "" || $('#pname_e').val() != json_e[0].username){
		$('.clear1').css('display','block').html('邮箱地址错误或用户名不存在')
		return false;
	}
	
	//验证密码
	if( $('#pwd_e').val() != json_e[0].userpwd ){
		$('.clear1').css('display','block').html('密码错误')
		return false;
	}

	return true;
})


$('#myform_p').submit(function(){
//	alert()
})

















//
