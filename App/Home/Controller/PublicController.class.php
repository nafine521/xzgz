<?php
namespace Home\Controller;
use Think\Controller;
class PublicController extends Controller {
    public function _initialize(){
    	$controller=CONTROLLER_NAME;
    	$this->assign("controller",$controller);
    	$db=M("nav");
    	$where["is_show"]=1;
    	$where['nav_position']="中间";
    	$nav_list=$db->where($where)->order("nav_sort")->select();
    	$this->assign("nav_list",$nav_list);
    }

    //设置页面信息
	public function setPageInfo($title,$keywords,$description,$css=array(),$js=array())
	{
		$this->assign('title',$title);

		$this->assign('keywords',$keywords);

		$this->assign('description',$description);

		$this->assign('css', $css);
		
		$this->assign('js', $js);
	}

	//登陆状态返回
    public function ogin(){
        $this->ajaxReturn(["msg"=>0]);
    }

}