/**
 * 检测元素滚动到可视区
 * @author blueni
 */
(function( $ ){
	var scrollElems = [];
	var scrollOnceElems = [];

	$(window).on( 'scroll resize' , scrollAny );

	$( scrollAny );

	// 每次检测到元素在屏幕内都执行
	$.fn.showInPage = function( fn , arr ){
		arr = arr || scrollElems;
		var index;
		this.each(function(){
			if( ( index = objInArr( this , arr ) ) < 0 ){
				arr.push( { elem : this , fns : [ fn || function(){} ] } );
			}else{
				arr[index].fns.push( fn );
			}
		});
	}

	// 检测到元素在屏幕内即执行，只执行一次
	$.fn.showInPageOnce = function( fn ){
		this.showInPage( fn , scrollOnceElems );
	}

	function objInArr( obj , arr ){
		for(var i=0;i<arr.length;i++){
			if( obj === arr[i].elem ){
				return i;
			}
		}
		return -1;
	}

	function elemInWin( elem ){
		var $elem = $(elem);
		if( $elem.css( 'display' ) == 'none' )return false;
		var t = $elem.offset().top;
		var th = t + $elem.outerHeight();
		var st = document.documentElement.scrollTop || document.body.scrollTop;
		var swh = st + $(window).height();
		if( swh >= t && st <= th ){
			return true;
		}
		return false;
	}

	function scrollAny(){
		var scrollElem;
		var fns;
		for(var i=0;i<scrollElems.length;i++){
			scrollElem = scrollElems[i];
			fns = scrollElem.fns;
			for(var j=0;j<fns.length;j++){
				fns[j].call( scrollElem.elem , elemInWin( scrollElem.elem ) );	
			}			
		}
		i = 0;
		while( i < scrollOnceElems.length ){
			scrollElem = scrollOnceElems[i];
			fns = scrollElem.fns;
			if( elemInWin( scrollElem.elem ) ){
				scrollOnceElems.splice( i-- , 1 );
				for(var j=0;j<fns.length;j++){
					fns[j].call( scrollElem.elem , true );	
				}			
			}
			i++;
		}
	}

})( window.jQuery );