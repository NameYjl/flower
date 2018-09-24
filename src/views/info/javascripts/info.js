$(function(){
	
	init();
	
	function init() { // 初始化函数
//      getData(addFlowers); // 获取数据
        add_event_info(); // 给元素们绑定事件
    }
	
	function add_event_info(){
		$('.pro_small').on('mouseenter','img',function(){
			$(this).addClass('current').siblings().removeClass('current')
			let str = ` <img src="${$(this).data('src')}"/ class="bigImg"> `
//			console.log(src)
			$('.pro_big').html(str)
			
//			console.log($(this).index())
		})
	}
	
	
	
	
	
	
})
