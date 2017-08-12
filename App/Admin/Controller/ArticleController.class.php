<?php
namespace Admin\Controller;
use Think\Controller;
class ArticleController extends BaseController {
    public function article_list(){
        $db=M("archives");
        $list=$db->select();
        $this->assign("list",$list);
        $class_list=M("article_class")->select();
        $this->assign("category",classify($class_list));
        $this->display();
    }

    public function article_add(){
        $db=M('archives');
        if(IS_POST){
             $data=I("post.");
             if($data['id']>0){
                //$oldpic=$db->field('litpic')->find($data['id']);
                if($data['oldimg']!=$data['litpic']){
                    @unlink($data['oldimg']);
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
            $class_list=M("article_class")->select();
            $this->assign("category",classify($class_list));
            $this->display();
        }
    }

    //分类列表
    public function category(){
        $db=M("article_class");
        $search=I("search","");
        $where=array();
        if(!empty( $search)){
            $where['name']=array("like","%$search%");
            $where['_logic']="or";
        }
        $count=$db->where($where)->count();
        $page = new \Think\Page($count,30);
        $list=$db->where($where)->order('id')->limit($page->firstRow, $page->listRows)->select();
        $page->setConfig("prev", "上一页");
        $page->setConfig("next", "下一页");
        $this->assign("count",$count);
        $this->assign("page",$page->show());
        $this->assign("list",$list);
        $this->display();
    }
    //分类添加/修改
    public function categoryAdd(){
        $db=M('article_class');
        $cat_name=I('post.name');
        if(IS_POST){
            $data=I('post.');
            if($data['id']>0){

                $b=$db->save($data);
            }else{

                $where = array(
                    'name'=>$cat_name,
                );
                $info=$db->where($where)->find();
                if($info){
                    $this->ajaxReturn(array("status"=>"n","info"=>"栏目存在"));die;
                }
                $b=$db->add($data);
            }
            if($b){
                $this->ajaxReturn(array("status" => "y","info" => "操作成功"));
            }else{
                $this->ajaxReturn(array("status" => "n","info" => "操作失败"));
            }
        }else{
            $id=I("id",0);
            $info=$db->find($id);
            $class_list=$db->select();

            $cat_list=classify($class_list);
            $this->assign("cat_list",$cat_list);
            $this->assign("info",$info);
            $this->display();
        }

    }

    //分类删除
    public function categoryDel(){
        $db=M("article_class");
        $id=rtrim(I("id"),",");
        $arr_id=explode(",", $id);
        //查询该栏目下有没有子栏目
        $res=array();
        $class_list=$db->select();
        foreach($arr_id as $v){
            $res=array_merge($res,classify($class_list,$v));
        }
        //子栏目id
        $child_id=array();
        foreach($res as $v){
            $child_id[]=$v['id'];
        }
        //删除该栏目
        $b=$db->delete($id);
        if($b){
            //删除子栏目

            $where = [
                'id'=>["in",$child_id],
            ];
            if ($child_id) {
                $db->where($where)->delete();
            }
            //$db->where($where)->delete();
            $this->ajaxReturn(["status"=>"y","info"=>"操作成功","child_id"=>$child_id]);
        }else{
            $this->ajaxReturn(["status"=>"n","info"=>"操作失败"]);
        }

    }

}