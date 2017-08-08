<?php
namespace Home\Controller;
use Think\Controller;
class PublicController extends Controller {
    static $user_info=[];

    public function _initialize(){
    	$controller=CONTROLLER_NAME;
    	$this->assign("controller",$controller);
    	$db=M("nav");
    	$where["is_show"]=1;
    	$where['nav_position']="中间";
    	$nav_list=$db->where($where)->order("nav_sort")->select();
    	$this->assign("nav_list",$nav_list);

    	if (empty(self::$user_info)) {
            $user_info=$this->login_status();
            if($user_info["login_status"] ==1) {
                self::$user_info = M("user")->where([
                    "uid"=>$user_info['uid'],
                    "user_status"=> 1
                ])->find();
                self::$user_info["user_tel"] = substr_replace(self::$user_info["user_tel"], "****", 3, 4);
            }
        }
        $this->assign("user_info",self::$user_info);

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
    public function login_status(){
        $b=0;
        $session=M("session");
        $ccc=cookie("session_user_ticket");
        if(!empty($ccc)){
            $info=$session->where(["session_ticket"=>cookie("session_user_ticket")])->order("id desc")->find();
            if(!empty($info)){
                if($info['expression']<time())  cookie("session_user_ticket",null);
                elseif(get_client_ip() != $info['user_ip']) cookie("session_user_ticket",null);
                else  {
                    $b=1;
                }
            }
        }
        $info["login_status"]=$b;
        return $info;
    }

	//登陆状态返回
    public function ogin(){
        $info=$this->login_status();
        $msg=[
            "msg"  =>  $info['login_status']
        ];
        $this->ajaxReturn($msg);
    }

    //登陆
    public function logining(){
        if(!cookie("count_pwd")){
            cookie("count_pwd",5);
        }

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
            $res["count"]=cookie("count_pwd") - 1;
            cookie("count_pwd",$res["count"]);
            if($res['count']==0) {
                $user->where("user_tel=".$where["user_tel"])->setField("user_status",0);
                $b="4";
            }
        } elseif($info['user_status']==0){
            $b="4";
        }else{
            $session_ticket=md5($info['uid'].time());
            cookie("session_user_ticket",$session_ticket);
            $b=M("session")->add([
                "session_ticket"=>$session_ticket,
                "uid" => $info['uid'],
                "expression" => time()+100,
                "user_ip" => get_client_ip(),
            ]);
            if(!$b)$this->ajaxReturn(["msg" => "系统繁忙，请稍后重试！"]);
            else {
                $b=1;
            }
        }

        $res["msg"] =$b  ;
        $this->ajaxReturn($res);
    }

    public function logout(){
        cookie("session_user_ticket",null);
        self::$user_info=[];
        cookie("count_pwd",5);
        $this->ajaxReturn(["msg"=>"成功"]);
    }

    //验证码
    public function verify(){
        $verify=new \Think\Verify();
        $verify->imageW=83;
        $verify->imageH=38;
        $verify->useCurve=false;
        $verify->length=4;
        $verify->fontSize=14;
        $verify->entry();

    }

}