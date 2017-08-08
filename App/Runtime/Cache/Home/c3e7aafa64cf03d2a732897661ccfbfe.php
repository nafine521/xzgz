<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html class="">
<head>
    <title><?php echo ($title); ?></title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="mobile-agent" content="format=html5;url=http://wap.xiaozhu168.com/" />
    <meta name="baidu-site-verification" content="yiIQXjlbGf" />
    <meta name="keywords" content="<?php echo ($keywords); ?>" />
    <meta name="Description" content="<?php echo ($description); ?>" />
    <!--<link rel="alternate" media="only screen and (max-width: 640px)" href="http://wap.xiaozhu168.com/" />-->
    <link href="/Public/static/website/favicon.ico" type="image/x-icon" rel="shortcut icon" />

    <link rel="stylesheet" href="/Public/static/website/style/common.css" />
    <link rel="stylesheet" href="/Public/static/website/style/icon.css" />
    <?php foreach ($css as $k => $v): ?>
    <link rel="stylesheet" href="/Public/static/website/style/<?php echo ($v); ?>.css" />
    <?php endforeach; ?>
</head>

<body>

    <!-- 头部 start -->
    <!--顶部灰条div-->
    <!--[if lt IE 8]>
    <div id="kie-bar" class="kie-bar">
        您现在使用的浏览器版本过低，可能会导致浏览效果和信息的缺失。
        建议立即升级到
        <a href="http://windows.microsoft.com/zh-cn/internet-explorer/download-ie" target="_blank" title="免费升级至IE8浏览器">Internet Explorer 8</a>
        或
        <a href="http://baoku.360.cn/soft/show/appid/100923" target="_blank" title="免费升级至360安全浏览器">360安全浏览器</a>
        ，安全更放心！
    </div>
    <![endif]-->
    <!--[if IE 6]>
    <script src="/Public/static/website/js/ie6-png/iepngfix_tilebg.js" ></script>
    <![endif]-->
    <div class="header">
        <div class="header-content">
            <!-- 客服热线 start -->
            <div class="custom-service">
                <i class="icon-custom-service"></i>
                客服热线：<span class="green bold">400-882-5188</span>
                <span class="lighter">（工作日 9:00 - 22:00）</span>
            </div>
            <!-- 客服热线 end -->

            <!-- 用户登录状态 start -->
            <ul class="user-status">
                <?php if(empty($user_info)): ?><!-- 未登录 start -->
                    <li>
                        <a href="javascript:loginWin();" class="darker">登录</a>
                    </li>
                    <li>
                        <a href="http://www.xiaozhu168.com/reg.html" class="red">注册</a>
                    </li>
                    <!-- 未登录 end -->

                    <?php else: ?>
                    <!-- 已登录 start -->
                    <li class="user-is-login darker">
                        <a href="http://www.xiaozhu168.com/accountInit.html">您好，<em class="green"><?php echo ($user_info['user_tel']); ?></em></a>
                        <a href="javascript:logout();" class="darker logout">退出</a>

                        <!-- 用户信息下拉窗 start -->
                        <div class="user-data-win">
                            <div class="user-win-header"></div>
                            <div class="user-win-content">
                                <div class="user-win-top">
                                    <a href="https://www.xiaozhu168.com/customerInfo.html">账户管理</a>|
                                    <a href="javascript:logout();">退出</a>
                                </div>

                                <div class="user-win-main clearfix">
                                    <a href="https://www.xiaozhu168.com/accountInit.html" class="user-head">
                                        <img src="http://mer.xiaozhu168.com/static/website/images/Headportrait.jpg" alt="">
                                    </a>
                                    <em class="user-vip-level">VIP&nbsp;0</em>
                                    <a href="http://www.xiaozhu168.com/accountInit.html" class="user-nickname"><?php echo ($user_info['user_tel']); ?></a>
                                </div>

                                <ul>
                                    <li>
                                        <a href="https://www.xiaozhu168.com/accountInit.html">
                                            <i class="icon-my-account"></i><br>
                                            我的账户
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.xiaozhu168.com/recharge.html">
                                            <i class="icon-recharge-withdrawals"></i><br>
                                            充值提现
                                        </a>
                                    </li>
                                    <li>
                                        <!-- 有新消息 start -->
                                        <!-- 有新消息 end -->
                                        <a href="http://www.xiaozhu168.com/myMessage.html">
                                            <i class="icon-new-message"></i><br>
                                            消息中心
                                        </a>
                                    </li>
                                    <li class="last-li">
                                        <!-- 有新奖励 start -->
                                        <em class="new-prize-content">
                                            4</em>
                                        <!-- 有新奖励 end -->
                                        <a href="http://www.xiaozhu168.com/myActivityList.html">
                                            <i class="icon-activi-gift"></i><br>
                                            优惠券
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- 用户信息下拉窗 end -->
                    </li>

                    <!-- 已登录 end --><?php endif; ?>
                <li>
                    <a href="javascript:loginWin('<?php echo ($_SERVER['HTTP_HOST']); echo ($_SERVER['PHP_SELF']); ?>?<?php echo ($_SERVER['QUERY_STRING']); ?>');">充值</a>
                </li>
                <li>
                    <a href="http://www.xiaozhu168.com/help/loginReg.html" target="_blank">帮助中心</a>
                </li>
                <li>
                    <a href="http://www.xiaozhu168.com/ask/" target="_blank">小猪问答</a>
                </li>
                <li class="last-li">
                    <!-- 掌上小猪 start -->
                    <div class="xiaozhu-hand">
                        <i class="icon-phone1"></i>
                        掌上小猪
                        <i class="icon-down-green"></i>

                        <div class="xiaozhu-hand-box">
                            <div class="xiaozhu-hand-qrcode clearfix">
                                <i class="icon-pointup-white"></i>
                                <img src="/Public/static/website/images/qrcode.png" />
                                <p>
                                    掌上投资，更加精彩<br />
                                    <span class="green">下载小猪罐子客户端</span><br />
                                    <a href="https://itunes.apple.com/cn/app/xiao-zhu-guan-zi/id1012792916?mt=8" class="app-download-btn iphone-download-btn" title="app iphone 下载">
                                    </a>
                                    <a href="http://www.xiaozhu168.com/upload/files/app/xiaozhu_2.2.0.apk" class="app-download-btn android-download-btn" title="app android 下载">
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- 掌上小猪 end -->

                    <!-- 新浪微博 start -->
                    <a href="javascript:;" class="tencent-wechat">
                        <em class="qrcode-hover-border"></em>
                        <div class="qrcode-box">
                            <div class="tencent-wechat-content qrcode-content">
                                <span class="wechat-qrcode"></span>
                                扫描关注<span class="green">微信</span>
                            </div>
                        </div>
                    </a>
                    <!-- 新浪微博 end -->

                    <!-- 微信 start -->
                    <a href="http://weibo.com/xiaozhuguanzi" class="sina-weibo" target="_blank">
                        <em class="qrcode-hover-border"></em>
                        <div class="qrcode-box">
                            <div class="weibo-qrcode-content qrcode-content">
                                <span class="weibo-qrcode"></span>
                                扫描关注<span class="red">微博</span>
                            </div>
                        </div>
                    </a>
                    <!-- 微信 end -->
                </li>
            </ul>
            <!-- 用户登录状态 end -->

        </div>

    </div>
    <!--灰色顶部菜单栏结束-->
    <div class="common-nav">
        <div class="nav-bar">
            <a href="http://www.xiaozhu168.com/" class="xiaozhu-logo"><img src="/Public/static/website/images/PC-logo_AE.gif" alt="小猪logo" /></a>

            <!-- 菜单 start -->
            <div class="nav-content">
                <ul class="common-nav-list">
                    <li class="active">
                        <a href="http://www.xiaozhu168.com/">首页</a>
                    </li>
                    <li>
                        <a href="http://www.xiaozhu168.com/pool-13-0-0-0-0-1-1.html">我要投资</a>
                    </li>
                    <li>
                        <a href="http://www.xiaozhu168.com/companyProfile.html">信息披露</a>
                    </li>
                    <li>
                        <a href="http://www.xiaozhu168.com/safety_guarantee.html" target="_blank">安全保障</a>
                    </li>
                    <li>
                        <a href="http://www.xiaozhu168.com/mall/">小猪商城</a>
                    </li>
                    <li>
                        <a href="http://www.xiaozhu168.com/aboutus.html">了解小猪</a>
                    </li>
                </ul>
            </div>
            <!-- 菜单 end -->
        </div>
    </div>
    <!-- 添加一个用于在loginWin 方法中使用的basePath 标识 -->
    <input type="hidden" id="jsLoginWinBasePath" name="jsLoginWinBasePath" value="http://www.xiaozhu168.com/"/>
    <!-- 头部 end -->



<!-- 页面主体 start -->
<div class="regist-main">
    <div class="form-content">
        <div class="form-box">
            <form action="register" method="post" class="regist-form">
                <!-- 邀请人信息 start -->
                <!-- 邀请人信息 end -->

                <div class="form-line">
                    <div class="ipt-box">
                        <i class="icon-user"></i>
                        <input type="text" id="phon" maxLength="11" class="tel-ipt" placeholder="请输入手机号码" />
                    </div>
                    <div class="err-line"></div>
                </div>

                <div class="form-line">
                    <div class="ipt-box">
                        <i class="icon-lock"></i>
                        <input type="password" id="red_pwd" maxLength="20" class="psd-ipt" placeholder="请输入密码" />
                    </div>
                    <div class="view-pwd-list">
                        <div class="float-l view-pwd-1">弱</div>
                        <div class="float-l view-pwd-2">中</div>
                        <div class="float-l view-pwd-3">强</div>
                    </div>
                    <div class="err-line"></div>
                </div>

                <div class="invite-line">
                    <div class="invite-toggle">
                        <i class="icon-point-right"></i>
                        <span class="red">邀请人手机号/邀请码(选填)</span>
                    </div>
                    <div class="form-line invite-form-line">
                        <div class="ipt-box">
                            <i class="icon-inviter"></i>
                            <input type="text" id="refferee" maxLength="11" class="invite-ipt" placeholder="手机号/邀请码" />
                        </div>
                        <div class="err-line"></div>
                    </div>
                </div>
                <a href="javascript:;" class="disabled" id="regBtn">
                    立即注册
                    <i class="icon-money-pack"></i>
                </a>

                <div class="contract-line">
                    <label>
                        <input type="checkbox" checked />
                        我已阅读并同意
                    </label>
                    <a href="javascript:showProtocol();" class="contract-btn blue">《小猪罐子平台注册及服务协议》</a>
                </div>

            </form>
        </div>
    </div>

    <div class="regist-banner" style="background-image:url(https://www.xiaozhu168.com/upload/images/288zhuce.jpg);">
        <img src="https://mer.xiaozhu168.com/static/website/images/regist_banner.jpg" alt="">
    </div>
</div>




<!-- 底部start -->
<div style="display: block; clear: both;"></div>

    <div class="xz-bottom xz-white-bottom">
        <div class="xz-widget-footer">
            <dl class="clearfix index_foot_dl active">
            </dl>
            <div class="footer">
                <div>
                    <div class="float-l">
                        copyright©2014 xiaozhu168.com All Rights Reserved 备案号：粤ICP备14055923号
                    </div>
                    <div class="float-r">
                        <a key="558ab0b7efbfb02e2a186fda" style="background:none;margin-right:40px;" class="aptitude-1" target="_blank" logo_size="83x30" logo_type="business" href="http://v.pinpaibao.com.cn/authenticate/cert/?site=192.168.16.26:3080&amp;at=business"><!--script src="http://fm.p0y.cn/j/adv.js"></script><script src="http://static.anquan.org/static/outer/js/aq_auth.js"></script--><b id="aqLogoCVUHT" style="display: none;"></b><img src="//static.anquan.org/static/outer/image/hy_83x30.png" alt="安全联盟认证" width="83" height="30" style="border: none;"></a>
                        <a id="___szfw_logo___" style="margin-right:78px;" href="https://credit.szfw.org/CX20160229013712570171.html" target="_blank"><img src="https://mer.xiaozhu168.com/static/website/images/cert.png" width="112" border="0"></a> <a href="http://www.miitbeian.gov.cn/publish/query/indexFirst.action" class="aptitude-1" title="工业和信息化部" target="_blank"></a> <a href="http://szcert.ebs.org.cn/ebc298c1-8dbf-4784-a88c-5c62cb2d9461" class="aptitude-2" title="深圳市网络经营者信息公示" target="_blank"></a> <a href="http://www.itrust.org.cn/yz/pjwx.asp?wm=1398578442" class="aptitude-3" title="ICP网站征信证书" target="_blank"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>


&nbsp;


<script type="text/javascript" src="/Public/static/website/js/lib/jquery-1.8.3.min.js"></script>

<script type="text/javascript" src="/Public/static/website/js/common.js?v=1.3"></script>

<script type="text/javascript" src="/Public/static/website/js/promiseA.js"></script>

<script type="text/javascript" src="/Public/static/website/js/regist.js"></script>

<script type="text/javascript">
    var basePath = "http://<?php echo ($_SERVER['HTTP_HOST']); ?>";
    function switchCode() {
        var timenow = new Date();
        $("#codeNum").attr("src", "<?php echo U('verify');?>?pageId=capacity&d=" + timenow);
    }
</script>

</body>
</html>