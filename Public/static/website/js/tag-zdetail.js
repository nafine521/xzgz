/*与后台数据交互 start*/

$("#btnsave").on('click',function() {//立即投标
   if($(this).hasClass("invest-btn")){
		tender();  
   }
	
});
function tender() {//投标
	var borrowId = $("#borrowId").val();
	var minTenderedSum = $("#minTenderedSum").val(); //最小投标金额
	var maxTenderedSum = $("#maxTenderedSum").val(); //最大投标金额，maxTenderedSum==''就没限制
	var usableSum = $("#useableSum").val(); //可用余额
	var transAmt = $("#borrowSum").val(); //投资金额
	var residualAmount = $("#residualAmount").val();//可投金额
	var borrowWay = $("#borrowWay").val();
	var isSync = $("#isSync").val();
	var usableSumArray = usableSum.split(",");
	usableSum = usableSumArray.join("");
	var residualArray = residualAmount.split(",");
	residualAmount = residualArray.join("");
	var transAmtReg = /^\d+(\.\d{2})?$/;
	if (transAmt == "") {
		xzalert("投标金额不能为空");
		$("#borrowSum").focus();
		return;
	} else if (!transAmtReg.test(transAmt)) {
		xzalert("投标金额必须为正整数！");
		$("#borrowSum").val("").focus().val(transAmt);
		return;
	} else if(transAmt.indexOf('.')>0){
		if(transAmt.substring(transAmt.indexOf('.')+1)!="00"){
			xzalert("投标金额必须为正整数！");
			$("#borrowSum").val("").focus().val(transAmt);
			return;
		}
	} else if(isSync == 0){
		huifuBox();
		return ;
	}else if (parseInt(transAmt) > parseInt(usableSum)) {
		xzalert("您的余额不足，请先充值！");
		return;
	} else if (parseInt(transAmt) > parseInt(residualAmount)){
		xzalert("投标金额不能大于可投金额!");
		$("#borrowSum").val("").focus().val(transAmt);
		return;
	}else if (parseInt(residualAmount) >= 100 && parseInt(transAmt) < 100){
		xzalert("最小投资金额为100元!");
		$("#borrowSum").val("").focus().val(transAmt);
		return;
	}else if (maxTenderedSum != "") {
		if (parseInt(transAmt) > parseInt(maxTenderedSum)) {
			xzalert("最大投标金额为：" + maxTenderedSum);
			$("#borrowSum").val("").focus().val(transAmt);
			return;
		}
	
	} else if(parseInt(investAmt)< parseInt(transAmt)){
		xzalert("超过可投金额！");
		return;
	}
	if(borrowWay!=null && borrowWay=="3"){
		 if(transAmt%100!=0){
			xzalert("投标金额必须为100的倍数！");
			$("#borrowSum").val("").focus().val(transAmt);
			return;
		} 
	}

	if (!$("#agre").attr("checked")) {
		xzalert("请勾选我同意投资成功后自动生成合同 《合同》");
		return;
	}
	var param = {};

	param["paramMap.transferId"] = borrowId;
	param["paramMap.money"] = $("#borrowSum").val();
	
	$.ajax({
		url : "CheckCreditInvest",
		data : param,
		dataType : "json",
		contentType : "text/html; charset=utf-8",
		async : false,
		success : function(data, status) {
			console.log(data);
			if(data.msg=="nologin"){
				loginWin(""+basePath+"/credit-detail-"+borrowId+".html");
				return false;
			}else if(data.msg=="no_agree_risk_agreement"){
				newShowContract();
				return false;
			}
			if ("1" != data.code) {
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
                <a href="credit-details-'+borrowId+'.html" class="btn btn-green ">已完成投标</a>\
                <a href="askIndexs-1-1.html" class="btn btn-red ">投标遇到问题</a>\
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
//倒计时
$( '.countdown-tag' ).each(function(){
	var $this = $(this) , time;
	var  seconds=$this.html();
	countDown(seconds , function( times , complete ){
		if( complete ){
			return;
		}
		time =　('0' + ( times[0] * 24 + times[1] )　).slice( -2 ) + '时'
			+ ('0' + times[2]).slice( -2 ) + '分'
			+ ('0' + times[3]).slice( -2 ) + '秒';
		$this.html( time );
	});
});

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
	
	$.post("getCreditIncome", param ,function(data) {
        if(data.status == "success"){
			/*$("#showIncome").html(data.sum+"元");
			$("#otherSum").html(data.otherSum+"元");
			$("#acoin").html(data.acoin+"个");
		}else{
			$("#showIncome").html("0.00");
			$("#otherSum").html("0.00");
			$("#acoin").html(0);*/
		var res = {
			"status":data.status,
			"payAmount":data.objs[0].payAmount,
			"income":data.objs[0].income,
			//"acoin":data.acoin
		};
		cb( res );
	}
  })
	
}

/*与后台数据交互 end*/

// 计算投资收益与阿诺币
function calcIncome( cb ){
	var money = parseFloat( $( '.invest-ipt' ).val() );
	if( !money ){
		return cb( { result : -1 } );
	}

	var borrowId = $("#borrowId").val();
	var amount = $("#borrowSum").val();
	var param = {};
	param["paramMap.amount"] = amount;
	param["paramMap.yearRate"] = $("#annualRate").val();
	param["paramMap.borrowTime"] = $("#deadline").val();
	param["paramMap.repayWay"] = $("#paymentMode").val();
	param["paramMap.isDayThe"] = $("#isDayThe").val();
	param["paramMap.id"] = borrowId;
	//param["paramMap.voucherAmt"] = getVoucherCount();//现金劵金额
	//param["paramMap.bonusAmt"] =( ticketBox.getUsedTickets( '红利' )['红利'][0] || { preferentialAmt : '' } ).preferentialAmt;;//红利金额
	//param["paramMap.interestIds"] =  ( ticketBox.getUsedTickets( '加息券' )['加息券'][0] || { preferentialAmt : '' } ).preferentialAmt;;//加息劵id
	investIncome( param , cb || function(){} );
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
			if( data.status != "success" ){
				data.payAmount = data.income = '0.00';
				//data.acoin = '0';
			}
			$( '.tickets-used' ).html( data.payAmount );
			$( '.invest-income' ).html( data.income );
			//$( '.aruo-income' ).html( data.acoin );
		});
	});

	// 项目信息浮动导航
	(function(){
		var nav = $( '.project-nav' );
		var navList = $( '.project-nav li' );
		var sections = $( '.info-section' );
		var content = nav.parent();
		var t = content.offset().top;
		var h = content.height() - nav.height();
		var index;
		$(window).on( 'scroll resize' , function(){
			var st = document.documentElement.scrollTop || document.body.scrollTop;
			var pos = Math.max( st - t , 36 );
			pos = Math.min( pos , h );
			nav.stop().animate({ 'top' : pos } , _autoNav );
		});
		navList.click(function(){
			var index = $(this).index();
			$( 'html,body' ).stop().animate({
				scrollTop : sections.eq( index ).offset().top
			} , _autoNav );
		});
		// 自动导航
		function _autoNav(){
			for(var i=0;i<sections.length;i++){
				if( !_sectionNotInScreen( sections.eq( i ) ) ){
					navList.removeClass( 'active' );
					navList.eq( i ).addClass( 'active' );
					return;
				}
			}
		}
		// 判断某一项是否不在屏幕内
		function _sectionNotInScreen( section ){
			var h = $(window).height();
			var st = document.documentElement.scrollTop || document.body.scrollTop;
			var sh = section.height();
			var pt = section.offset().top; 
			return pt + sh < st || pt > st + h;
		}
	})();

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