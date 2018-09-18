
const nav = () => {
	$('html','body').scroll(function(e){
		var e = e || event ;
		var top = document.body.scrollTop() || document.documentElement.scrollTop();
		console.log(top)
	})
	$('.hover').mouseover(function(){
		$(this).children('a').css({
			'background' : '#fff',
			'border': '1px solid #d9d9d9',
			'border-bottom': '1px solid #fff'
		})
		$(this).children('div').css('display','block')
	}).mouseout(function(){
		$(this).children('a').css({
			'background' : '#f2f2f2',
			'border': '1px solid #f2f2f2'
		})
		$(this).children('div').css('display','none')
	})
}
module.exports = nav //暴露nav