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
        $this->setPageInfo('注册','产品','丰富的内容',['user_info','regist'],["index_1"]);
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
}