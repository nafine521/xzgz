<?php
namespace Admin\Controller;
use Think\Controller;
class ArticleController extends BaseController {
    public function article_list(){
        $db=M("archives");
        $list=$db->select();
        $this->assign("list",$list);
        $this->assign("category",classify($this->cat_list));
        $this->display();
    }

    public function article_add(){
        $db=M('archives');
        if(IS_POST){

             $data=I();
             if($data['id']>0){
                $oldpic=$db->field('litpic')->find($data['id']);
                if($oldpic==$data['litpic']){
                    @unlink($oldpic);
                }
                $data['pubdate']=time();
                $status=$db->save($data);
                $res=getReturn($status);

             }else{
                $data['click']=rand(60,100);
                $data['pubdate']=time();
                $data['senddate']=time();
                if(isset( $data['description'])){
                    $data['description']=cutStr($_POST['body']);
                }
                $status=$db->add($data);
                $res=getReturn($status);
             }
             $this->ajaxReturn($res);   

        } else{
            
            $info=$db->find(I('id'));
            $this->assign("info",$info);
            $this->assign("category",classify($this->cat_list));
            $this->display();
        }
    }

}