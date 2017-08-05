<?php if (!defined('THINK_PATH')) exit();?>﻿<!DOCTYPE HTML>
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
<link href="/Public/Admin/lib/Hui-iconfont/1.0.7/iconfont.css" rel="stylesheet" type="text/css" />
<!--[if IE 6]>
<script type="text/javascript" src="http://lib.h-ui.net/DD_belatedPNG_0.0.8a-min.js" ></script>
<script>DD_belatedPNG.fix('*');</script>
<![endif]-->
<title>用户管理</title>
</head>
<body>
<nav class="breadcrumb"><i class="Hui-iconfont">&#xe67f;</i> 首页 <span class="c-gray en">&gt;</span> 用户中心 <span class="c-gray en">&gt;</span> 用户管理 <a class="btn btn-success radius r mr-20" style="line-height:1.6em;margin-top:3px" href="javascript:location.replace(location.href);" title="刷新" ><i class="Hui-iconfont">&#xe68f;</i></a></nav>
<div class="pd-20">

	<div class="cl pd-5 bg-1 bk-gray mt-20"> <span class="l"><a href="javascript:;" onclick="datadel()" class="btn btn-danger radius"><i class="Hui-iconfont">&#xe6e2;</i> 批量删除</a> <a href="javascript:;" onclick="member_add('添加用户','memberAdd.html','950','')" class="btn btn-primary radius"><i class="Hui-iconfont">&#xe600;</i> 添加用户</a></span> <span class="r">共有数据：<strong><?php echo (count($list)); ?></strong> 条</span> </div>
	<div class="mt-20">
	<table class="table table-border table-bordered table-hover table-bg table-sort">
		<thead>
			<tr class="text-c">
				<th width="25"><input type="checkbox" name="" value=""></th>
				<th width="80">ID</th>
				<th width="100">用户名</th>
				<th width="40">性别</th>
				<th width="90">头像</th>
				<th width="150">邮箱</th>
				<th width="">地址</th>
				<th width="130">加入时间</th>
				<th width="70">状态</th>
				<th width="100">操作</th>
			</tr>
		</thead>
		<?php if(is_array($list)): $i = 0; $__LIST__ = $list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$v): $mod = ($i % 2 );++$i;?><tr class="text-c">
				<td><input type="checkbox" value="<?php echo ($v['id']); ?>" name="idDel"></td>
				<td><?php echo ($v["uid"]); ?></td>
				<td><u style="cursor:pointer" class="text-primary" onclick="member_show('<?php echo ($v["user_name"]); ?>','<?php echo U('Feedback/userShow',array("id"=>$v['uid']));?>','360','400')">
					<?php echo ($v["user_name"]); ?></u></td>
				<td>
					<?php if($v['sex'] == 1): ?>男<?php elseif($v['sex'] == 2): ?>女<?php else: ?>保密<?php endif; ?>
				</td>
				<td><img src="<?php echo ($v["user_headimg"]); ?>" alt=""></td>
				<td><?php echo ($v["user_email"]); ?></td>
				<td class="text-l"><?php echo ($v["location"]); ?></td>
				<td><?php if(empty($v['reg_time'])): ?>管理员手动添加<?php else: echo (date("Y-m-d H:i:s",$v["reg_time"])); endif; ?> </td>
				<td class="td-status">
					<?php if($v['user_status'] == 1): ?><span class="label label-success radius">正常</span>
						<?php else: ?>
						<span class="label label-default radius">停用</span><?php endif; ?>
				</td>
				<td class="td-manage">
					<?php if($v['user_status'] == 1): ?><a style="text-decoration:none" onClick="member_stop(this,'<?php echo ($v["id"]); ?>')" href="javascript:;" title="停用"><i class="Hui-iconfont">&#xe631;</i></a>
						<?php elseif($v['user_status'] == 0 ): ?>
						<a style="text-decoration:none" onClick="member_start(this,'<?php echo ($v["id"]); ?>')" href="javascript:;" title="激活"><i class="Hui-iconfont">&#xe6e1;</i></a><?php endif; ?>

					<a title="编辑" href="javascript:;" onclick="member_edit('编辑','<?php echo U('memberAdd',array('uid'=>$v['uid']));?>','950','')" class="ml-5" style="text-decoration:none"><i class="Hui-iconfont">&#xe6df;</i></a> <a title="删除" href="javascript:;" onclick="member_del(this,'<?php echo ($v['uid']); ?>')" class="ml-5" style="text-decoration:none"><i class="Hui-iconfont">&#xe6e2;</i></a></td>
			</tr><?php endforeach; endif; else: echo "" ;endif; ?>
		</tbody>
	</table>
	</div>
</div>
<script type="text/javascript" src="/Public/Admin/lib/jquery/1.9.1/jquery.min.js"></script>
<script type="text/javascript" src="/Public/Admin/lib/layer/2.1/layer.js"></script>
<script type="text/javascript" src="/Public/Admin/lib/laypage/1.2/laypage.js"></script>
<script type="text/javascript" src="/Public/Admin/lib/My97DatePicker/WdatePicker.js"></script>
<script type="text/javascript" src="/Public/Admin/lib/datatables/1.10.0/jquery.dataTables.min.js"></script>
<script type="text/javascript" src="/Public/Admin/js/H-ui.js"></script>
<script type="text/javascript" src="/Public/Admin/js/H-ui.admin.js"></script>
<script type="text/javascript">
$(function(){
	$('.table-sort').dataTable({
		"aaSorting": [[ 1, "desc" ]],//默认第几个排序
		"bStateSave": true,//状态保存
		"aoColumnDefs": [
		  //{"bVisible": false, "aTargets": [ 3 ]} //控制列的隐藏显示
		  {"orderable":false,"aTargets":[0,8,9]}// 制定列不参与排序
		]
	});
});
/*用户-添加*/
function member_add(title,url,w,h){
	layer_show(title,url,w,h);
}
/*用户-查看*/
function member_show(title,url,w,h){
	layer_show(title,url,w,h);
}
/*用户-停用*/
function member_stop(obj,id){
	layer.confirm('确认要停用吗？',function(index){

	    $.post("<?php echo U('Base/status');?>",{"tableName":"user","primary":"id","id":id,"fieldVal":0,"fieldName":"user_status1"},function (res) {
			if (res.status=="y"){
                $(obj).parents("tr").find(".td-manage").prepend('<a style="text-decoration:none" onClick="member_start(this,'+id+')" href="javascript:;" title="启用"><i class="Hui-iconfont">&#xe6e1;</i></a>');
                $(obj).parents("tr").find(".td-status").html('<span class="label label-defaunt radius">已停用</span>');
                $(obj).remove();
                layer.msg('已停用!',{icon: 5,time:1000});
			}else{

                layer.msg('系统繁忙，请稍后重试!',{icon: 3,time:1000});
            }
        })

	});
}

/*用户-启用*/
function member_start(obj,id){
	layer.confirm('确认要启用吗？',function(index){
        $.post("<?php echo U('Base/status');?>",{"tableName":"user","primary":"id","id":id,"fieldVal":1,"fieldName":"user_status1"},function (res) {
            if (res.status=="y"){
				$(obj).parents("tr").find(".td-manage").prepend('<a style="text-decoration:none" onClick="member_stop(this,'+id+')" href="javascript:;" title="停用"><i class="Hui-iconfont">&#xe631;</i></a>');
				$(obj).parents("tr").find(".td-status").html('<span class="label label-success radius">已启用</span>');
				$(obj).remove();
				layer.msg('已启用!',{icon: 6,time:1000});
            }else{

                layer.msg('系统繁忙，请稍后重试!',{icon: 3,time:1000});
            }
        })
	});
}
/*用户-编辑*/
function member_edit(title,url,w,h){
	layer_show(title,url,w,h);
}

/*用户-删除*/
function member_del(obj,id){
	layer.confirm('确认要删除吗？',function(index){
	    $.post("<?php echo U('Base/comDel');?>",{"tableName":"user","id":id},function (res) {
			if (res.status=="y"){
                $(obj).parents("tr").remove();
                layer.msg('已删除!',{icon:1,time:1000});
			}
        });
		
	});
}
/*多个*/
function datadel() {
	var choosed=$("input[name='idDel']");
	var strId="";
	$(choosed).each(function (e) {
		strId+=$(this).val()+",";
    });
	if (strId==""){
	    layer.msg("未选中要删除的数据",{icon:3,time:1000});
	    return false;
	}
	console.log(strId);
	$.post("<?php echo U('Base/comDel');?>",{"tableName":"user","id":strId},function (res) {
		if (res.status=="y"){
		    $(choosed).each(function (e) {
				$(this).parents("tr").remove();
            });
		    layer.msg("删除成功！",{icon:1,time:1000});
		}
    })
}
</script> 
</body>
</html>