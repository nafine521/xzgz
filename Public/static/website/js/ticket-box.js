/**
 * 优惠券使用弹窗
 * @author blueni
 */
;(function( $ ){

	window.ticketBox = {
		now : new Date(),							// 当前时间
		width : '790px',							// 弹出窗宽度
		height : '600px',							// 弹出窗高度
		win : null,									// 弹出窗
		confirmBtn : null,							// 立即使用按钮
		allTickets : {},							// 所有券
		rules : {},									// 验证券是否可以选用(function数组)
		types : [ '现金券' , '红利' , '加息券' ],	// 券种类
		useRules : {
			'现金券' : '- 现金券可用于投资，实际价值等值于对应面值的人民币价值；&lt;br&gt;- 例如投资时使用100元现金券，相当于在原有的投资金额加上100元人民币。&lt;br&gt;- 每种面额现金券起投金额和使用期限均不同，具体使用规则请查看说明，投资可使用多张现金券；&lt;br&gt;- 现金劵从获得开始计时，有效期以券上标识时间为准，请尽快使用；&lt;br&gt;- 现金券不适用于债权转让标;&lt;br&gt;- 单次投资只能使用2种道具；&lt;br&gt;- 平台会根据您输入的投资金额优先勾选现金券。' ,
			'红利' : '- 红利可用于投资，实际价值等值于对应面值的人民币价值；例如投资时使用10元红利，相当于在原有的投资金额加上10元人民币。&lt;br&gt;- 只要投资满100元，就可使用红利1张, 每次投资仅可使用一张红利。&lt;br&gt;- 红利从获得开始计时，有效期以券上标识时间为准，请尽快使用；&lt;br&gt;- 单次投资只能使用2种道具。' ,
			'加息券' : '- 加息券可用于投资，将产生额外的收益。使用加息券所产生的利息，将与到期的本金一起发放。&lt;br&gt;- 每次投资仅可使用一张加息券。&lt;br&gt;- 加息券从获得开始计时，有效期以券上标识时间为准，特殊情况以加息券标识的有效期为准，请尽快使用。&lt;br&gt;- 加息券不能用于新手体验标。&lt;br&gt;- 单次投资只能使用2种道具。'
		},											// 使用规则
		currentType : null,							// 当前准备使用的券类型
		currentTicket : null,						// 当前准备使用的券
		beforeSubmit : function(){},				// 确认使用前触发，建议在这里再次验证券是否可用

		/** 
		 * @name getTickets 获取券(不传入type时将获取所有种类的券)
		 * @description type为券类型,getTicketFn为获取方法(返回券数组)
		 * @return void
		 */
		getTickets : function( type , getTicketFn , afterGetTickets ){
			if( typeof type === 'function' ){
				afterGetTickets = getTicketFn;
				getTicketFn = type;
				type = null;
			}
			if( !getTicketFn )return;
			var types = [ type ];
			var _this = this;
			var index = 0;
			if( type === null ){
				types = this.types;
			}
			for(var i=0;i<types.length;i++){
				type = types[i];
				getTicketFn( type ).then(function( res ){
					index++;
					_this.allTickets[type] = !res || !res.length ? [] : res;
					// 所有券获取完成，开始渲染
					if( index == types.length ){
						_rendTickets( _this );
						// 渲染弹窗完毕，调用加载完券之后的方法
						( afterGetTickets || function(){} ).call( _this );
					}
				});	
			}			
		},

		/**
		 * @name check 分别检查各种券是否可用
		 * @param afterCheck(errs): 检查完之后的回调函数(errs为检查结果数组)
		 * @return void
		 */
		check : function( types , afterCheck ){
			if( typeof types === 'function' ){
				afterCheck = types;
				types = this.types;
			}else if( typeof types === 'string' ){
				types = [ types ];
			}
			afterCheck = afterCheck || function(){};
			var rules = this.rules , rule , tkts , j = 0,
				type , len = types.length , flag ,
				errs = {} , usedTkts = this.getUsedTickets();
			// 券验证完毕，再调用其它验证
			var _afterCheck = function(){
				var others = rules[ 'others' ] || [];
				j = 0;
				for(var i=0,len=others.length;i<len;i++){
					_eachCheck( 'others' , others[i]( usedTkts ) , function(){
						afterCheck( errs );
					} , len );
				}
				if( j == len ){
					afterCheck( errs );	
				}		
			}
			// 每种券的验证	
			for(var i=0;i<len;i++){
				type = types[i];
				rule = rules[type] || function(){ return { msg : -1 }; };
				tkts = this.getUsedTickets( type );
				_eachCheck( type , rule[0]( tkts ) , _afterCheck , len );
			}
			// 若是同步验证，直接调用_afterCheck
			if( j == len ){
				j = 0;
				return _afterCheck();
			}
			function _eachCheck( type , res , afterCheck , len ){
				if( res && res.then ){
					// 数据要提交到后台验证
					res.then(function( data ){
						if( errs[type] ){
							errs[type].push( data);
						}else{
							errs[type] = [ data ];
						}
						j++;
						// 有异步验证，这里是最后执行的
						if( j == len ){
							j = 0;
							afterCheck();
						}
					});
				}else{
					// 数据直接在前端做验证
					if( errs[type] ){
						errs[type].push( res );
					}else{
						errs[type] = [ res ];
					}
					j++;
				}
			}
		},

		/**
		 * @name pushRule 添加验证规则
		 * @param 券名称,rule为验证规则
		 * @return void
		 */
		pushRule : function( type , rule ){
			var types = this.types;
			var rules = this.rules;
			if( rules[type] ){
				rules[type].push( rule );	
			}else{
				rules[type] = [ rule ];
			}
		},

		/**
		 * @name find 通过id找到券
		 * @param number id 券ID
		 * @return json 券(找不到时返回undefined)
		 */
		find : function( id ){
			return this.each(function( ticket ){
				if( ticket.id === id ){
					return ticket;
				}
			});
		},

		/**
		 * @name  useTicket 选中某张券
		 * @param number id 券ID
		 * @param function cb( isChecked ) 回调函数，传入参数为券是否能被使用
		 * @return json 被使用的券
		 */
		useTicket : function( type , ticket ){
			if( !ticket )return;
			var _this = this;
			this.currentType = type;
			this.currentTicket = ticket;
			this.check( type , function( errs ){
				var res = errs[type][0];
				var err = '';
				if( res.msg != -1 ){
					err = res.msg;
				}
				// 其它验证
				var arr = errs['others'] || [];
				for(var i=0;i<arr.length;i++){
					if( arr[i].msg != -1 ){
						err = arr[i].msg;
						break;
					}
				}
				ticket.isChecked = err == '';
				_useTicket( _this.win , ticket.id , ticket.isChecked );
				_showErr( _this.win , err );
				_showUsedTickets.call( _this );
			});
		},

		/**
		 * @name 取消使用某张券
		 * @param json ticket 券对象
		 * @return void
		 */
		cancelUse : function( ticket ){
			ticket.isChecked = false;
			_useTicket( this.win , ticket.id , false );
			_showUsedTickets.call( this );
		},

		/**
		 * @name each 遍历券
		 * @param string type 遍历某种类型的券(省略时遍历所有券)
		 * @param function itrator 迭代器
		 * @return Object 迭代器在任何情况下返回都会中断并返回迭代器的返回值
		 */
		each : function( type , iterator ){
			if( typeof type === 'function' ){
				iterator = type;
				type = this.types.join( '-' );
			}
			var allTickets = this.allTickets;
			var res;
			iterator = iterator || function(){};
			for(var key in allTickets){
				if( type.indexOf( key ) < 0 )continue;
				var tickets = allTickets[key];
				for(var i=0;i<tickets.length;i++){
					if( ( res = iterator( tickets[i] , key ) ) !== undefined ){
						return res;
					}
				}
			}
		},

		/**
		 * @name getUsedTickets 获取被使用的券数组
		 * @param string type 某种类型的券(省略时为所有券)
		 * @return Array 券数组
		 */
		getUsedTickets : function( type ){
			var ticketArr = {};
			var iterator = function( ticket , key ){
				var arr = ticketArr[key];
				if( !ticketArr[key] ){
					arr = ticketArr[key] = [];
				}
				if( ticket.isChecked ){
					arr.push( ticket );
				}
			};
			if( type ){
				this.each( type , iterator );
			}else{
				this.each( iterator );
			}
			return ticketArr;
		},

		/**
		 * @name getTicketMinreqinvamt 获取被使用的券的最小投资金额
		 * @param Object obj 某种类型的券
		 * @return int 券的最小投资金额
		 */
		getTicketMinreqinvamt : function( obj ) {
			return _getMinreqinvamt(obj);
		}

	};

	// ---------------- 以下方法不对外公开 ----------------

	// 获取对象键个数
	function _keyLength( obj){
		var i=0;
		for(var key in obj)i++;
		return i;
	}

	// 渲染弹出窗
	function _rendTickets( tbox ){
		var win = tbox.win = popOut({
			width : tbox.width,
			height : tbox.height,
			title : '优惠券',
			content : _getTboxHtml( tbox  )
		});
		tbox.confirmBtn = tbox.win.box.find( '.use-tkt-btn' );
		tbox.confirmBtn.click(function(){
			var res = tbox.beforeSubmit( tbox.getUsedTickets() );
			if( res && res.then ){
				return res.then(function( data ){
					if( data.msg == '-1' ){
						win.hide();
					}else{
						_showErr( win , data.msg );
					}
				});
			}
			if( res === true || res === undefined || res.msg == '-1' ){
				win.hide();
			}else{
				_showErr( win , res.msg );
			}
		});
		_bindEvents( tbox );
	}

	// 弹出窗初始化&事件绑定
	function _bindEvents( tbox ){
		var box = tbox.win.box;
		// 使用规则展示
		box.find( '.ticket-rule' ).poshytip({
			className: "tip-yellowsimple-left",
			showTimeout: 1,
			alignTo: "target",
			alignX: "center",
			alignY: "top",
			offsetY: 10,
			offsetX: 20,
			allowTipHover: true
		});
		// 券展开&收起
		box.find( '.ticket-section' ).each(function( index ){
			var $this = $(this);
			var tktContent = $this.find( '.tickets-box' );
			// 先把券收起
			tktContent.slideUp();
			$this.find( '.show-tickets' ).click(function(){
				_foldTickets( tktContent , $(this) );
			});
			// 选中&取消选中券
			$this.find( '.ticket-pkg-new' ).click(function(){
				if( $(this).hasClass( 'checked' ) ){
					return tbox.cancelUse( tbox.find( +this.id ) );
				}
				tbox.useTicket( tbox.types[index] , tbox.find( +this.id ) );
			});
			// 券轮播图实现
			new _TicketBanner( $this.find( '.ticket-list' ) , $this.find( '.product-banner-control' ) );
		});
		// 默认展开第一种优惠券
		_foldTickets( box.find( '.tickets-box' ).first() , box.find( '.show-tickets' ).first() );
	}

	// 选中&取消选中券
	function _useTicket( win , id , flag ){
		var ticket = win.box.find( '#' + id );
		if( flag ){
			ticket.addClass( 'checked' );
		}else{
			ticket.removeClass( 'checked' );
		}
	}

	// 显示已经使用过的券
	function _showUsedTickets(){
		var tipTag = this.win.box.find( '.ticket-used-list' );
		var tickets , html = '您已勾选使用：<em>' , type , sum , temp;
		var hasNoTickets = true;
		for(var i=0;i<this.types.length;i++){
			type = this.types[i];
			tickets = this.getUsedTickets( type )[type];
			if( !tickets || !tickets.length )continue;
			hasNoTickets = false;
			if( type === '现金券' ){
				sum = 0;
				for(var j=0;j<tickets.length;j++){
					sum += tickets[j].preferentialAmt;
				}
				tickets = [ { preferentialAmt : sum } ];
			}
			if( type === '加息券' || type === '提现优惠券' ){
				html += tickets[0].preferentialAmt + '%';
			}else{
				html += tickets[0].preferentialAmt + '元';
			}
			html += type + '; ';
		}
		html += '</em>';
		if( hasNoTickets ){
			html = '您目前没有使用优惠券';
		}
		tipTag.html( html );
	}

	// 展开&收起券
	function _foldTickets( tktContent , btn ){
		var icon = btn.find( 'i' );
		var txt = btn.find( 'em' );
		if( icon.hasClass( 'active' ) ){
			icon.removeClass( 'active' );
			tktContent.slideUp();
			txt.html( '展开' );
		}else{
			icon.addClass( 'active' );
			tktContent.slideDown();
			txt.html( '收起' );
		}
	}

	// 错误提示
	var _errTimeout;
	function _showErr( win , err ){
		err = err || '';
		var errTag = win.box.find( '.ticket-use-error span' );
		errTag.show().html( err );
		clearTimeout( _errTimeout );
		_errTimeout = setTimeout(function(){
			errTag.html( '' );
		} , 2000 );
	}

	// 券轮播图
	function _TicketBanner( list , control ){
		this.list = list;
		this.control = control;
		var singleList = list.find( 'li' );
		this.length = singleList.length;
		this.perH = 135;	// 固定每屏券的高度
		this.now = -1;
		this.init();
	}

	// 券轮播图原型
	_TicketBanner.prototype = {

		// 初始化
		init : function(){
			var control = this.control;
			var _this = this;
			// 绑定上一屏按钮点击事件
			control.find( '.pre-img' ).click(function(){
				_this.prev();
			});
			// 绑定下一屏按钮点击事件
			control.find( '.next-img' ).click(function(){
				_this.next();
			});
			// 绑定某一屏按钮点击事件
			control.find( 'dd' ).each(function( index ){
				$(this).click(function(){
					_this.stepTo( index );	
				});				
			});
			// 默认跳转到第一屏
			this.stepTo( 0 );
		},

		// 上一屏
		prev : function(){
			return this.stepTo( this.now - 1 );
		},

		// 下一屏
		next : function(){
			return this.stepTo( this.now + 1 );
		},

		// 跳转到指定屏
		stepTo : function( step ){
			step = +step || 0;
			if( step == this.now || step < 0 || step > this.length - 1 )return;
			this.now = step; 
			var controllers = this.control.find( 'dd' );
			controllers.removeClass( 'focus' );
			controllers.eq( step ).addClass( 'focus' );
			this.list.stop().animate({
				scrollTop : this.perH * step
			});
		}
	};

	// 获取弹出窗html代码
	function _getTboxHtml( tbox ){
		var allTickets = tbox.allTickets;
		var useRules = tbox.useRules;
		var types = tbox.types;
		var type , len , useRule;
		var html = '<div class="ticket-section-list">';
		var length = _keyLength( allTickets );
		for(var i=0;i<length;i++){
			type = types[i];
			useRule = useRules[type] || '';
			len = allTickets[type].length;
			html += '<div class="ticket-section ticket-section' + ( i + 1 ) + '">';
			html += '<div class="ticket-brief">';
			html += '<strong>' + type + '</strong>';
			html += '<span>共<em class="tickets-count">' + len + '</em>张</span>';
			html += '<span class="ticket-rule" title="' + useRule + '">使用规则<i class="icon-tip-q"></i></span>';
			html += '<a href="javascript:;" class="show-tickets"><em>展开</em><i class="icon-down-green"></i></a>';
			html += '</div>';
			html += '<div class="tickets-box">';
			html += _getTicketHtml( type , allTickets[type] );
			html += _getControlHtml( len );
			html += '</div></div>';
		}
		html += '</div>';
		html += '<p class="ticket-used-list">您目前没有使用优惠券</p>';
		html += '<p class="ticket-use-error"><span></span></p>';
		html += '<a href="javascript:;" class="use-tkt-btn">立即使用</a>';
		return html;
	}

	// 获取券html代码
	function _getTicketHtml( type , tickets ){
		var html = '';
		//每页显示条数
		var pageView = 3; 
		var len = Math.ceil( tickets.length / pageView );
		var ticket;
		// 有可使用的券
		if( len ){
			html += '<ul class="ticket-list">';
			for(var i=0;i<len;i++){
				html += '<li>';
				for(var j=0;j<pageView;j++){
					ticket = tickets[i*pageView+j];
					if( !ticket )break;
					// 给所有的ticket加一个isChecked属性来判断券是否被使用
		
					ticket.isChecked = false;
				
					html +=	'<div class="ticket-pkg-new" id="' + ticket.id + '">';
					html += '<span class="ticket-num">';
					if( type == '现金券' || type == '红利' ){
						html += '<sup>￥</sup><em>' + ticket.preferentialAmt + '</em>';
						html += '<sub>元</sub> ';
						html += '<sub>' + type + '</sub>';
					}else{
						html += '<em>' + ticket.preferentialAmt + '</em>';
						html += '<sup>%</sup> ';
						html += '<sub>' + type + '</sub>';
					}
					html += '</span>';
					html += '<span class="ticket-use-condition">' + _getUseRule( type , ticket ) + '</span>';
					html += '<span class="ticket-expire">' + _getExpireTime( ticket , type ) + '</span>';
					html += '</div>';

					// html += '<span class="ticket-right">'
					// html += '<i class="icon-check-ticket"></i>';
					// html += '</span></div>';
				}
				html += '</li>';
			}
			html += '</ul>';
		}else{
			// 无券可用，怪我咯-__-!!!
			html += '<div class="no-tickets"></div>'
		}
		return html;
	}

	// 获取轮播控制器html
	function _getControlHtml( len ){
		if( !len )return '';
		var html = '<dl class="product-banner-control">';
		html += '<dt class="pre-img"><i class="icon-preImg"></i></dt>';
		for(var i=0;i<len;i+= 3 ){
			html += '<dd>●</dd>';
		}
		html += '<dt class="next-img"><i class="icon-nextImg"></i></dt>';
		html += '</dl>';
		return html;
	}

	// 获取券的最小投资金额
	function _getMinreqinvamt( obj ) {
		var mqv = 0;
		var crjson;
		if(typeof obj.rule === 'object') {
		    crjson = obj.rule;
		}else {
		    crjson = eval(obj.rule);
		}
		for(var o in crjson) {
			item = crjson[o].item;
			value = crjson[o].value
			if(item == 'minreqinvamt') {
				mqv = value;
			}
	    }
	    if(mqv == 0) {
	    	mqv = obj.preferentialAmt * 100;
	    }
	    return mqv;
	}

	// 获取券的使用期限
	function _getTicketDeadline( obj ) {
		var deadline = 0;
		var crjson;
		if(typeof obj.rule === 'object') {
		    crjson = obj.rule;
		}else {
		    crjson = eval(obj.rule);
		}
		for(var o in crjson) {
			item = crjson[o].item;
			value = crjson[o].value
			if(item == 'productterm') {
				deadline = value;
			}
	    }
	    if(deadline == 0) {
	    	//deadline = 30;
	    }
	    return deadline;
	}

	// 获取券的使用规则
	function _getUseRule( type , ticket ){
		var minreqinvamt = _getMinreqinvamt(ticket);
	    var mq = 0;
	    if(minreqinvamt > 0) {
	    	mq = minreqinvamt;
	    }else {
	    	mq = ticket.preferentialAmt * 100;
	    }

	    var deadline = _getTicketDeadline(ticket);

	    if(type === '现金券'){
	    	if(deadline > 0) {
	    		return '投资金额≥' + mq + '元、期限≥'+deadline+'天可用；债权转让不可用。';
	    	}else {
	    		return '投资金额≥' + mq + '元、期限无期限；债权转让不可用。';
	    	}
	    	
	    }else if(type === '红利'){
	    	return '单笔投资≥100；新手标、债权转让不可用；每次只可使用一张。'
	    }else{
	    	return '新手标、债权转让不可用；每次只可使用一张。'
	    }

		//return type === '现金券' ? '投资金额≥' + mq + '元可使用' : '新手标、债权转让不可用；每次只可使用一张。';
	}

	// 获取过期时间
	function _getExpireTime( ticket , type ){
		/*if(type == '加息券'){
			var time = new Date( +ticket.endTime.time );
			time = time.getFullYear() + '/' + ( time.getMonth() + 1 ) + '/' + time.getDate() + ' ' + time.getHours() + '时' + time.getMinutes() + '分';
			return time + ' 过期';
		}*/
		if( !ticket.endTime ){
			return '永久有效';
		}
		return Math.ceil( ( ticket.endTime.time - new Date( +ticketBox.now ) ) / 1000 / 60 / 60 / 24 ) +'天过期';
	}

})( window.jQuery );