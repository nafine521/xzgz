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
<link href="/Public/Admin/css/style.css" rel="stylesheet" type="text/css" />
<link href="/Public/Admin/lib/Hui-iconfont/1.0.7/iconfont.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" href="/Public/Admin/lib/zTree/v3/css/zTreeStyle/zTreeStyle.css" type="text/css">
<!--[if IE 6]>
<script type="text/javascript" src="http://lib.h-ui.net/DD_belatedPNG_0.0.8a-min.js" ></script>
<script>DD_belatedPNG.fix('*');</script>
<![endif]-->
<title>产品列表</title>
</head>
<body class="pos-r">

<div>
	<nav class="breadcrumb"><i class="Hui-iconfont">&#xe67f;</i> 首页 <span class="c-gray en">&gt;</span> 产品管理 <span class="c-gray en">&gt;</span> 产品列表 <a class="btn btn-success radius r mr-20" style="line-height:1.6em;margin-top:3px" href="javascript:location.replace(location.href);" title="刷新" ><i class="Hui-iconfont">&#xe68f;</i></a></nav>
	<div class="pd-20">
		<form action="" method="post">
		<div class="text-c"> 日期范围：
			<input type="text" onfocus="WdatePicker({maxDate:'#F{ $dp.$D(\'logmax\')||\'%y-%M-%d\'}'})
" id="logmin" class="input-text Wdate" style="width:120px;" name="start_time">
			-
			<input type="text" onfocus="WdatePicker({maxDate:'#F{ $dp.$D(\'logmax\')||\'%y-%M-%d\'}'})
" id="logmax" class="input-text Wdate" style="width:120px;" name="end_time">
			<input type="text" name="name" id="" placeholder=" 产品名称" style="width:250px" class="input-text">
			<button name="" id="" class="btn btn-success" type="submit"><i class="Hui-iconfont">&#xe665;</i> 搜产品</button>
		</div>
		</form>
		<div class="cl pd-5 bg-1 bk-gray mt-20"> <span class="l"><a href="javascript:;" onclick="datadel()" class="btn btn-danger radius"><i class="Hui-iconfont">&#xe6e2;</i> 批量删除</a> <a class="btn btn-primary radius" onclick="product_add('添加产品','<?php echo U('productAdd');?>','1000','540')" href="javascript:;"><i class="Hui-iconfont">&#xe600;</i> 添加产品</a></span> <span class="r">共有数据：<strong><?php echo (count($list)); ?></strong> 条</span> </div>
		<div class="mt-20">
			<table class="table table-border table-bordered table-bg table-hover table-sort">
				<thead>
					<tr class="text-c">
						<th width="40"><input name="" type="checkbox" value=""></th>
						<th width="40">ID</th>
						<th width="80">缩略图</th>
						<th width="100">产品名称</th>
						<th width="100">产品分类</th>
						<th width="100">库存量</th>
						<th width="100">本店价格</th>
						<th width="60">是否上架</th>
						<th width="120">操作</th>
					</tr>
				</thead>
				<tbody>
					<?php if(is_array($list)): $i = 0; $__LIST__ = $list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$v): $mod = ($i % 2 );++$i;?><tr class="text-c va-m">
						<td><input name="checkbox" type="checkbox" value="<?php echo ($v["id"]); ?>"></td>
						<td><?php echo ($v["id"]); ?></td>
						<td><img src="<?php echo (getImg($v["img"],'thumb_')); ?>"></td>
						<td><input type="text" value="<?php echo ($v["name"]); ?>" class="input-text" style="text-align:center;width:400px;" onblur="changeVal(this,<?php echo ($v["id"]); ?>,'name')" onfocus="getVal(this)" /></td>
						<td><?php echo (getNameById($v["cat_id"])); ?></td>
						<td><input type="text" value="<?php echo ($v["product_number"]); ?>" class="input-text" style="text-align:center;width:80px;" onblur="changeVal(this,<?php echo ($v["id"]); ?>,'product_number')" onfocus="getVal(this)"/></td>
						<td><input type="text" value="<?php echo ($v["shop_price"]); ?>" class="input-text" style="text-align:center;width:80px;" onblur="changeVal(this,<?php echo ($v["id"]); ?>,'shop_price')" onfocus="getVal(this)"/></td>
						<td class="td-status">
						<?php if($v["is_sale"] == 1): ?><span class="label label-success radius">已上架</span>
						<?php else: ?>
						<span class="label label-error radius">已下架</span><?php endif; ?>
						
						</td>
						<td class="td-manage">
						<?php if($v["is_sale"] == 1): ?><a style="text-decoration:none" onClick="product_stop(this,'<?php echo ($v["id"]); ?>')" href="javascript:;" title="下架">
						<i class="Hui-iconfont">&#xe6de;</i>
						</a> 
						<?php else: ?>
						<a style="text-decoration:none" onClick="product_start(this,'<?php echo ($v["id"]); ?>')" href="javascript:;" title="上架">
						<i class="Hui-iconfont">&#xe603;</i><?php endif; ?>
						<a style="text-decoration:none" class="ml-5" onClick="product_add('产品编辑','<?php echo U('productAdd',array('id'=>$v['id']));?>','1000','540')" href="javascript:;" title="编辑">
						<i class="Hui-iconfont">&#xe6df;</i>
						</a> 
						<a style="text-decoration:none" class="ml-5" onClick="product_del(this,'<?php echo ($v["id"]); ?>')" href="javascript:;" title="删除">
						<i class="Hui-iconfont">&#xe6e2;</i>
						</a>
						<a style="text-decoration:none" class="ml-5" href="<?php echo U('Picture/photo',array('pro_id'=>$v['id']));?>" title="相册">
						<i class="Hui-iconfont">&#xe613;</i>
						</a>
						</td>
					</tr><?php endforeach; endif; else: echo "" ;endif; ?>
				</tbody>
			</table>
		</div>
	</div>
</div>
<script type="text/javascript" src="/Public/Admin/lib/jquery/1.9.1/jquery.min.js"></script> 
<script type="text/javascript" src="/Public/Admin/lib/layer/2.1/layer.js"></script>
<script type="text/javascript" src="/Public/Admin/lib/My97DatePicker/WdatePicker.js"></script> 
<script type="text/javascript" src="/Public/Admin/lib/datatables/1.10.0/jquery.dataTables.min.js"></script> 
<script type="text/javascript" src="/Public/Admin/lib/zTree/v3/js/jquery.ztree.all-3.5.min.js"></script> 
<script type="text/javascript" src="/Public/Admin/js/H-ui.js"></script> 
<script type="text/javascript" src="/Public/Admin/js/H-ui.admin.js"></script> 
<script type="text/javascript">
var val="";
function getVal(obj){
	val=$(obj).val();
}
//改变文本框值
function changeVal(obj,id,field_name){
	var field_new=$(obj).val();
	if(field_name=="product_number"||field_name=='shop_price'){
		if(isNaN(field_new)){
			layer.msg('请输入数字', {icon:5,time:1000});
			$(obj).val(val);
			return false;
		}
	}
	$.post("<?php echo U('Base/status');?>",{'tableName':'product','primary':'id','id':id,'fieldName':field_name,'fieldVal':field_new},function(){
		
	})
}

$('.table-sort').dataTable({
	"aaSorting": [[ 1, "desc" ]],//默认第几个排序
	"bStateSave": true,//状态保存
	"aoColumnDefs": [
	  {"orderable":false,"aTargets":[0,7]}// 制定列不参与排序
	]
});
/*产品-添加*/
function product_add(title,url,w,h){
	layer_show(title,url,w,h);
}
/*产品-查看*/
function product_show(title,url,id){
	var index = layer.open({
		type: 2,
		title: title,
		content: url
	});
	layer.full(index);
}

/*产品-下架*/
function product_stop(obj,id){
	layer.confirm('确认要下架吗？',function(index){
		$.post("<?php echo U('Base/status');?>",{'tableName':'product','primary':'id','id':id,'fieldName':"is_sale",'fieldVal':0},function(res){
			if(res.status=="y"){
				$(obj).parents("tr").find(".td-manage").prepend('<a style="text-decoration:none" onClick="product_start(this,'+id+')" href="javascript:;" title="上架"><i class="Hui-iconfont">&#xe603;</i></a>');
				$(obj).parents("tr").find(".td-status").html('<span class="label label-defaunt radius">已下架</span>');
				$(obj).remove();
				layer.msg('已下架!',{icon: 5,time:1000});
			}
		})
		
	});
}

/*产品-发布*/
function product_start(obj,id){
	layer.confirm('确认要上架吗？',function(index){
		$.post("<?php echo U('Base/status');?>",{'tableName':'product','primary':'id','id':id,'fieldName':"is_sale",'fieldVal':1},function(res){
			if(res.status=="y"){
				$(obj).parents("tr").find(".td-manage").prepend('<a style="text-decoration:none" onClick="product_stop(this,'+id+')" href="javascript:;" title="下架"><i class="Hui-iconfont">&#xe6de;</i></a>');
				$(obj).parents("tr").find(".td-status").html('<span class="label label-success radius">已上架</span>');
				$(obj).remove();
				layer.msg('已上架!',{icon: 6,time:1000});
			}
		})
	});
}
/*产品-申请上线*/
function product_shenqing(obj,id){
	$(obj).parents("tr").find(".td-status").html('<span class="label label-default radius">待审核</span>');
	$(obj).parents("tr").find(".td-manage").html("");
	layer.msg('已提交申请，耐心等待审核!', {icon: 1,time:2000});
}
/*产品-编辑*/
function product_edit(title,url,id){
	var index = layer.open({
		type: 2,
		title: title,
		content: url
	});
	layer.full(index);
}
/*产品-删除*/
function product_del(obj,id){
	layer.confirm('确认要删除吗？',function(index){
		//此处请求后台程序，下方是成功后的前台处理……
		$.post("<?php echo U('productDel');?>",{"id":id},function(res){
			if(res.status=='y'){
				$(obj).parents("tr").remove();
				layer.msg('已删除!',{icon:1,time:1000});
			}else{
				layer.msg('删除失败!',{icon:2,time:1000});
			}
			
		})
		
	});
}
/*产品-批量删除  */
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
		$.post("<?php echo U('productDel');?>",{"id":strId},function(res){
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