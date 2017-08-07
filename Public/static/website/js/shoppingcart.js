/**
 * 购物车接口
 * @author  blueni
 */
;(function( $ ){
	// ajax here
	// 添加商品
	function addGoods( id , num , cb ){
		var res = true;
		cb( null , res );
	}

	// 删除商品
	function removeGoods( id , cb ){
		var res = true;
		// 只是测试一下。。。。
		setTimeout(function(){
			cb( null , res );	
		} , Math.random() * 5 * 1000);		
	}

	// 清空购物车
	function clearCart( cb ){
		var res = true;
		cb( res );
	}
	// ajax end

	// 保存事件回调的对象
	var _events = {},
		slice = Array.prototype.slice;

	// 导出shoppingCart到window对象，直接调用shoppingCart方法相当于添加商品方法
	var shoppingCart = window.shoppingCart = function(){
		return shoppingCart.addGoods.apply( shoppingCart , arguments );
	}

	// 添加商品
	shoppingCart.addGoods = function( id , num ){
		return deferred()(function( next ){
			if( _emit( 'addGoods' , id ) !== false ){
				addGoods( id , num , next );
			}
		});
	}

	// 删除商品
	shoppingCart.removeGoods = function( id ){
		return deferred()(function( next ){
			if( _emit( 'removeGoods' , id ) !== false ){
				removeGoods( id , next );
			}
		});
	}

	// 清空购物车
	shoppingCart.clear = function(){
		return deferred()(function( next ){
			if( _emit( 'clear' ) !== false ){
				clearCart( next );
			}
		});
	}

	// 事件监听 
	shoppingCart.on = function( type , fn ){
		if( typeof fn !== 'function' || typeof type !== 'string' )return;
		( _events[ type ] || ( _events[ type ] = [] ) ).push( fn );
		return this;
	}

	// 事件触发，不对外公开 
	function _emit( type , arg1 ){
		var fns = _events[ type ] || [];
		var args = slice.call( arguments , 1 );
		for(var i=0;i<fns.length;i++){
			if( fns[i].call( shoppingCart , args ) === false )return false;
		}
	}

})( window.jQuery );