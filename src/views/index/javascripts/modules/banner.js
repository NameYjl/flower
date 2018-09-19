
console.log('banner');

const Swiper = require('../../../../javascripts/swiper.min.js')

//$('html','body').load(function(){
	let timer = null ; 
	let index = 0 ;
	let $ulist = $(".banner_img li"); 
	let $olist = $(".banner_change li");
	for(let i = 0 ; i < $ulist.length ; i++){
		$ulist.eq(i).children(0).css('background','url(../../img/banner'+(i+1)+'.jpg) center no-repeat');
	}
	timer = setInterval( autoPlay , 5000 );
	function autoPlay(){
		index++;
		if( index == $olist.length ){
			index = 0;
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
//})
