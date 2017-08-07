
//横向拉锁条图片放大
var ImgBanner = (function(){
	// 幻灯片
	var _imgWall = function(){
		var html = '<div class="imgwall_shadow"></div><div class="img_wall"><img src="" class="current-img" /><button class="img_wall_close"></button><div class="pre-img"><input type="button" class="pre-img-btn" /></div><div class="next-img"><input type="button" class="next-img-btn" /></div></div>';
		var imgWalls = [];

		function _ShowImg( imgs , tagName ){
			this.now = 0;
			this.box = $('body');
			this.imgs = imgs.find( tagName || 'img' );
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
				var _this = this;
				var win = this.wall;
				win.hide();
				this.shadow.hide();
				win.find('img').remove();
				if( img && $(img).attr( 'src' ) ){
					this.imgs.each(function( index ){
						if( $(this).attr( 'src' ) === $(img).attr( 'src' ) ){
							_this.now = index;
						}
					});
				}
				var _img = document.createElement( 'img' );
				_img.onload = function(){
					var _w = w = this.width;
					var _h = h = this.height;
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
				_img.src = this.imgs.eq(this.now).attr( 'src' );
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


		return function( imgs , tagName ){
			return new _ShowImg( imgs , tagName );
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
		this.imgWall = _imgWall( this.banner , args.tagName );
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
			imgBanner.imgWall.show( this );
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

$(function(){
	new ImgBanner( '.board-list' );	
});
