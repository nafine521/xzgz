/**
 * xz168公用js
 * @author blueni
 */
var _py , _paq; // 品友统计全局变量
var _location = (window.location + '').split('/');
//var basePath = _location[0]+'//'+_location[2];
var basePath = $('#jsLoginWinBasePath').val();
var cururl = window.location.href;
var JPlaceHolder;

(function ($) {
    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
})(jQuery);

if( !window.console ){
    window.console = {
        log : function(){},
        dir : function(){},
        error : function(){}
    };
}
(function($, require) {
	// commonjs 内容只加载执行一次
	if( window.__xzCommon )return;
	window.__xzCommon = true;
    // 对象属性与方法扩展
    function _extend(obj1, obj2) {
        if (!obj2) {
            obj2 = obj1;
            obj1 = window;
        } else if (typeof obj1 === 'string') {
            var temp = {};
            temp[obj1] = obj2;
            obj2 = temp;
            obj1 = window;
        }
        for (var key in obj2) {
            if (!obj1[key]) {
                obj1[key] = obj2[key];
            }
        }
        return obj1;
    }
    // 将_extend方法扩展到window对象上
    _extend('extend', _extend);

    // 自定义checkbox
    $(function() {
        $('.checkbox').on('click', _checkBox).each(_checkBox);

        function _checkBox() {
            var $this = $(this);
            var checkbox = $this.find('input[type="checkbox"]')[0];
            if (checkbox.checked) {
                $this.addClass('checked');
            } else {
                $this.removeClass('checked');
            }
        }
    });

    // cookie
    (function() {

        function _get(name) {
            var cooArr = document.cookie.split(/;\s*/),
                temp;
            for (var i = 0; i < cooArr.length; i++) {
                temp = cooArr[i].split('=');
                if (name === temp[0]) {
                    return unescape(temp[1]);
                }
            }
        }

		function _set( opts ){
			if( !opts.key )return;
			var date = new Date();
			date.setTime( date.getTime() + ( opts.expires || 1 ) * 24 * 3600 * 1000 );
			var expires = date.toGMTString();
			var key = opts.key,
				value = opts.value,
				path = opts.path || '/',
				domain = opts.domain || ' ';
			document.cookie = opts.key + '=' + escape( opts.value )
							  + '; path=' + path
							  + '; domain=' + domain
							  + '; expires=' + expires;
		}

        _extend('cookie', function(opts) {
            if (!opts) return;
            if (typeof opts === 'string') {
                return _get(opts);
            }
            return _set(opts);
        });

    })();

	// 用户是否登录
	_extend( 'userIsLogin' , function( callback ){
		$.ajax({
			method : 'post',
            type:'POST',
			url : '/Public/ogin?t=' + +new Date(),
			success : function( res ){				
				callback( res.msg === 1 );		
			}
		});
	});

    // 用户是否登录
    _extend( 'userIsLoginAsync' , function( callback ){
        $.ajax({
            method : 'post',
            type:'POST',
            async : false,
            url : '/Public/ogin?t=' + +new Date(),
            success : function( res ){              
                callback( res.msg === 1 );      
            }
        });
    });

    // 格式化显示数字
    _extend('formatNum', function(num, toMoney) {
        num = num + '';
        var hasDot = num.indexOf('.') >= 0,
            suffix = '',
            _num = num;
        // 有小数点
        if (hasDot) {
            suffix = num.substr(num.indexOf('.'));
            _num = num.substr(0, num.indexOf('.'));
        }
        var temp = _num.split('').reverse();
        // 遍历数字每隔3个数加一个逗号
        for (var i = j = 0, len = temp.length; i < len; i += 3) {
            if (i) {
                temp.splice(i + j, 0, ',');
                j++;
            }
        }
        temp = temp.reverse().join('');
        if (toMoney) {
            suffix = suffix || '.00';
            suffix = (suffix + '00').substr(0, 3);
            return temp + suffix;
        }
        return temp;
    });

    // 输入框输入内容限定
    _extend('iptLimit', function(ipt, type) {
        var numArr = [96, 97, 98, 99, 100, 101, 102, 103, 104, 105, //小键盘数字 
            48, 49, 50, 51, 52, 53, 54, 55, 56, 57 //大键盘数字
        ];
        var floatArr = numArr.slice().concat([110, 190]); // 小数点
        ipt.on('keydown', function(ev) {
            switch (type) {
                case 'number':
                    return _limitPress(ev, numArr);
                case 'float':
                    return _limitPress(ev, floatArr);
            }
        });

        function _limitPress(ev, arr) {
            var which = ev.which;
            arr = arr || [];
            arr = arr.concat([ 35, 36, 37, 38, 39, 40, 8, 46, 116, 9 ]);
            for (var i = 0; i < arr.length; i++) {
                if (which === arr[i]) {
                    return;
                }
            }
            ev.preventDefault();
        }
    });

    // 输入框特殊字符限制(请在需要限制输入特殊字符的文本框内加上class="special_limit")
    $(function(){
        function checkSpecialChar( value ){
            var i=0 , char , str = '' ,
                specialChars = '<>?=\'"';   // 特殊字符集
            while( char = value.charAt( i++ ) ){
                if( !~specialChars.indexOf( char ) ){
                    str += char;
                }
            }
            return str;
        }
        $( '.special_limit' ).keyup(function( ev ){
            var value = this.value;
            var str = checkSpecialChar( value.slice( -1 ) );
            this.value = value.substr( 0 , value.length - 1 ) + str;
        }).change(function(){
            this.value = checkSpecialChar( this.value );
        });
    });

    // 倒计时
    _extend('countDown', function(time, callback) {
        var complete = false;
        var timer;
        time = +time;

        function _getTimes(t) {
            var _times = [],
                arr = [24 * 60 * 60, 60 * 60, 60];
            for (var i = 0; i < arr.length; i++) {
                _times.push(parseInt(t / arr[i]));
                t = t % arr[i];
            }
            _times.push(t);
            return _times;
        }

         _tick();
        timer = setInterval(_tick, 1000);
        function _tick() {
            typeof callback === 'function' && callback(_getTimes(time--), time < 0);
            if (time < 0) {
                time = 0;
                return clearInterval(timer);
            }
        }
    });

    // 获取字符串的字符长度
    _extend('getCharLength', function(str) {
        var reg = /[\u4e00-\u9fa5]/;
        var len = 0;
        for (var i = 0; i < str.length; i++) {
            if (reg.test(str.charAt(i))) {
                len += 2;
            } else {
                len++;
            }
        }
        return len;
    });

    // 截取指定字符长度的子字符串
    _extend('substrByChar', function(str, start, offset) {
        var temp;
        for (var i = start; i < str.length; i++) {
            temp = str.substring(start, i);
            if (getCharLength(temp) > offset) {
                return str.substring(start, i - 1);
            }
            if (getCharLength(temp) === offset) {
                return temp;
            }
        }
        return '';
    });

    // 模版转换
    _extend('htmltemp', function() {
        var _tempJs;
        // 模版正则匹配
        var reg = /{{(.*?)}}/g;

        return function(temp, data, variable) {
            data = data || {};
            var arr, value, lastIndex = 0;
            // 正则表达式匹配位置清零
            reg.lastIndex = 0;
            // 去除模版里面的单引号
            temp = temp.replace(/'/g, '\u0000');
            _tempJs = ''; // 将模版转换成可执行的js语句的字符串
            if (variable) {
                _tempJs += 'var ' + variable + '=data;';
            } else {
                for (var key in data) {
                    _tempJs += 'var ' + key + "='" + data[key] + "';";
                }
            }
            _tempJs += '_expression="";';
            while (arr = reg.exec(temp)) {
                _tempJs += "_expression+='" + temp.substring(lastIndex, reg.lastIndex - arr[0].length) + "';";
                value = $.trim(arr[1]);
                if (value.charAt(0) === '=') { // 数据填充
                    value = $.trim(value.substr(1));
                    _tempJs += "_expression+=" + value + ";";
                } else { // 添加js表达式
                    _tempJs += value + ";";
                }
                lastIndex = reg.lastIndex;
            }
            _tempJs += "_expression+='" + temp.substr(lastIndex) + "';";
            eval(_tempJs);
            return _expression.replace(/\u0000/g, "'"); // 把去掉的单引号找回来并返回
        }
    }());

    /* ---------------------表单数据验证start--------------------- */
    (function() {
        // 验证正则表达式
        var _regs = {
            empty: /^\s*$/, // 空
            tel: /^([1][3458][0-9]{9})|([1][7][013678]{1}[0-9]{8})$/, // 手机   /^1(3|5|8)[0-9]{9}$/
            psd: /^[^\s]{6,20}$/, // 密码
            mail: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/, // 邮箱
            nickname: /^[a-zA-Z\u4e00-\u9fa5\d]{4,12}$/ // 昵称
        };
        // 验证构造函数
        function _Check(tag, reg) {
            if (!tag) return;
            tag = tag.jquery ? tag : $(tag);
            this.elems = [];
            this.preventDefault = false;
            this.form = null;
            // 传入参数为form标签
            if (tag[0].tagName.toLowerCase() === 'form') {
                this.form = $(tag);
                tag = tag.find('input,select');
            }
            this.add(tag, reg);
        }
        // 验证函数原型
        _Check.prototype = {
            // 数据检测
            check: function(callback) {
                var flag = true;
                var elems = [];
                callback = callback || function() {};
                this.each(function(i, elem) {
                    if (!_check(elem.val(), elem.attr('check-reg'))) {
                        flag = false;
                        elems.push(elem);
                    }
                });
                callback(flag, elems);
            },
            // 表单遍历
            each: function(callback) {
                var elems = this.elems;
                callback = callback || function() {};
                for (var i = 0; i < elems.length; i++) {
                    callback(i, elems[i]);
                }
            },
            // 添加验证表单
            add: function(tag, reg, checkFn) {
                tag = tag.jquery ? tag : $(tag);
                reg && tag.attr('check-reg', reg);
                if (typeof checkFn === 'function') {
                    _regs[reg] || (_regs[reg] = checkFn);
                }
                var elems = this.elems;
                tag.each(function() {
                    if ($(this).attr('check-reg')) {
                        elems.push($(this));
                    }
                });
                return this;
            },
            // 表单submit前响应
            beforeSubmit: function(callback1, callback2) {
                var form = this.form || this.elems[0].parents('form').first();
                if (!form.length) return;
                var _this = this;
                if (!callback2) {
                    callback2 = callback1 || function() {};
                    callback1 = function() {};
                }
                form.on('submit', function(ev) {
                    _this.check(function(flag, elems) {
                        if (flag) {
                            if (_this.preventDefault) {
                                ev.preventDefault();
                            }
                            callback2.call(_this, form);
                        } else {
                            callback1.call(_this, elems);
                            ev.preventDefault();
                        }
                    });
                });
            },
            // 阻止表单自动提交
            preventSubmit: function(prevent) {
                this.preventDefault = !!prevent;
            }
        };
        // 数据验证
        function _check(data, type) {
            var reg = _regs[type];
            if (typeof reg === 'function') {
                return reg(data.toString());
            }
            return reg ? reg.test(data.toString()) : false;
        }
        // 扩展checkData到window上
        _extend('checkData', function(tag, reg) {
            return new _Check(tag, reg);
        });
    })();

    /* ---------------------表单数据验证end--------------------- */



    /* ---------------------弹出窗口start--------------------- */

    var popOut = function() {
        var html;
        var shadow = $('.popout-shadow');
        var _popwins = [];
        var _popwin;
        // 默认参数
        var opts = {
            scrollable: true,
            width: '500px',
            title: '',
            content: '',
            align: 'left',
            dragable: false,
            afterClose : function(){}
        };
        // 若页面没有遮住层先创建
        if (!shadow.length) {
            $('body').append('<div class="popout-shadow"></div>');
            shadow = $('.popout-shadow');
        }
        shadow.hide();
        // 构造函数
        function _popOut(args) {
            this.args = $.extend({}, opts, args || {});
            _init(this);
        }
        // 初始化
        function _init(popwin) {
            _popwins.push(popwin);
            var args = popwin.args;
            var box = popwin.box = _createWin(popwin);
            box.css('width', args.width);
            box.css('height', args.height);
            box.find('.popout-title').html(args.title);
            box.find('.popout-content').html(args.content);
            //关闭按钮点击事件
            box.find('.popout-close').on('click', function() {
                popwin.hide();
            });
            if (args.dragable) {
                var startPos, mousePos;
                args.dragable = false;
                box.mousedown(function(ev) {
                    startPos = [parseInt(box.css('margin-left')), parseInt(box.css('margin-top'))];
                    mousePos = [ev.pageX, ev.pageY];
                    args.dragable = true;
                    box.css('cursor', 'move');
                });
                $(document).mouseup(function(ev) {
                    args.dragable = false;
                    box.css('cursor', 'default');
                });
                $(document).mousemove(function(ev) {
                    if (args.dragable) {
                        box.css({
                            'margin-left': startPos[0] + ev.pageX - mousePos[0] + 'px',
                            'margin-top': startPos[1] + ev.pageY - mousePos[1] + 'px'
                        });
                    }
                });
            }
        }

        function _createWin(popwin) {
            var html = '<div class="popout-win">\
				        <div class="xz-widget">\
				            <div class="xz-widget-header">\
				                <h3><span class="popout-title"></span><i class="icon-close float-r popout-close"></i></h3>\
				            </div>\
				            <div class="xz-widget-body popout-content"></div>\
				        </div>\
				    </div>';
			$('body').append( html );
			return $( '.popout-win' ).last();
		}
		// 构造函数原型
		_popOut.prototype = {
			// 隐藏弹出窗
			hide : function( callback ){
				var _this = this;
				_popwin = null;
				scrollable = true;
				shadow.hide();
				this.box.hide( 'slow' , function(){
                    if( typeof callback === 'function' ){
                        callback( _this );
                    }else{
                        _this.args.afterClose( _this );
                    }
				});
			},
			// 显示弹出窗
			show : function( callback ){
				_popwin = this;
				var box = this.box;
				box.css({
					marginLeft : (-box.width() ) /2 + 'px',
					marginTop  : (-box.height() ) /2 + 'px'
				});
				shadow.show();
				box.show( 600 , function(){
					JPlaceHolder.init();
					typeof callback === 'function' && callback( this );
				});
			},
			// 模拟alert
			alert : function( str , timeout , opts ){
				_popwin = this;
				var box = this.box;
				var content = box.find( '.popout-content' );
				var _this = this;
				box.css( opts ||  {
					width : 'auto',
					height : 'auto'
				});
				if(/MSIE 7.0/.test( window.navigator.userAgent) ){
					box.css( {
						width : 0
					});
				}
				content.html( '<div class="popout-alert">' + str + '</div>' );
				this.show();
				timeout = parseInt( timeout );
				timeout && setTimeout(function(){
					_this.hide();
				} , timeout * 1000 );				
			}
		};
		$(window).on( 'resize' , function(){
			_popwin && _popwin.show();
		});
		shadow.on( 'click' , function(){
			_popwin && _popwin.hide(); 
		});
		return function( args ){
			return new _popOut( args );
		}
	}();

    // 扩展popOut到window上
    _extend('popOut', popOut);

    /* ---------------------弹出窗口end--------------------- */

    /* ---------------------小猪弹出提示satrt--------------------- */
    var _xz_alert_tip;
    _extend('xzalert', function(str, type, timeout) {
        type = type || 1;
        if (!_xz_alert_tip) {
            _xz_alert_tip = popOut({
                title: '',
                content: ''
            });
            _xz_alert_tip.box.addClass('xz-alert-win');
            _xz_alert_tip.box.find('.xz-widget-header').first().css('height', 0);
        }
        var html = '<div class="xz-alert-tipic' + type + '"><span></span></div>';
        _xz_alert_tip.alert(html + str, timeout, {
            width: '535px'
        });
        return _xz_alert_tip;
    });
    /* ---------------------小猪弹出提示end--------------------- */

    /*小猪带确认与取消按钮弹窗 start*/
    _extend( 'xzconfirm' , function( str , cb ){
        cb = cb || function(){};
        xzalert( str );
        var html = '<div class="xz-confirm-pic"><span></span></div>';
        html += '<p class="big" style="margin:20px 0;font-size:30px;">';
        html += str;
        html += '</p><div class="btns"><a href="javascript:;" style="padding:8px 55px;" class="btn-confirm btn btn-green mr20">确认</a>';
        html += '<a href="javascript:;" class="btn btn-cancel" style="padding:8px 55px;">取消</a></div>';
        _xz_alert_tip.alert( html , 0, {
            width: '535px'
        });
        _xz_alert_tip.box.find( '.btn-confirm' ).click(function(){
            _xz_alert_tip.hide(function(){
                cb( true );
            });            
        });
        _xz_alert_tip.box.find( '.btn-cancel' ).click(function(){
            _xz_alert_tip.hide(function(){
                cb( false );    
            });            
        });
    });
    /*小猪带确认与取消按钮弹窗 end*/


	/* ---------------------登录弹出框start--------------------- */
    var redirectfrom = $.getUrlParam('redirectfrom');
    var sid = $.getUrlParam('sid');
    (function(){
		function _loginSuccess( user , psd , callback ){
            var datastr = "";
            if( !redirectfrom ) {
                datastr = { 'paramMap.email' : user , 'paramMap.password' : psd};
            }else {
                datastr = { 'paramMap.email' : user , 'paramMap.password' : psd , 'paramMap.redirectfrom' : redirectfrom , 'paramMap.sid' : sid};
            }
            
            $.cookie("session_user_ticket",null,{path:"/"});
			$.ajax({
				type : 'POST',

				data : datastr,
				url : '/Public/logining?t=' + +new Date(),
				success : function( res ){
					var num = parseInt( res.msg );

					if(num == 1){
						callback( num );
					}else if (num == 4) {
						_showErr( $( '#login-phone' ) , '该帐号已被锁定，请联系客服！' );
						} else if(num == 8){
							_showErr( $( '#login-psd' ) , "密码错误,您还有"+res.count+"次输入机会！" );
							$('#login-psd').val("");
						}else if(num == 3){
							_showErr( $( '#login-phone' ) , "会员不存在" );
						}
				}
			});
		}
		var _loginWin;
		var toPage = '';
		var afterLogin;
		var _loginForm;
		function _createLoginWin( url , callback ){
			if( !_loginWin ){
				_loginWin = popOut({
					title : '会员登录',
					width : '535px' ,
					height : '400px' ,
					content : '<form id="login_form"><div class="form-line clearfix"><input type="text" id="login-phone" maxlength="11" placeholder="手机号" check-reg="tel" /><i class="icon-phone"></i></div><div class="form-line clearfix"><input type="password" id="login-psd" maxlength="20" placeholder="密码" check-reg="psd" /><i class="icon-lock"></i></div><div class="form-line"><input type="submit" value="立即登录" /></div></form><div class="login-footer"><div class="float-r"><a href="forgetpassword.html">忘记密码?</a> <a href="reg.html" class="register-btn">立即注册</a></div></div>'
				});
				_loginWin.box.addClass( 'login-win' );
				_loginWin.show();
				// 事件绑定
				_loginWin.box.find( '#login-phone,#login-psd' ).focus(function(){
					var par = $(this).parents('.form-line').first();
					par.find('i').show( 'slow' );
					_hideErr( $(this));
				}).blur(function(){
					var par = $(this).parents('.form-line').first();
					par.find('i').hide( 'slow' );
				});	
				_loginForm = checkData( $('#login_form') );
				_loginForm.preventSubmit( true );
				JPlaceHolder.init();
			}
			_loginForm.beforeSubmit(function( elems ){
				_hideErr( _loginForm.elems );
				_showErr( elems );
			} , function(){
				_hideErr( _loginForm.elems );
				_loginSuccess( $( '#login-phone').val() , $('#login-psd').val() , function( res ){
					if( res === 1 ){
						callback();
					}
				});
			});
//			_loginForm.form.find('input').on( 'keyup' , function( ev ){
//				if( ev.which === 13 ){
//					_loginForm.form.submit();
//				}
//			});
			_loginWin.show();
		}
		// 显示错误
		function _showErr( elems , msg ){
			var errTag , elem;
			for(var i=0;i<elems.length;i++){
				elem = $(elems[i]);
				errTag = elem.parents( '.form-line' ).find( '.check-err' );
				errTag.show().html( _errMsg( elem ) );
				msg && errTag.html( msg );
			}
		}
		// 隐藏错误
		function _hideErr( elems ){
			var errTag , elem;
			for(var i=0;i<elems.length;i++){
				elem = $( elems[i] );
				errTag = elem.parents( '.form-line' ).find( '.check-err' );
				if( !errTag.length ){
					errTag = $( '<em class="check-err"></em>' );
					elem.parents( '.form-line' ).append( errTag );
				}
				errTag.hide();
			}
		}
		// 错误信息
		function _errMsg( tag ){
			var value = tag.val();
			switch( tag.attr( 'id' ) ){
				case 'login-phone' :
					return '请输入有效的11位手机号码';
				case 'login-psd' :
					return value ? "密码格式不正确" : "请输入密码";
			}
		}
		function loginWin( url , callback ){
			userIsLogin( function( isLogin ){
				if( isLogin ){
					return location.href = url || basePath;
				};
				if( typeof url === 'function' ){
					callback = url;
					url = '';
				}
				if( !callback ){
					callback = function(){
						if ($('#isreg').val()=='11'){
							cururl = basePath;
						}
						if(location.hash != ""){
							location.href = url || cururl;
							location.reload();
						}else{
							location.href = url || cururl;
						}
					}
				}
				_createLoginWin( url || '', callback );
			});
		}

        // 扩展loginWin到window上
        _extend('loginWin', loginWin);
    })();
    /* ---------------------登录弹出框end--------------------- */

    /* ---------------------计算器弹出框start--------------------- */
    (function() {
        var calcWin;
        var repayWay = 3;
        _extend('calculate', function(which) {
            if (calcWin) {
                return calcWin.show();
            }
            // 弹出窗
            calcWin = popOut({
                title: '<ul class="calc-tab float-l"><li class="active">理财计算器</li><li>奖励</li></ul>',
                scrollable: false,
                content: '<div class="calc-body"><div class="calc-content"><div class="form-line"><label>投标金额<input type="text" maxLength="7" id="calc-money" value="" /><em class="ipt-suffix">元</em></label></div><div class="form-line"><label>年化收益<input type="text" maxLength="5" id="calc-profit" value="" /><em class="ipt-suffix">%</em></label></div><div class="form-line"><label>投资期限<input type="text" maxLength="3" id="calc-date" value="" /><em class="ipt-suffix" id="date-suffix">月</em></label></div><div class="form-line date-type-radio">期限类型<label><input type="radio" name="date-type" />天</label><label><input type="radio" checked name="date-type" />月</label></div><div class="form-line" style="z-index:3;"><label>还款方式<div class="clac-dropdown" id="calc-type"><div class="dropdown-value" >一次性还款</div><ul class="dropdown-list"><li  repayWay="3">一次性还款</li><li  repayWay="1">等额本息</li><li  repayWay="5">按月付息到期还本</li></ul></div><span class="calc-drop-btn"><i class="icon-drop"></i></span></label></div><div class="form-line" style="z-index:1;"><input type="button" id="calc-getres" value="立即计算收益" /></div></div><div class="calc-footer"><div class="clac-count">收益合计<strong id="calc-earning"></strong></div><div class="clac-func" id="clac-funct">具体计算公式: 本金*(年化收益率/360)*投资期限</div></div></div>\
                <div class="calc-body" style="display:none;"><div class="calc-content"><div class="form-line"><label>投标金额<input type="text" maxlength="7" id="prize-calc-money" value=""><em class="ipt-suffix">元</em></label></div><div class="form-line"><label>投资期限<input maxlength="3" id="prize-date" type="text" value=""><em class="ipt-suffix" id="prize-type-suffix">天</em></label></div><div class="form-line prize-type-radio">期限类型<label><input type="radio" checked="" name="prize-time-type">天</label><label><input type="radio" name="prize-time-type">月</label></div><div class="form-line"><label>奖励百分比<input type="text" maxlength="5" id="prize-percent" value=""><em class="ipt-suffix">%</em></label></div><div class="form-line" style="z-index:1;"><input type="button" id="calc-getprize" value="立即计算奖励"></div></div><div class="calc-footer"><div class="clac-count">奖励合计<strong id="prize-earning"></strong></div><div class="clac-func prize-calc-rule"><p><span><em class="w-em">具体计算公式</em>：</span>年化交易额*奖励百分比</p><p><span>年化交易额计算公式：</span>天标：本金*(投资期限/360)<br />月标：本金*(投资期限/12)</p></div></div></div>'
            });
            calcWin.box.addClass('calc-win');
            calcWin.show();
			var box 	     = calcWin.box,
				/*理财计算器start*/
				moneyIpt     = box.find('#calc-money'),
				profitIpt    = box.find('#calc-profit'),
				dateIpt      = box.find('#calc-date'),
				dateSuffix   = box.find('#date-suffix'),
				typeRadio    = box.find('.date-type-radio input[type="radio"]'),
				dropDown     = box.find('#calc-type'),
				dropDwonBtn  = box.find('.calc-drop-btn'),
				dropDownIcon = box.find('.icon-drop'),
				dropDownVale = dropDown.find('.dropdown-value'),
				dropDownList = dropDown.find('.dropdown-list'),
				btn          = box.find('#calc-getres'),
				earningTag   = box.find('#calc-earning'),
				calcTab      = box.find('.calc-tab li'),
				calcBody     = box.find('.calc-body');

            // 事件绑定
            calcTab.each(function(index) {
                $(this).click(function() {
                    _changeCalc(index);
                });
            });

            function _changeCalc(index) {
                calcTab.removeClass('active');
                calcTab.eq(index).addClass('active');
                calcBody.hide();
                calcBody.eq(index).show();

            }
            _changeCalc(which || 0);
            iptLimit(moneyIpt, 'number');
            iptLimit(profitIpt, 'float');
            profitIpt.on('keyup', function() {
                var value = this.value;
                if (/(\..*\.)|(^\.)/.test(value)) {
                    this.value = value.substr(0, value.length - 1);
                }
                if (parseFloat(value) > 24) {
                    this.value = 24;
                }
            });
            iptLimit(dateIpt, 'number');
            dateIpt.on('keyup', function() {
                var type;
                var value = parseInt(this.value);
                typeRadio.each(function(index) {
                    if (this.checked) {
                        type = index;
                    }
                });
                if (type === 0 && value > 365) {
                    this.value = 365;
                }
                if (type === 1 && value > 360) {
                    this.value = 360;
                }
            });
            typeRadio.each(function(index) {
                $(this).on('click', function() {
                    repayWay = 3;
                    dateSuffix.html($(this).parent().text());
                    if (index === 0) {
                        dropDownVale.html('一次性还款');
                        dropDwonBtn.hide();
                        dropDownList.hide();
                    } else {
                        dropDwonBtn.show();
                        parseInt(dateIpt.val()) > 360 && dateIpt.val(360);
                    }
                });
            });
            dropDown.hover(function(ev) {
                var type;
                typeRadio.each(function(index) {
                    if (this.checked) {
                        type = index;
                    }
                });
                if (type === 0) return;
                dropDownList.show();
                dropDownIcon.addClass('icon-hover');
            }, function() {
                dropDownList.hide();
                dropDownIcon.removeClass('icon-hover');
            });
            dropDownList.find('li').click(function(ev) {
                dropDownVale.html(this.innerHTML);
                repayWay = $(this).attr("repayWay");
                dropDownList.hide();
                if(repayWay == 1){
                	$('#clac-funct').html("具体计算公式: ((月利率*(1+月利率)<sup>投资期限</sup>)/((1+月利率)<sup>投资期限</sup>)-1)*本金*投资期限-本金");
                }else if(repayWay == 4){
                	$('#clac-funct').html("具体计算公式: ((投资期限+1-第几期)/投资期限)*本金*(年化收益率/12)");
                }else{
                	$('#clac-funct').html("具体计算公式: 本金*(年化收益率/360)*投资期限");
                }   	
            });
            btn.on('click', function() {
                var corpus = parseInt(moneyIpt.val()),
                    profit = parseFloat(profitIpt.val()),
                    date = parseInt(dateIpt.val()),
                    type;
                typeRadio.each(function(index) {
                    if (this.checked) {
                        type = index;
                    }
                });
                earningTag.css({
                    color: '#ff0000',
                    fontWeight: 'normal',
                    fontSize: '14px'
                });
                if (!corpus) {
                    return earningTag.html('请输入投资金额');
                }
                if (!profit) {
                    return earningTag.html('请输入年化收益');
                }
                if (!date) {
                    return earningTag.html('请输入投资期限');
                }
                earningTag.css({
                    color: '#1eae58',
                    fontWeight: 'bold',
                    fontSize: '18px'
                });
                //计算利息
                var param = {};
                param["paramMap.borrowSum"] = corpus;
                param["paramMap.yearRate"] = profit;
                param["paramMap.borrowTime"] = date;
                param["paramMap.repayWay"] = repayWay;
                var isDayThe = 2;
                if (type === 0) {
                    isDayThe = 1;
                }
                param["paramMap.isDayThe"] = isDayThe;
                $.ajax({
                    url: "incomeCalculate1",
                    type: "post",
                    data: param,
                    async: false,
                    success: function(result) {
                        if (result == null) {
                            earningTag.html("系统出错，请联系管理员！", "btnSave");
                        } else if (result.result == -1) {
                            earningTag.html("请填写完整信息进行计算", "btnSave");
                        } else {
                            earningTag.html('￥' + formatNum(result.sum || 0, true) + '元');
                        }
                    }
                });
            });
            /*理财计算器end*/

            /*阿诺计算器start*/
            var aruoCalc = ({
                changeType: box.find('.change-type'),
                moneyPrefix: box.find('#money-prefix'),
                money: box.find('#aruo-money'),
                date: box.find('#aruo-date'),
                confirmBtn: box.find('#aruo-confirm'),
                res: box.find('.aruo-calc-res'),
                type: 0,
                init: function() {
                    var _this = this;
                    var temp = [];
                    iptLimit(this.money, 'number');
                    iptLimit(this.date, 'number');
                    this.changeType.click(function() {
                        $(this).find('span').each(function() {
                            temp.push($(this).html());
                        });
                        $(this).find('span').each(function() {
                            $(this).html(temp.pop());
                        });
                        // 计算方式切换
                        _this.type = +!_this.type;
                        _this.moneyPrefix.html(['投资额度', '阿诺币'][_this.type]);
                    });
                    this.confirmBtn.click(function() {
                        _this.calculate();
                    });
                    return this;
                },
                calculate: function() {
                    var money = parseInt(this.money.val());
                    var date = parseInt(this.date.val());
                    var res = '';
                    if (!money) {
                        return this.showErr(this.type === 0 ? '请输入投资金额' : '请输入阿诺币数量');
                    }
                    if (!date) {
                        return this.showErr('请输入投资期限');
                    }
                    // 计算公式：投资金额/100*标的天数/360*12
                    if (this.type === 0) { // 投资额度 --> 阿诺币
                        res = {
                            money: money,
                            aruo: Math.floor(money / 100 * date / 360 * 12),
                            date: date
                        }
                    } else { // 阿诺币 --> 投资额度
                        res = {
                            aruo: money,
                            money: Math.floor(money * 100 * 360 / date / 12),
                            date: date
                        }
                    }
                    this.setRes(res);
                },
                setRes: function(res) {
                    var str = '<p>货币兑换</p><em>' + res.money + '</em>元 = <em>' + res.aruo + '</em>阿诺币<span>( ' + res.date + '天 )</span>';
                        str += '<div class="an_calc">';
                        str += '<ul>'; 
                        str += '<li style="color:#999">阿诺币计算公式：</li>';
                        str += '<li><em></em>阿诺币=投资金额/100*投资期限(天)/30</li>';
                        str += '<li><em>注&nbsp;&nbsp;&nbsp;：</em>阿诺币只可为整数，若有小数点只取整数位。</li>';
                        str += '<li><em>示例：</em>用户投资100元29天产品，他可获得的阿诺币为</li>';
                        str += '<li><em></em>100/100*(29/30)=0.9阿诺币，阿诺币按0计算。</li>';          
                        str +='</ul>';
                        str += '</div>';

                    this.res.html(str);
                },
                showErr: function(msg) {
                    this.res.html('<p>货币兑换</p> <div style="color:#ff0000;font-size:14px;">' + msg + '</div>');
                }
            }).init();
            /*阿诺计算器end*/

            /*奖励计算器 start*/
            (function(){
                var investMoney = box.find( '#prize-calc-money' ),  // 投标金额
                    investTime = box.find( '#prize-date'),          // 投资期限
                    investType = box.find( '.prize-type-radio input[type="radio"]' ),   // 期限类型
                    suffix = box.find( '#prize-type-suffix' ),      // 类型后缀
                    prizePercent = box.find( '#prize-percent' ),    // 奖励百分比
                    btn = box.find( '#calc-getprize' ),             // 立即计算奖励按钮
                    resTag = box.find( '#prize-earning' ),          // 奖励计算结果
                    params;

                // 限制投资金额
                iptLimit( investMoney , 'number' );
                // 限制投资时间
                iptLimit( investTime , 'number' );
                // 月标上限360个月（按以前来的，真心觉得好长），日标上限365天
                investTime.on('keyup', function() {
                    var type;
                    var value = parseInt(this.value);
                    investType.each(function(index) {
                        if (this.checked) {
                            type = index;
                        }
                    });
                    if (type === 0 && value > 365) {
                        this.value = 365;
                    }
                    if (type === 1 && value > 360) {
                        this.value = 360;
                    }
                });
                // 标类型切换时检查投资期限是否超标
                investType.each(function(index) {
                    $(this).on('click', function() {
                        if (index === 1) {
                            parseInt(investTime.val()) > 360 && investTime.val(360);
                            suffix.html( '月' );
                        }else{
                            parseInt(investTime.val()) > 365 && investTime.val(365);
                            suffix.html( '天' );
                        }
                    });
                });
                // 限制奖励百分比(最高5%,暂定。。)
                iptLimit( prizePercent , 'float' );
                prizePercent.on( 'keyup' , function(){
                    var value = this.value;
                    value = value.replace( /^0*[^\d\.]*$/ , '' ) // 先去掉0开头以及非数字
                            .replace( /(\.\d{0,2}).*$/ , '$1' ); // 再去除多余小数点让小数只保留两位
                    this.value = parseFloat( value ) > 5 ? 5 : value;
                });
                // 绑定计算奖励按钮事件
                btn.click( _calculatePrize );

                // 计算奖励 
                function _calculatePrize(){
                    _check(function( res ){
                        // 输入错误
                        if( res !== true ){
                            return resTag.css({
                                color: '#ff0000',
                                fontWeight: 'normal',
                                fontSize: '14px'
                            }).html( res );
                        }
                        // 年化交易额*奖励百分比
                        // 天标：本金*(投资期限/360)
                        // 月标：本金*(投资期限/12)
                        resTag.css({
                            color: '#1eae58',
                            fontWeight: 'bold',
                            fontSize: '18px'
                        });
                        if( params.investType === 0 ){
                            // 天标
                            res = params.investMoney * ( params.investTime / 360 ) * ( params.prizePercent / 100 ); 
                        }else{
                            // 月标
                            res = params.investMoney * ( params.investTime / 12 ) * ( params.prizePercent / 100 );
                        }
                        resTag.html( '￥' + formatNum( res , true ) + '元' );
                    });
                }

                // 字段验证
                function _check( cb ){
                    params = {
                        investMoney : +investMoney.val() || 0,
                        investTime : +investTime.val() || 0,
                        investType : (function(){
                                        for(var i=0;i<investType.length;i++){
                                            if( investType[i].checked ){
                                                return i;
                                            }
                                        }
                                    })() || 0,
                        prizePercent : +prizePercent.val() || 0
                    };
                    if( !params.investMoney ){
                        return cb( '请输入投资金额' );
                    }
                    if( !params.investTime ){
                        return cb( '请输入投资期限' );    
                    }
                    if( !params.prizePercent ){
                        return cb( '请输入奖励百分比' );
                    }
                    return cb( true );
                }

            })();
            /*奖励计算器 end*/
        });
    })();
    /* ---------------------计算器弹出框end--------------------- */
    
    //0: {award: "", awardType: 3, borrowID: 285, createTime: null, custID: 3672788, id: 1, investAmount: 4900,…}
    // 1: {award: "", awardType: 3, borrowID: 255, createTime: null, custID: 3672788, id: 3, investAmount: 0,…}
        (function(){
        // ajax here-------
        // 获取红包列表 
        function _getRedPacket( cb ){           
            $.ajax({
                url: "getInvitationPolite",
                type: "post",
                success: function(result) {
                    if (result.ret == '1') {
                        cb( result.msg );
                    }else{
                        _getCashWin();
                    }
                }
            });         
        }
        
        // 拆红包
        function _openRedPacket( id , cb ){
            var param = {};
            param["paramMap.invitationId"] = id;
            $.ajax({
                url: "inviteHasGift",
                type: "post",
                data: param,
                success: function(result) {
                    if (result.ret == '1') {
                        cb( result.msg );
                    }
                }
            });
        }

        // 获取现金奖励列表
        function _getCash( cb ){
            var res = []; 
            $.ajax({
                url: "getInvitPolites",
                type: "post",
                success: function(result) {
                    if (result.ret == '1') {
                        res = result.msg;
                        cb( res );
                    }
                }
            });
        }

        // ajax end---------
        
        // 打开红包弹窗
        function redPacketWin( packet , next ){
            if( !packet )return;
            var packetWin = popOut({
                width : '405px',
                height : '585px',
                afterClose : next,
                content : '<div class="inv_tc"><div class="inv_tc_div"><div class="inv_close"><i>×</i></div><div class="inv_tx"><img src="' + basePath + ( packet.img || 'images/personal_center/Headportrait.jpg' ) + '" /></div><div class="inv_nc"><b>' + packet.userName + '</b></div><div class="inv_nc inv_nc1">给你发了一个红包</div><div class="inv_nc inv_nc2">您邀请的好友<em>' + packet.friendName + '</em>，完成首次投资，<br />您可享有<em>1</em>次抢红包的机会！</div></div><div class="inv_tc_div1"><span class="inv_tc_img"></span></div><div class="inv_tc_div2"><span class="open_packet_btn"></span></div></div>'
            });
            var box = packetWin.box;
            box.css({
                background : 'transparent',
                border : 'none',
                boxShadow : 'none'
            });
            box.find( '.xz-widget-header' ).css( 'display' , 'none' );
            box.addClass( 'red_packet_win' );
            packetWin.show();
            box.find( '.inv_close i' ).click(function(){
                packetWin.hide( next );
            });
            box.find( '.open_packet_btn' ).click(function(){
                _openRedPacket( packet.id , function( res ){                   
                    packetWin.hide( function(){
                        openPacket( packet , res , next );
                    }); 
                });
            });
        }

        // 拆红包弹窗 
        function openPacket( packet , money , next ){
            if( !packet )return;
            var openPacketWin = popOut({
                width : '405px',
                height : '585px',
                afterClose : next,
                content : '<div class="inv_tc inv_tc1"><div class="inv_close inv_close1"><i>×</i></div><div class="inv_tc_div1"></div><div class="inv_tx inv_tx1"><img src="' + basePath + ( packet.img || 'images/personal_center/Headportrait.jpg' ) + '" /></div><div class="inv_name">' + packet.userName + '的红包</div><div class="inv_name inv_name1">恭喜发财，大吉大利</div><div class="inv_name inv_name2"><i>' + money + '</i>元</div><div class="inv_name inv_name3">已存入<a href="home.html">我的账户</a>，通过账户余额查看</div><div class="inv_name inv_name4"><a href="home.html">前往我的账户</a></div><div class="inv_name inv_name5"><a href="myInvite.html">查看我的邀请记录</a></div></div>'
            });
            var box = openPacketWin.box;
            box.css({
                background : 'transparent',
                border : 'none',
                boxShadow : 'none'
            });
            box.addClass( 'red_packet_win' );
            box.find( '.xz-widget-header' ).css( 'display' , 'none' );
            openPacketWin.show();
            box.find( '.inv_close i' ).click(function(){
                openPacketWin.hide( next );
            });
        }

        // 获取现金奖励弹窗 
        function getCashWin( data , next ){
            if( !data )return;
            var cashWin = popOut({
                width : '842px',
                height : '512px',
                afterClose : next,
                content : '<div class="inv_tc inv_tc2"><div class="inv_close inv_close2"><i>×</i></div><div class="inv_nc inv_nc3">您邀请的好友<em>' + data.friendName + '</em>，完成再次投资，<br />您获得<em>' + data.award + '</em>元的现金奖励。</div><div class="inv_name inv_name6"><a href="javascript:;" class="knew_that">知道了</a></div><div class="inv_zs">注：工作人员将在五个工作日内发放现金奖励至您的<br />汇付天下账户。</div></div>'
            });
            var box = cashWin.box;
            box.css({
                background : 'transparent',
                border : 'none',
                boxShadow : 'none'
            });            
            box.addClass( 'red_packet_win' );
            box.find( '.xz-widget-header' ).css( 'display' , 'none' );
            cashWin.show();
            box.find( '.inv_close i,.knew_that' ).click(function(){
                cashWin.hide( next );
            });
        }

        // 现金奖励弹窗
        function _getCashWin(){
            _getCash(function( res ){
                var index = 0;
                getCashWin( res[index] , function _getCashLoop(){
                    index++;
                    if( index < res.length ){
                        getCashWin( res[index] , _getCashLoop );
                    }
                });
            });
        }

        _extend( 'redPacket' , function(){
            // 先把所有红包弹窗弹完
            _getRedPacket(function( res ){
                var index = 0;
                redPacketWin( res[index] , function _openPacketLoop(){
                    index++;
                    if( index < res.length ){
                        redPacketWin( res[index] , _openPacketLoop );
                    }else{
                        // 再弹出所有现金奖励弹窗
                        _getCashWin();
                    }
                });                
            });
        });

    })();
	
    // 汇付认证弹窗
    _extend( "huifuBox" , function(){
		
		var value="";
		$.ajax({
			url:'queryRewardConfig',
			type:'post',
			async: false,
			data:{type: 1},
			dataType:'json',
			success:function(data){
				if(data.result){
				   value = '<em title="完成认证再送&lt;em class=\'red\'&gt;'+data.result+'&lt;em&gt;">奖</em>';
				}
			}
		})
		
        var _win = popOut({
            width : '600px',
            height : '330px',
            title : '汇付天下法律常识',
            content : '<p style="text-align:center;width:550px;margin:48px auto 60px auto;font-size:14px;color:#333333;line-height:28px;">“根据相关法律法规要求，您在本平台参与网络借贷应当进行实名注册认证。”<br />认证文案：您即将前往“汇付天下”网址填写相关认证信息。汇付天下是本平台合作的第三方支付平台，它是目前国内可以为P2P公司提供第三方托管的支付企业。</p><a href="'+basePath +'acctModify" class="huifu-confirm-btn">前往认证'+value+'</a>'
        });
        _win.show();
        _win.box.find('.huifu-confirm-btn em').poshytip({
            className: "tip-yellowsimple",
            showTimeout: 1,
            alignTo: "target",
            alignX: "center",
            alignY: "top",
            offsetY: 10,
            offsetX:20,
            allowTipHover: true
        });
    });
	
	
	// 汇付认证弹窗
    _extend( "AutoTenderBox" , function(borrowId){		
        var _win = popOut({
            width : '600px',
            height : '330px',
            title : '投资团标须知',
            content : '<p style="text-align:center;width:550px;margin:48px auto 60px auto;font-size:14px;color:#333333;line-height:28px;">根据法律法规要求，您在本平台投资团标资产前</br>需前往“汇付天下”验证密码，同意开启自动投标服务。</p><a href="'+basePath +'openAutoTender?paramMap.borrowId='+borrowId+'" class="huifu-confirm-btn">开启自动投标</a>'
        });
        _win.show();
        _win.box.find('.huifu-confirm-btn em').poshytip({
            className: "tip-yellowsimple",
            showTimeout: 1,
            alignTo: "target",
            alignX: "center",
            alignY: "top",
            offsetY: 10,
            offsetX:20,
            allowTipHover: true
        });
    });

    // 右侧浮动龙虎榜
    (function(){      
        var list , pager , flag = false;
        // 排行榜分页  
        pager = {
            last : -1,
            current : -1,
            size : 4,
            pageBtns : null,
            isTurning : false,
           
            init : function( size ){ // 初始化
                var _this = this;
                this.size = +size || 4;
                this.pageBtns = $( '.ranking-pager a' );
                this.pageBtns.click(function(){
                    var page = +$(this).html();
                    if( page ){
                        return _this.toPage( page );
                    }
                    if( $(this).index() == 0 ){
                        _this.prev();
                    }else{
                        _this.next();
                    }
                });
                this.toPage( 1 );
                // 榜单获取焦点的时候任何文本框都会失去焦点
                $( '.fix-ranking-bar' ).mouseover(function(){
                    $( 'input,select,textarea' ).blur();
                });
                return this;
            },
            // 渲染
            render : function(){
                var pageBtns = this.pageBtns;
                var current = this.current;
                var last = this.last;
                var prevBtn = pageBtns.first();
                var nextBtn = pageBtns.last();
                var _this = this;
                list.each(function( index ){
                    // 上一批
                    if( index >= ( last - 1 ) * 5 && index < last * 5  ){
                        list.eq( index ).css({
                            left : 0,
                            top: index % 5 * 40 + 50 + 'px'
                        });
                    }
                    // 其它&当前批
                    else{
                        list.eq( index ).css({
                            left : '402px',
                            top: index % 5 * 40 + 50 + 'px'
                        });
                    }
                });
                pageBtns.removeClass( 'active disabled' );
                pageBtns.eq( current ).addClass( 'active' );
                if( current == 1 ){
                    prevBtn.addClass( 'disabled' );
                }else if( current == this.size ){
                    nextBtn.addClass( 'disabled' );
                }
                // 执行动画
                current = ( current - 1 ) * 5;
                last = ( last - 1 ) * 5;
                this.isTurning = true;
                _fade( last , 'hide' , function(){
                    _fade( current , 'show' , function(){
                        _this.isTurning = false;
                    });
                });
            },
            // 上一页
            prev : function( cb ){
                this.toPage( this.current - 1 , cb );
            },
            // 下一页
            next : function( cb ){
                this.toPage( this.current + 1 , cb );
            },
            // 跳转到指定页
            toPage : function( page ){
                page = +page;
                page = page < 1 ? 1 :
                       page > this.size ? this.size : page;
                if( isNaN( page ) || page == this.current || this.isTurning )return;
                this.last = this.current;
                this.current = page;
                this.render();
            }
        };

        (function( cb ){
           
			$.post("mayActiveRank",function(data){
				cb( data ) ;
			});  

           /* var data = {
                'code' : '1',
                'data' : {
                    'activityState' : '1',
                    'investRanks' : [
                        {'id':'1','mobilePhone':'13076906186','investAmount':'100000'},
                        {'id':'2','mobilePhone':'13076906186','investAmount':'100000'},
                        {'id':'3','mobilePhone':'13076906186','investAmount':'100000'},
                        {'id':'4','mobilePhone':'13076906186','investAmount':'100000'},
                        {'id':'5','mobilePhone':'13076906186','investAmount':'100000'},
                        {'id':'6','mobilePhone':'13076906186','investAmount':'100000'},
                        {'id':'7','mobilePhone':'13076906186','investAmount':'100000'},
                        {'id':'8','mobilePhone':'13076906186','investAmount':'100000'},
                        {'id':'9','mobilePhone':'13076906186','investAmount':'100000'},
                        {'id':'10','mobilePhone':'13076906186','investAmount':'100000'},
                    ],
					'investAmount' : 10000
                }
            }*/

            //cb( data , 1 ) ;

        })( function( listData ){
            if (flag) {
                $( '.ranking-bar-table dl' ).html('<dt class="lighter-tr"><span class="col1">排名</span><span class="col2">手机号</span><span class="col3">累计投资额(元)</span></dt>');
            }
            if(listData.code == 1){
                //if( !listData.investRanks || !listData.investRanks.length )return;
                // 在右边加上排行榜html代码
				var resultJson=listData.data;
				var activityState=resultJson.activityState;
				var investAmount = resultJson.investAmount;
				if(activityState!=1){//活动已过期 或未开始
					return;
				}
                var rankList =resultJson.investRanks;
                if (!flag) {
                    var login_status = html = '';

                    userIsLoginAsync( function( isLogin ){
                        if (isLogin) {
                            // 此处需要获得活动期间的投资金额
                            login_status = '<span style="color:#f5582e;">'+investAmount+' 元</span>';
                        }else{
                            login_status = '<a href="javascript:loginWin();" style="color:#f5582e;">请登录</a>';
                        }
                    })
                        html = '<div class="fix-ranking-bar"><em class="ranking-bar-btn"></em><div class="ranking-bar-content"><em class="ranking-content-bg"></em><div class="rank-papers"></div><h4>我已累计投资：'+login_status+'</h4><div class="ranking-bar-table"><dl><dt class="lighter-tr"><span class="col1">排名</span><span class="col2">手机号</span><span class="col3">累计投资额(元)</span></dt></dl></div><div class="ranking-pager"></div><a href="http://www.xiaozhu168.com/news/details-379.html" class="ranking-more" target="_blank"><span>查看活动详情</span></a></div></div>';
                }
                var pagerHtml = '<a href="javascript:;" class="disabled">&lt;</a>';
                $( '.fix-tools-content' ).prepend( html );
                html = '';
                for(var i=0;i<rankList.length;i++){
                    var temp = rankList[i];
                    html += '<dd class="' + ( i % 5 % 2 ? 'double' : '' ) + '"><span class="col1">';
                    // 前三名
                    if( i < 3 ){
                        html += '<em class="ranking-level ranking-level' + ( i + 1 ) + '"></em>';
                    }else{
                        html += '第' + ( i + 1 ) + '名';
                    }
                    html += '</span><span class="col2">';
                   // html += temp.username ? temp.username : temp.mobilePhone;
                    html += temp.mobilePhone;
                    html += '</span><span class="col3">' + temp.investAmount + '</span></dd>';
                    if( i % 5 == 0 ){
                        pagerHtml += '<a href="javascript:;">' + Math.ceil( ( i + 1 ) / 5 ) + '</a>';
                    }
                }
                pagerHtml += '<a href="javascript:;">&gt;</a>';
                $( '.ranking-bar-table dl' ).last().append( html );
                $( '.ranking-bar-content .ranking-pager' ).html( pagerHtml );
                list = $( '.ranking-bar-table dd' );
                var pageNum = ( Math.ceil( rankList.length / 5 ) )
                pager.init( pageNum );
            }

             
        });

        

        // 排行榜动画,隐藏&显示
        function _fade( which , type , cb ){
            var count = 0;
            for(var i=0;i<5;i++){
                (function( num ){
                    setTimeout(function(){
                        count++;
                        if( type == 'hide' ){
                            list.eq( which + num ).animate( { left : -402 } );
                        }else{
                            list.eq( which + num ).animate( { left : 0 } ); 
                        }
                        if( count == 5 ){
                            cb && cb();
                        }
                    } , 50 * num );
                })( i );
            }
        }

    })();



	
// 修复placeholder
	JPlaceHolder = {
    ipts : [],
    //检测
    _check: function() {
        return 'placeholder' in document.createElement('input');
    },
    //初始化
    init: function( selector ) {
        this.selector = selector;
        if (!this._check()) {
            this.fix();
        }
    },
    addIpt : function( $elems ){
        var ipts = this.ipts;
        $elems.each(function(){
            if( indexOf( ipts , this ) < 0 ){
                ipts.push( this );
            }
        });
        function indexOf( arr , value ){
            for(var i=0;i<arr.length;i++){
                if( arr[i] === value ){
                    return i;
                }
            }
            return -1;
        }
    },
    autoShow : function(){
        var _this = this;
        setInterval(function(){
            var ipts = _this.ipts;
            var $ipt , holder;
            $.each( ipts , function( index , ipt ){
                _this.showHolder( $(ipt) );
            });
        } , 100 );
    },
    //修复
    fix: function() {
        var selector = this.selector ? this.selector : ':input[placeholder]';
        var _this = this;
        this.addIpt( $(selector) );
        jQuery(selector).each(function(index, element) {
            _this.showHolder( $(this) );
        });
    },
    showHolder : function( self ){
        var txt = self.attr('placeholder');
        var parElem = self.parent();
        if( parElem.css( 'position' ) === 'static' ){
            parElem.css( 'position' , 'relative' );
        }
        var pos = self.position(),
            h = self.height() + 'px',
            paddingleft = self.css('padding-left'),
            marginLeft = self.css('margin-left'),
            marginTop = self.css('margin-top'),
            textIndent = self.css('textIndent'), 
            holder = self.parent().find( '.fix_placeholder' );
        if( !holder.length ){
            holder = $('<em class="fix_placeholder"></em>')
                    .text(txt).appendTo(self.parent());
            self.keyup(function() {
                if (this.value) {
                    holder.hide();
                } else {
                    holder.show();
                }
            });
            holder.click(function(e) {
                self.focus();
            });
        }
        holder.
        css({
            position: 'absolute',
            zIndex : +self.css( 'z-index') + 1,
            left: pos.left + (parseInt(self.css('border-left-width')) || 0) + 'px',
            top: pos.top + (parseInt(self.css('border-top-width')) || 0) + 'px',
            width:self.width() + 'px',
            height: h,
            lineHeight: parseInt( self.css('line-height') ) ? self.css('line-height') : '1.6em',
            paddingLeft: paddingleft,
            marginLeft: marginLeft,
            marginTop: marginTop,
            textIndent: textIndent,
            fontSize: self.css('font-size'),
            color: '#aaa',
            background : _getBgColor( self ),
            textAlign : self.css( 'text-align' )
        });
        self.val() && holder.hide();
                
        function _getBgColor( elem ){
            var bgColor = '#ffffff';
            while( elem[0].tagName.toUpperCase() !== 'BODY' ){
                if( bgColor = elem.css( 'background-color' ) ){
                    if( bgColor !== 'transparent'){
                        return bgColor; 
                    }
                }
                elem = elem.parent();
            }
        }
    }
};

$(function() {
	
	// 固定导航
	(function(){
		var fixedMenu = $( '#fixed-menu' );
        var gotoTop = $( '.goto_top' );
		fixedMenu.css( { display : 'block' , height : 0 } );
		$(window).on( 'resize scroll' , function(){
			_showMenu();
		});
		function _showMenu(){
			var t = document.documentElement.scrollTop || document.body.scrollTop;
			if( t >= 105 ){
				fixedMenu.stop().animate( { height : 75 });
                gotoTop.fadeIn();
			}else{
				fixedMenu.stop().animate( { height : 0 });
                gotoTop.fadeOut();
			}
		}
		_showMenu();
	})();

    // 回到顶部
    $( '.com_left_div2' ).click(function(){
        $( 'html,body' ).animate({ scrollTop : 0 });
    });

    // 调用计算器
    $( '#fix_calculate' ).click(function(){
        calculate();
    });

    JPlaceHolder.init();
    JPlaceHolder.autoShow();
    // 邀请有礼弹窗红包
    // redPacket();     // 活动暂时不启用
    


});



 $.extend({  
        /** 
         * 数字千分位格式化 
         * @public 
         * @param mixed mVal 数值 
         * @param int iAccuracy 小数位精度(默认为2) 
         * @return string 
         */  
        formatMoney:function(mVal, iAccuracy){  
            var fTmp = 0.00;//临时变量  
            var iFra = 0;//小数部分  
            var iInt = 0;//整数部分  
            var aBuf = new Array(); //输出缓存  
            var bPositive = true; //保存正负值标记(true:正数)  
            /** 
             * 输出定长字符串，不够补0 
             * <li>闭包函数</li> 
             * @param int iVal 值 
             * @param int iLen 输出的长度 
             */  
            function funZero(iVal, iLen){  
                var sTmp = iVal.toString();  
                var sBuf = new Array();  
                for(var i=0,iLoop=iLen-sTmp.length; i<iLoop; i++)  
                    sBuf.push('0');  
                sBuf.push(sTmp);  
                return sBuf.join('');  
            };  
  
            if (typeof(iAccuracy) === 'undefined')  
                iAccuracy = 2;  
            bPositive = (mVal >= 0);//取出正负号  
            fTmp = (isNaN(fTmp = parseFloat(mVal))) ? 0 : Math.abs(fTmp);//强制转换为绝对值数浮点  
            //所有内容用正数规则处理  
            iInt = parseInt(fTmp); //分离整数部分  
            iFra = parseInt((fTmp - iInt) * Math.pow(10,iAccuracy) + 0.5); //分离小数部分(四舍五入)  
  
            do{  
                aBuf.unshift(funZero(iInt % 1000, 3));  
            }while((iInt = parseInt(iInt/1000)));  
            aBuf[0] = parseInt(aBuf[0]).toString();//最高段区去掉前导0  
            return ((bPositive)?'':'-') + aBuf.join(',') +'.'+ ((0 === iFra)?'00':funZero(iFra, iAccuracy));  
        },  
        /** 
         * 将千分位格式的数字字符串转换为浮点数 
         * @public 
         * @param string sVal 数值字符串 
         * @return float 
         */  
        unformatMoney:function(sVal){  
            var fTmp = parseFloat(sVal.replace(/,/g, ''));  
            return (isNaN(fTmp) ? 0 : fTmp);  
        },  
    });  

})(window.jQuery || window.Zepto, window.xzRequire);

function setThirdCookie(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}


//退出登录
function logout() {
    $.ajax({
        method: 'post',
        data: {},
        url:  '/Public/logout?t=' + +new Date(),
        success: function(res) {
            setThirdCookie("thirdCount", 0);
            location.href = basePath;
        }
    });
}