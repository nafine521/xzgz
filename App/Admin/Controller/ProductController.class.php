<?php
namespace Admin\Controller;
use Think\Controller;
class ProductController extends BaseController {
    public function product(){
        $this->display();
    }

    public function productAdd(){
        $pro=M('project');
        if(IS_POST){
                
        }else{

            $info=$pro->find(I('id'));
            $this->assign("info",$info);
            $ptype=M("project_type")->select();
            $this->assign("category",classify($ptype));
            $tree=M("attribute")->field("id,name,pid")->order("sort")->select();

            $this->assign("tree",tree($tree));
            $this->display();
        }
    }

    //分类列表
    public function category(){
        $db=M("project_type");
        $search=I("search","");
        $where=[];
        if(!empty( $search)){
            $where['name']=["like","%$search%"];
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
        $db=M('project_type');
        $cat_name=I('name');
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
                    $this->ajaxReturn(["status"=>"n","info"=>"类型存在"]);die;
                }
                $b=$db->add($data);
            }
            if($b){
                $this->ajaxReturn(["status" => "y","info" => "操作成功"]);
            }else{
                $this->ajaxReturn(["status" => "n","info" => "操作失败"]);
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
        $db=M(I("tablename"));
        $id=rtrim(I("id"),",");
        $arr_id=explode(",", $id);
        //查询该栏目下有没有子栏目
        $res=array();
        $class_list=$db->select();
        foreach($arr_id as $v){
            $res=array_merge($res,classify($class_list,$v));
        }
        //子栏目id
        $child_id=[];
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


    //分类列表
    public function attribute(){
        $db=M("attribute");
        $search=I("search","");
        $where=[];
        if(!empty( $search)){
            $where['name']=["like","%$search%"];
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
    public function attributeAdd(){
        $db=M('attribute');
        $cat_name=I('name');
        if(IS_POST){
            $data=I('post.');
            if($data['id']>0){

                $b=$db->save($data);
            }else{
                $info=$db->where([ 'name'=>$cat_name])->find();
                if($info){
                    $this->ajaxReturn(["status"=>"n","info"=>"类型存在"]);die;
                }
                $b=$db->add($data);
            }
            if($b){
                $this->ajaxReturn(["status" => "y","info" => "操作成功"]);
            }else{
                $this->ajaxReturn(["status" => "n","info" => "操作失败"]);
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




}