

//require('./modules/a')
require('./modules/header');
require('./modules/nav');




console.log("vendor.js")


$(function(){
	
	
	init();
	
	function init(){
		ceiling();
	}
	
	function ceiling(){
		let h = $(document).scrollTop();
		$(window).scroll(function(){
			
		})
	}
})
