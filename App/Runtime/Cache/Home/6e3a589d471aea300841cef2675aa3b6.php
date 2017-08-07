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

    <!--<link href="/Public/static/website/style/common.css" type="text/css" rel="stylesheet" />
    <link href="/Public/static/website/style/login_css.css" type="text/css" rel="stylesheet" />
    <link href="/Public/static/website/style/icon.css" type="text/css" rel="stylesheet" />
    <link href="/Public/static/website/style/index_1200.css?v=2.0" type="text/css" rel="stylesheet" />-->
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
            <!-- 已登录 start -->
            <!-- 已登录 end -->

            <!-- 未登录 start -->
            <li>
                <a href="javascript:loginWin();" class="darker">登录</a>
            </li>
            <li>
                <a href="http://www.xiaozhu168.com/reg.html" class="red">注册</a>
            </li>
            <!-- 未登录 end -->
            <li>
                <a href="javascript:loginWin('<?php echo ($_SERVER['SERVER_NAME']); ?>rechargeInit');">充值</a>
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


<!-- banner start -->
<div class="banner-box">
    <!-- 轮播图 start -->
    <div class="banner-content banner-widget">
        <ul class="banner-list">
            <li class="active"><a target="_blank" href="https://www.xiaozhu168.com/toAnniversaryActive" _src="https://www.xiaozhu168.com/upload/images/banner/PC%20%20btu%201920x400.png"></a>
            </li>
            <li><a target="_blank" href="https://www.xiaozhu168.com/getInvitation_old_friends " _src="https://www.xiaozhu168.com/upload/images/banner/pc%20%20%201920-400.jpg"></a>
            </li>
            <li><a target="_blank" href="https://www.xiaozhu168.com/register288.html" _src="https://www.xiaozhu168.com/upload/images/banner/pc%201920-400.jpg"></a>
            </li>
            <li><a target="_blank" href="http://www.xiaozhu168.com/news_conference.jsp" _src="http://www.xiaozhu168.com/upload/images/pcB1920x400.jpg"></a>
            </li>
            <li><a target="_blank" href="http://www.xiaozhu168.com/special/bank_custody.jsp" _src="http://www.xiaozhu168.com/upload/images/meitibaodao/1920x400.jpg"></a>
            </li>
            <li><a target="_blank" href="http://www.xiaozhu168.com/news/details-371.html" _src="http://www.xiaozhu168.com/upload/images/banner/1920x400.jpg"></a>
            </li>
        </ul>
    </div>
    <!-- 轮播图 end -->

    <!-- 用户信息 start -->
    <div class="banner-tag-box">
        <!-- 已登录 start -->
        <!-- 已登录 end -->

        <!-- 未登录 start -->
        <div class="banner-tag visitor-banner-tag">
            <ul class="clearfix">
                <li class="float-l"  style="display: none;">
                    已有<strong>148,289</strong>投资者选择
                </li>
                <li class="float-r">
                    <a href="http://www.xiaozhu168.com/guide.html" target="_blank" rel="nofollow" class="guide-new">新手引导</a>
                </li>
            </ul>
            <div class="topest-profit">
                <strong>12.2<sub>%</sub></strong><br />
                预期年化收益率
            </div>
            <a href="http://www.xiaozhu168.com/reg.html" class="red-link-btn" target="_blank">
                <i class="icon-money"></i>
                领取288元新人大礼包
            </a>
            <a href="javascript:loginWin();" class="login-now">
                立即登录
            </a>
        </div>
        <!-- 未登录 end -->
    </div>
    <!-- 用户信息 end -->
</div>
<!-- banner end -->

<!-- 平台数据 start -->
<div class="web-data">
    <div class="data-content">
        <ul class="data-list">
            <li>
                累计投资金额
                <span class="increment">
                <em class="red">15</em>亿
                    <em class="red">4956</em>万
                    <em class="red">3629</em>元
                </span>
            </li>
            <li>
                为投资人赚取收益
                <span class="increment">
                <em class="red">5224</em>万
                    <em class="red">0767</em>元
                </span>
            </li>
            <li class="last-li">
                注册人数
                <span style="width: 138px; visibility: visible;">
                    <em class="red">148,289</em>人
                </span>
            </li>
        </ul>
    </div>
</div>
<!-- 平台数据 end -->

<!-- 安全保障 start -->
<div class="safe-ensure">

    <div class="safe-ensure-content">
        <ul class="safe-ensure-list">
            <li>
                <em class="bank-ensure em-mask"></em>
                <em class="bank-ensure-hover"></em>
                <p>
                    <strong>融资背景</strong>
                    小猪罐子获A轮融资，光谷创投战略入股
                </p>
            </li>
            <li>
                <em class="sunshine-ensure em-mask"></em>
                <em class="sunshine-ensure-hover"></em>
                <p>
                    <strong>资金托管</strong>
                    与徽商银行签订战略合作协议，资金由汇付天下托管
                </p>
            </li>
            <li>
                <em class="msg-ensure em-mask"></em>
                <em class="msg-ensure-hover"></em>
                <p>
                    <strong>资产多样</strong>
                    引入达飞金控、恒胜车贷等资产
                </p>
            </li>

            <li class="last-li">
                <em class="risk-ensure em-mask"></em>
                <em class="risk-ensure-hover"></em>
                <p>
                    <strong>风控体系</strong>
                    专业的风控体系，三大原则、8大审核流程、36道严格工序
                </p>
            </li>
        </ul>

        <!-- 扫描下载 app start -->
        <div class="app-download">
            <em class="app-download-qrcode"></em>
            <p>
                <strong>扫描
                    <span class="red">左侧二维码</span>
                </strong><br />
                下载小猪罐子APP<br />
                <i class="icon-iphone"></i><em class="bold">IOS</em>
                <i class="icon-android"></i><em class="bold"> Android</em>
                <a href="http://www.xiaozhu168.com/download.html" target="_blank" class="more-about-app">
                    了解详情
                    <i class="icon-arrow-right"></i>
                </a>
            </p>
        </div>
        <!-- 扫描下载 app end -->
    </div>

</div>
<!-- 安全保障 end -->

<!-- 标列表 start -->
<div class="tag-box">

    <!-- 新手团专享 start -->
    <div class="new-tag-list" >
        <div class="tag-info">
            <h3>
                新手专享
                <small>封闭期短 收益率高</small>
            </h3>
        </div>
        <div class="invest-tag">
            <p>
                <i class="tag-flag-all">团</i>
                <a href="http://www.xiaozhu168.com/pooldetail-details-3.html" target="_blank">新手团</a>
                <em class="tag-flag tag-flag-green">100元起投</em>
                <em class="tag-flag tag-flag-green">限投10000元</em>
            </p>
            <ul class="clearfix">
                <li class="tag-profit">
                    <strong>
                        10.00<sub>%</sub><sub style="font-size: 18px;">+8.15%</sub>
                    </strong><br />
                    预期年化收益
                </li>
                <li class="tag-date-limit">
	                    <span class="red" style="display: inline-block;text-align: right;width: 100%;">
	                        30<em>天封闭期</em>
	                    </span>
                    <br />
                    封闭期后将自动退团
                </li>
            </ul>
            <div class="invest-tag-bottom" style="margin-top: 18px;">
                <!-- 累计入团 start -->
                <div class="tag-progress" style="font-size:14px; line-height: 34px; color: #999;">
                    累计入团：2,344人次
                </div>
                <!-- 累计入团 end -->
                <a href="javascript:void(0);" class="invest-btn disabled">已售罄</a>
            </div>
        </div>
        <!-- 活动区域 start -->
        <div class="avt-list-box">

            <!-- 活动banner start -->
            <div class="avt-banner banner-widget">
                <ul class="banner-list">
                    <li class="active">
                        <a target="_blank" href="https://www.xiaozhu168.com/getInvitation_old_friends " _src="https://www.xiaozhu168.com/upload/images/430-125.png"></a>
                    </li>
                </ul>
            </div>
            <!-- 活动banner end -->
            <a href="https://www.xiaozhu168.com/register288.html" target="_blank" class="newest-avt">
                <img src="https://www.xiaozhu168.com/upload/images/430-125%EF%BC%88288%EF%BC%89.png" />
            </a>
        </div>
        <!-- 活动区域 end -->
    </div>
    <!-- 新手团专享 end -->

    <!-- 团标资产 start -->
    <div class="tuan-tag-list">
        <div class="tag-info">
            <h3>
                <a href="http://www.xiaozhu168.com/pool-12-0-0-0-0-1-1.html" target="_blank">团标资产<i class="icon-more-r"></i></a>
                <small>投资便捷 灵活退团</small>
            </h3>
        </div>

        <div class="invest-tag invest-tag-left mr2">
            <p>
                <i class="tag-flag-all">团</i>
                <a href="http://www.xiaozhu168.com/pooldetail-details-1.html" target="_blank">双月盈</a>
                <em class="tag-flag tag-flag-green">100元起投</em>
            </p>
            <ul class="clearfix">
                <li class="tag-profit">
                    <strong>
                        9.20<sub>%</sub>
                        <em class="vip-profit">

                            +VIP
                        </em>
                    </strong><br />
                    预期年化收益
                </li>
                <li class="tag-date-limit">
		                    <span class="red" style="display: inline-block;text-align: right;width: 100%;">
		                        60<em>天封闭期</em>
		                    </span>
                    <br />
                    封闭期后可灵活退团
                </li>
            </ul>
            <div class="invest-tag-bottom" style="margin-top: 18px;">
                <!-- 累计入团 start -->
                <div class="tag-progress" style="font-size:14px; line-height: 34px; color: #999;">
                    累计入团：2,479人次
                </div>
                <!-- 累计入团 end -->
                <a href="http://www.xiaozhu168.com/pooldetail-details-1.html" target="_blank" class="invest-btn">立即投标</a>
            </div>
        </div>
        <div class="invest-tag">
            <p>
                <i class="tag-flag-all">团</i>
                <a href="http://www.xiaozhu168.com/pooldetail-details-2.html" target="_blank">四月盈</a>
                <em class="tag-flag tag-flag-green">100元起投</em>
            </p>
            <ul class="clearfix">
                <li class="tag-profit">
                    <strong>
                        10.20<sub>%</sub>
                        <em class="vip-profit">

                            +VIP
                        </em>
                    </strong><br />
                    预期年化收益
                </li>
                <li class="tag-date-limit">
		                    <span class="red" style="display: inline-block;text-align: right;width: 100%;">
		                        120<em>天封闭期</em>
		                    </span>
                    <br />
                    封闭期后可灵活退团
                </li>
            </ul>
            <div class="invest-tag-bottom" style="margin-top: 18px;">
                <!-- 累计入团 start -->
                <div class="tag-progress" style="font-size:14px; line-height: 34px; color: #999;">
                    累计入团：379人次
                </div>
                <!-- 累计入团 end -->
                <a href="javascript:void(0);" class="invest-btn disabled">已售罄</a>
            </div>
        </div>
    </div>
    <!-- 团标资产 end -->

    <!-- 热门推荐 start -->
    <!-- 热门推荐 end -->

    <!-- 个人融资标 start -->
    <!-- 个人融资标暂不开放,by-----Mr.Lu -->
    <!-- 个人融资标 end -->

    <!-- 理财专区 start -->
    <div class="all-tag-list">
        <div class="tag-info">
            <h3>
                <a href="http://www.xiaozhu168.com/invest-3-0-0-0-0-1-1.html" target="_blank">机构资产<i class="icon-more-r"></i></a>
                <small>多种期限 投资灵活</small>
            </h3>

            <ul class="hotest-tag-tab">
                <li tagType="3" class="active">优质标<em>0</em>
                </li>
                <li tagType="6" >普惠类<em>0</em>
                </li>
                <li tagType="4" >房产类<em>0</em>
                </li>
                <li tagType="5" >车辆类<em>0</em>
                </li>
                <li tagType="7" >渠道区<em>0</em>
                </li>
            </ul>
        </div>

        <div class="all-tag-content">
            <em class="border-h"></em>
            <em class="border-v"></em>

            <div class="invest-tag invest-tag-left">
                <p>
                    <i class="tag-flag-all">优</i>
                    <a href="http://www.xiaozhu168.com/pro-details-12724.html" target="_blank">Q170802-2043<2期></a>
                    <em class="tag-flag tag-flag-green">可转</em>
                </p>
                <!-- 爽一发 -->
                <ul class="clearfix">
                    <li class="tag-profit">
                        <strong>
                            11.80<sub>+2.20%</sub>
                            <em class="vip-profit">
                                +VIP</em>
                        </strong><br />
                        预期年化收益

                    </li>
                    <li class="tag-date-limit">
                        期限
                        <span class="red">
			                 9<em>个月</em>
			             </span>
                    </li>
                </ul>

                <div class="invest-tag-bottom">
                    <!-- 进度条 start -->
                    <div class="tag-progress">
                        <div class="tag-progress-bar" progress="100.00%">
                            <!-- 爽一发 -->
                            <em class="tag-progress-finished"></em>
                        </div>
                        <span>100.00%</span>
                    </div>
                    <!-- 进度条 end -->
                    <!-- 爽一发 -->

                    <a href="javascript:;" class="invest-btn disabled">收益中</a>
                </div>
            </div>
            <div class="invest-tag">
                <p>
                    <i class="tag-flag-all">优</i>
                    <a href="http://www.xiaozhu168.com/pro-details-12736.html" target="_blank">Q170803-3002<3期></a>
                    <em class="tag-flag tag-flag-green">可转</em>
                </p>
                <!-- 爽一发 -->
                <ul class="clearfix">
                    <li class="tag-profit">
                        <strong>
                            12.20<sub>+2.60%</sub>
                            <em class="vip-profit">
                                +VIP</em>
                        </strong><br />
                        预期年化收益

                    </li>
                    <li class="tag-date-limit">
                        期限
                        <span class="red">
			                 12<em>个月</em>
			             </span>
                    </li>
                </ul>

                <div class="invest-tag-bottom">
                    <!-- 进度条 start -->
                    <div class="tag-progress">
                        <div class="tag-progress-bar" progress="100.00%">
                            <!-- 爽一发 -->
                            <em class="tag-progress-finished"></em>
                        </div>
                        <span>100.00%</span>
                    </div>
                    <!-- 进度条 end -->
                    <!-- 爽一发 -->

                    <a href="javascript:;" class="invest-btn disabled">收益中</a>
                </div>
            </div>
            <div class="invest-tag invest-tag-left">
                <p>
                    <i class="tag-flag-all">优</i>
                    <a href="http://www.xiaozhu168.com/pro-details-12677.html" target="_blank">Q170725-2041<1期></a>
                    <em class="tag-flag tag-flag-green">可转</em>
                </p>
                <!-- 爽一发 -->
                <ul class="clearfix">
                    <li class="tag-profit">
                        <strong>
                            11.40<sub>+1.80%</sub>
                            <em class="vip-profit">
                                +VIP</em>
                        </strong><br />
                        预期年化收益

                    </li>
                    <li class="tag-date-limit">
                        期限
                        <span class="red">
			                 6<em>个月</em>
			             </span>
                    </li>
                </ul>

                <div class="invest-tag-bottom">
                    <!-- 进度条 start -->
                    <div class="tag-progress">
                        <div class="tag-progress-bar" progress="100.00%">
                            <!-- 爽一发 -->
                            <em class="tag-progress-finished"></em>
                        </div>
                        <span>100.00%</span>
                    </div>
                    <!-- 进度条 end -->
                    <!-- 爽一发 -->

                    <a href="javascript:;" class="invest-btn disabled">收益中</a>
                </div>
            </div>
            <div class="invest-tag">
                <p>
                    <i class="tag-flag-all">优</i>
                    <a href="http://www.xiaozhu168.com/pro-details-12732.html" target="_blank">Q170803-8030<3期></a>
                    <em class="tag-flag tag-flag-green">可转</em>
                </p>
                <!-- 爽一发 -->
                <ul class="clearfix">
                    <li class="tag-profit">
                        <strong>
                            11.40<sub>+1.80%</sub>
                            <em class="vip-profit">
                                +VIP</em>
                        </strong><br />
                        预期年化收益

                    </li>
                    <li class="tag-date-limit">
                        期限
                        <span class="red">
			                 6<em>个月</em>
			             </span>
                    </li>
                </ul>

                <div class="invest-tag-bottom">
                    <!-- 进度条 start -->
                    <div class="tag-progress">
                        <div class="tag-progress-bar" progress="100.00%">
                            <!-- 爽一发 -->
                            <em class="tag-progress-finished"></em>
                        </div>
                        <span>100.00%</span>
                    </div>
                    <!-- 进度条 end -->
                    <!-- 爽一发 -->

                    <a href="javascript:;" class="invest-btn disabled">收益中</a>
                </div>
            </div>
            <div class="more-product">
                <p>温馨提示：优质标每天<em>10:30、14:30、17:30</em>发售<a href="http://www.xiaozhu168.com/invest-3-0-0-0-0-1-1.html" class="float-r" style="margin-right: 35px;" target="_blank">更多理财产品&gt;&gt;</a></p>
            </div>
        </div>

    </div>
    <!-- 理财专区 end -->

    <!-- 债权转让 start -->
    <div class="hotest-tag-list tag-list-transfer">
        <div class="tag-info">
            <h3>
                <a href="http://www.xiaozhu168.com/invest-11-0-0-0-0-1-1.html" target="_blank">债权转让<i class="icon-more-r"></i></a>
                <small>期限灵活 收益稳健</small>
            </h3>
        </div>

        <div class="invest-tag invest-tag-left">
            <p>
                <i class="tag-flag-all">转</i>
                <a href="http://www.xiaozhu168.com/credit-details-289.html" target="_blank" title="G164057<4期>-20170109001">G164057<4期>-20170109...</a>
                <!-- <em class="tag-flag tag-flag-green">短期灵活 稳定收益</em> -->
            </p>
            <ul class="clearfix">
                <li class="tag-profit">
                    <strong>
                        14.00<sub>%</sub>
                    </strong><br />
                    预期年化收益
                </li>
                <li class="tag-date-limit">
                    期限
                    <span class="red">
                        9<em>个月</em>29<em>天</em></span>
                </li>
            </ul>
            <div class="invest-tag-bottom">
                <!-- 进度条 start -->
                <div class="tag-progress">
                    <div class="tag-progress-bar" progress="100%">
                        <em class="tag-progress-finished"></em>
                    </div>
                    <span>100%</span>
                </div>
                <!-- 进度条 end -->

                <a href="javascript:;" class="invest-btn disabled">收益中</a>
            </div>
        </div>
        <div class="invest-tag">
            <p>
                <i class="tag-flag-all">转</i>
                <a href="http://www.xiaozhu168.com/credit-details-293.html" target="_blank" title="G164063<4期>-20170110004">G164063<4期>-20170110...</a>
                <!-- <em class="tag-flag tag-flag-green">短期灵活 稳定收益</em> -->
            </p>
            <ul class="clearfix">
                <li class="tag-profit">
                    <strong>
                        16.00<sub>%</sub>
                    </strong><br />
                    预期年化收益
                </li>
                <li class="tag-date-limit">
                    期限
                    <span class="red">
                        9<em>个月</em>30<em>天</em></span>
                </li>
            </ul>
            <div class="invest-tag-bottom">
                <!-- 进度条 start -->
                <div class="tag-progress">
                    <div class="tag-progress-bar" progress="100%">
                        <em class="tag-progress-finished"></em>
                    </div>
                    <span>100%</span>
                </div>
                <!-- 进度条 end -->

                <a href="javascript:;" class="invest-btn disabled">收益中</a>
            </div>
        </div>
        <div class="more-product">
            <a href="http://www.xiaozhu168.com/invest-11-0-0-0-0-1-1.html" target="_blank">更多理财产品&gt;&gt;</a>
        </div>
    </div>
</div>
<!-- 标列表 end -->


<!--新闻-->
<div class="index_news mt20">
    <!--媒体报道行业新闻-->
    <div class="index_media ml35 mt10">
        <ul class="index_media_ul index_media_me">
            <li class="index_media_li active">媒体报道<!-- <em>|</em> --></li>
            <!-- <li class="index_media_li2"></li> -->
            <!-- <li class="index_media_li" style="margin-left:23px;">行业新闻</li> -->
            <li class="index_media_li1"><a href="http://www.xiaozhu168.com/mediareport-1.html" target="_blank">更多+</a></li>
        </ul>
        <div class="index_media_con">
            <div class="index_media_tab">
            	<span class="index_media_span mt20">
                    <a href="http://www.xiaozhu168.com/media/details-203.html" target="_blank"><img src="https://www.xiaozhu168.com/upload/images/banner/meiti.jpg"/></a>
                    <em><a href="http://www.xiaozhu168.com/media/details-203.html" target="_blank">重磅！小猪罐子携手融关律所 正式开启备案...</a></em>
                </span>
                <span class="index_media_span mt20">
                    <a href="http://www.xiaozhu168.com/media/details-202.html" target="_blank"><img src="https://www.xiaozhu168.com/upload/images/meitibaodao/1(1).jpg"/></a>
                    <em><a href="http://www.xiaozhu168.com/media/details-202.html" target="_blank">小猪罐子现身中国财富管理生态大会 共同探...</a></em>
                </span>
                <ul class="index_media_ul1">
                    <li class="index_media_li7"><i class="index_media_gt">&gt;</i>
                        <a href="http://www.xiaozhu168.com/media/details-201.html" target="_blank" class="index_media_a">【财经中国网】对话金融科技资深专家 迎接ICO时代浪潮</a>
                        <label>2017-07-28</label>
                    </li>
                    <li class="index_media_li7"><i class="index_media_gt">&gt;</i>
                        <a href="http://www.xiaozhu168.com/media/details-200.html" target="_blank" class="index_media_a">【新浪网】扎心｜账户里静静躺着的存款 并不能给你带来幸福</a>
                        <label>2017-07-25</label>
                    </li>
                    <li class="index_media_li7"><i class="index_media_gt">&gt;</i>
                        <a href="http://www.xiaozhu168.com/media/details-199.html" target="_blank" class="index_media_a">【搜狐财经】网贷行业新政全面解读沙龙会 小猪罐子受邀出席</a>
                        <label>2017-07-21</label>
                    </li>
                </ul>
            </div>

        </div>
    </div>
    <!--媒体报道行业新闻结束-->

    <!--最新公告公司动态-->
    <div class="index_media index_media1 ml35 mt10">
        <ul class="index_media_ul index_media_ul2">
            <li class="index_media_li active">最新公告<!-- <em>|</em> --></li>
            <!-- <li class="index_media_li2">|</li> -->
            <!-- <li class="index_media_li" style="margin-left:23px;">公司动态</li> -->
            <li class="index_media_li1 index_media_li3"><a href="http://www.xiaozhu168.com/webnotice-0-1.html" target="_blank">更多+</a></li>
        </ul>
        <div class="index_media_con1">
            <div class="index_media_tab index_media_tab1 ">
                <ul class="index_media_ul1 index_media_ul3">
                    <li class="index_media_li4"><i class="index_media_gt">&gt;</i>
                        <a href="http://www.xiaozhu168.com/news/details-414.html" target="_blank" class="index_media_a index_media_a1">【三周年庆活动】第二弹•超强加息，重磅上线公告</a>
                        <i class="icon-news"></i>
                    </li>
                    <li class="index_media_li5"><label>2017-08-04</label></li>
                </ul>
                <ul class="index_media_ul1 index_media_ul3">
                    <li class="index_media_li4"><i class="index_media_gt">&gt;</i>
                        <a href="http://www.xiaozhu168.com/news/details-412.html" target="_blank" class="index_media_a index_media_a1">【三周年庆活动】第一弹•与礼同行公告</a>
                        <i class="icon-hots"></i>
                    </li>
                    <li class="index_media_li5"><label>2017-08-01</label></li>
                </ul>
                <ul class="index_media_ul1 index_media_ul3">
                    <li class="index_media_li4"><i class="index_media_gt">&gt;</i>
                        <a href="http://www.xiaozhu168.com/news/details-413.html" target="_blank" class="index_media_a index_media_a1">【活动】老友帮人脉大比拼和288元新手礼包上线公告</a>
                        <i class="icon-hots"></i>
                    </li>
                    <li class="index_media_li5"><label>2017-08-01</label></li>
                </ul>
                <ul class="index_media_ul1 index_media_ul3">
                    <li class="index_media_li4"><i class="index_media_gt">&gt;</i>
                        <a href="http://www.xiaozhu168.com/news/details-411.html" target="_blank" class="index_media_a index_media_a1">【盛夏福利】玩游戏 赢现金大礼</a>
                        <i class="icon-hots"></i>
                    </li>
                    <li class="index_media_li5"><label>2017-07-31</label></li>
                </ul>
                <ul class="index_media_ul1 index_media_ul3">
                    <li class="index_media_li4"><i class="index_media_gt">&gt;</i>
                        <a href="http://www.xiaozhu168.com/news/details-410.html" target="_blank" class="index_media_a index_media_a1">邀请有礼活动结束公告</a>
                    </li>
                    <li class="index_media_li5"><label>2017-07-28</label></li>
                </ul>
                <ul class="index_media_ul1 index_media_ul3">
                    <li class="index_media_li4"><i class="index_media_gt">&gt;</i>
                        <a href="http://www.xiaozhu168.com/news/details-409.html" target="_blank" class="index_media_a index_media_a1">【活动】三周年预热加息活动公告</a>
                    </li>
                    <li class="index_media_li5"><label>2017-07-12</label></li>
                </ul>
                <ul class="index_media_ul1 index_media_ul3">
                    <li class="index_media_li4"><i class="index_media_gt">&gt;</i>
                        <a href="http://www.xiaozhu168.com/news/details-408.html" target="_blank" class="index_media_a index_media_a1">关于汇付天下交易系统已恢复公告</a>
                    </li>
                    <li class="index_media_li5"><label>2017-07-10</label></li>
                </ul>
            </div>

        </div>
    </div>
    <!--最新公告公司动态结束-->
</div>
<!--新闻结束-->

<!--合作伙伴-->
<div class="index_news mt20 index_news1">
    <ul class="index_media_ul index_media_ul4 ml35">
        <li class="index_media_li active">合作伙伴</li>
    </ul>
    <ul class="index_pernter_logo ml25 mt10">
        <li><a href="http://www.xiaozhu168.com/special/bank_custody.jsp" class="partner1" alt="徽商银行" target="_blank" rel="nofollow">
            <img src="http://www.xiaozhu168.com/upload/images/hezuohuoban/LOGO1.jpg" title="徽商银行" />
        </a>
        </li>
        <li><a href="http://www.xiaozhu168.com/news/details-368.html" class="partner1" alt="盈科律师事务所" target="_blank" rel="nofollow">
            <img src="http://www.xiaozhu168.com/upload/images/hezuohuoban/lvshishiwu1.jpg" title="盈科律师事务所" />
        </a>
        </li>
        <li><a href="http://www.chinapnr.com/" class="partner1" alt="汇付天下" target="_blank" rel="nofollow">
            <img src="http://www.xiaozhu168.com/upload/images/hezuohuoban/partner1-hover.png" title="汇付天下" />
        </a>
        </li>
        <li><a href="http://www.xiaozhu168.com/news/details-371.html" class="partner1" alt="e签宝" target="_blank" rel="nofollow">
            <img src="http://www.xiaozhu168.com/upload/images/hezuohuoban/eqianbao%20-1.jpg" title="e签宝" />
        </a>
        </li>
        <li><a href="http://www.wdzj.com/" class="partner1" alt="网贷之家" target="_blank" rel="nofollow">
            <img src="http://www.xiaozhu168.com/upload/images/hezuohuoban/zhijia.jpg" title="网贷之家" />
        </a>
        </li>
        <li><a href="http://www.p2peye.com/" class="partner1" alt="网贷天眼" target="_blank" rel="nofollow">
            <img src="http://www.xiaozhu168.com/upload/images/hezuohuoban/tianyan.jpg" title="网贷天眼" />
        </a>
        </li>
        <li><a href="http://www.gifa.com.cn/" class="partner1" alt="广东互联网金融协会" target="_blank" rel="nofollow">
            <img src="http://www.xiaozhu168.com/upload/images/hezuohuoban/hulianwng.jpg" title="广东互联网金融协会" />
        </a>
        </li>
        <li><a href="http://www.lianlianpay.com/" class="partner1" alt="连连支付" target="_blank" rel="nofollow">
            <img src="http://www.xiaozhu168.com/upload/images/hezuohuoban/partner9_a.jpg" title="连连支付" />
        </a>
        </li>
        <li><a href="http://www.xiaozhu168.com/electronicSecurity.html" class="partner1" alt="电子保全中心" target="_blank" rel="nofollow">
            <img src="http://www.xiaozhu168.com/upload/images/hezuohuoban/partner8_a.jpg" title="电子保全中心" />
        </a>
        </li>
        <li><a href="http://www.xiaozhu168.com/news/details-257.html" class="partner1" alt="达飞" target="_blank" rel="nofollow">
            <img src="http://www.xiaozhu168.com/upload/images/hezuohuoban/dafei.jpg" title="达飞" />
        </a>
        </li>
        <li><a href="https://www.xiaozhu168.com/footerInfo/partner_wanbang.jsp" class="partner1" alt="万邦" target="_blank" rel="nofollow">
            <img src="https://www.xiaozhu168.com/upload/images/hezuohuoban/partner5-hover.png" title="万邦" />
        </a>
        </li>
        <li><a href="http://www.xiaozhu168.com/special/hengsheng.jsp" class="partner1" alt="恒胜助贷" target="_blank" rel="nofollow">
            <img src="http://www.xiaozhu168.com/upload/images/hezuohuoban/partner11_a.jpg" title="恒胜助贷" />
        </a>
        </li>
        <li><a href="http://www.xiaozhu168.com/news/details-288.html" class="partner1" alt="脸谱科技" target="_blank" rel="nofollow">
            <img src="http://www.xiaozhu168.com/upload/images/hezuohuoban/lianpu.jpg" title="脸谱科技" />
        </a>
        </li>
        <li><a href="http://www.xiaozhu168.com/news/details-359.html" class="partner1" alt="甘肃土豆分期信息管理有限公司" target="_blank" rel="nofollow">
            <img src="http://www.xiaozhu168.com/upload/images/hezuohuoban/tudoufeni.jpg" title="甘肃土豆分期信息管理有限公司" />
        </a>
        </li>
        <li><a href="http://www.163.com/" class="partner1" alt="网易" target="_blank" rel="nofollow">
            <img src="http://www.xiaozhu168.com/upload/images/hezuohuoban/wangyi.jpg" title="网易" />
        </a>
        </li>
        <li><a href="http://gd.sina.com.cn/" class="partner1" alt="新浪广东" target="_blank" rel="nofollow">
            <img src="http://www.xiaozhu168.com/upload/images/hezuohuoban/xinlangguangdong-1.jpg" title="新浪广东" />
        </a>
        </li>
    </ul>
</div>
<!--合作伙伴结束-->



<!-- 底部start -->
<div style="display: block; clear: both;"></div>
<div class="xz-bottom">
    <!-- <div class="xz-widget">
        <div class="xz-widget-header">
            <div class="to-top1">
                <span class="top-xiaozhu1"></span>
                <span class="top-xiaozhu2"></span>
                <i class="to-top-icon1"></i>
                <i class="to-top-icon2"></i>
            </div>
            <div class="bottom-ad">
                <p>开启轻松、安全、稳健的理财之旅吧！<a href="javascript:;">立即注册去投资</a></p>
            </div>
        </div> -->

    <div class="xz-widget-body">
        <table class="bottom-left table">
            <tr>
                <th>关于</th>
                <th>安全</th>
                <th>服务</th>
                <th>新手指引</th>
            </tr>
            <tr>
                <td><a href="http://www.xiaozhu168.com/aboutus.html" target="_blank">公司简介</a></td>
                <td><a href="http://www.xiaozhu168.com/safety_guarantee.html" target="_blank">安全保障</a></td>
                <td><a href="http://www.xiaozhu168.com/vip_power.html" target="_blank">会员权益</a></td>
                <td><a href="forgetpassword.html" target="_blank">找回密码</a></td>
            </tr>
            <tr>
                <td><a href="http://www.xiaozhu168.com/aboutus.html#7" target="_blank">商务合作</a></td>
                <td><a href="http://www.xiaozhu168.com/safety-ensure.html" target="_blank">风控体系</a></td>
                <td><a href="http://www.xiaozhu168.com/help/loginReg.html" target="_blank">帮助中心</a></td>
                <td><a href="reg.html" target="_blank">注册帐号</a></td>
            </tr>
            <tr>
                <td><a href="http://www.xiaozhu168.com/aboutus.html#3" target="_blank">团队故事</a></td>
                <td><a href="http://www.xiaozhu168.com/server_exp.html#money" target="_blank">资金托管</a></td>
                <td><a href="http://www.xiaozhu168.com/server_exp.html" target="_blank">资费说明</a></td>
                <td><a href="http://www.xiaozhu168.com/map.html" target="_blank">网站地图</a></td>
            </tr>
            <tr>
                <td>&nbsp;</td>
                <td><a href="http://www.xiaozhu168.com/electronicSecurity.html" target="_blank">电子保全</a></td>
                <td><a href="http://www.xiaozhu168.com/baike/" target="_blank">理财百科</a></td>
                <td>&nbsp;</td>
            </tr>
        </table>
        <div class="bottom-center">
            <img src="/Public/static/website/images/wx_tb.jpg" titlel="关注微信公众号" />
            <br />
            <span>关注<em>微信公众号</em></span>
        </div>
        <div class="bottom-right">
            <div class="clearfix">
                <a href="https://shang.qq.com/wpa/qunwpa?idkey=510d1fd88ddc0946320b45a026378e90b5c317eee5ca2b2a7b88237c0cccffb1" id="qq-group" class="qq-group" title="投资交流群"></a>
            </div>
            <em>客服热线</em>( 工作日 9:00 - 22:00 )
            <br />
            <strong>400-882-5188</strong>
            <br />
            <a href="https://itunes.apple.com/cn/app/xiao-zhu-guan-zi/id1012792916?mt=8" class="iphone-download" title="下载手机app"></a>
            <a href="http://www.xiaozhu168.com/upload/files/app/xiaozhu_2.2.0.apk" class="android-download" title="下载手机app"></a>
        </div>
    </div>
    <div class="xz-widget-footer">
        <dl class="clearfix index_foot_dl active">
            <dt>友情链接</dt>
            <dd><a href="http://www.lasedu.com/" title="留学中介" target="_blank">留学中介</a></dd>
            <dd><a href="http://www.sz7h.com/" title="期货开户" target="_blank">期货开户</a></dd>
            <dd><a href="http://www.wangdaibuluo.com/" title="网贷部落" target="_blank">网贷部落</a></dd>
            <dd><a href="http://news.23.cn" title="创业资讯" target="_blank">创业资讯</a></dd>
            <dd><a href="http://www.ruan8.com" title="软吧手机软件" target="_blank">软吧手机软件</a></dd>
            <dd><a href="http://www.anruan.com" title="安软市场" target="_blank">安软市场</a></dd>
            <dd><a href="http://www.xiaozhu168.com/wangdai-1.html" title="网贷平台" target="_blank">网贷平台</a></dd>
            <dd><a href="http://www.xiazaiduo.com/" title="统一下载站 " target="_blank">统一下载站 </a></dd>
            <dd><a href="http://www.downza.cn/android" title="下载之家" target="_blank">下载之家</a></dd>
            <dd><a href="http://www.uzzf.com/" title="东坡下载" target="_blank">东坡下载</a></dd>
            <dd><a href="http://www.qdnzy.cn" title="广东门户" target="_blank">广东门户</a></dd>
            <dd><a href="http://money.cardbaobao.com/" title="网上理财" target="_blank">网上理财</a></dd>
            <dd><a href="http://www.cdyushun.com/" title="成都贷款" target="_blank">成都贷款</a></dd>
            <dd><a href="http://www.9553.com/ " title="9553下载" target="_blank">9553下载</a></dd>
            <dd><a href="http://www.dghuarong.com" title="金华信息港" target="_blank">金华信息港</a></dd>
            <dd><a href="http://www.gezila.com/" title="格子啦下载吧" target="_blank">格子啦下载吧</a></dd>
            <dd><a href="http://www.hot78.com" title="招商网" target="_blank">招商网</a></dd>
            <dd><a href="http://www.bj5188.com.cn/" title="抵押贷款
" target="_blank">抵押贷款
            </a></dd>
            <dd><a href="http://fxdd.yahui.cc" title="亚汇FXDD" target="_blank">亚汇FXDD</a></dd>
            <dd><a href="http://www.wd361.com" title="网贷互联" target="_blank">网贷互联</a></dd>
            <dd><a href="http://shenzhen.99dai.cn/" title="深圳贷款" target="_blank">深圳贷款</a></dd>
            <dd><a href="http://www.360gann.com/ " title="股票分析软件" target="_blank">股票分析软件</a></dd>
            <dd><a href="http://www.ps188.cn" title="盘手网" target="_blank">盘手网</a></dd>
            <dd><a href="http://broker.jfz.com/" title="理财问答" target="_blank">理财问答</a></dd>
            <dd><a href="https://www.jujinziben.com" title="p2p投资理财" target="_blank">p2p投资理财</a></dd>
            <dd><a href="http://www.kmg898.com" title="金融理财师" target="_blank">金融理财师</a></dd>
            <dd><a href="http://fenxishi.yjcf360.com" title="金融分析师" target="_blank">金融分析师</a></dd>
            <dd><a href="http://www.shitouke.cn" title="网贷预警" target="_blank">网贷预警</a></dd>
            <dd><a href="http://www.51wangdai.com/" title="51网贷" target="_blank">51网贷</a></dd>
            <dd><a href="http://www.jiacaiguanjia.com" title="家财管加" target="_blank">家财管加</a></dd>
            <dd><a href="http://www.wdzx.com" title="网贷中心" target="_blank">网贷中心</a></dd>
            <dd><a href="http://www.wangdaidongfang.com " title="网贷东方" target="_blank">网贷东方</a></dd>
            <dd><a href="http://www.foxf.com.hk" title="香港保险" target="_blank">香港保险</a></dd>
            <dd><a href="http://www.76676.com/" title="76676" target="_blank">76676</a></dd>
            <dd><a href="http://toutiao.manqian.cn/" title="慢钱头条" target="_blank">慢钱头条</a></dd>
            <dd><a href="http://finance.n8n8.cn/" title="金融财经" target="_blank">金融财经</a></dd>
            <dd><a href="http://www.168chaogu.com/" title="股票学习网" target="_blank">股票学习网</a></dd>
        </dl>
        <div class="footer">
            <div>
                <div class="float-l">
                    copyright©2014 xiaozhu168.com All Rights Reserved 备案号：粤ICP备14055923号<br />
                    深圳市前海小猪互联网金融服务有限公司&nbsp;&nbsp;&nbsp;&nbsp;
                    地址：深圳市南山区深南大道9966号威盛科技大厦7楼
                </div>
                <div class="float-r">
                    <a key ="558ab0b7efbfb02e2a186fda" style="background:none;margin-right:40px;" class="aptitude-1" target="_blank" logo_size="83x30"  logo_type="business"  href="http://www.anquan.org" ><script src="https://static.anquan.org/static/outer/js/aq_auth.js"></script></a>
                    <a id='___szfw_logo___' style="margin-right:78px;" href='https://credit.szfw.org/CX20160229013712570171.html' target='_blank'><img src='/Public/static/website/images/cert.png' width="112" border='0' /></a>
                    <a href="http://www.miitbeian.gov.cn/publish/query/indexFirst.action" class="aptitude-1" title="工业和信息化部" target="_blank"></a>
                    <a href="http://szcert.ebs.org.cn/ebc298c1-8dbf-4784-a88c-5c62cb2d9461" class="aptitude-2" title="深圳市网络经营者信息公示" target="_blank"></a>
                    <a href="http://www.itrust.org.cn/yz/pjwx.asp?wm=1398578442" class="aptitude-3" title="ICP网站征信证书" target="_blank"></a>
                </div>
            </div>
        </div>
    </div>
</div>

<!--右侧悬浮-->
<div class="com_left_div">
    <div class="right-fix-tools">
        <div class="fix-tools-content">
            <a href="activity.html" target="_back" rel="nofollow">
                <div class="com_left_li"><i class="com_left_i1"></i><em>活动专区</em></div>
            </a>
            <!-- <a target="_blank" href="http://b.qq.com/webc.htm?new=0&sid=4008825188&eid=218808P8z8p8q8R8P8q80&o=www.xiaozhu168.com&q=7" rel="nofollow"> -->
            <a target="_blank" href="javascript:;" onclick="ysf.open();return false;">
                <div class="com_left_li1 com_left_li4"><i class="com_left_i2"></i><em>在线客服</em><label></label></div>
            </a>
            <div class="com_left_li1 com_left_li5 calculate" id="fix_calculate"><i class="com_left_i3"></i><em>计算收益</em><label></label></div>
            <a  href="http://www.xiaozhu168.com/homeAutoTender" style="display: none;">
                <div class="com_left_li1 com_left_li5 calculate" id="fix_calculate"><i class="com_left_i9"></i><em>批量投标</em><label></label></div>
            </a>
            <div class="com_left_div2 goto_top"><i class="com_left_i4"></i><em>返回顶部</em></div>
        </div>
    </div>
</div>
<input type="hidden" value="" id="noquestion">
<!--右侧悬浮结束-->
<script src="https://qiyukf.com/script/c57c1e6a6ef539fba5f8066aad13ec15.js?uid=&moblie=" ></script>

<script type="text/javascript" src="/Public/static/website/js/lib/jquery-1.8.3.min.js"></script>

<script type="text/javascript" src="/Public/static/website/js/common.js?v=1.3"></script>
<script type="text/javascript" src="/Public/static/website/js/jquery.poshytip.min.js"></script>
<script type="text/javascript">
    $(function () {
        //菜单着色
        (function(){
            var _em = $('.widget-header-em > em');
            var __li = $('.parentList .childList li');
            $.each(__li,function (i){
                var _this_li = __li.eq(i);

                if(_this_li.find('i').text() == _em.text())
                    _this_li.addClass('active');

            });
        })();
    })
    // 提示框
    var _opts = {
        className: "tip-yellowsimple",
        showTimeout: 1,
        alignTo: "target",
        alignX: "center",
        alignY: "top",
        offsetY: 10,
        offsetX:20,
        allowTipHover: true
    };
    $(".popTip").poshytip(  _opts );
    $(function(){
        var state='';
        var errorMsg='';
        if(state==1){
            xzalert( errorMsg );
        }
    })


    function queryQuestion(){
        var noquestion = $('#noquestion').val();
        $.post("queryQuestion",  function(data) {
            if(data.noquestion == 1){
                xzalert("暂无调查问卷！");
                return ;
            }else{
                //window.location.href= "http://www.xiaozhu168.com/queryQuestion.html";
                window.open("http://www.xiaozhu168.com/queryQuestion.html");
            }
        })
    }


</script>

<noscript><p><img src="https://piwik.xiaozhu168.com/piwik.php?idsite=1" style="border:0;display: none;" alt="" /></p></noscript>
<!-- End Piwik Code -->
<noscript><img src="//stats.ipinyou.com/adv.gif?a=wQ..Bt1tXGnc9XDNzd63VYjb00&e=" style="display:none;"/></noscript>





<!-- 底部end -->
<script type="text/javascript" src="/Public/static/website/js/elemInScreen.js"></script>
<?php foreach($js as $k => $v): ?>
<script type="text/javascript" src="/Public/static/website/js/<?php echo ($v); ?>.js"></script>
<?php endforeach ?>

<script type="text/javascript">
    var basePath = "<?php echo ($_SERVER['SERVER_NAME']); ?>";
    var basePaths = "<?php echo ($_SERVER['SERVER_NAME']); ?>";
    var resourcesPath = "/Public/static/website/";

    function needlogin() {
        var nl = window.location.search;
        var alu =  $.getUrlParam('afterloginurl');
        if(nl.indexOf("needlogin") > 0) {
            loginWin(alu);
        }
    }
    needlogin();

    function bomb(){
        if(getCookie('bomb') == 0){
            delCookie('bomb');
            document.cookie="bombs=1";
            location.href = basePath ;
        }else if(getCookie('bombs') == 1){
            delCookie('bombs');
            loginWin();
        }

        //setCookie('bombs','1');

        return null;
    }
    bomb();

    //活动
    function active_open(){

        var startDate = new Date("2017/04/10 01:00:00");
        var endDate = new Date("2017/04/29 23:59:59");
        var nowDate = new Date();
        if(nowDate >= startDate && nowDate <= endDate){
            if( getCookie('active_open_status') == null ){
                setCookie("active_open_status", "1");
            }else{
                return false;
            }

            var _w = $(window).width();
            var _h = $(window).height();
            $('.popout-shadow').show();
            var left = (_w - 492) / 2;
            var  top = (_h - 354) / 2;

            var html =  '<div id="active_open" style="width: 492px; height: 354px; position: fixed; z-index:9999; top:'+top+'px;left:'+left+'px;">'+
                '<a href="<?php echo ($_SERVER['SERVER_NAME']); ?>news/details-365.html"><img src="'+ resourcesPath +'images/492_354.png"></a>'+
            '<a href="javascript:active_close();" style="display: block; position: absolute; top:0; left:436px; width: 40px; height: 40px; background:url('+ resourcesPath +'images/492_354.png) no-repeat; background-position: -436px 0;"></a></div>';
            $('.popout-shadow').after(html);
        }
    }

    active_open();
    function active_close(){
        $('.popout-shadow').hide();
        $('#active_open').hide();
    }


    function setCookie(name,value){
        var Days = 30;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days*24*60*60*1000);
        document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
        /*  var strsec = getsec(time);
         var exp = new Date();
         exp.setTime(exp.getTime() + strsec*1);
         documen t.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();  */
    }
    //读取cookies
    function getCookie(name)
    {
        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg))
            return (unescape(arr[2]));
        else
            return null;
    }
    //删除cookies
    function delCookie(name)
    {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval=getCookie(name);
        if(cval!=null)
            document.cookie= name + "="+cval+";expires="+exp.toGMTString();
    }

    var popWin = popOut({
        title : '立即关联',
        width : '730px',
        height : '326px',
        content :'<div class="gl_box"><div class="gl_left"><p class="gl_p1"><img src="'+ resourcesPath +'images/login/gl_qq.png"></p><p class="gl_p gl_p2">您已使用QQ帐号登录</p><p class="gl_p gl_p3" id="thirdName"></p><p class="gl_p gl_p4">一步关联账户 从此1秒登录</p></div><div class="gl_center"><i class="gl_lock"></i></div><div class="gl_right"><form id="gl"><div class="login_ph" style=" width:260px;"><input type="text"  placeholder="请输入有效的11位手机号码" check-reg="tel" maxlength="11"  id="gl_myinput" style=" width:200px;"/><i class="icon-phone" id="gl_icon-i"></i></div><div class="login_Prompt" id="gl_sj"></div><div class="login_ph" style=" width:260px;"><input type="password" maxlength="20" check-reg="psd" placeholder="请输入密码"  id="gl_red_pwd"  style=" width:200px;"/><i class="icon-lock" id="gl_icon-l" ></i></div><div class="login_Prompt"  id="gl_mm"></div><div class="login_ph4" style=" width:260px;" ><a href="javascript:;"><input type="button" value="立即关联" id="ljgn" class="register_button" style=" width:260px;cursor:pointer;" /></a></div></form></div></div>'
    });



    $("#gl_myinput").click(function(){
        $("#gl_icon-i").css( 'display' , 'inline-block');
    }).blur(function(){
        $("#gl_icon-i").hide();
    });

    $("#gl_red_pwd").click(function(){
        $("#gl_icon-l").css( 'display' , 'inline-block');
    }).blur(function(){
        $("#gl_icon-l").hide();
    });


    function thirdparty(){
        var s="null";
        if(s != null && s != '' && s != 'null' && (getCookie("thirdCount") == 0 || getCookie("thirdCount") == null)){
            setCookie("thirdCount",1);
            var thirdName = getCookie("thirdName");
            $("#thirdName").text(thirdName);
            popWin.show();
        }

    }
    thirdparty();

    $("#ljgn").click(function(){
        var param = {};
        //登录
        param["paramMap.email"] = $("#gl_myinput").val();
        param["paramMap.password"] = $("#gl_red_pwd").val();
        thirdPartylogining(param);
    });

    //登录
    function thirdPartylogining(param) {
        var username = $("#gl_myinput").val();
        var password = $("#gl_red_pwd").val();
        if (username == "") {
            $("#gl_sj").css( 'opacity' , 1 ).text("手机不能为空");
            return;
        }
        if(username.length != 11){
            $("#gl_sj").css( 'opacity' , 1 ).text("请输入有效的11位手机号码");
            return;
        }
        var _m = /^([1][345678][0-9]{9})|([1][7][0678]{1}[0-9]{8})$/;
        if(!_m.test(username)){
            $("#gl_sj").css( 'opacity' , 1 ).text("请输入有效的11位手机号码");
            return;
        }
        if (password == "") {
            $("#gl_mm").css( 'opacity' , 1 ).text("密码不能为空");
            return;
        }
        $("#gl_sj").text("");
        $("#gl_mm").text("");
        var afterLoginUrl = $("#afterLoginUrl").val();
        $.post("thirdPartylogining", param, function(data) {
            if (data.msg == 1) {
                popWin.hide();
                window.location.href = basePath;
            } else if (data.msg == 3) {
                $("#gl_sj").css( 'opacity' , 1 ).text("授权失效，请重新授权！");
            } else if (data.msg == 4) {
                $("#gl_sj").css( 'opacity' , 1 ).text("该帐号已被锁定，请联系客服！");
            } else if (data.msg == 5) { // 未认证
                window.location.href = "approveInit";
            } else if (data.msg == 8) {
                $("#gl_mm").css( 'opacity' , 1 ).text("密码错误，还有"+data.count+"次机会!");
                return;
            }
        });
    }


    $(document).ready(function(){
        var footer = $(".xz-bottom .xz-widget-footer dl dd");
        for (var i = 0; i < footer.length; i++) {
            if(i > 12){
                footer.eq(i).css("display","none");
            }
        }
        $(".xz-bottom .xz-widget-footer dl").append('<dd><a id="end" href="javascript:get_more();">查看更多&gt;&gt;</a></dd>');

    })

    function get_more(){
        var footer = $(".xz-bottom .xz-widget-footer dl dd");
        for (var i = 0; i < footer.length; i++) {
            footer.eq(i).css("display","inline-block");
        }
        $("#end").html('<a id="end" href="javascript:close_more();">&lt;&lt;收起</a>');
    }
    function close_more(){
        var footer = $(".xz-bottom .xz-widget-footer dl dd");
        for (var i = 0; i < footer.length; i++) {
            if(i > 12){
                footer.eq(i).css("display","none");
            }
        }
        $("#end").parent().show();
        $("#end").html('<a href="javascript:get_more();">查看更多&gt;&gt;</a>');
    }
</script>

</body>
</html>