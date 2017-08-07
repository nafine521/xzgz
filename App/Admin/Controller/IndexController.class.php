<?php
namespace Admin\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index(){
    	if (!cookie("admin_cookie")) {
    	 //判断用户是否登录
		if (!session("admin_session")){
			$this->redirect("login");
		}
		$user_info=session("admin_session");
		$user_id=$user_info['id'];//这里字段要改

		$info=M('admin')->where('id='.$user_id)->find();
		$oldip=$info['ue_login_ip'];
		$ip=$_SERVER['REMOTE_ADDR'];
		//现在的ip
		if ($oldip!=$ip){$this->redirect("login");die;}
		}else{
		//将cookie里面的值设置到session
		session("admin_1611",unserialize(cookie("admin_1611")));
		}	
		$this->display();	
	}
 // public function {
 // 	 $login_time = session('admin_session.ue_login_time');
 //        if (time() - $login_time > 3600) {
 //            session("admin_session",null);
 //            $this->redirect('login');
 //        }
 //        session('userinfo.login_time',time());
 // }

	//登录
	public function login(){
		$db=M("admin");
		if(IS_POST){
			$username=I("post.ue_username");
			$password=I("post.ue_password");
			$verify=I("post.verify");
			if(empty($username)){
				$this->ajaxReturn(array("status"=>"n","info"=>"请输入账号"));die;
			}
			if(empty($password)){
				$this->ajaxReturn(array("status"=>"n","info"=>"请输入密码"));die;
			}
			if(empty($verify)){
				$this->ajaxReturn(array("status"=>"n","info"=>"请输入验证码"));die;
			}
			//判断验证码是否正确
			$code = new \Think\Verify();
			if (!$code->check($verify)) {
				$this->ajaxReturn(array("status"=>"n","info"=>"验证码错误"));die;
			}
			//判断账号密码是否正确
			$where['ue_username']=$username;
			$where['ue_password']=md5($password);
			$info=$db->where($where)->find();
			if(empty($info)){
				$this->ajaxReturn(array("status"=>"n","info"=>"账号或密码错误"));die;	
			}
				//登入次数增加
				$where['id']=$info['id'];
				$db->where($where)->setInc("ue_login_num");
				//获取用户Ip
				$ip=get_client_ip();
				$db->where($where)->setField('ue_login_ip',$ip);
				//登录时间
				$login_time=time();
				$db->where($where)->setField('ue_login_time',$login_time);
				//显示登录次数
				$info['ue_login_num']=$info['ue_login_num']==0?"首次登录":$info['ue_login_num'];
				//显示登录IP
				$info['ue_login_ip']=$info['ue_login_ip']==''?"首次登录":$info['ue_login_ip'];
				//显示登录时间
				$info['ue_login_time']=$info['ue_login_time']==0?"首次登录":date("Y-m-d H:i:s",$info['ue_login_time']);
				session("admin_session",$info);

				$user=M("admin_jilu");
				$data['jl_username']=$info['ue_username'];
				$data['jl_login_ip']=$info['ue_login_ip'];
				$data['jl_operation']="登录";
				$data['jl_login_time']=date(time());
				$user->add($data);
				//保持登入状态
				$online=I("online",0);
				if ($online) {
					cookie("admin_cookie",serialize($info),3600);
				}else{
					cookie("admin_cookie",null);
				}
				$this->ajaxReturn(array("status"=>"y","info"=>"登入成功"));
			}else{
				if (cookie("admin_cookie")) {
					$this->redirect("index");
				}else{
					$this->display();
				}
			}	
	}
	 //切换账户
    public function loginReset(){
		$db=M("admin");
		if(IS_POST){
			$username=I("post.ue_username");
			$password=I("post.ue_password");
			$verify=I("post.verify");
			if(empty($username)){
				$this->ajaxReturn(array("status"=>"n","info"=>"请输入账号"));die;
			}
			if(empty($password)){
				$this->ajaxReturn(array("status"=>"n","info"=>"请输入密码"));die;
			}
			if(empty($verify)){
				$this->ajaxReturn(array("status"=>"n","info"=>"请输入验证码"));die;
			}
			//判断验证码是否正确
			$code = new \Think\Verify();
			if (!$code->check($verify)) {
				$this->ajaxReturn(array("status"=>"n","info"=>"验证码错误"));die;
			}
			//判断账号密码是否正确
			$where['ue_username']=$username;
			$where['ue_password']=md5($password);
			$info=$db->where($where)->find();
			if(empty($info)){
				$this->ajaxReturn(array("status"=>"n","info"=>"账号或密码错误"));die;	
			}
				//登入次数增加
				$where['id']=$info['id'];
				$db->where($where)->setInc("ue_login_num");
				//获取用户Ip
				$ip=get_client_ip();
				$db->where($where)->setField('ue_login_ip',$ip);
				//登录时间
				$login_time=time();
				$db->where($where)->setField('ue_login_time',$login_time);
				//显示登录次数
				$info['ue_login_num']=$info['ue_login_num']==0?"首次登录":$info['ue_login_num'];
				//显示登录IP
				$info['ue_login_ip']=$info['ue_login_ip']==''?"首次登录":$info['ue_login_ip'];
				//显示登录时间
				$info['ue_login_time']=$info['ue_login_time']==0?"首次登录":date("Y-m-d H:i:s",$info['ue_login_time']);
				session("admin_session",$info);
				$user=M("admin_jilu");
				$data['jl_username']=$info['ue_username'];
				$data['jl_login_ip']=$info['ue_login_ip'];
				$data['jl_operation']="切换用户";
				$data['jl_login_time']=date(time());;
				$user->add($data);
				//保持登入状态
				$online=I("online",0);
				if ($online) {
					cookie("admin_cookie",serialize($info),3600);
				}else{
					cookie("admin_cookie",null);
				}
				$this->ajaxReturn(array("status"=>"y","info"=>"登入成功"));

			}else{

					$this->display();
				}	
    	}
	//验证码
	public function verify(){
		$verify=new \Think\Verify();
		$verify->imageW=120;
		$verify->imageH=40;
		$verify->useCurve=false;
		$verify->length=4;
		$verify->fontSize=18;
		$verify->entry();

	}
	//退出
	public function logout(){
		$db=M("admin");
		$ue_username=session("admin_session.ue_username");
		$where['ue_username']=$ue_username;
		$info=$db->where($where)->find();
		$user=M("admin_jilu");
		$data['jl_username']=$info['ue_username'];
		$data['jl_login_ip']=$info['ue_login_ip'];
		$data['jl_operation']="退出";
		$data['jl_login_time']=date(time());;
		$user->add($data);
		session("admin_session",null);
		cookie("admin_cookie",null);
		$this->redirect("login");
	}	
}