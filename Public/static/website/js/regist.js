// ajax start
// 检查手机号是否注册过
function telHasRegisted( tel , cb ){
	var res = false;
	cb( res );
}
// 验证图文码
function checkPicCode( code , cb ){
	var res = true;
	cb( res );
}
// 手机验证码检查
function checkTelCode( code , cb ){
	var res = true;
	cb( res );
}
// ajax end



//网站协议
function showProtocol(){
	var win = popOut({title:'网站服务协议' , content : '<iframe src="regAgreement?type=2&option01=1" style="width:680px;height:540px;border:0px"></iframe>' , width : '680px' , height : '600px'});
	win.show();
}

$(function(){
	
	var telCodeHasGet = false;	// 是否已发送手机验证码
	var identifyWin = popOut({
		width : '600px',
		height : '450px',
		title : '手机短信验证',
		content : '<div class="identify-win"><p class="top-tip">手机号码是您在小猪罐子的身份凭证。<br />为了确保您的手机可用，请填写您收到的手机验证码。</p><div class="identify-list"><div class="identify-line identify-line-phone"><span>手机短信验证：</span><strong class="user-phone">18682957955</strong></div><div class="identify-line"><span>图文验证：</span><div class="identify-pic"><i class="icon-identify"></i><input type="text" class="pic-identify-ipt" placeholder="图文验证" maxLength="4" /><img id="codeNum" src="verify?pageId=capacity" alt="图文验证码" class="identify-img" onclick="javascript:switchCode();"/></div><div class="err-line"></div></div><div class="identify-line"><span>短信验证码:</span><div class="identify-tel"><input type="text" class="tel-identify-ipt" placeholder="请输入验证码" maxLength="6" /><a href="javascript:;" class="get-identify-btn">获取验证码</a></div><div class="err-line"></div></div><a href="javascript:;" class="confirm-identify">确认</a></div></div>'
	});
	
	function errTip( elem , err ){
		elem.parents( '.form-line' ).find( '.err-line' ).html( '<em class="err-tag"><i class="icon-err"></i>' + err + '</em>' );
	}

	function clearErr(){
		initBtn();
		$( '.form-line .err-line' ).html( '' );
	}

	$('.regist-form').submit(function(){
		form1.checkAll();
		return false;
	});

	$('.tel-ipt').keyup(function(){  
        var _this = $(this);  
        if( /[^\d]/.test( _this.val() )){//替换非数字字符  
          var temp_amount = _this.val().replace(/[^\d]/g,'');  
          $(this).val(temp_amount);  
        }  
    })  

	;(function(){
		var checkPwd = /^[a-z0-9_]*(([a-z][a-z0-9_]*\w)|([a-z][a-z0-9_]*\d)|(\d[a-z0-9_]*[a-z]))[a-z0-9_]$/;

		//console.log( checkPwd.test('ac1232311') )
	})();


	// 验证密码强度
	function AuthPasswd(string) {
	    if(string.length >=6) {
	        if(/[a-zA-Z]+/.test(string) && /[0-9]+/.test(string) && /\W+\D+/.test(string)) {
	            noticeAssign(2);
	        }else if(/[a-zA-Z]+/.test(string) || /[0-9]+/.test(string) || /\W+\D+/.test(string)) {
	            if(/[a-zA-Z]+/.test(string) && /[0-9]+/.test(string)) {
	               noticeAssign(1);
	            }else if(/\[a-zA-Z]+/.test(string) && /\W+\D+/.test(string)) {
	                noticeAssign(1);
	            }else if(/[0-9]+/.test(string) && /\W+\D+/.test(string)) {
	                noticeAssign(1);
	            }else{
	                noticeAssign(0);
	            }
	        }
	    }else{ //长度不通过,不参与判段
	        noticeAssign(null);
	    }
	}

	function noticeAssign(num) {
		var psdIpt = $( '.psd-ipt' );

	    if(num ==0) {
	     	$('.view-pwd-list').hide();
   //      	$('.view-pwd-2').css({
   //      		'background':'none',
   //      		'color':'#ccc'
   //      	});
   //      	$('.view-pwd-3').css({
   //      		'background':'none',
   //      		'color':'#ccc'
   //      	});
			// $('.view-pwd-1').css({
			// 	'background':'#1eae58',
			// 	'color':'#fff'
			// });
			$('.regist-btn').addClass('disabled').removeClass('regist-btn');
			clearErr();
			return errTip( psdIpt , '密码强度较弱，请重新输入' );
	    }else if(num == 1){
	    	$('.view-pwd-list').show();
			$('.view-pwd-1').css({
        		'background':'none',
        		'color':'#ccc'
        	});
			$('.view-pwd-3').css({
        		'background':'none',
        		'color':'#ccc'
        	});
			$('.view-pwd-2').css({
				'background':'#1eae58',
				'color':'#fff'
			});
			$('.disabled').addClass('regist-btn').removeClass('disabled');
			return clearErr();
	    }else if( num == 2){
	    	$('.view-pwd-list').show();
	    	$('.view-pwd-1').css({
        		'background':'none',
        		'color':'#ccc'
        	});
            $('.view-pwd-2').css({
        		'background':'none',
        		'color':'#ccc'
        	});
			$('.view-pwd-3').css({
				'background':'#1eae58',
				'color':'#fff'
			});
			$('.disabled').addClass('regist-btn').removeClass('disabled');
			
			return clearErr();
	    }else{
	    	$('.view-pwd-list').hide();
	    	$('.regist-btn').addClass('disabled').removeClass('regist-btn');
	    	return errTip( psdIpt , '密码长度为6~20位' );
	    }
	}

	$( '.psd-ipt' ).keyup(function(){
		AuthPasswd( $(this).val() );
	})

	function initBtn(){



		$( '#regBtn' ).click(function(){

			var _class = $(this).attr('class');
			if( _class == 'disabled' ){
				return false;
			}

			clearErr();
			// 先同意协议
			if( !$( '.contract-line input[type="checkbox"]' )[0].checked ){
				return xzalert( '请先勾选同意小猪罐子平台注册及服务协议' , 1 , 3 );
			}
			var telIpt = $( '.tel-ipt' );
			var psdIpt = $( '.psd-ipt' );
			var tel = telIpt.val();
			var psd = psdIpt.val();
			if( !tel ){
				return errTip( telIpt , '请输入手机号码' );
			}
			if( !/^([1][3458][0-9]{9})|([1][7][013678]{1}[0-9]{8})$/.test( tel ) ){
				return errTip( telIpt , '手机号码格式不正确' );
			}
			if( !/^[\s\S]{6,20}$/.test( psd ) ) {
				return errTip( psdIpt , '密码长度为6~20位' );
			}		
			
			// 再验证手机号是否注册过
			telHasRegisted( tel , function( isRegisted ){
				$.post("ajaxCheckMobilePhoneRegister", {"paramMap.mobilePhone":tel}, function(data) {
					if (data == 6) {
						return errTip( telIpt , '该手机号已经被注册' );
					}else {
						// 验证手机号与密码通过，打开弹窗验证
						initIdentifyWin( tel );
					}
				});			
			});
		});
	}

	// 展开与收起推荐码
	// var toggleIcon = $( '.icon-point-right' );
	// $( '.invite-toggle' ).toggle(function(){
	// 	$( '.invite-form-line' ).slideDown();
	// 	toggleIcon.attr( 'class' , 'icon-point-down' );
	// },function(){
	// 	$( '.invite-form-line' ).slideUp();
	// 	toggleIcon.attr( 'class' , 'icon-point-right' );
	// });

	function winErrTip( elem , err ){
		elem.parents( '.identify-line' ).find( '.err-line' ).html( '<em class="err-tag"><i class="icon-err"></i>' + err + '</em>' );
	}

	function winClearErr(){
		$( '.identify-line .err-line' ).html( '' );
	}

	// 弹窗验证
	function initIdentifyWin( tel ){
		var telElem = $( '.user-phone' );
		telElem.html( tel );
		identifyWin.show();
	}

	// 获取手机验证码
	$( '.get-identify-btn' ).click(function() {
		winClearErr();
		if ( telCodeHasGet ) return;
		var picIpt = $( '.pic-identify-ipt' );
		var picCode = picIpt.val();
		if( picCode.length < 4 ){
			return winErrTip( picIpt , '请输入4位图文验证码！' );
		}
		var $this = $(this);
		checkPicCode( picCode , function( res ){
			param = {};
			param["paramMap.phone"] = $( '.tel-ipt' ).val();
			param["paramMap.type"] = 1;
			param["paramMap.vcode2"] = picCode;
			$.post("sendSMSReg", param,function(data) {
				if (data == 1) {
					$this.addClass( 'disabled' );
					//倒计时
					countDown( 119 , function( times , complete ){						
						if( complete ){							
							$this.removeClass( 'disabled' ).html( '获取验证码' );
							return telCodeHasGet = false;
						}else{							
							telCodeHasGet = true;
							$this.html( times[2] * 60 + times[3] + 's后重新获取' );
						}
						if((times[2] * 60 + times[3]) == '1') {
							switchCode();
						}
					});
				}else if(data == 2){
					return winErrTip( picIpt , '输入手机号格式不正确！' );
					switchCode();
				}else if(data == 3 || data == 4){
					return winErrTip( picIpt , '图形验证码不正确！' );
					switchCode();
				}else if(data == 5){
					return winErrTip( picIpt , '您的手机号已经注册！' );
					switchCode();
				}else{
					return winErrTip( picIpt , '短信验证码发送失败！' );
					switchCode();
				}
			});
		});
	});

	// 弹窗确定按钮点击验证
	$( '.confirm-identify' ).click(function(){
		winClearErr();
		var promise = deferred();
		var picIpt = $( '.pic-identify-ipt' );
		var picCode = picIpt.val();
		if( picCode.length < 4 ) {
			return winErrTip( picIpt , '请输入4位图文验证码！' );
		}

		var telCodeIpt = $( '.tel-identify-ipt' );		
		var telCode = telCodeIpt.val();
		if( telCode.length < 6 ){
			return winErrTip( telCodeIpt , '请输入6位手机验证码！' );
		}
				
		//提交数据
		var param = {};
		param["paramMap.cellPhone"] = $( '.tel-ipt' ).val();
		param["paramMap.imgCode"] = picCode;
		param["paramMap.vcode"] = telCode;
		param["paramMap.password"] = $( '.psd-ipt' ).val();
		param["paramMap.refferee"] = $("#refferee").val();
		param["paramMap.qudao"] = $("#qudao").val();
		param["paramMap.pioneer"] = $("#pioneer").val();
		param["paramMap.sys_user_id"] = getQueryString("sys_user_id");//开户后台账号id
		
		$.post("", param, function(data) {
			console.log(data);
			if (data.msg == "1") {
				window.location.href = basePath + "approveInit?uid="+$( '.tel-ipt' ).val();
			} else if(data.opt == "2") {
				return winErrTip( picIpt , '图文验证码错误！' );
			} else if(data.opt == "3") {
				return winErrTip( telCodeIpt , '手机验证码错误！' );
			}
		});
	});
	
	//获取url参数
	function getQueryString(name) { 
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
		var r = window.location.search.substr(1).match(reg); 
		if (r != null) {
			return unescape(r[2]);
		}
		return ""; 
	} 
});