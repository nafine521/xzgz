<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<meta name="renderer" content="webkit|ie-comp|ie-stand">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
<meta http-equiv="Cache-Control" content="no-siteapp" />
<!--[if lt IE 9]>
<script type="text/javascript" src="/Public/Admin/lib/html5.js"></script>
<script type="text/javascript" src="/Public/Admin/lib/respond.min.js"></script>
<script type="text/javascript" src="/Public/Admin/lib/PIE_IE678.js"></script>
<![endif]-->
<link href="/Public/Admin/css/H-ui.min.css" rel="stylesheet" type="text/css" />
<link href="/Public/Admin/css/H-ui.admin.css" rel="stylesheet" type="text/css" />
<link href="/Public/Admin/lib/icheck/icheck.css" rel="stylesheet" type="text/css" />
<link href="/Public/Admin/lib/Hui-iconfont/1.0.7/iconfont.css" rel="stylesheet" type="text/css" />
<!--[if IE 6]>
<script type="text/javascript" src="http://lib.h-ui.net/DD_belatedPNG_0.0.8a-min.js" ></script>
<script>DD_belatedPNG.fix('*');</script>
<![endif]-->
<title>添加用户</title>
</head>
<body>
<div class="pd-20">
  <form action="" method="post" class="form form-horizontal" id="form-member-add">
    <div class="row cl">
      <label class="form-label col-3"><span class="c-red">*</span>用户名：</label>
      <div class="formControls col-5">
        <input type="text" class="input-text" value="<?php echo ($info["member_name"]); ?>" placeholder="" id="member-name" name="member_name" datatype="*2-16" nullmsg="用户名不能为空">
      </div>
      <div class="col-4"> </div>
    </div>


    <div class="row cl">
      <label class="form-label col-3"><span class="c-red">*</span>会员权重：</label>
      <div class="formControls col-5">
        <input type="text" class="input-text" placeholder="" name="member_level" datatype="*" nullmsg="请设置权限！" value="<?php echo ($info["email"]); ?>">
      </div>
      <div class="col-4"> </div>
    </div>
    <div class="row cl">
      <label class="form-label col-3"><span class="c-red">*</span>密码：</label>
      <div class="formControls col-5">
        <input type="password" class="input-text"  name="password" datatype="*" nullmsg="请输入密码！">
      </div>
      <div class="col-4"> </div>
    </div>
    <div class="row cl">
      <label class="form-label col-3"><span class="c-red">*</span>确认密码：</label>
      <div class="formControls col-5">
        <input type="password" class="input-text"   datatype="*" recheck="password"  nullmsg="请再输入一次密码！" errormsg="您两次输入的账号密码不一致！">
        <!--<input type="password" value=""  class="inputxt Validform_error" datatype="*" recheck="userpassword" nullmsg="请再输入一次密码！" errormsg="您两次输入的账号密码不一致！">-->
      </div>
      <div class="col-4"> </div>
    </div>

    <div class="row cl">
      <label class="form-label col-xs-4 col-sm-2">备注：</label>
      <div class="formControls col-xs-8 col-sm-9">
        <textarea name="momo" cols="" rows="" class="textarea valid" > <?php echo ($info["memo"]); ?></textarea>
        <p class="textarea-numberbar"><em class="textarea-length">0</em>/200</p>
      </div>
    </div>

  <!--  <div class="row cl">
      <label class="form-label col-3">所在城市：</label>
      <div class="formControls col-5"> <div id="city">
        <span class="select-box">
          <select class="prov select" name="prov"  size="1" ></select>
          </span><span class="select-box">
          <select class="city select" disabled="disabled" name="city"> </select>
        </span><span class="select-box">
          <select class="dist select" disabled="disabled" name="dist" ></select>
      </span>
      </div>
      <div class="col-4"> </div>
    </div>-->

    <div class="row cl">
      <div class="col-9 col-offset-3">
        <input type="hidden" name="id" value="<?php echo ($info['id']); ?>">
        <input class="btn btn-primary radius" type="submit" value="&nbsp;&nbsp;提交&nbsp;&nbsp;">
      </div>
    </div>
  </form>
</div>
</div>
<script type="text/javascript" src="/Public/Admin/lib/jquery/1.9.1/jquery.min.js"></script>
<script type="text/javascript" src="/Public/Admin/lib/icheck/jquery.icheck.min.js"></script>
<script type="text/javascript" src="/Public/Admin/lib/Validform/5.3.2/Validform.min.js"></script>
<script type="text/javascript" src="/Public/Admin/lib/layer/2.1/layer.js"></script>
<script type="text/javascript" src="/Public/Admin/js/H-ui.js"></script>
<script type="text/javascript" src="/Public/Admin/js/H-ui.admin.js"></script>
<script type="text/javascript">
$(function(){
	$('.skin-minimal input').iCheck({
		checkboxClass: 'icheckbox-blue',
		radioClass: 'iradio-blue',
		increaseArea: '20%'
	});
	
	$("#form-member-add").Validform({
		tiptype:2,
        ajaxPost:true,
		callback:function(form){
			if(form.status=="y"){
			    layer.msg("添加用户成功",{icon:1,time:1000});
                setTimeout(function() {
                    var index = parent.layer.getFrameIndex(window.name);//获取当前页面的索引
                    parent.location.reload();//刷新父窗口
                    parent.layer.close(index);//关闭当前窗口
                });
            }
		}
	});
});
</script>
<!--<script type="text/javascript" src="/Public/Home/js/jquery.cityselect.js"></script>
<script type="text/javascript" src="/Public/Home/js/city.min.js"></script>
<script type="text/javascript">
    $(function() {
        $("#city").citySelect({
            url: "/public/home/js/city.min.js",
            prov:"<?php echo ($info['prov']); ?>",
            city:"<?php echo ($info['city']); ?>",
            dist:"<?php echo ($info['dist']); ?>",
            nodata: "none"
        });
    });

    //ajax提交
    $("#form-member-add").Validform({
//      tiptype:2,
        ajaxPost:true,
        callback:function(form){
            if(form.status=='y'){
                setTimeout(function () {
                    $.Hidemsg();
                    var index = parent.layer.getFrameIndex(window.name);//获取当前页面的索引
                    parent.location.reload();//刷新父窗口
                    parent.layer.close(index);//关闭当前窗口
                },1000);
            }
        }
    });

</script>-->
</body>
</html>