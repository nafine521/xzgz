<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends PublicController {
    public function index(){

    	$this->setPageInfo('首页','产品','丰富的内容',['login_css','index_1200'],["index_1"]);
        $this->display();
    }
    public function porduct(){

    	$display=R("Product/product");
    }

    public function about_us(){

        $db=M("archives");
        $arclist=$db->field("id,title")->where(["cat_id"=>1])->order("id")->select();

        $id= I("id")? I("id"):$arclist[0]['id'];

        $info=$db->find($id);
        if(!empty($info['topics_title'])){
            $piclist=M("photo")->where("aid=".$info['id'])->select();
            $info['topics']=$piclist;
        }
        $this->setPageInfo($info['title'],$info['keyword'],$info['description'],["aboutus-new",'information']);
        $this->assign("arclist",$arclist);
        $this->assign("info",$info);
        $this->display();
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
    //百科
    public function baike(){
        $cate_db=M("category");
        $subSql=$cate_db->field("id")->where(["cat_name"=>"理财百科"])->buildSql();//子查询sql语句

        $clist=$cate_db->field("id,cat_name")->where("pid =".$subSql)->select();
        //dump($cate_db->getLastSql());
        $this->assign("clist",$clist);
        $this->setPageInfo('理财百科','产品','丰富的内容',['home/user_info','encyclopedia']);
        $this->display();
    }

    //资讯列表
    public function articlesection(){

        $cate_db=M("category");
        $subSql=$cate_db->field("id")->where(["cat_name"=>"理财百科"])->buildSql();//子查询sql语句

        $clist=$cate_db->field("id,cat_name")->where("pid =".$subSql)->select();
        $id=I("id") ?I("id"):$clist[0]["id"];
        //文章列表
        $arc_db=M("archives");
        $arclist=$arc_db->where(["cat_id"=>$id])->select();

        $this->assign("arclist",$arclist);
        $this->assign("clist",$clist);
        $this->setPageInfo('理财百科','产品','丰富的内容',['home/user_info','help']);
        $this->display();
    }

    //资讯详情
    public function article(){

        $this->setPageInfo('理财百科','产品','丰富的内容',['news_css']);
        $this->display();
    }
}