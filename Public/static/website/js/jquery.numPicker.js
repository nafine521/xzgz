/**
 * 数量选择器
 * @author blueni
 */
(function( $ ){	
	$.fn.numPicker = function( args ){
		this.each(function(){
			new NumPicker( this , args );
		});
		return this;
	}

	// 构造函数
	function NumPicker( elem , args ){
		var _this = this;
		var max = this.max = +args.max || Infinity;
		this.beforeChange = args.beforeChange || function(){};
		this.afterChange = args.afterChange || function(){};
		elem = $(elem);
		iptLimit( elem , 'number' );
		var ipt = elem.find( '.num-ipt' );
		ipt
		// 键盘按下事件绑定
		.keydown(function( ev ){
			var value = +this.value || 1,
				which = ev.which;
			if( which === 38 ){
				value++;
				ev.preventDefault();
			}else if( which === 40 ){
				value--;
				ev.preventDefault();
			}
			setValue.call( _this , this , value , max );
		})
		// 键盘松开事件绑定
		.keyup(function(){
			setValue.call( _this , this , this.value , max );
		})
		// 失去焦点事件绑定
		.blur(function(){
			this.value = parseInt(this.value) || 1;
		});
		// 减按钮事件
		elem.find( '.minus-btn' ).click(function(){
			setValue.call( _this , ipt[0] , +ipt.val() - 1 , max );
		});
		// 加按钮事件
		elem.find( '.plus-btn' ).click(function(){
			setValue.call( _this , ipt[0] , +ipt.val() + 1 , max );
		});
	}

	// 设置文本框的值
	function setValue( ipt , value , max ){
		value = +value || 1;
		var _value = Math.min( value , max );
		while( value = _value , this.beforeChange( ipt , _value-- ) === false && _value > 0 );
		ipt.value = value;
		this.afterChange( ipt , value );
	}

})( window.jQuery );