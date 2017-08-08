<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends PublicController {
    public function index(){

    	$this->setPageInfo('首页','产品','丰富的内容',['common','icon','login_css','index_1200'],["index_1"]);
        $this->display();
    }
    public function porduct(){

    	$display=R("Product/product");
    }

    public function about_us(){
    	$display=R("Article/about_us");
    	
    }

    public function reg(){
        if(IS_POST){
            $data=I("post.");
            if(empty($verify)){
                $this->ajaxReturn(["opt"=>2]);
            }
            //判断验证码是否正确
            $code = new \Think\Verify();
            if (!$code->check($verify)) {
                $this->ajaxReturn(["opt"=>2]);
            }
            //if()$this->ajaxReturn(["opt"=>2]);//验证短信码失败
            $this->ajaxReturn(["msg"=>1]);
        }
        $this->setPageInfo('注册','产品','丰富的内容',['home/user_info','regist'],["index_1"]);
        $this->display();
    }

    public function ajaxCheckMobilePhoneRegister(){
        $tel=I("paramMap_mobilePhone");
        $uid=M("user")->field("uid")->where(["user_tel"=>$tel])->find();
        if($uid>0){
            $msg=6;
        }else{
            $msg=0;
        }
        $this->ajaxReturn($msg);
    }

    public function sendSMSReg(){
        $data=I("post.");
        $verify=$data["paramMap.vcode2"];
        if(empty($verify)){
            $this->ajaxReturn([3]);
        }
        //判断验证码是否正确
        $code = new \Think\Verify();
        if (!$code->check($verify)) {
            $this->ajaxReturn([4]);
        }

        if(!preg_match("/^1[34578]{1}\d{9}$/",$data["paramMap.phone"])){
            $this->ajaxReturn([2]);
        }
        $uid=M("user")->field("uid")->where(["user_tel"=>$data["paramMap.phone"]])->find();
        if($uid>0){
            $this->ajaxReturn([5]);
        }
        //if()$this->ajaxReturn([6]);//预留短信接口发送失败或写入数据库失败。。因为无法对比
        $this->ajaxReturn([1]);
    }
}