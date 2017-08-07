<?php
namespace Admin\Controller;
use Think\Controller;
class AdministratorController extends BaseController {
    public function index(){
    	
    	$this->display();
    }


	public function admin(){
		$db=M("admin");
		$search=I("search","");
		$where=array();
		if(!empty($search)){
			$where['ue_username']=array("like","%$search%");
			$where['ue_nickname']=array("like","%$search%");
			$where['_logic']="or";
		}
		$count=$db->where($where)->count(); //查询总记录数
		$page = new \Think\Page($count,5);// 实例化分页类 传入总记录数和每页显示的记录数(25)
		$list = $db->where($where)->order("id desc")->limit($page->firstRow.','.$page->listRows)->select();
		$page->setConfig("prev", "上一页");
		$page->setConfig("next", "下一页");
		$this->assign("count",$count);
		$this->assign("page",$page->show());
		$this->assign("list",$list);
		$this->display();
	}
	//修改密码
	public function admin_xg(){
	   	$db=M("admin");
    	if(IS_POST){
    		$id=session("admin_session.id");
    		$ue_username=session("admin_session.ue_username");
    		$data=I("post.");
    		$where['id']=$id;
    		$where['ue_username']=$ue_username;
    		$where['ue_password']=md5($data['ue_password']);
    		$info=$db->where($where)->find();
    		if(empty($info)){
    			$this->ajaxReturn(array("status"=>"n","info"=>"原密码有误"));die;
    		}
    		$b=$db->where($where)->setField("ue_password",md5($data['ue_newpassword']));
			$user=M("admin_jilu");
			$data['jl_username']=$info['ue_username'];
			$data['jl_login_ip']=$info['ue_login_ip'];
			$data['jl_operation']="修改密码";
			$data['jl_login_time']=date(time());
			$user->add($data);
    		if($b){
    		
    			$this->ajaxReturn(array("status"=>"y","info"=>"密码修改成功"));
    		}else{
    			$this->ajaxReturn(array("status"=>"n","info"=>"不能跟原密码一致"));
    		}
    		
    	}else{
    		$this->display();
    	}
	}
	//管理记录
	public function admin_jilu(){
		$db=M("admin_jilu");
		$where=array();
		$count=$db->where($where)->count(); //查询总记录数
		$page = new \Think\Page($count,5);// 实例化分页类 传入总记录数和每页显示的记录数(25)
		$list = $db->where($where)->order("id desc")->limit($page->firstRow.','.$page->listRows)->select();
		$page->setConfig("prev", "上一页");
		$page->setConfig("next", "下一页");
		$this->assign("count",$count);
		$this->assign("page",$page->show());
		$this->assign("list",$list);
		$this->display();
	}
	//账号记录删除
    public function admin_jilu_del(){
        $db=M("admin_jilu");
        $id=rtrim(I("id"),",");
        $b=$db->delete($id);
        if($b){
            $this->ajaxReturn(array("status"=>"y","info"=>"操作成功"));
        }else{
            $this->ajaxReturn(array("status"=>"n","info"=>"操作失败"));
        }
    }

    public function adminDel(){
        $db=M("admin");
        $id=rtrim(I("id"),",");
        $b=$db->delete($id);
        if($b){
            $this->ajaxReturn(array("status"=>"y","info"=>"操作成功"));
        }else{
            $this->ajaxReturn(array("status"=>"n","info"=>"操作失败"));
        }
    }	    	
}