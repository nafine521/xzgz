/**
 * jquery 分页组件
 * @author  blueni
 */

;(function( $ ){

	$.fn.pager = function( args ){
		this.each(function(){
			this.pager = new Pager( args );
			return this;
		});
	}

	// 分页插件构造函数
	function Pager( args ){
		this.now = +args.now || 1;
		this.maxPage = +args.maxPage || 5;
		this.pageSize = +args.pageSize || 1;
		this.ellipsis = !!args.ellipsis || false;
		this.render = args.render || function(){};	// 实例实现，渲染分页插件
		this.beforeJump = args.beforeJump || function(){};
		this.afterJump = args.afterJump || function(){};
	}

	Pager.prototype = {
			
		init : function( now , pageSize ){
			this.now = +now || 1;
			this.pageSize = +pageSize || 1;
			this.render( _getPages.call( this ) );
		},

		// 上一页
		prev : function(){
			this.pageTo( this.now - 1 );
		},

		// 下一页
		next : function(){
			this.pageTo( this.now + 1 );
		},

		// 跳转到指定页面
		pageTo : function( page ){
			var pageSize = this.pageSize;
			page = +page;
			if( page > pageSize || page < 1 || this.beforeJump( page ) === false )return;
			page = page || this.now;
			var pages = _getPages.call( this );
			this.render( pages );
			this.now = page;
			pager.afterJump();
		}

	};

	// 获取分页数据
	function _getPages(){
		var now = this.now;
		var pageSize = this.pageSize;
		var ellipsis = this.ellipsis;
		var maxPage = this.maxPage;
		var per = Math.ceil( maxPage / 2 );
		var pageStart = now - per < 1 ? 1 : now - per;
		var pageEnd = now + per > pageSize ? pageSize : now + per;
		var data = [];
		// 只有一页
		if( pageStart == pageEnd ){
			data.push( 1 );
			return data;
		}
		// 前面页数不够显示，加...
		if( pageStart > 2 ){
			data.push( '...' );
		}
		for(var page=pageStart;page<=pageEnd;page++){
			data.push( page );
		}
		// 后面页数不够显示，加...
		if( pageEnd < pageSize - 2 ){
			data.push( '...' );
		}
		return data;
	}

	// 小猪分页插件
	$.fn.xzPager = function( args ){
		this.each(function(){
			var pager = this.pager = new Pager( args );
			var $this = $(this);
			// 小猪分页渲染
			pager.render = function( data ){
				var page , now = this.now;
				var html = '<div class="main_c_list_page">';
					html += '<span>第' + now + '页/共' + this.pageSize + '页</span>';
				if( data.length > 1 ){
					html += '<a class="previousPage" href="javascript:;"></a>';
					for(var i=0;i<data.length;i++){
						page = data[i];
						if( page == '...' )continue;
						html += '<a href="javascript:;"' + ( page == now ? ' class="mr_a"' : '' ) +' >' + page + '</a>';
					}
					html += '<a class="nextPage" href="javascript:;"></a>';
				}
				html += '</div>';
				$this.html( html );
				_bindEvents( $this , pager );
			}	
		});
		return this;
	}

	// 小猪分页事件绑定
	function _bindEvents( elem , pager ){
		var pages = elem.find( 'a' );
		pages.click(function(){
			var $this = $(this);
			if( $this.hasClass( 'previousPage' ) || $this.hasClass( 'nextPage' ) || $this.hasClass( 'mr_a' ) )return;
			pager.pageTo( $this.html() );
		});

		elem.find( '.previousPage' ).click(function(){
			return pager.prev();
		});

		elem.find( '.nextPage' ).click(function(){
			return pager.next();
		});
	}

})( window.jQuery );