$(function(){
	$('#quick_links').on('mouseenter','a',function(){
		$(this).css('background','#FF6A00')
//		$(this).siblings().show()
	}).on('mouseleave','a',function(){
		$(this).css('background','')
		$(this).siblings().hide()
	})
})