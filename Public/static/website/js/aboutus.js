var ImgBanner = (function(){
	// 幻灯片
	var _imgWall = function(){
		var html = '<div class="imgwall_shadow"></div><div class="img_wall"><img src="" class="current-img" /><button class="img_wall_close"></button><div class="pre-img"><input type="button" class="pre-img-btn" /></div><div class="next-img"><input type="button" class="next-img-btn" /></div></div>';
		var imgWalls = [];

		function _ShowImg( imgs , tagName , src ){
			this.now = 0;
			this.box = $('body');
			this.imgs = imgs.find( tagName || 'img' );
			this.imgSrc = src || 'src';
			this.init();
			imgWalls.push( this );
		}

		_ShowImg.prototype = {
			init : function(){
				this.box.append( html );
				var win = this.wall = this.box.find( '.img_wall' ).last();
				this.shadow = this.box.find( '.imgwall_shadow' ).last();
				var _this = this;
				win.find('.img_wall_close').click(function(){
					_this.hide();
				});
				win.find('.pre-img').click(function(){
					_this.now = _this.now === 0 ? _this.imgs.length - 1 : _this.now - 1;
					_this.show();
				});
				win.find('.next-img').click(function(){
					_this.now = _this.now === _this.imgs.length - 1 ? 0 : _this.now + 1;
					_this.show();
				});
				this.shadow.click(function(){
					_this.hide();
				});
			},
			show : function( img ){
				var src = this.imgSrc;
				var _this = this;
				var win = this.wall;
				win.hide();
				this.shadow.hide();
				win.find('img').remove();
				if( img && $(img).attr( src ) ){
					this.imgs.each(function( index ){
						if( $(this).attr( src ) === $(img).attr( src ) ){
							_this.now = index;
						}
					});
				}
				var _img = document.createElement( 'img' );
				_img.onload = _img.oncomplete = function(){
					var _w = w = _img.width;
					var _h = h = _img.height;
					var winW = $(window).width();
					var winH = $(window).height();
					while( _w > winW || _h > winH ){
						_w = Math.ceil( _w * 9 / 10 );
						_h = Math.ceil( h * _w / w );
					}
					_img.style.width = _w + 'px';
					_img.style.height = _h + 'px';
					win.css( {
						width : _w + 'px',
						height : _h + 'px',
						left :  (winW - _w)/2 + 'px',
						top :  (winH - _h)/2 + 'px'
					});
					win.fadeIn();
					_this.shadow.show();
				}
				_img.src = this.imgs.eq(this.now).attr( src );
				win.append( _img );	
			},
			hide : function(){
				this.wall.fadeOut();
				this.shadow.hide();
			}
		};

		function _getSize( s1 , s2 ){
			while(s1 > s2)s1 = s1 * 0.9;
			return s1;
		}

		$( window ).on( 'resize' , function(){
			var win;
			var winW = $(window).width();
			var winH = $(window).height();
			for(var i=0;i<imgWalls.length;i++){
				( imgWalls[i].wall.css( 'display' ) == 'block' ) && imgWalls[i].show();
			}
		});


		return function( imgs , tagName , src ){
			return new _ShowImg( imgs , tagName , src );
		};
	}();


	function _ImgBanner( args ){
		var box;
		if( typeof args === 'string' ){
			box = $(args);
		}
		this.banner = box ? box : $( args.banner );
		this.length = 0;
		this.now = +args.now || 0;
		this.imgWall = _imgWall( this.banner , args.tagName , args.imgSrc );
		_init( this );
		_bindEvent( this , this.banner.find( args.tagName || 'img' ) );
	}

	function _init( imgBanner ){
		var box = imgBanner.banner.parent();
		imgBanner.length = imgBanner.banner.children().length;
		imgBanner.slide( 0 );
	}

	function _bindEvent( imgBanner , imgs ){
		imgs.click(function(){
			imgBanner.imgWall.show( this , imgBanner.src || 'src' );
		});
	}

	function _move( $elem , index ){ 
		var box = $elem.parent();
		var per = $elem.children().first(); 
		var lw = per.width() + 
				( parseInt( per.css('margin-left') ) || 0 ) + 
				( parseInt( per.css('margin-right') ) || 0 );
		var w = box.width();
		var perW = Math.round( w / lw ) * lw;
		$elem.stop().animate( { left : -index * perW } );
	}

	_ImgBanner.prototype = {
		pre : function(){
			this.now = this.now === 0 ? 0 : this.now - 1;
			this.slide();
		},
		next : function(){
			this.now = this.now === this.length - 1 ? this.length - 1 : this.now + 1;
			this.slide();
		},
		slide : function( step ){
			var now = this.now = step === undefined ? this.now : +step;
			_move( this.banner , now );
		}

	};

	return _ImgBanner;
})();

// 顶部banner start
var aBanner = (function(){
	return {
		prevBtn : null,
		nextBtn : null,
		box : null,
		list : null,
		index : 0,
		length : 0,
		init : function( opts ){
			var _this = this;
			this.prevBtn = opts.prevBtn;
			this.nextBtn = opts.nextBtn;
			this.box = opts.box;
			this.list = opts.list;
			this.length = this.list.length;
			this.width = $(window).width();
			this.box.css( 'width' , this.width * this.length + 'px' );
			this.list.css( 'width' , this.width + 'px' );
			this.prevBtn.off().click(function(){
				_this.prev();
			});
			this.nextBtn.off().click(function(){
				_this.next();
			});
		},

		step : function( num ){
			num = +num || 0;
			this.index = num > this.length - 1 ? this.length - 1 :
						 num < 0 ? 0 : num;
			this.move();
		},

		move : function(){
			this.prevBtn.show();
			this.nextBtn.show();
			if( this.index == 0 ){
				this.prevBtn.hide();
			}else if( this.index == this.length - 1 ){
				this.nextBtn.hide();
			}
			this.box.stop().animate({
				left : -this.index * this.width
			});
		},

		prev : function(){
			this.step( this.index - 1 );
		},

		next : function(){
			this.step( this.index + 1 );
		}
	};
})();
// 顶部banner end




// 地图覆盖物类
var MapCover = function(){
	// 自定义覆盖物地图
	function SquareOverlay(center, length ){
	 this._center = center; 
	}    
	// 继承API的BMap.Overlay    
	SquareOverlay.prototype = new BMap.Overlay();

	// 实现初始化方法  
	SquareOverlay.prototype.initialize = function(map){    
		// 保存map对象实例   
		this._map = map;        
		// 创建div元素，作为自定义覆盖物的容器   
		var div = document.createElement("div");
		div.className = 'map-cover';
		div.innerHTML = '<div><strong>深圳市前海小猪互联网金融服务有限公司</strong> 地址：深圳市南山区深南大道9966号威盛科技大厦7楼<em></em></div>';
		div.style.position = "absolute"; 
		// 可以根据参数设置元素外观   
		div.style.width = "370px";
		div.style.height = "80px";
		// 将div添加到覆盖物容器中   
		map.getPanes().markerPane.appendChild(div);      
		// 保存div实例   
		this._div = div;      
		// 需要将div元素作为方法的返回值，当调用该覆盖物的show、   
		// hide方法，或者对覆盖物进行移除时，API都将操作此元素。   
		return div;    
	}

	// 实现绘制方法   
	SquareOverlay.prototype.draw = function(){   
	// 根据地理坐标转换为像素坐标，并设置给容器    
	 var position = this._map.pointToOverlayPixel(this._center);
	 this._div.style.left = position.x - 190 + "px";
	 this._div.style.top = position.y - 110 + "px";
	}

	return SquareOverlay;
}();


$(function(){

	// 顶部banner
	function createSuperBanner(){
		aBanner.init({
			prevBtn : $( '.super-banner .prev-banner' ),
			nextBtn : $( '.super-banner .next-banner' ),
			box : $( '.super-banner .banner-box' ),
			list : $( '.super-banner .b-content')
		});		
	}
	createSuperBanner();
	$(window).on( 'resize' , function(){
		createSuperBanner();
	} );

	// 固定导航
	(function(){	
		var fixedNav = $( '.aboutus-nav' );
		var navList = $( '.aboutus-nav li' );
		var sections = $( '.page-section' );
		var ot = fixedNav.offset().top;
		var navH = fixedNav.height();
		var timer;
		$( window).scroll(function(){
			clearTimeout( timer );
			timer = setTimeout( _autoNav , 30);
		});
		navList.click(function(){
			var index = $(this).index();
			$( 'html,body' ).stop().animate({
				scrollTop : sections.eq( index ).offset().top - navH
			} , _autoNav );
		});
		// 自动导航
		function _autoNav(){
			var st = document.documentElement.scrollTop || document.body.scrollTop;
			if( st >= ot ){
				fixedNav.addClass( 'fixed' );
			}else{
				fixedNav.removeClass( 'fixed' );
			}
			for(var i=0;i<sections.length;i++){
				if( !_sectionNotInScreen( sections.eq( i ) , st ) ){
					navList.removeClass( 'active' );
					navList.eq( i ).addClass( 'active' );
					return;
				}
			}
		}
		// 判断某一项是否不在屏幕内
		function _sectionNotInScreen( section , st ){
			var h = $(window).height();
			var sh = section.height();
			var pt = section.offset().top; 
			return pt + sh < st + navH + 10 || pt > st + h;
		}
		// 加个动画
		setInterval( dynamicNav , 5000 );
		_autoNav();
		dynamicNav();
		function dynamicNav(){
			fixedNav.addClass( 'animate' );
			setTimeout(function(){
				fixedNav.removeClass( 'animate' );
			} , 4000 );
		}
	})();

	// 团队介绍
	(function(){
		var tab = $( '.team-list li' );
		var content = $( '.team-detail li' );
		tab.mouseover(function(){
			var index = $(this).index();
			tab.removeClass( 'active' );
			$(this).addClass( 'active' );
			content.removeClass( 'active' );
			content.eq( index ).addClass( 'active' );
		});

		var indexLen = 190 ;
		var teamBox = $('.team-list ul');
		var liLen = $('.team-list ul li').length;
		var prev = $('.team-box .prev-list');
		var next = $('.team-box .next-list');
		var clickNum = moveLen = 1;
		//多余的长度
		var overLen = (indexLen * liLen) - (indexLen * 5);
		var PAGE = (overLen / indexLen) + 1 ;

		prev.click(function() {
			if (clickNum > 1) {
				clickNum--;
				moveLen = moveLen + indexLen; 
				teamBox.animate({
					'marginLeft': moveLen+'px'
				});
			}
		});

		next.click(function() {
			if (clickNum < PAGE) {
				clickNum++;
				moveLen = moveLen - indexLen; 
				teamBox.animate({
					'marginLeft': moveLen+'px'
				});
			}
			
		});
		function log(clickNum){
			console.log(clickNum);
		}
	})();

	// 员工风采 
	(function(){
		var bannerList = $( '.banner-list' );
		var prevBtn = $( '.prev-list' );
		var nextBtn = $( '.next-list' );
		var control = $( '.product-banner-control dd' );
		var w = bannerList.find( 'dd' ).width();
		var index = 0;
		var len = control.length;
		bannerList.css( 'width' , len * w + 'px' );
		control.click(function(){
			index = $(this).index();
			move( index );
		});
		prevBtn.click(function(){
			move( index - 1 );
		});
		nextBtn.click(function(){
			move( index + 1 );
		});
		function move( step ){
			step = +step || 0;
			index = step > len - 1 ? len - 1 :
				   step < 0 ? 0 : step;
			bannerList.stop().animate({
				left : - w * index
			});
			control.removeClass( 'focus' );
			control.eq( index ).addClass( 'focus' );
		}
		$( '.banner-list-box dd' ).each(function(){
			new ImgBanner({
				banner : this,
				imgSrc : '_src'
			});
		});
	})();

	// 资质荣誉
	new ImgBanner( '.honour-box' );

	// 里程碑
	(function(){
		eventstandout($('.time_line:first'));
		$('.time_line').mouseenter(function(event) {
			eventstandout($(this));
			eventrevert($(this).siblings());
		});
		$('.time_line2').mouseenter(function(event) {
			$(this).find('.inner').addClass('');
			$(this).find('h2').addClass('pb10');
			$(this).find('p').addClass('pt10');
			$(this).find('.hideimg').stop().fadeIn();
		});
		var timeline = $( '.landmark .time_line' );
		timeline.each(function( index ){
			if( index > 4 && index != timeline.length - 1 ){
				$(this).hide();
			}
		});
		$( '.view-more-history a' ).click(function(){
			timeline.fadeIn();
			$(this).hide();
		});

	})();

	// 地图	
	var map = new BMap.Map("baidumap");// 创建地图实例  
	var opts = {type: BMAP_NAVIGATION_CONTROL_LARGE};
	map.addControl(new BMap.NavigationControl(opts));
	var point = new BMap.Point(113.946561,22.546199);// 创建点坐标  
	map.centerAndZoom(point, 18); 
	var marker = new BMap.Marker(point);// 创建标注    
	map.addOverlay(marker); 
	var mySquare = new MapCover(point);
	map.addOverlay(mySquare);

	(function(){		
		// hash导航
		var hash = location.hash.substr( 1 );
		if( !hash )return;
		var section = $( '.page-section' ).eq( hash[0] - 1 );
		var t = section.offset().top;
		$( 'html,body' ).animate({
			scrollTop : t
		});
	})();

});


function eventstandout(_this){
	_this.find('.landmark_point').attr('src','http://mer.xiaozhu168.com/static/website/images/company-info/landmark_point2.png');
	_this.find('.left span').css('color','#90c320');
	_this.find('.left h3').css('color','#90c320');
	_this.find('.inner_left').stop().animate({'marginLeft':'0px'}, 200);
	_this.find('.inner').css('background','#90c320');
	_this.find('p').css('color','#fff');
	_this.find('h2').css('color','#fff');
	_this.find('.landmark_point').addClass('trf_rotate90');
}
function eventrevert(_this){
	_this.find('.landmark_point').attr('src','http://mer.xiaozhu168.com/static/website/images/company-info/landmark_point.png');
	_this.find('.left span').css('color','#ccc');
	_this.find('.left h3').css('color','#ccc');
	_this.find('.inner_left').stop().animate({'marginLeft':'-90px'}, 200);
	_this.find('.inner').css('background','#f4f4f4');
	_this.find('p').css('color','#999');
	_this.find('h2').css('color','#666');
	_this.find('.landmark_point').removeClass('trf_rotate90');
	_this.find('.inner').removeClass('');
	_this.find('h2').removeClass('pb10');
	_this.find('p').removeClass('pt10');
	_this.find('.hideimg').stop().fadeOut(10);
}