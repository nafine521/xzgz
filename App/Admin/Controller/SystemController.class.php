<?php
namespace Admin\Controller;
use Think\Controller;
class SystemController extends BaseController {
	public function nav(){
		$db=M("nav");
		$search=I("search","");
		$where=array();
		if(!empty($search)){
			$where['nav_name']=array("like","%$search%");
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

    public function navAdd(){
    	$db=M("nav");
    	if(IS_POST){
    		$data=I("post.");
    		if($data['id']>0){
    			$b=$db->save($data);
    		}else{
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
    		$this->assign("info",$info);
    		$this->display();
    	}	
    }

    public function navDel(){
    	$db=M("nav");
    	$id=rtrim(I("id"),",");
    	$b=$db->delete($id);
    	if ($b) {
    		$this->ajaxReturn(array("status" => "y","info" => "删除成功"));
    	}else{
    		$this->ajxaRetirn(array("status" => "n","info" => "删除失败"));
    	}
    }

    //栏目列表
    public function category(){
        $db=M("category");
        $search=I("search","");
        $where=array();
        if(!empty( $search)){
            $where['cat_name']=array("like","%$search%");
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
    //栏目添加/修改
    public function categoryAdd(){
        $db=M('category');
        $cat_name=I('post.cat_name');
        if(IS_POST){
            $data=I('post.');
            if($data['id']>0){
                $where = array(
                     'cat_name'=>$cat_name,
                );
                $info=$db->where($where)->find();
                if($info){
                    $this->ajaxReturn(array("status"=>"n","info"=>"栏目以存在"));die;  
                }                
                $b=$db->save($data);
            }else{

                $where = array(
                     'cat_name'=>$cat_name,
                );
                $info=$db->where($where)->find();
                if($info){
                    $this->ajaxReturn(array("status"=>"n","info"=>"栏目以存在"));die;  
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
            $cat_list=classify($this->cat_list);
            $this->assign("cat_list",$cat_list);
            $this->assign("info",$info);
            $this->display();
        }
        
    }

    //栏目删除
    public function categoryDel(){
        $db=M("category");
        $id=rtrim(I("id"),",");
        $arr_id=explode(",", $id);
        //查询该栏目下有没有子栏目
        $res=array();
        foreach($arr_id as $v){
            $res=array_merge($res,classify($this->cat_list,$v));
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
            
            $where = array(
                     'id'=>array("in",$child_id),
                );
            if ($child_id) {
                $db->where($where)->delete();
            }
            //$db->where($where)->delete();
            $this->ajaxReturn(array("status"=>"y","info"=>"操作成功","child_id"=>$child_id));
        }else{
            $this->ajaxReturn(array("status"=>"n","info"=>"操作失败"));
        }
        
    }

}