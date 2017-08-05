<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title><?php echo ($title); ?></title>
	<meta name="keywords" content="<?php echo ($keywords); ?>" />
	<meta name="description" content="<?php echo ($description); ?>" />
    <link rel="stylesheet" href="/Public/Home/css/public.css" />
    <?php foreach ($css as $k => $v): ?>
    <link rel="stylesheet" href="/Public/Home/css/<?php echo ($v); ?>.css" />
	<?php endforeach; ?>
	<script type="text/javascript">
	//手机UA识别
	var mobileAgent = new Array("iphone", "ipod", "ipad", "android", "mobile", "blackberry", "webos", "incognito", "webmate", "bada", "nokia", "lg", "ucweb", "skyfire");
	var browser = navigator.userAgent.toLowerCase(); 
	var isMobile = false; 
	for (var i=0; i<mobileAgent.length; i++){ if (browser.indexOf(mobileAgent[i])!=-1){ isMobile = true; 
	//alert(mobileAgent[i]); 
	location.href = 'http://n-t-t.vip/user/Index/main_m.html';
break; } } 
</script>
    
</head>
<body>
<header>
    <div class="index_bot">
        <div class="top">
            <div class="top_left">
                <span class="index_sj"></span>
                <span>客服热线 : </span>
                <span class="index_phone">400-882-5188</span>
                <span class="index_gz">( 工作日 9:00 - 22:00 )</span>
            </div>
            <div class="top_right">
                <ul>
                    <li><a>登入</a></li>
                    <li><a href="reg.html">注册</a></li>
                    <li><a>充值</a></li>
                    <li><a>小猪问答</a></li>
                    <li><a>新手引导</a></li>
                    <li style="border:none;padding-right:0;margin-top:-8px;">
                        <div class="index_app">
                            <i class="index_dh"></i>
                            掌上APP
                            <i class="index_jt"></i>
                            <div class="index_app_ewm">
                                <div class="index_app_xz">
                                    <i class="index_app_tb"></i>
                                    <img src="">
                                    <p class="index_app_sys">
                                        掌上投资，更加精彩<br>
                                        <span class="index_app_green">下载小猪罐子客户端</span><br>
                                        <a href="https://itunes.apple.com/cn/app/xiao-zhu-guan-zi/id1012792916?mt=8" class="index_app_iphone" title="app iphone 下载">
                                        </a>
                                        <a  href="http://www.xiaozhu168.com/upload/files/app/xiaozhu_2.2.0.apk" class="app_index_android" title="app android 下载">
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>   
                    <span class="index_wx">
                        <em class="index_wx_bk"></em>
                        <div class="index_wx_box">
                            <div class="index_wx_div">
                                <span class="index_wx_ewm"></span>
                                扫描关注<span class="green">微信</span>
                            </div>
                        </div>
                    </span>
                    <span class="index_wb">
                        <em class="index_wb_bk"></em>
                        <div class="index_wb_box">
                            <div class="index_wb_div">
                                <span class="index_wb_ewm"></span>
                                扫描关注<span class="red">微博</span>
                            </div>
                        </div>
                    </span>
                   
                   </li> 
                </ul>
            </div>
        </div>
    </div>  
    <!--导航-->
    <div class="nav">
        <div class="logo">
            <a class="index_logo" href="index.html"></a>
        </div>
        <ul>
            <li><a class="  <?php if($controller == "Index"): ?>nav_cur<?php endif; ?>" href="<?php echo U('Index/index');?>">首页</a></li>
            <?php if(is_array($nav_list)): $i = 0; $__LIST__ = $nav_list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$v): $mod = ($i % 2 );++$i;?><li><a class=" <?php if(getController_name($v["nav_link"]) == $controller): ?>nav_cur<?php endif; ?>" href="<?php echo U($v['nav_link']);?>" <?php if($v["is_open_new"] == 1): ?>target='__balank'<?php endif; ?> ><?php echo ($v["nav_name"]); ?></a></li><?php endforeach; endif; else: echo "" ;endif; ?>
        </ul>
    </div>
</header>


    <!--头部-->

    <!--banner图-->
    <div class="pics_wrap">
        <div id="html5zoo-1" style="width:100%">
            <ul class="html5zoo-slides" style="display: none;">
                <li><a href="">
                    <img src="/Public/Home/img/banner.jpg" /></a></li>
                <li><a href="">
                    <img src="/Public/Home/img/banner1.jpg" /></a></li>
                <li><a href="">
                    <img src="/Public/Home/img/banner2.jpg" /></a></li>
                <li><a href="">
                    <img src="/Public/Home/img/banner3.jpg" /></a></li>
                <li><a href="">
                    <img src="/Public/Home/img/banner4.jpg" /></a></li>
            </ul>
        </div>
    </div>
    <!--投资收益-->
    <div class="index_content">
       
        <div class="index_tz">
             <span class="index_tz_img1"></span>
            <div class="index_shouyi">
                <ul>
                    <li class="index_li1">
                        累计投资金额
                        <span class="increment" style="width: 198px; visibility: visible;">
                            <em class="red">13</em>
                            <em class="red">7364</em>
                            <em class="red">9789</em>
                        </span>
                    </li>
                    <li class="index_li1">
                        今日成交金额
                        <span class="increment" style="width: 138px; visibility: visible;">
                            <em class="red">4212</em>
                            <em class="red">537</em>
                        </span>
                    </li>
                    <li class="index_li1">
                        注册人数
                        <span class="increment1" style="width: 138px; visibility: visible;">
                            <em class="red">142,297</em>
                        </span>
                    </li>
                     <li class="index_li2">
                        为投资人赚取收益
                        <span class="increment" style="width: 148px; visibility: visible;">
                            <em class="red">4532</em>
                            <em class="red">6991</em>
                        </span>
                    </li >
                      <li class="index_li2">
                        昨日成交金额
                        <span class="increment" style="width: 138px; visibility: visible;">
                            <em class="red">8212</em>
                            <em class="red">537</em>
                        </span>
                    </li>
                     <li class="index_li2">
                        运营天数
                        <span class="increment3" style="width: 138px; visibility: visible;">
                            <em class="red">752</em>
                        </span>
                    </li>                                                                              
                </ul>
            </div>
        </div>
        <!--动画效果-->
        <div class="index_aqbz">
        <div class="index_dh">
            <ul>
                <li>
                    <em class="index_rz em-mask"></em>
                    <em class="index_rz1"></em>
                    <p>
                    <strong>融资背景</strong>
                    小猪罐子获A轮融资，光谷创投战略入股
                    </p>
                </li>
                <li>
                    <em class="index_zj em-mask"></em>
                    <em class="index_zj1"></em>
                    <p>
                    <strong>资金托管</strong>
                    与徽商银行签订战略合作协议，资金由汇付天下托管
                    </p>
                </li>
                <li>
                    <em class="index_zc em-mask"></em>
                    <em class="index_zc1"></em>
                    <p>
                    <strong>资产多样</strong>
                    引入达飞金控、恒胜车贷等资产
                    </p>
                </li>
                <li class="last-li">
                    <em class="index_fk em-mask"></em>
                    <em class="index_fk1"></em>
                    <p>
                    <strong>风控体系</strong>
                    专业的风控体系，三大原则、8大审核流程、36道严格工序
                    </p>
                </li>
            </ul>
            <div class="index_app_zs">
                <span class="index_tz_ewm"></span>
                <div class="index_tz_box">
                    <h1>扫描</h1>
                    <span>左侧二维码</span>
                    <p>下载小猪罐子APP</p>
                    <i class="index_tz_phone"></i>
                    <em>IOS</em>
                    <i class="index_tz_andrid"></i>
                    <em>Android</em>
                    <a href="">了解详情<i class="index_tz_tb"></i></a>
                </div>
            </div>
        </div>
        </div>
    <!--内容区域-->
    <div>
        <div class="index_tzlc">
             <!--优质产品-->
            <div>
                <div class="index_tzlc_yzcp" >
                    <span style="font-size: 20px;">优质产品</span>
                    <p>门槛低</p>
                    <p>活期理财 ，灵活随取</p>
                    <p>方便快捷</p>
                    <p style="margin-bottom:50px;">短期理财利器</p>
                    <a  class="index_tzlc_gd" href=""><span>更多产品>></span></a>
                </div>
                <div>
                    <div class="index_tzcp_yzcp">
                        <div class="index_tzcp_yzcp1">
                       <a class="index_tzcp_01" href="">深圳房地产投资(新手试投)</a> 
                        <p class="index_tzcp_02">项目总额</p>
                        <p class="index_tzcp_03">300万</p>
                        <p class="index_tzcp_04">
                            <span>进度:</span>
                            <em><i></i></em>
                            <span>63%</span>
                        </p>

                        <p>
                            起投金额：
                            <span>100元</span>
                        </p>
                        <div class="index_tzcp_05">
                            <p class="index_tzcp_06">
                                日化收益率<br>
                                <span>1.28%</span>
                            </p>
                            <p class="index_tzcp_07">
                                项目期限<br>
                                <span>1天</span>
                            </p>
                        </div>
                        <div class="index_tzcp_08">
                            <span>保理机构 : 深圳全国保理</span>
                            <em><img src="/Public/Home/img/b.png"></em>
                        </div>
                        </div>
                        <a class="index_tzcp_09" href="pro_details.html">立即投资</a>                        
                    </div>
                </div>
                <div>
                    <div class="index_tzcp_yzcp">
                        <div class="index_tzcp_yzcp1">
                       <a class="index_tzcp_01" href="">深圳房地产投资(新手试投)</a> 
                        <p class="index_tzcp_02">项目总额</p>
                        <p class="index_tzcp_03">300万</p>
                        <p class="index_tzcp_04">
                            <span>进度:</span>
                            <em><i></i></em>
                            <span>63%</span>
                        </p>

                        <p>
                            起投金额：
                            <span>100元</span>
                        </p>
                        <div class="index_tzcp_05">
                            <p class="index_tzcp_06">
                                日化收益率<br>
                                <span>1.28%</span>
                            </p>
                            <p class="index_tzcp_07">
                                项目期限<br>
                                <span>1天</span>
                            </p>
                        </div>
                        <div class="index_tzcp_08">
                            <span>保理机构 : 深圳全国保理</span>
                            <em><img src="/Public/Home/img/b.png"></em>
                        </div>
                        </div>
                        <a class="index_tzcp_09" href="pro_details.html">立即投资</a>                        
                    </div>
                </div>
                <div>
                    <div class="index_tzcp_yzcp">
                        <div class="index_tzcp_yzcp1">
                       <a class="index_tzcp_01" href="">深圳房地产投资(新手试投)</a> 
                        <p class="index_tzcp_02">项目总额</p>
                        <p class="index_tzcp_03">300万</p>
                        <p class="index_tzcp_04">
                            <span>进度:</span>
                            <em><i></i></em>
                            <span>63%</span>
                        </p>

                        <p>
                            起投金额：
                            <span>100元</span>
                        </p>
                        <div class="index_tzcp_05">
                            <p class="index_tzcp_06">
                                日化收益率<br>
                                <span>1.28%</span>
                            </p>
                            <p class="index_tzcp_07">
                                项目期限<br>
                                <span>1天</span>
                            </p>
                        </div>
                        <div class="index_tzcp_08">
                            <span>保理机构 : 深圳全国保理</span>
                            <em><img src="/Public/Home/img/b.png"></em>
                        </div>
                        </div>
                        <a class="index_tzcp_09" href="pro_details.html">立即投资</a>                        
                    </div>
                </div>
                <div>
                    <div class="index_tzcp_yzcp">
                        <div class="index_tzcp_yzcp1">
                       <a class="index_tzcp_01" href="">深圳房地产投资(新手试投)</a> 
                        <p class="index_tzcp_02">项目总额</p>
                        <p class="index_tzcp_03">300万</p>
                        <p class="index_tzcp_04">
                            <span>进度:</span>
                            <em><i></i></em>
                            <span>63%</span>
                        </p>

                        <p>
                            起投金额：
                            <span>100元</span>
                        </p>
                        <div class="index_tzcp_05">
                            <p class="index_tzcp_06">
                                日化收益率<br>
                                <span>1.28%</span>
                            </p>
                            <p class="index_tzcp_07">
                                项目期限<br>
                                <span>1天</span>
                            </p>
                        </div>
                        <div class="index_tzcp_08">
                            <span>保理机构 : 深圳全国保理</span>
                            <em><img src="/Public/Home/img/b.png"></em>
                        </div>
                        </div>
                        <a class="index_tzcp_09" href="">立即投资</a>                        
                    </div>
                </div>
            </div>
        </div>

            <!--安全稳健-->
        <div class="index_tzlc">    
            <div>
                <div class="index_tzlc_aqwj" >
                    <span style="font-size: 20px;">安全稳健</span>
                    <p>门槛低</p>
                    <p>活期理财 ，灵活随取</p>
                    <p>方便快捷</p>
                    <p style="margin-bottom:50px;">短期理财利器</p>
                    <a  class="index_tzlc_gd" href=""><span>更多产品>></span></a>
                </div>
                <div>
                    <div class="index_tzcp_yzcp">
                        <div class="index_tzcp_yzcp1">
                       <a class="index_tzcp_01" href="">深圳房地产投资(新手试投)</a> 
                        <p class="index_tzcp_02">项目总额</p>
                        <p class="index_tzcp_03">300万</p>
                        <p class="index_tzcp_04">
                            <span>进度:</span>
                            <em><i></i></em>
                            <span>63%</span>
                        </p>

                        <p>
                            起投金额：
                            <span>100元</span>
                        </p>
                        <div class="index_tzcp_05">
                            <p class="index_tzcp_06">
                                日化收益率<br>
                                <span>1.28%</span>
                            </p>
                            <p class="index_tzcp_07">
                                项目期限<br>
                                <span>1天</span>
                            </p>
                        </div>
                        <div class="index_tzcp_08">
                            <span>保理机构 : 深圳全国保理</span>
                            <em><img src="/Public/Home/img/b.png"></em>
                        </div>
                        </div>
                        <a class="index_tzcp_09" href="">立即投资</a>                        
                    </div>
                </div>
            </div>
            <div>
                    <div class="index_tzcp_yzcp">
                        <div class="index_tzcp_yzcp1">
                       <a class="index_tzcp_01" href="">深圳房地产投资(新手试投)</a> 
                        <p class="index_tzcp_02">项目总额</p>
                        <p class="index_tzcp_03">300万</p>
                        <p class="index_tzcp_04">
                            <span>进度:</span>
                            <em><i></i></em>
                            <span>63%</span>
                        </p>

                        <p>
                            起投金额：
                            <span>100元</span>
                        </p>
                        <div class="index_tzcp_05">
                            <p class="index_tzcp_06">
                                日化收益率<br>
                                <span>1.28%</span>
                            </p>
                            <p class="index_tzcp_07">
                                项目期限<br>
                                <span>1天</span>
                            </p>
                        </div>
                        <div class="index_tzcp_08">
                            <span>保理机构 : 深圳全国保理</span>
                            <em><img src="/Public/Home/img/b.png"></em>
                        </div>
                        </div>
                        <a class="index_tzcp_09" href="pro_details.html">立即投资</a>                        
                    </div>
                </div>
                <div>
                    <div class="index_tzcp_yzcp">
                        <div class="index_tzcp_yzcp1">
                       <a class="index_tzcp_01" href="">深圳房地产投资(新手试投)</a> 
                        <p class="index_tzcp_02">项目总额</p>
                        <p class="index_tzcp_03">300万</p>
                        <p class="index_tzcp_04">
                            <span>进度:</span>
                            <em><i></i></em>
                            <span>63%</span>
                        </p>

                        <p>
                            起投金额：
                            <span>100元</span>
                        </p>
                        <div class="index_tzcp_05">
                            <p class="index_tzcp_06">
                                日化收益率<br>
                                <span>1.28%</span>
                            </p>
                            <p class="index_tzcp_07">
                                项目期限<br>
                                <span>1天</span>
                            </p>
                        </div>
                        <div class="index_tzcp_08">
                            <span>保理机构 : 深圳全国保理</span>
                            <em><img src="/Public/Home/img/b.png"></em>
                        </div>
                        </div>
                        <a class="index_tzcp_09" href="pro_details.html">立即投资</a>                        
                    </div>
                </div>
                <div>
                    <div class="index_tzcp_yzcp">
                        <div class="index_tzcp_yzcp1">
                       <a class="index_tzcp_01" href="">深圳房地产投资(新手试投)</a> 
                        <p class="index_tzcp_02">项目总额</p>
                        <p class="index_tzcp_03">300万</p>
                        <p class="index_tzcp_04">
                            <span>进度:</span>
                            <em><i></i></em>
                            <span>63%</span>
                        </p>

                        <p>
                            起投金额：
                            <span>100元</span>
                        </p>
                        <div class="index_tzcp_05">
                            <p class="index_tzcp_06">
                                日化收益率<br>
                                <span>1.28%</span>
                            </p>
                            <p class="index_tzcp_07">
                                项目期限<br>
                                <span>1天</span>
                            </p>
                        </div>
                        <div class="index_tzcp_08">
                            <span>保理机构 : 深圳全国保理</span>
                            <em><img src="/Public/Home/img/b.png"></em>
                        </div>
                        </div>
                        <a class="index_tzcp_09" href="pro_details.html">立即投资</a>                        
                    </div>
                </div>
             </div>
             <!--超高收益-->
            <div class="index_tzlc">   
                <div>
                <div class="index_tzlc_cgsy" >
                    <span style="font-size: 20px;">超高收益</span>
                    <p>门槛低</p>
                    <p>活期理财 ，灵活随取</p>
                    <p>方便快捷</p>
                    <p style="margin-bottom:50px;">短期理财利器</p>
                    <a  class="index_tzlc_gd" href=""><span>更多产品>></span></a>
                </div>
                <div>
                    <div class="index_tzcp_yzcp">
                        <div class="index_tzcp_yzcp1">
                       <a class="index_tzcp_01" href="">深圳房地产投资(新手试投)</a> 
                        <p class="index_tzcp_02">项目总额</p>
                        <p class="index_tzcp_03">300万</p>
                        <p class="index_tzcp_04">
                            <span>进度:</span>
                            <em><i></i></em>
                            <span>63%</span>
                        </p>

                        <p>
                            起投金额：
                            <span>100元</span>
                        </p>
                        <div class="index_tzcp_05">
                            <p class="index_tzcp_06">
                                日化收益率<br>
                                <span>1.28%</span>
                            </p>
                            <p class="index_tzcp_07">
                                项目期限<br>
                                <span>1天</span>
                            </p>
                        </div>
                        <div class="index_tzcp_08">
                            <span>保理机构 : 深圳全国保理</span>
                            <em><img src="/Public/Home/img/b.png"></em>
                        </div>
                        </div>
                        <a class="index_tzcp_09" href="pro_details.html">立即投资</a>                        
                    </div>
                </div>
            </div>
            <div>
                    <div class="index_tzcp_yzcp">
                        <div class="index_tzcp_yzcp1">
                       <a class="index_tzcp_01" href="">深圳房地产投资(新手试投)</a> 
                        <p class="index_tzcp_02">项目总额</p>
                        <p class="index_tzcp_03">300万</p>
                        <p class="index_tzcp_04">
                            <span>进度:</span>
                            <em><i></i></em>
                            <span>63%</span>
                        </p>

                        <p>
                            起投金额：
                            <span>100元</span>
                        </p>
                        <div class="index_tzcp_05">
                            <p class="index_tzcp_06">
                                日化收益率<br>
                                <span>1.28%</span>
                            </p>
                            <p class="index_tzcp_07">
                                项目期限<br>
                                <span>1天</span>
                            </p>
                        </div>
                        <div class="index_tzcp_08">
                            <span>保理机构 : 深圳全国保理</span>
                            <em><img src="/Public/Home/img/b.png"></em>
                        </div>
                        </div>
                        <a class="index_tzcp_09" href="pro_details.html">立即投资</a>                        
                    </div>
                </div>
                <div>
                    <div class="index_tzcp_yzcp">
                        <div class="index_tzcp_yzcp1">
                       <a class="index_tzcp_01" href="">深圳房地产投资(新手试投)</a> 
                        <p class="index_tzcp_02">项目总额</p>
                        <p class="index_tzcp_03">300万</p>
                        <p class="index_tzcp_04">
                            <span>进度:</span>
                            <em><i></i></em>
                            <span>63%</span>
                        </p>

                        <p>
                            起投金额：
                            <span>100元</span>
                        </p>
                        <div class="index_tzcp_05">
                            <p class="index_tzcp_06">
                                日化收益率<br>
                                <span>1.28%</span>
                            </p>
                            <p class="index_tzcp_07">
                                项目期限<br>
                                <span>1天</span>
                            </p>
                        </div>
                        <div class="index_tzcp_08">
                            <span>保理机构 : 深圳全国保理</span>
                            <em><img src="/Public/Home/img/b.png"></em>
                        </div>
                        </div>
                        <a class="index_tzcp_09" href="pro_details.html">立即投资</a>                        
                    </div>
                </div>
                <div>
                    <div class="index_tzcp_yzcp">
                        <div class="index_tzcp_yzcp1">
                       <a class="index_tzcp_01" href="">深圳房地产投资(新手试投)</a> 
                        <p class="index_tzcp_02">项目总额</p>
                        <p class="index_tzcp_03">300万</p>
                        <p class="index_tzcp_04">
                            <span>进度:</span>
                            <em><i></i></em>
                            <span>63%</span>
                        </p>

                        <p>
                            起投金额：
                            <span>100元</span>
                        </p>
                        <div class="index_tzcp_05">
                            <p class="index_tzcp_06">
                                日化收益率<br>
                                <span>1.28%</span>
                            </p>
                            <p class="index_tzcp_07">
                                项目期限<br>
                                <span>1天</span>
                            </p>
                        </div>
                        <div class="index_tzcp_08">
                            <span>保理机构 : 深圳全国保理</span>
                            <em><img src="/Public/Home/img/b.png"></em>
                        </div>
                        </div>
                        <a class="index_tzcp_09" href="pro_details.html">立即投资</a>                        
                    </div>
                </div>
            </div>
        </div>    
       <!--新闻-->
        <div class="index_news">
        <!--媒体-->
            <div class="index_media">
                <div class="index_media_title">
                    <a class="index_media_a1" href="javascript:;">媒体报道</a>
                    <a class="index_media_a2" href="">更多+</a>
                </div>
                <div class="index_media_img">
                    <a class="index_media_img1" href="">
                        <img src="/Public/Home/img/tupian.jpg" />
                        <em>力学笃行 稳健致远 深入贯彻“两学一做”...</em>
                    </a>
                    <a class="index_media_img2" href="">
                        <img src="/Public/Home/img/tupian1.jpg" />
                        <em>力学笃行 稳健致远 深入贯彻“两学一做”...</em>
                    </a>
                </div>
                <ul class="index_media_con">
                    <li>
                        <span>></span>
                        <a href="">【财经网】小猪罐子携手阿拉善SEE公益 寻回中原的碧水蓝天</a>
                        <label>2017-05-17</label>
                    </li>
                     <li>
                        <span>></span>
                        <a href="">【财经中国网】致罐头：爱妈妈，趁时光未老</a>
                        <label>2017-05-12</label>
                    </li>
                    <li>
                        <span>></span>
                        <a href="">【金融界】小猪罐子防患于网络风险 正式开展国家网络安全等保三级测评工作</a>
                        <label>2017-05-08</label>
                    </li>                               
                </ul>
            </div>  
        <!--公告-->
            <div class="index_notice">
                <div class="index_notice_title">
                    <a class="index_media_a1" href="javascript:;">最新公告</a>
                    <a class="index_notice_a2" href="">更多+</a>
                </div>
                <ul class="index_notice_con">
                    <li>
                        <span>></span>
                        <a href="">建设银行系统维护公告</a>
                        <em></em>
                        <label>2017-05-25</label>
                    </li>
                     <li>
                        <span>></span>
                        <a href="">光大银行系统维护公告</a>
                        <em></em>
                        <label>2017-05-25</label>
                    </li>
                     <li>
                        <span>></span>
                        <a href="">关于小猪罐子最新动态</a>
                        <em></em>
                        <label>2017-05-24</label>
                    </li>
                    <li>
                        <span>></span>
                        <a href="">双重活动闹端午，放肆加息1%</a>
                        <em></em>
                        <label>2017-05-23</label>
                    </li>
                    <li>
                        <span>></span>
                        <a href="">小猪罐子2017年端午节假期业务受理及值...</a>
                        <em></em>
                        <label>2017-05-23</label>
                    </li>
                    <li>
                        <span>></span>
                        <a href="">关于小猪罐子机房服务器升级公告</a>
                        <em></em>
                        <label>2017-05-22</label>
                    </li>
                    <li>
                        <span>></span>
                        <a href="">【活动】缤纷理财节 礼遇红利和i7</a>
                        <em></em>
                        <label>2017-05-17</label>
                    </li>                                                                                                                     
                </ul>
            </div>        
        </div> 
        <!--合作伙伴-->
        <div class="contentbox">
            <div class="index_partners_title">
                <a class="index_media_a1">合作伙伴</a>
            </div>
            <div class="index_partners_con">
                <div class="qcontainer">
                    <a class="film" href="">
                        <div class="face front"><img src="/Public/Home/img/img1.jpg"></div>
                        <div class="face back"><h3>这是老大!!</h3></div>
                    </a>
                </div>
                <div class="qcontainer">
                    <a class="film" href="">
                        <div class="face front"><img src="/Public/Home/img/img2.jpg"></div>
                        <div class="face back"><h3>这是大姐头!!</h3></div>
                    </a>
                </div>
                <div class="qcontainer">
                    <a class="film" href="">
                        <div class="face front"><img src="/Public/Home/img/img3.png"></div>
                        <div class="face back"><h3>这是小清!!</h3></div>
                    </a>
                </div>
                <div class="qcontainer">
                    <a class="film" href="">
                        <div class="face front"><img src="/Public/Home/img/img4.jpg"></div>
                        <div class="face back"><h3>这是学霸!!</h3></div>
                    </a>
                </div>
                <div class="qcontainer">
                    <a class="film" href="">
                        <div class="face front"><img src="/Public/Home/img/img4.jpg"></div>
                        <div class="face back"><h3>这是学霸!!</h3></div>
                    </a>
                </div>
                <div class="qcontainer">
                    <a class="film" href="">
                        <div class="face front"><img src="/Public/Home/img/img4.jpg"></div>
                        <div class="face back"><h3>这是学霸!!</h3></div>
                    </a>
                </div>
                <div class="qcontainer">
                    <a class="film" href="">
                        <div class="face front"><img src="/Public/Home/img/img4.jpg"></div>
                        <div class="face back"><h3>这是学霸!!</h3></div>
                    </a>
                </div>
                <div class="qcontainer">
                    <a class="film" href="">
                        <div class="face front"><img src="/Public/Home/img/img4.jpg"></div>
                        <div class="face back"><h3>这是学霸!!</h3></div>
                    </a>
                </div>
                <div class="qcontainer">
                    <a class="film" href="">
                        <div class="face front"><img src="/Public/Home/img/img4.jpg"></div>
                        <div class="face back"><h3>这是学霸!!</h3></div>
                    </a>
                </div>
                <div class="qcontainer">
                    <a class="film" href="">
                        <div class="face front"><img src="/Public/Home/img/img4.jpg"></div>
                        <div class="face back"><h3>这是学霸!!</h3></div>
                    </a>
                </div>
                <div class="qcontainer">
                    <a class="film" href="">
                        <div class="face front"><img src="/Public/Home/img/img4.jpg"></div>
                        <div class="face back"><h3>这是学霸!!</h3></div>
                    </a>
                </div>
                <div class="qcontainer">
                    <a class="film" href="">
                        <div class="face front"><img src="/Public/Home/img/img4.jpg"></div>
                        <div class="face back"><h3>这是学霸!!</h3></div>
                    </a>
                </div>                                                                              
                <div class="qcontainer">
                    <a class="film" href="">
                        <div class="face front"><img src="/Public/Home/img/img4.jpg"></div>
                        <div class="face back"><h3>这是学霸!!</h3></div>
                    </a>
                </div>
                <div class="qcontainer">
                    <a class="film" href="">
                        <div class="face front"><img src="/Public/Home/img/img4.jpg"></div>
                        <div class="face back"><h3>这是学霸!!</h3></div>
                    </a>
                </div>                                                                                  
            </div>
        </div>             
    </div>
    <!--底部-->



<footer>
    <div class="index_bottom">
        <div class="index_bottom_content">
            <ul style="margin-left:0;">
                <div>关于我们</div>
                <li><a href="">公司简介</a></li>
                <li><a href="">商务合作</a></li>
                <li><a href="">团队故事</a></li>
            </ul>
            <ul>
                <div>安全保障</div>
                <li><a href="">风控体系</a></li>
                <li><a href="">资金托管</a></li>
                <li><a href="">电子保全</a></li>
            </ul>  
            <ul>
                <div>服务中心</div>
                <li><a href="">会员权益</a></li>
                <li><a href="">资费说明</a></li>
                <li><a href="">理财百科</a></li>
            </ul>
            <ul>
                <div>新手指引</div>
                <li><a href="">找回密码</a></li>
                <li><a href="">注册账号</a></li>
                <li><a href="">网站地图</a></li>
            </ul> 
            <div class="index_bottom_sm">
                <div style="float:left;">
                    <img src="/Public/Home/img/wx_tb.png">
                    <p>关注订阅</p>
                </div>
                <div style="float:left;margin-left:30px;">
                    <img src="/Public/Home/img/wx_tb.png">
                    <p>扫一扫下载</p>
                </div>
            </div> 
            <div style="float:left;margin: -10px 0 0 70px;">
                <a class="index_foot_kf"></a>
                <p class="index_foot_rx">
                    客服热线
                    <span>( 工作日 9:00 - 22:00 )</span>
                </p>
                <p class="index_foot_dh">400-882-5188</p>
                <p class="index_foot_xz">
                    <a href="" class="index_foot_ip"></a>
                    <a href="" class="index_foot_ar"></a>
                </p>
            </div>                                                            
        </div>
        <div class="index_foot">
            <div class="index_foot_tb">
                <ul>
                    <li class="index_foot_a1"></li>
                    <li class="index_foot_a2"></li>
                    <li class="index_foot_a3"></li>
                    <li class="index_foot_a4"></li>
                    <li class="index_foot_a5"></li>
                    <li class="index_foot_a6"></li>
                    <li class="index_foot_a7"></li>
                    <li class="index_foot_a8"></li>
                    <li class="index_foot_a9"></li>
                    <li class="index_foot_a10"></li>
                </ul>
            </div>
            <div style="text-align:center;">
            <span>京ICP备15002237号</span> <a><img src="/Public/Home/img/ghs.png"></a> <span>京公网安备110111016467416号</span>
            </div>
            <div style="text-align:center;">
            <span>© 2017 9527 All rights reserved </span>
            <span>北京9527投资管理有限公司 市场有风险 投资需谨慎</span>
            </div>
    </div>
</footer>
<script type="text/javascript" src="/Public/Home/js/jquery-2.1.1.min.js"></script>
<?php foreach($js as $k => $v): ?>
<script type="text/javascript" src="/Public/Home/js/<?php echo ($v); ?>.js"></script>
<?php endforeach?>
</body>
</html>