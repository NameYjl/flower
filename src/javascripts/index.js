

const index = {
			setCookie: function( key , value , day ){
				if( day ){
					var now = new Date() ;
					now.setDate( now.getDate() + day ) ;
					document.cookie = key + "=" + value + ";expires=" + now + ";path=/;";
				}else{
					document.cookie = key + "=" + value + ";path=/;";		
				}
			},
			//获取cookie
			getCookie: function ( key ){
				var str = document.cookie ;
				if( str ){  //若存在cookie  根据key取对应值
					str = str.replace( /\s/g ); //去掉空格
					var arr = str.split( ";" );  //将字符串拆成数组
					for( var i = 0 ; i < arr.length ; i++ ){
						var item = arr[i].split( "=" );
						if( item[0] == key ){
							return  item[1] ;
						}
					}
					//循环结束后，若没有找到对应的key，返回""
					return "" ;
				}
				//cookie不存在，返回""
				return "" ;
			},


			//删除cookie    将key的值设置为""
			removeCookie: function( key ){
				index.setCookie( key , "" );
			},
			
			rand: function( min,max ){
				return Math.round( Math.random()*(max-min)+min );
			},
			
			getNum: function (){
				var str = "";
				for( var i=0 ; i<4 ; i++ ){
					str += index.rand( 0,9 );
				}
				$('.yzm').html(str)
			}
			
}



module.exports = index;
