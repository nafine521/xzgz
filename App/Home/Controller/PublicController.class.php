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

    //登陆
    public function logining(){
        $user=M("user");
        $data=I("post.");
        $data['login_time']=I("t");
        $salt=C("SALT");

        $where['user_tel']= $data['paramMap_email'];
        $userid=$user->field("uid")->where($where)->find();
        if (empty($userid)){
            $this->ajaxReturn(["msg"=>"3"]);
        }
        $where['user_password']=md5($data['paramMap_password'].$salt);
        $info=$user->where($where)->find();
        if(empty($info)){
            $b="8";
            $res["count"]=3;
            if($res['count']==0) {
                $user->setField("user_status",0);
                $b="4";
            }
        } elseif($info['user_status']==0){
            $b="4";
        }else{

            $res["info"]=$info;
            $session_ticket=md5($info['uid'].time());
            cookie("session_user_ticket",$session_ticket);
            $b=M("session")->add([
                "session_ticket"=>$session_ticket,
                "uid" => $info['uid'],
                "expression" => time()+3600,
                "user_ip" => get_client_ip(),
            ]);
            if(!$b)$this->ajaxReturn([
                "msg" => "系统繁忙，请稍后重试！"
            ]);
        }
        $res["info"]=$info;
        $res["msg"] =$b  ;
        $this->ajaxReturn($res);
    }

}