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

        //当前栏目名称
        foreach ($clist as $item) {
            if($item['id'] == $id) $cat_name= $item['cat_name'];
        }
        //文章列表
        $arc_db=M("archives");
        //$arclist=$arc_db->where(["cat_id"=>$id])->select();

        $count=$arc_db->where(["cat_id"=>$id])->count();
        $page = new \Think\Page($count,10);
        $arclist=$arc_db->where(["cat_id"=>$id])->order('id')->limit($page->firstRow, $page->listRows)->select();
        $page->setConfig("prev", "&nbsp;");
        $page->setConfig("next", "&nbsp;");
        //$this->assign("count",$count);
        $this->assign("page",$page->show());
        $this->assign("cat_name",$cat_name);

        $this->assign("arclist",$arclist);
        $this->assign("clist",$clist);
        $this->setPageInfo($cat_name,'产品','丰富的内容',['home/user_info','help']);
        $this->display();
    }

    //资讯详情
    public function article(){
        $aid=I("aid");
        $db=M("archives");

        $info=$db->find($aid);

        $subSql=$db->field("id,title")->where(["id"=>["lt",$aid]])->order("id desc")->limit(1)->buildSql();
        $pervNext=$db->field("id,title")->where(["id"=>["gt",$aid]])->limit(1)->union($subSql,true)->select();
        $pervNext=array_reverse($pervNext);
        $pervNext[0]['pn']="上一篇";
        if(!empty($pervNext[1])) $pervNext[1]['pn']="下一篇";

        $this->assign("info",$info);
        $this->assign("pervNext",$pervNext);
        $this->assign("");
        $this->setPageInfo($info['title'],$info['keyword'],$info['description'],['news_css']);
        $this->display();
    }

    //最新文章
    public function order_pubdate($cat_id=15,$limit=5)
    {
        $db=M("archives");
        $str_id=getPid($cat_id);
        $str_id.=$cat_id;
        $list=$db->field("id,title")->where(["cat_id"=>["in",$str_id]])->order("pubdate desc")->limit($limit)->select();
        return $list;
    }
    //相关文章
    public function relate_list($cat_id=15,$limit=5)
    {
        $db=M("archives");
        $str_id=getPid($cat_id);
        $str_id.=$cat_id;
        $list=$db->field("id,title")->where(["cat_id"=>["in",$str_id]])->order("pubdate desc")->limit($limit)->select();
        return $list;
    }

    //相关文章
    public function recommend($cat_id=15,$limit=5)
    {
        $db=M("archives");
        $str_id=getPid($cat_id);
        $str_id.=$cat_id;
        $list=$db->field("id,title")->where(["cat_id"=>["in",$str_id],"refer"=>1])->order("pubdate desc")->limit($limit)->select();
        return $list;
    }
}