
console.log('banner');

const Swiper = require('../../../../javascripts/swiper.min.js')
const Index = require('../../../../javascripts/index')

let timer = null ; 
let index = 0 ;
let flag = true;
let $ulist = $(".banner_img li"); 
let $olist = $(".banner_change li");
for(let i = 0 ; i < $ulist.length ; i++){
	$ulist.eq(i).children(0).css('background','url(../../img/banner'+(i+1)+'.jpg) center no-repeat');
}
timer = setInterval( autoPlay , 5000 );
function autoPlay(){
	if(flag){
		index++;
	}else{
		index--;
	}
	if( index == $olist.length ){
		index = 0;
	}
	if( index < 0 ){
		index = $olist.length-1;
	}
	$olist.eq(index).addClass("current").siblings().removeClass("current");
	$ulist.eq(index).fadeIn(1500).siblings().fadeOut(1000);
}
$olist.mouseenter(function(){
	clearInterval(timer);
	index = $(this).index()-1;
	autoPlay();
}).mouseleave(function(){
	timer = setInterval( autoPlay , 5000 );
})
//上一张
$('.prev').mouseenter(function(){
	clearInterval(timer);
	flag = false ;
}).mousedown(function(){
	autoPlay();
}).mouseleave(function(){
	flag = true ;
	timer = setInterval( autoPlay , 5000 )
})
//下一张
$('.next').mouseenter(function(){
	clearInterval(timer);
}).mousedown(function(){
	autoPlay()
}).mouseleave(function(){
	timer = setInterval( autoPlay , 5000 )
})


//推荐
$('.recommend').on('mouseenter','a',function(){
	$(this).animate({left:'-10px'})
}).on('mouseleave','a',function(){
	$(this).animate({left:"0"})
})
