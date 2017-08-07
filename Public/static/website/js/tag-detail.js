/*与后台数据交互 start*/

var addInterestUsed = $("#addInterestUsed").val();
var bonusUsed = $("#bonusUsed").val();
var voucherUsed = $("#voucherUsed").val();

$("#btnsave").on('click',function() {//立即投标
   if($(this).hasClass("invest-btn")){
		tender();  
   }	
});

$(function(){

	$( '.countdown-tag' ).each(function(){
		var $this = $(this) , time;
		countDown( $this.html() , function( times , complete ){
			$this.show();
			time = ('0' + times[1]).slice( -2 ) + '时'
				+ ('0' + times[2]).slice( -2 ) + '分'
				+ ('0' + times[3]).slice( -2 ) + '秒';
			$this.html( time );
		});
	});
})

var borrowId = $("#borrowId").val();
function tender() {//投标
	var minTenderedSum = $("#minTenderedSum").val(); //最小投标金额
	var maxTenderedSum = $("#maxTenderedSum").val(); //最大投标金额，maxTenderedSum==''就没限制
	var usableSum = $("#useableSum").val(); //可用余额
	var transAmt = $("#borrowSum"+borrowId).val(); //投资金额
	var borrowWay = $("#borrowWay").val();
	var isSync = $("#isSync").val();
	var investAmt = $("#blue").val().replace( /,/g , '' );
	var transAmtReg = /^\d+(\.\d{2})?$/;
	if (transAmt == "") {
		xzalert("投标金额不能为空");
		$("#borrowSum"+borrowId).focus();
		return;
	} else if (!transAmtReg.test(transAmt)) {
		xzalert("投标金额必须为正整数！");
		$("#borrowSum"+borrowId).val("").focus().val(transAmt);
		return;
	} else if(transAmt.indexOf('.')>0){
		if(transAmt.substring(transAmt.indexOf('.')+1)!="00"){
			xzalert("投标金额必须为正整数！");
			$("#borrowSum"+borrowId).val("").focus().val(transAmt);
			return;
		}
	} else if(isSync == 0){
		huifuBox();
		return ;
	}else if (parseInt(transAmt) > parseInt(usableSum)) {
		xzalert("您的余额不足，请先充值！");
		return;
	}else if(parseInt(investAmt)< parseInt(transAmt)){
		xzalert("超过可投金额！");
		return;
	} else if (maxTenderedSum != "") {
		if (parseInt(transAmt) > parseInt(maxTenderedSum)) {
			xzalert("最大投标金额为：" + maxTenderedSum);
			$("#borrowSum"+borrowId).val("").focus().val(transAmt);
			return;
		}
	}
	if(borrowWay!=null && borrowWay=="3"){
		 if(transAmt%100!=0){
			xzalert("投标金额必须为100的倍数！");
			$("#borrowSum"+borrowId).val("").focus().val(transAmt);
			return;
		} 
	}

	if (!$("#agre").attr("checked")) {
		xzalert("请勾选我同意投资成功后自动生成《合同》");
		return;
	}
	var param = {};

	param["paramMap.id"] = borrowId;
	param["paramMap.amount"] = $("#borrowSum"+borrowId).val();
	

	var voucherId = ticketBox.getUsedTickets( '现金券' )['现金券'];
	var voucherIds = '';
	if(voucherId){
		$.each( voucherId , function( k , ticket ){
			voucherIds += ticket.id +",";
		});
		voucherIds = voucherIds.replace( /,$/ , '' );
	}
	
	param["paramMap.voucherIds"] = voucherIds;
	param["paramMap.voucherAmt"] = getVoucherCount();  //现金券
	if(ticketBox.getUsedTickets( '红利' )['红利'] && ticketBox.getUsedTickets( '红利' )['红利'][0]){
		param["paramMap.bonusAmt"] = (ticketBox.getUsedTickets( '红利' )['红利'][0].preferentialAmt);		
	}
	

	//param["paramMap.addInterestsAmt"] = ticketBox.getUsedTickets( '加息券' )['加息券'][0].preferentialAmt; 
	$.ajax({
		url : "newCheckBorrowInvest",
		data : param,
		dataType : "json",
		contentType : "text/html; charset=utf-8",
		async : false,
		success : function(data, status) {
			if(data.msg=="nologin"){
				loginWin(""+basePath+"/pro-details-"+borrowId+".html");
				return false;
			}else if(data.msg=="no_agree_risk_agreement"){
				newShowContract();
				return false;
			}
			if ("1" != data.msg) {
				if ("3" == data.msg) {
					$.dialog({
						title : "温馨提示",
						content : "<div>汇付天下暂时关闭</div>",
						fixed : true,
						lock : true,
						max : false,
						min : false,
						close : function() {}
					});
                } else if ("-1" == data.msg){
					xzalert("您不是首次投资，不能参加体验标活动");
					$("#schedulesSpan2").html(data.schedules);
					$("#schedulesSpan1").attr("w", data.schedules);
					return false;
				} else {
					xzalert(data.msg);
					//$("#schedulesSpan2").html(data.schedules);
					//$("#schedulesSpan1").attr("w", data.schedules);
					return false;
				}
			} else {
				var   dialogWin=popOut({
					title:"投标",
					content:'<div class="xz-alert-tipic2" style="margin-top:0;position:relative;left:-12px;"><span></span></div> <p class="big" >投标完成前请不要关闭此窗口  </p>  <strong class="big">请在汇付天下页面完成投标后再选择！</strong><div class="btns"  style="margin-top:20px;">\
                <a href="pro-details-'+borrowId+'.html" class="btn btn-green">已完成投标</a>\
                <a href="askIndexs-1-1.html" class="btn btn-red">投标遇到问题</a>\
               </div>'
				});
				dialogWin.box.addClass("xz-alert-win withdrawals-win");
				dialogWin.show();
				

				$("#form").submit();
			}
		},
		error : function(data, status, e) { // 服务器响应失败处理函数
			xzalert(data.msg);
		}
	});
}


// 隐藏用户账户余额
function hideUserAccount( flag ){
	// do ajax
	// 不返回任何东西
	var param = {};
	param["paramMap.flag"] = flag;
	$.post("changeUserAccount", param ,function(data) {
        

  })
}

// 计算投资收益&VIP收益&阿诺币
function investIncome( param , cb ){
	// 数据模拟
	
	$.post("newIncomeCalculate", param ,function(data) {
        if(data.result==1){
			/*$("#showIncome").html(data.sum+"元");
			$("#otherSum").html(data.otherSum+"元");
			$("#acoin").html(data.acoin+"个");
		}else{
			$("#showIncome").html("0.00");
			$("#otherSum").html("0.00");
			$("#acoin").html(0);*/
		var res = {
			"result":data.result,
			"sum":data.sum,
			"otherSum":data.otherSum,
			"acoin":data.acoin
		};
		cb( res );
	}
  })
	
}

// 获取优惠券
function getTickets( cb ){
	// 数据模拟
	var param={};
	param["paramMap.borrowType"]=1;//钱小猪
	param["paramMap.transAmt"] = $("#borrowSum"+borrowId).val(); //投资金额
	param["paramMap.deadline"] = $("#deadline").val();//该产品是否可用加息券
	param["paramMap.isDayThe"] = $("#isDayThe").val();
	param["paramMap.addInterestUsed"] = addInterestUsed;//该产品是否可用加息券
	param["paramMap.bonusUsed"] = bonusUsed;//该产品是否可用红利
	param["paramMap.voucherUsed"] = voucherUsed;//该产品是否可用现金券
	$.post("getCouponList",param,function(data){
		if(data.msg=="nologin"){
			loginWin(""+basePath+"/pro-details-"+borrowId+".html");
		}else{
			cb( data );
		}
     });
}


/*与后台数据交互 end*/

// 计算投资收益与阿诺币
function calcIncome( cb ){
	var money = parseFloat( $( '.invest-ipt' ).val() );
	if( !money ){
		return cb( { result : -1 } );
	}

	var borrowId = $("#borrowId").val();
	var amount = $("#borrowSum"+borrowId).val();
	var param = {};
	param["paramMap.borrowSum"] = amount;
	param["paramMap.yearRate"] = $("#annualRate").val();
	param["paramMap.borrowTime"] = $("#deadline").val();
	param["paramMap.repayWay"] = $("#paymentMode").val();
	param["paramMap.isDayThe"] = $("#isDayThe").val();
	param["paramMap.borrowId"] = borrowId;
	param["paramMap.voucherAmt"] = getVoucherCount();//现金劵金额
	if(ticketBox.getUsedTickets( '红利' )['红利'] && ticketBox.getUsedTickets( '红利' )['红利'][0]){
		param["paramMap.bonusAmt"]  = (ticketBox.getUsedTickets( '红利' )['红利'][0].preferentialAmt);		
	}

	if(ticketBox.getUsedTickets( '加息券' )['加息券'] && ticketBox.getUsedTickets( '加息券' )['加息券'][0]){
		param["paramMap.interestIds"]   = (ticketBox.getUsedTickets( '加息券' )['加息券'][0].id);
	 }

	investIncome( param , cb || function(){} );

}

function getVoucherCount(){
	var count = 0;
	var tickets = ticketBox.getUsedTickets( '现金券' )['现金券'];
	if(tickets){
		$.each( tickets , function( k , ticket ){
			count += ticket.preferentialAmt;
		});
	}
	return count;
}


// 设置弹出窗券种类,一定记得先设置它,顺序也很重要！！！
// (默认就是'现金券' , '红利' , '加息券')
//ticketBox.types = [  '红利' ,'现金券'  ,  '加息券' ];
ticketBox.types = [ ];

if(voucherUsed == 1) {
	ticketBox.types.push('现金券');
}
if(bonusUsed == 1) {
	ticketBox.types.push('红利');
}
if(addInterestUsed == 1) {
	ticketBox.types.push('加息券');
}

if(bonusUsed == 1) {
	// 红利使用规则
	ticketBox.pushRule( '红利' , function( tickets ){
		// 一次只能用一张,把已经用过的取消
		$.each( tickets['红利'] , function( index , ticket ){
			ticketBox.cancelUse( ticket );
		});
		// 返回msg为-1会把当前券选中
		return { msg : -1 };
	});
}

if(voucherUsed == 1) {
	// 现金券使用规则
	ticketBox.pushRule( '现金券' , function( tickets ) {
		var investCount = +$( '.invest-ipt' ).val() || 0;
		
		//当前选择的券
		var mqc = ticketBox.getTicketMinreqinvamt(ticketBox.currentTicket);		

		var minreqinvamt = 0;
		var rjson;
		$.each( tickets['现金券'] , function( index , ticket ) {
			minreqinvamt = ticketBox.getTicketMinreqinvamt(ticket);

		    if(minreqinvamt > 0) {
		    	mqc += minreqinvamt;
		    }else {
		    	mqc += ticket.preferentialAmt * 100;
		    }
		});
		
		return { msg : mqc <= investCount ? -1 : '所选的现金券金额大于可使用现金券额度' };
	});
}

if(addInterestUsed == 1) {
	// 加息券使用规则
	ticketBox.pushRule( '加息券' , function( tickets ){
		// 一次只能用一张,把已经用过的取消
		$.each( tickets['加息券'] , function( index , ticket ){
			ticketBox.cancelUse( ticket );
		});
		// 返回msg为-1会把当前券选中
		return { msg : -1 };
	});
}

// 其它验证规则,可添加多个(钱小猪只能用两种券)
ticketBox.pushRule( 'others' , function( tickets ){
	var count = 0;
	var checkedType = {};
	for(var type in tickets){
		if( tickets[type].length ){
			checkedType[type] = true;
			count++;
		}
	}
	if( !checkedType[ticketBox.currentType] ){
		count++;
	}
	
	return { msg : count > 2 ? '一次只能使用两种类型的券' : -1 };
});


// 提交之前的验证(返回的数据与券使用规则的数据相同)
ticketBox.beforeSubmit = function( tickets ){
	// do something  
	// propRule(type);//道具规则使用判断
	var voucherId = ticketBox.getUsedTickets( '现金券' )['现金券'];
	var voucherIds = '';
	if(voucherId){
		$.each( voucherId , function( k , ticket ){
		voucherIds += ticket.id +",";
	});
		voucherIds = voucherIds.replace( /,$/ , '' );
	}
	
	$("#voucherIds"+borrowId).val(voucherIds);
	if(ticketBox.getUsedTickets( '红利' )['红利'] && ticketBox.getUsedTickets( '红利' )['红利'][0]){
		$("#bonusIds"+borrowId).val(ticketBox.getUsedTickets( '红利' )['红利'][0].id);		
	}else{
		$("#bonusIds"+borrowId).val( '' );
	}
	if(ticketBox.getUsedTickets( '加息券' )['加息券'] && ticketBox.getUsedTickets( '加息券' )['加息券'][0]){
		$("#interestIds"+borrowId).val(ticketBox.getUsedTickets( '加息券' )['加息券'][0].id);
	 }else{
	 	$("#interestIds"+borrowId).val( '' );
	 }
	 var tip=null;
	 var describe = null;
	 if(tickets['红利'] || tickets['加息券'] || tickets['现金券'] ){	
			 tip="您已经使用了优惠劵";
			 describe='已使用优惠：<em class="tickets-used">';

		 if(tickets['红利']){
		 	  $.each( tickets['红利'] , function( index , ticket ){
			 	describe=describe+"红利"+ticket.preferentialAmt+"元; ";
			});
		 }
		 if(tickets['加息券']){
		 	 $.each( tickets['加息券'] , function( index , ticket ){
			 	describe=describe+"加息券"+ticket.preferentialAmt+"%; ";
			});
		 }
		 if(tickets['现金券']){
		 		var sum  = null;
		 	  $.each( tickets['现金券'] , function( index , ticket ){
		 	  		sum += +ticket.preferentialAmt;
			 });
		 	  if(sum != null){
		 	  	describe=describe+"现金券"+sum+"元; ";
		 	  }
		 	  
		 }
		 describe += '</em>';
	 }else{
		 tip="没有使用优惠券";
		 describe="";
	 }
	 //$(".ticket-status").attr("title",tip).poshytip( _opts );;
	 $(".ticket-status").html(describe);
	 calcIncome(function( data ){
			if( data.result != 1 ){
				data.sum = data.otherSum = '0.00';
				data.acoin = '0';
			}
			$( '.invest-income' ).html( data.sum );
			$( '.vip-income' ).html( data.otherSum );
			$( '.aruo-income' ).html( data.acoin );
		});
	
}

// 页面逻辑
$(function(){
	// 标进度效果
	function loadingProgress( elem ){	
		elem.each(function(){			
			var progress = $(this).attr( 'progress' );
			$(this).find( '.tag-progress-finished' ).animate({
				width : progress
			});	
		});
	}
	loadingProgress( $( '.tag-progress-bar' ) );

	// 账户余额的显示与隐藏
	$( '.hide-money' ).click(function(){
		var userAccount = $( '.user-count' );
		var icon = $(this).find( 'i' );
		var money = userAccount.attr( 'user-account' );
		var hideAccountFlag = false;
		if( icon.hasClass( 'icon-eyes-hover' ) ){
			icon.attr( 'class' , 'icon-eyes' );
			userAccount.html( money );
		}else{
			icon.attr( 'class' , 'icon-eyes-hover' );
			userAccount.html( '****' );
			hideAccountFlag = true;
		}
		hideUserAccount( hideAccountFlag );
	});

	// 输入框限制只能输入金额
	var investIpt = $( '.invest-ipt' );
	iptLimit( investIpt , 'number' );
	investIpt.on( 'keyup' , function(){
		var value = this.value;
		this.value = value.replace( /^0*|[^\d]/g , '' ); // 先去掉0开头以及非数字
				
	});

	// 输入金额后自动计算收益与阿诺币
	investIpt.blur(function(){
		calcIncome(function( data ){
			if( data.result != 1 ){
				data.sum = data.otherSum = '0.00';
				data.acoin = '0';
			}
			$( '.invest-income' ).html( data.sum );
			$( '.vip-income' ).html( data.otherSum );
			$( '.aruo-income' ).html( data.acoin );
		});
	});

	


	// 用券啦——》——》——》——》——》——》——》——》——》
	(function(){
		var btn = $( '#use-ticket-btn' );
		var ticketsIsGotten = false;
		btn.click(function(){
			if( !$( '.invest-ipt' ).val() ){
				return xzalert( '<p class="big">请输入投资金额！</p>' );
			}
			if( addInterestUsed == 0 && bonusUsed == 0 && voucherUsed == 0) {
				return;
			}
			
			showTicketWin();
		});

		function showTicketWin(){
			var preValue = $( '.invest-ipt' ).attr("preValue");
			var newinvestAmt = $( '.invest-ipt' ).val();
			if(preValue != newinvestAmt) {
				ticketsIsGotten = false;
				$( '.invest-ipt' ).attr("preValue", newinvestAmt);
			}

			if( ticketsIsGotten ){
				return ticketBox.win.show();
			}
			getTickets(function( data ){
				if(preValue == newinvestAmt) {
					ticketsIsGotten = true;
					$( '.invest-ipt' ).attr("preValue", newinvestAmt);
				}
				
				data['红利'] = data.hongli;
				data['加息券'] = data.jiaxi;
				data['现金券'] = data.cash;
				ticketBox.now = new Date( data.nowdate.time );
				ticketBox.getTickets(function( type ){
					return {
						then : function( cb ){
							cb(data[type].tickets);
						}
					};
				} , function(){
					// 获取券完成
					this.win.show();
					
					var xjq = data.cash.tickets;
					for(var i = 0; i < xjq.length; i++) {
						if( xjq[i].isRecommend == 1 ){
							ticketBox.useTicket( '现金券' , xjq[i] );
						}
					}
				});
			});
		}
	})();

/*项目资质 start*/
	var ImgBanner = (function(){

		var _controlTpl = '<dl class="product-banner-control">\
			<dt class="pre-img"><i class="icon-preImg"></i></dt>\
			{{ for(var i=0;i<num;i++){ }}<dd>●</dd>{{ } }}\
			<dt class="next-img"><i class="icon-nextImg"></i></dt>\
		</dl>';


		var _imgWall = function(){
			var html = '<div class="imgwall_shadow"></div><div class="img_wall"><img src="" class="current-img" /><button class="img_wall_close"></button><div class="pre-img"><button class="pre-img-btn"></button></div><div class="next-img"><button class="next-img-btn"></button></div></div>';

			function _ShowImg( imgs , box ){
				this.now = 0;
				this.last = null;
				this.box = box ? $(box) : $('body');
				this.imgs = imgs.find( 'img' );
				this.init();
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
						_this.last = _this.now;
						_this.now = _this.now === 0 ? _this.imgs.length - 1 : _this.now - 1;
						_this.show();
					});
					win.find('.next-img').click(function(){
						_this.last = _this.now;
						_this.now = _this.now === _this.imgs.length - 1 ? 0 : _this.now + 1;
						_this.show();
					});
					this.shadow.click(function(){
						_this.hide();
					});
					$('.section2 .aboutus-shadow').click(function(){
						_this.hide();
					});
				},
				show : function( img ){
					var _this = this;
					var win = this.wall = this.box.find( '.img_wall' ).last();
					win.find('img').remove();
					if( img && img.src ){
						this.imgs.each(function( index ){
							if( this.src === img.src ){
								_this.now = index;
							}
						});
					}
					var _img = document.createElement( 'img' );
					_img.src = this.imgs[this.now].src;
					win.append( _img );	
					_img.onload = function(){
						var _w = w = this.width;
						var _h = h = this.height;
						var winW = $(window).width();
						var winH = $(window).height();
						_w = _getSize( _w , winW );
						_h = _getSize( _h , winH );
						_img.style.width = _w + 'px';
						_img.style.height = _h + 'px';
						win.css( {
							width : _w + 'px',
							height : _h + 'px',
							left :  (winW - _w)/2 + 'px',
							top :  (winH - _h)/2 + 'px'
						});
						win.show( 'slow' ).css( 'overflow' , 'visible' );
						_this.shadow.show();
					}
				},
				hide : function(){
					this.wall.hide( 'slow' );
					this.shadow.hide();
				}
			};

			function _getSize( s1 , s2 ){
				while(s1 > s2)s1 = s1 * 0.9;
				return s1;
			}

			return function( imgs , box ){
				return new _ShowImg( imgs , box );
			};
		}();


		function _ImgBanner( args ){
			var box;
			if( typeof args === 'string' ){
				box = $(args);
			}
			this.banner = box ? box.find( 'ul' ) : $( args.banner );
			this.control = null;
			this.length = 0;
			this.now = +args.now || 0;
			this.imgWall = _imgWall( this.banner );
			_init( this );
		}

		function _init( imgBanner ){
			var box = imgBanner.banner.parent();
			imgBanner.length =  Math.ceil( imgBanner.banner.children().length / 3 );
			imgBanner.banner.css( 'width' , ( imgBanner.length + 3) * box.width() + 'px' );
			var control = htmltemp( _controlTpl , { num : imgBanner.length } );
			box.append( control );
			imgBanner.control = box.find( '.product-banner-control' );
			imgBanner.slide( 0 );
			_bindEvent( imgBanner );
		}

		function _bindEvent( imgBanner ){
			var control = imgBanner.control;
			var imgs = imgBanner.banner.find( 'img' );
			control.find( '.pre-img' ).click(function(){
				imgBanner.pre();
			});
			control.find( '.next-img' ).click(function(){
				imgBanner.next();
			});
			control.find( 'dd' ).each(function( index ){
				$(this).click(function(){
					imgBanner.slide( index );
				});
			});
			imgs.click(function(){
				imgBanner.imgWall.show( this );
			});
		}

		function _move( $elem , index ){
			var box = $elem.parent();
			var per = $elem.children().first(); 
			var dds = box.find( '.product-banner-control dd' );
			var lw = per.width() + 
					( parseInt( per.css('margin-left') ) || 0 ) + 
					( parseInt( per.css('margin-right') ) || 0 );
			var w = box.width();
			var perW = Math.round( w / lw ) * lw;
			dds.removeClass( 'focus' );
			dds.eq( index ).addClass( 'focus' );
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

	var imgB = new ImgBanner( '#imgBanner' );
	/*项目资质 end*/
});

//------------------显示反洗钱公告...start-----------------------
var contrastWin = popOut({
	title : '《反洗钱告知暨客户投资承诺书》和《投资风险提示书》',
	width : '680px',
	height : '500px',
	content : ''
});
var content = contrastWin.box.find( '.popout-content' );

function newShowContract(){
	var html ='<iframe style="border:none;overflow:auto;width:100%;height:385px;" src="showRiskAgreement"></iframe>';
		html += '<div style="border-top:1px dashed #c1c1c1;background:#f7f7f7;height:55px;">';
		html += '<a href="javascript:addUserAgreeRecord(1);" style="margin-left:18px; margin-top:10px; width:140px; height:40px; display:block; background:#1eae58; font-size:16px; text-align:center; color:#fff; border-radius:5px; line-height:40px;">同意</a>';
		html += '</div>';
	
	content.html(html);
	contrastWin.show();
}

//添加同意协议记录
function addUserAgreeRecord(aType){
	contrastWin.hide();
	$.get("addUserAgreeRecord",{aType:aType},function(){
		tender();
	});
}
//------------------显示反洗钱公告...end-----------------------