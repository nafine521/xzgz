/**
 * jquery自定义滚动条插件
 * @author  blueni
 */

;(function( $ ){
	var isIe7 = /MSIE\s*?7.0/.test( navigator.userAgent.toUpperCase() );

	$.fn.scrollBar = function(){
		if( !this.length )return;
		this.each(function(){
			this.scrollBar = new ScrollBar( $(this) );
		});
		return this;
	}

	function ScrollBar( elem ){
		this.elem = elem;
		this.width = this.height = 0;
		_init.call( this , elem );
	}

	ScrollBar.prototype.scrollTo = function( left , top ){
		var pos = 0;
		var elem = this.elem;
		var domElem = elem[0];
		if( !isNaN(top) ){
			elem.find( '.scroll_bar_y' ).css({
				top : top + 'px'
			});
			elem.find( '.scroll_bar_x' ).css({
				top : this.height - 10 + top + 'px'
			});
			domElem.scrollTop = top;
		}
		if( !isNaN(left) ){
			elem.find( '.scroll_bar_x' ).css({
				left : left + 'px'
			});
			elem.find( '.scroll_bar_y' ).css({
				left : this.width - 10 + left + 'px'
			});
			domElem.scrollLeft = left;
		}
	}

	function _init( elem ){
		// 虽然这代码看着蛋疼，但想不到更好的办法了
		if( elem.css( 'box-sizing' ) == 'content-box' || isIe7 ){
			if( elem.find( '.scroll_bar_y' ).length && elem.find( '.scroll_bar_y' ).css( 'display' ) == 'block' ){
				elem.css({
					width : elem.width() + 10 + 'px',
					paddingRight : parseInt( elem.css( 'paddingRight' ) ) - 10 + 'px'
				});
			}
			if( elem.find( '.scroll_bar_x' ).length && elem.find( '.scroll_bar_x' ).css( 'display' ) == 'block' ){
				elem.css({
					height : elem.height() + 10 + 'px',
					paddingBottom : parseInt( elem.css( 'paddingBottom' ) ) - 10 + 'px'
				});
			}
		}
		elem.find( '.scroll_bar_x' ).remove();
		elem.find( '.scroll_bar_y' ).remove();
		elem.off();
		var _this = this,
			_w = _this.width = elem.outerWidth(),
			_h = _this.height = elem.outerHeight(),
			width = elem.css( 'width' ),
			height = elem.css( 'height' )
			display = elem.css( 'display' );
		var hiddenFather = getHiddenFather( elem );
		$.each( hiddenFather , function( index , fElem ){
			fElem.css( 'display' , 'block' );
		});
		elem.css({
			display : 'table-cell',
			width : 'auto',
			height : 'auto',
			overflow : 'hidden'
		});
		var w = Math.max( _w , elem.outerWidth() ),
			h = Math.max( _h , elem.outerHeight() );
		var children = elem.children();
		var maxSize;
		while( children.length ){
			maxSize = getMaxSize( children );
			w = Math.max( w , maxSize[0] );	
			h = Math.max( h , maxSize[1] );
			children = children.children();
		}
		function getMaxSize( elems ){	
			var w = [];
			var h = [];
			elems.each(function(){
				w.push( $(this).outerWidth() );
				h.push( $(this).outerHeight() );
			});	
			return [ Math.max.apply( null , w ) , Math.max.apply( null , h ) ];
		}
		$.each( hiddenFather , function( index , fElem ){
			fElem.css( 'display' , 'none' );
		})
		elem.css({
			display : display,
			width : width,
			height : height
		});
		if( elem.css( 'position' ) == 'static' ){
			elem.css( 'position' , 'relative' );
		}
		// 初始化滚动条与滚动按钮 
		var hBar = createScrollBar( 'horizontal' , _w , w , _h , h , elem );
		var vBar = createScrollBar( 'vertical' , _w , w , _h , h , elem );
		var hBtn = createScrollBtn( 'horizontal' , _w , w );
		var vBtn = createScrollBtn( 'vertical' , _h , h );
		hBar.append( hBtn );
		vBar.append( vBtn );
		elem.append( hBar );
		elem.append( vBar );
		var boundaryX = getBoundary( hBar , hBtn );
		var boundaryY = getBoundary( vBar , vBtn );
		var dragX = drag.call( _this , hBtn , boundaryX );
		var dragY = drag.call( _this , vBtn , boundaryY );
		// 鼠标滚动事件绑定
		mouseWheel( elem , function( ev , which ){
			if( h === _h )return;
			var top = dragY.top;
			top -= 10 * which;
			dragY.move( 0 , top );
			_this.scrollTo( dragX.left , top );
			ev.preventDefault();
			ev.stopPropagation();
		});
		// 点击滑动
		hBar.click(function( ev ){
			var pos = ev.pageX - hBar.offset().left;
			var left = dragX.left;
			left += pos > dragX.left ? dragX.width : -dragX.width;
			dragX.move( left , dragX.top );
		});
		vBar.click(function( ev ){
			var pos = ev.pageY - vBar.offset().top;
			var top = dragY.top;
			top += pos > dragY.top ? dragY.height : -dragY.height;
			dragY.move( dragY.left , top );
		});
		function getBoundary( pNode , cNode ){
			return [ pNode.width() - cNode.width() , pNode.height() - cNode.height() ];
		}
	}

	// 创建滚动条
	function createScrollBar( direction , _w , w , _h , h , elem ){
		var bar = $('<div class="scroll_bar_' + ( direction === 'horizontal' ? 'x' : 'y' ) + '"></div>');
		if( direction == 'horizontal' ){
			bar.css({
				width : _w + 'px',
				height : '10px',
				left : 0,
				top : _h - 10 + 'px'
			});
		}else{
			bar.css({
				width : '10px',
				height : _h + 'px',
				left : _w - 10 + 'px',
				top : 0
			});
		}
		bar.css({
			background : '#dedede',
			position : 'absolute',
			display : 'block',
			curser : 'default'
		});
		var paddingRight = parseInt( elem.css( 'paddingRight' ) ) || 0;
		var paddingBottom = parseInt( elem.css( 'paddingBottom' ) ) || 0;
		var isContentBox = elem.css( 'box-sizing' ) === 'content-box';
		if( w <= _w && direction == 'horizontal' || h <= _h && direction == 'vertical' ){
			bar.css( 'display' , 'none' );
		}else if( isIe7 || isContentBox ){
			if( direction == 'vertical' ){
				elem.css( 'paddingRight' , paddingRight + 10 + 'px');
				elem.css( 'width' , elem.width() - 10 + 'px' );
			}else{
				elem.css( 'paddingBottom' , paddingBottom + 10 + 'px' );
				elem.css( 'height' , elem.height() - 10 + 'px' );
			}
		}
		return bar;
	}

	// 创建滚动条里面的按钮
	function createScrollBtn( direction , _size , size ){
		var btn = $('<div class="scroll_btn_' + ( direction === 'horizontal' ? 'x' : 'y' ) + '"></div>');
		if( direction == 'horizontal' ){
			btn.css({
				width : Math.floor( _size * _size / size ) + 'px',
				height : '10px'
			});
		}else{
			btn.css({
				width : '10px',
				height : Math.floor( _size * _size / size ) + 'px'
			});
		}
		btn.css({
			background : '#666666',
			position : 'absolute',
			display : 'block',
			left : 0,
			top : 0
		});
		return btn;
	}

	// 加个拖拽
	function drag( elem , boundary ){
		var _this = this;
		var dragElem , pos = [ 0 , 0 ];

		var dragObj = {
			left : 0,
			top : 0,
			width : elem.width(),
			height : elem.height(),
			move : function( left , top ){
				left = left < 0 ? 0 : 
					   left > boundary[0] ? boundary[0] : left;
				top = top < 0 ? 0 :
					  top > boundary[1] ? boundary[1] : top;
				elem.css({
					left : left + 'px',
					top : top + 'px'
				});
				this.left = left;
				this.top = top;
				_this.scrollTo( left * _this.width / elem.width() , top * _this.height / elem.height() );
			}
		};

		elem.mousedown(function( ev ){
			if( ev.which !== 1 )return;
			dragElem = $( this );
			var l = parseFloat( dragElem.css( 'left' ) );
			var t = parseFloat( dragElem.css( 'top' ) );
			pos = [ ev.pageX - l , ev.pageY - t ];
		}).click(function( ev ){
			ev.stopPropagation();
		});

		$(document).mousemove(function( ev ){
			if( !dragElem )return;
			dragObj.move( ev.pageX - pos[0] , ev.pageY - pos[1] );
			ev.preventDefault();
			return false;
		}).mouseup(function( ev ){
			if( ev.which === 1 ){
				dragElem = null;	
			}			
		});
		return dragObj;
	}

	function mouseWheel( selector , callback ){
		callback = callback || function(){};
		$( selector ).on( 'mousewheel DOMMouseScroll' , function( evt ){
			var ev = evt.originalEvent;
			var which = ev.wheelDelta ? ev.wheelDelta > 0 : ev.detail < 0;
			callback( evt , which ? 1 : -1 );
		});
	}

	function getHiddenFather( elem ){
		var temp = [];
		while(elem[0] !== document.documentElement){
			if( elem.css( 'display' ) == 'none' ){
				temp.push( elem );
			}
			elem = elem.parent();
		}
		return temp;
	}

	// 使用自定义滚动条
	$(function(){
		$( '.scrollElem' ).scrollBar();		
	});

})( window.jQuery );
