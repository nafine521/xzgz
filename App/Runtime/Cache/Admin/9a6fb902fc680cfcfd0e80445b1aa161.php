<?php if (!defined('THINK_PATH')) exit();?>﻿<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<meta name="renderer" content="webkit|ie-comp|ie-stand">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
<meta http-equiv="Cache-Control" content="no-siteapp" />
<LINK rel="Bookmark" href="/favicon.ico" >
<LINK rel="Shortcut Icon" href="/favicon.ico" />
<!--[if lt IE 9]>
<script type="text/javascript" src="/Public/Admin/lib/html5.js"></script>
<script type="text/javascript" src="/Public/Admin/lib/respond.min.js"></script>
<script type="text/javascript" src="/Public/Admin/lib/PIE_IE678.js"></script>
<![endif]-->
<link href="/Public/Admin/css/H-ui.min.css" rel="stylesheet" type="text/css" />
<link href="/Public/Admin/css/H-ui.news.css" rel="stylesheet" type="text/css" />
<link href="/Public/Admin/css/style.css" rel="stylesheet" type="text/css" />
<link href="/Public/Admin/lib/Hui-iconfont/1.0.7/iconfont.css" rel="stylesheet" type="text/css" />
<link href="/Public/Admin/css/page.css" rel="stylesheet" type="text/css" />
<!--[if IE 6]>
<script type="text/javascript" src="/Public/Admin/lib/DD_belatedPNG_0.0.8a-min.js" ></script>
<script>DD_belatedPNG.fix('*');</script>
<![endif]-->
<title>账号列表</title>
</head>
<body>
<nav class="breadcrumb"><i class="Hui-iconfont">&#xe67f;</i> 首页 <span class="c-gray en">&gt;</span> 账号管理 <span class="c-gray en">&gt;</span> 账号列表 <a class="btn btn-success radius r mr-20" style="line-height:1.6em;margin-top:3px" href="javascript:location.replace(location.href);" title="刷新" ><i class="Hui-iconfont">&#xe68f;</i></a></nav>
<div class="pd-20">
	<form action="" method="post">
	<div class="text-c">
		<input type="text" class="input-text" style="width:250px" placeholder="输入账号名称或关键词" id="" name="search" value="<?php echo I('search')?>">
		<button type="submit" class="btn btn-success" id="" ><i class="Hui-iconfont">&#xe665;</i> 搜账号</button>
	</div>
	</form>
	<div class="cl pd-5 bg-1 bk-gray mt-20"> <span class="l">
	<a href="javascript:;" onclick="datadel()" class="btn btn-danger radius">
	<i class="Hui-iconfont">&#xe6e2;</i> 批量删除</a> 
	<a href="javascript:;" onclick="news_add('添加账号','<?php echo U('newsAdd');?>','1000','540')" class="btn btn-primary radius"><i class="Hui-iconfont">&#xe600;</i> 添加账号</a></span> <span class="r">共有数据：<strong><?php echo ($count); ?></strong> 条</span> </div>
	<table class="table table-border table-bordered table-bg">
		<thead>
			<tr>
				<th scope="col" colspan="9">账号列表</th>
			</tr>
			<tr class="text-c">
				<th width="5%"><input type="checkbox" name="" value=""></th>
				<th width="10%">ID</th>
				<th width="30%">账号</th>
				<th width="30%">昵称</th>
				<th width="25%">操作</th>
			</tr>
		</thead>
		<tbody>
			<?php if(is_array($list)): $i = 0; $__LIST__ = $list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$v): $mod = ($i % 2 );++$i;?><tr class="text-c">
				<td><input type="checkbox" value="<?php echo ($v["id"]); ?>" name="checkbox"></td>
				<td><?php echo ($v["id"]); ?></td>
				<td><?php echo ($v["ue_username"]); ?></td>
				<td><?php echo ($v["ue_nickname"]); ?></td>
				<td class="td-manage">
				<a title="编辑" href="javascript:;" onclick="news_add('账号编辑','<?php echo U('newsAdd',array('id'=>$v['id']));?>','1000','540')" class="ml-5" style="text-decoration:none">
				<i class="Hui-iconfont">&#xe6df;</i></a> 
				<a title="删除" href="javascript:;" onclick="admin_del(this,<?php echo ($v["id"]); ?>)" class="ml-5" style="text-decoration:none">
				<i class="Hui-iconfont">&#xe6e2;</i></a>
				</td>
			</tr><?php endforeach; endif; else: echo "" ;endif; ?>
			<tr id="page">
				<td colspan="9" style="text-align:right;border:none;" ><?php echo ($page); ?></td>
			</tr>
		</tbody>
	</table>
</div>
<script type="text/javascript" src="/Public/Admin/lib/jquery/1.9.1/jquery.min.js"></script>  
<script type="text/javascript" src="/Public/Admin/lib/layer/2.1/layer.js"></script> 
<script type="text/javascript" src="/Public/Admin/lib/laypage/1.2/laypage.js"></script> 
<script type="text/javascript" src="/Public/Admin/lib/My97DatePicker/WdatePicker.js"></script> 
<script type="text/javascript" src="/Public/Admin/js/H-ui.js"></script> 
<script type="text/javascript" src="/Public/Admin/js/H-ui.admin.js"></script> 
<script type="text/javascript">

//改变状态值
function status(obj,id,field_name,field_val){
	var field_new=0;
	var imgSrc="/Public/Admin/images/icon_error_s.png";
	if(field_val==0){
		field_new=1;
		imgSrc="/Public/Admin/images/icon_right_s.png";
	}
	var clickStr="status(this,"+id+",'"+field_name+"',"+field_new+")";
	$.post("<?php echo U('Base/status');?>",{'tableName':'news','primary':'id','id':id,'fieldName':field_name,'fieldVal':field_new},function(res){
		if(res.status=='y'){
			$(obj).attr("src",imgSrc);
			$(obj).attr("onclick",clickStr);
		}
	})
}
//改变文本框值
function changeVal(obj,id,field_name){
	var field_new=$(obj).val();
	$.post("<?php echo U('Base/status');?>",{'tableName':'news','primary':'id','id':id,'fieldName':field_name,'fieldVal':field_new},function(){
		
	})
}
/*
	参数解释：
	title	标题
	url		请求的url
	id		需要操作的数据id
	w		弹出层宽度（缺省调默认值）
	h		弹出层高度（缺省调默认值）
*/
/*账号-增加*/
function news_add(title,url,w,h){
	
	layer_show(title,url,w,h);
}

/*账号-单个删除*/
function admin_del(obj,id){
	layer.confirm('确认要删除吗？',function(index){
		//此处请求后台程序，下方是成功后的前台处理……
		$.post("<?php echo U('adminDel');?>",{"id":id},function(res){
			if(res.status=='y'){
				$(obj).parents("tr").remove();
				layer.msg('已删除!',{icon:1,time:1000});
			}else{
				layer.msg('删除失败!',{icon:2,time:1000});
			}
			
		})
		
	});
}
/*账号-批量删除  */
function datadel(){
	//获取被选中的复选框
	var checkbox=$("input[name='checkbox']:checked");
	var strId="";
	for(var i=0;i<checkbox.length;i++){
		strId+=checkbox.eq(i).val()+",";
	}
	if(strId==""){
		layer.msg('未选中数据!',{icon:2,time:1000});
		return false;
	}
	layer.confirm('确认要删除吗？',function(index){
		$.post("<?php echo U('adminDel');?>",{"id":strId},function(res){
			if(res.status=='y'){
				for(var i=0;i<checkbox.length;i++){
					checkbox.eq(i).parents("tr").remove();
				}
				layer.msg('已删除!',{icon:1,time:1000});
			}else{
				layer.msg('删除失败!',{icon:2,time:1000});
			}
			
		})
	});
}


</script>
</body>
</html>