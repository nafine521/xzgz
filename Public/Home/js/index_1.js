/**
 * index_1.js
 * @author blueni
 */

// 轮播图构造函数

// 轮播图原型



$(function(){
	// 页面图片加载------------------
	$( 'img' ).each(function(){
		var src = $(this).attr( '_src' );
		this.src = src || this.src;
	});

	// 首页的两个轮播图---------------
	$( '.banner-widget' ).each(function(){
		var box = $(this);
		var banner = new Banner();
		var list = box.find( 'li' );
		var len = banner.length = list.length;
		var control , timer;
		banner.lastIndex = len - 1;

		// 加载banner图片
		list.each(function(){
			var anchor = $(this).find( 'a' );
			anchor.css( 'backgroundImage' , 'url(' + anchor.attr( '_src' ) + ')' );
			$(this).removeClass( 'active' );
		});	
		list.first().addClass( 'active' );

		// 创建banner的控制点
		var controlHtml = '<div class="control-list"><span class="active">●</span>';
		for(var i=0;i<len-1;i++){
			controlHtml += '<span>○</span>';
		}
		controlHtml += '</div>';
		// 一张广告图，下面不要控制点
		controlHtml = list.length == 1 ? '' : controlHtml;
		box.append( controlHtml );
		control = box.find( '.control-list span' );

		// 实现banner的move方法

		// 事件绑定
		control.hover(function(){
			var index = $(this).index();
			clearTimeout( banner.timer );
			autoMove();
			banner.timer = setTimeout(function(){
				banner.jumpTo( index );
			} , 400);
		},function(){
			clearTimeout( banner.timer );
		});

		// 自动轮播 
		function autoMove(){
			clearInterval( timer );
			timer = setInterval(function(){
				banner.next();
			} , 4000 );
		}

		autoMove();	
		
	});


	// 首页数据统计效果-------------------
	function increment( data , tag , unit , rule ){
		var arr , timer , step , now = 1;
		// 金钱自增规则(默认规则)
		rule = rule || function(){
			var temp = [] , len , start , end;
			step = Math.max( 100 , Math.ceil( now / 3 ) );
			now += step;
			if( now > data ){
				now = data;
			}
			temp.res = now;
			now = now + '';
			len = now.length;
			start = len;
			for(var i=1;i<=Math.ceil( len / 4 );i++){
				end = start;
				start = len - i * 4;
				start = start < 0 ? 0 : start;
				temp.push( +now.substring( start , end ) );
			}
			now = +now;
			return temp;
		}
		function transfer( arr ){			
			var html = '';
			for(var i=0;i<arr.length;i++){
				html = '<em class="red">' + arr[i] + '</em>' + unit[i] + html;
			}
			tag.html( html );
		}
		timer = setInterval(function(){
			var arr = rule( data );
			transfer( arr );
			if( arr.res == data ){
				return clearInterval( timer );
			}
		} , 50 );
	}

	$( '.increment' ).each(function(){
		var tag = $(this);
		var size = tag.outerWidth();
		var data = +tag.html().replace( /[^0-9\.]/g , '' );
		tag.css( {
			'width' : size + 'px',
			'visibility' : 'visible' 
		});
		tag.html( '' );

		// 日期自增特效
		if( tag.hasClass( '.date_increment' ) ){
			var timeCount = 1;
			var sum = Math.floor( data / 10 ) * 12 + data % 10;
			increment( data , tag , [ '个月' , '年' ] , function(){
				var temp = [];
				timeCount++;
				if( timeCount > sum ){
					timeCount = sum;
				}
				var year = Math.floor( timeCount / 12 );
				var month = timeCount % 12;
				var temp = [ month ];
				year && temp.push( year );
				temp.res = ( year || '' ) + '' + month;
				return temp;
			});
			return;
		}

		// 金额自增特效
		increment( data , tag , [ '元' , '万' , '亿', ] );
	});

	$( '.increment1' ).each(function(){
		var tag = $(this);
		var size = tag.outerWidth();
		var data = +tag.html().replace( /[^0-9\.]/g , '' );
		tag.css( {
			'width' : size + 'px',
			'visibility' : 'visible' 
		});
		tag.html( '' );


		// 金额自增特效
		increment( data , tag , [ '人' , '' , '', ] );
	});

	$( '.increment3' ).each(function(){
		var tag = $(this);
		var size = tag.outerWidth();
		var data = +tag.html().replace( /[^0-9\.]/g , '' );
		tag.css( {
			'width' : size + 'px',
			'visibility' : 'visible' 
		});
		tag.html( '' );


		// 金额自增特效
		increment( data , tag , [ '天' , '' , '', ] );
	});	
	// 标进度条加载 
	// function loadingProgress( elem ){	
	// 	elem.each(function(){			
	// 		var progress = $(this).attr( 'progress' );
	// 		$(this).find( '.tag-progress-finished' ).animate({
	// 			width : progress
	// 		});	
	// 	});
	// }
	// $( '.tag-progress-bar' ).showInPageOnce(function( inScreen ){
	// 	if( inScreen ){
	// 		loadingProgress( $(this) );
	// 	}
	// });	


	// 理财专区标列表切换-----------------
	$( '.all-tag-list' ).each(function(index){
		var tabList = $(this).find( '.hotest-tag-tab li' );
		var tagContent = $(this).find( '.all-tag-content' );
		var isLoading = false;
		// ajax缓存
		var cache = [ tagContent.html() || '' , '' , '' , '' , '' ];
	
		// ajax加载
		function loadTagList( type , cb ){
			isLoading = true;
			if( cache[type] ){
				return setTimeout(function(){
					cb( cache[type] );				
				} , 300);
			}
			// 异步获取数据模拟
			$.ajax({
				url : 'getBorrowByType?type=' + type,
				method : 'get',
				success : function( res ){
					cache[type] = res;				
					cb( res );
				}
			});
		}
		var timer;
		tabList.hover(function(){
			if( isLoading )return;
			var index = $(this).index();
			var type = $(this).attr( 'tagType' );
			timer = setTimeout(function(){
				changeTag( index , type );
			} , 400 );
		} , function(){
			clearTimeout( timer );
		});
		function changeTag( index , type ){
			tagContent.addClass( 'loading' );
			if( !cache[index] ){
				tagContent.html( '' );
			}
			tabList.removeClass( 'active' );
			tabList.eq( index ).addClass( 'active' );
			loadTagList( type , function( html ){
				isLoading = false;
				tagContent.removeClass( 'loading' ).html( html );
				// 进度条特效
				loadingProgress( tagContent.find( '.tag-progress-bar' ) );
			});
		}
	});


	// 媒体报道&公告&友链
	(function(){
		var mediaList = $(".index_media_me li");
		mediaList.click(function(){
		   tab( mediaList , $( '.index_media_con .index_media_tab' ) , $(this).index() );
		});
		var dynamicList = $( ".index_media_ul2 li");
		dynamicList.click(function(){
			tab( mediaList , $( '.index_media_con1 .index_media_tab' ) , $(this).index() );
		});

		function tab( list , content , index ){
			if( index >= content.length )return;
			list.removeClass( 'active' );
			list.eq( index ).show();
			content.hide();
			content.eq( index ).show();
		}

		$(".index_foot_more").click(function(){
			$(".index_foot_dl").removeClass('active');
			$(this).hide();
		});
		
			//成果
	if(getQueryString("id")!=null&&getQueryString("source")=="chanet"){
		var date=new Date();
		var year=date.getFullYear();
		var month=date.getMonth()+1;
		var day=date.getDate();
		var hours=date.getHours();
		var minutes=date.getMinutes();
		var seconds=date.getSeconds();
		var time=year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds;
		Set_Cookie("chaFirstTime",time,60,"/","","");
		Set_Cookie("sId",getQueryString("id"),60,"/","","");
		Set_Cookie("source",getQueryString("source"),60,"/","","");
		Set_Cookie("url",getQueryString("url"),60,"/","","");
	}
	
	//富爸爸
	if(getQueryString("uid")!=null&&getQueryString("utm_source")=="fbb"){
		var date=new Date();
		var year=date.getFullYear();
		var month=date.getMonth()+1;
		var day=date.getDate();
		var hours=date.getHours();
		var minutes=date.getMinutes();
		var seconds=date.getSeconds();
		var time=year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds;
		Set_Cookie("chaFirstTime",time,60,"/","","");
		Set_Cookie("sId",getQueryString("uid"),60,"/","","");
		Set_Cookie("source",getQueryString("utm_source"),60,"/","","");
		Set_Cookie("url",getQueryString("url"),60,"/","","");
	}
	function getQueryString(name) {
	    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	    var r = window.location.search.substr(1).match(reg);
	    if (r != null) return unescape(r[2]); return null;
	}
	
	//写入cookie
	function Set_Cookie( name, value, expires, path, domain, secure ){
	    var today = new Date();
	    today.setTime(today.getTime());
	    if (expires){
	    	expires = expires * 1000 * 60 * 60 * 24;
	    }
	    var expires_date = new Date(today.getTime() + (expires));
	    document.cookie = name + "=" + escape(value) +
	    ((expires) ? ";expires=" + expires_date.toGMTString() : "") +
	    ((path) ? ";path=" + path : "") +
	    ((domain) ? ";domain=" + domain : "") +
	    ((secure) ? ";secure" : "");
	}
	})();

});