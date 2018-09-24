
$(function(){
	
	 init();

    function init() { // 初始化函数
        getData(addFlowers); // 获取数据
//      add_event_listener(); // 给元素们绑定事件
    }
	
	function getData(callback){
		$.ajax({
			type:"get",
			url:"../../data/list.json",
			async:true,
			success : function(res){
				if (res.code == 2) {
	                callback(res.data); // 将数据交由回调函数处理
	            } else {
	                alert('接口获取失败');
	            }
			}
		});
	}
	
	function addFlowers(data) { // 能接收到需要渲染的数据，作用是渲染数据
        var str = ''
        data.forEach(item => {
            str += getList(item);
        });
        $('.flower_list').html(str);
    }
	
	
	
	
	
	function getList( list ){
		let { list_id, list_name, list_price, list_description, list_src,list_msg } = list;
		return `<li>
                    <a href="../info/info.html" target="_blank">
                        <div class="item-img">
                            <img src="${list_src}">
                        </div>
                        <div class="product-info">
                            <p class="promotion">${list_description}&nbsp;</p>
                            <h5 class="name" style="overflow: hidden; height: 20px; line-height: 20px;">${list_name}</h5>
                            <p class="desc">${list_msg}</p>
                            <div class="box">
                                <span class="price" data-id="1060015">¥&nbsp;${list_price}</span>
                                <span class="btn-buy"></span>
                            </div>
                        </div>
                    </a>
	            </li>`
	}
})
