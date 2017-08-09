<?php
/*前台后台公用函数*/
	//根据ID查名称
	function getNameById($id,$tableName="category",$field="cat_name",$str="一级栏目"){
		$db=M($tableName);
		if($id>0){
			$info=$db->find($id);	
			return $info[$field];
		}else{
			return $str;
		}		
	}

	//无极分类
	function classify($arr,$pid=0,$level=1){
		$res=array();
		foreach ($arr as $v ) {
			if($v['pid']==$pid){
				$v['level']=$level;
				$res[]=$v;
				$res=array_merge($res,classify($arr,$v['id'],$level+1));
			}
		}
		return $res;
	}

	    // 上传
    function upload($img,$path){
    	$upload = new \Think\Upload();// 实例化上传类
        $upload->maxSize   =     3145728 ;// 设置附件上传大小    
        $upload->exts      =     array('jpg', 'gif', 'png', 'jpeg');// 设置附件上传类型
        if (!file_exists("/Uploads/")) {
                mkdir("/Uploads/",0777,true);
            }
        $upload->savePath  =      $path."/"; // 设置附件上传目录
        
        // 上传文件     
        $info   =   $upload->uploadOne($img);

        return $info;
    }

    //    操作状态返回封装
    function getReturn($b,$s="操作成功",$f="操作失败"){

        if ($b) {
            $res= array("status"=>"y","info"=>$s);
        }else{
            $res= array("status"=>"n","info"=>$f);
        }
        return $res;
    }
    // 截取字符串
    function cutStr($str,$length=50,$charset="utf-8"){
        $str=strip_tags(htmlspecialchars_decode($str));
        if (mb_strlen($str,$charset)>$length) {
            return mb_substr($str, 0,$length,$charset)."...";
        }else{
            return $str;
        }
    }

    // 删除图片
    function delImg($tableName,$arr_id,$img="img")
    {
        try {
            $arr = M($tableName)->where($arr_id)->getField("id," . $img);
            /*      遍历删除会返回空的情况。。只有单个的情况是可以删除的
                    foreach ($arr as $key=>$value) {

                        $bool[$key]=unlink(".".$value);
                    }*/
            $myarr = array_map(function ($v){
                return ".".$v;
            },$arr);
            $bool = array_map('unlink', $myarr);  # 删除文件 测试1
            return array("info" => $bool);//原因在于先删了字段  才返回null。。。继续加油。。好歹用了次回调函数
        } catch (\Exception $e) {
            return array("info" => $e->getMessage());
        }
    }

    //id找pid=id的
    function getPid($id,$tablename="category"){
        $db=M($tablename);
        $arr=$db->field("id,cat_name")->where("pid=".$id)->select();
        $res="";
        foreach ($arr as $item){
            $res.=intval($item['id']);
        }
        return $res;
    }


?>