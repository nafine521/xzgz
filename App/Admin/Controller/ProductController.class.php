<?php
namespace Admin\Controller;
use Think\Controller;
class ProductController extends BaseController {
    public function product(){
        $this->display();
    }

    public function productAdd(){
        $db=M('product');
        if(IS_POST){
                
        }else{
            $pro=M('product');
            $info=$pro->find(I('id'));
            $this->assign("info",$info);
            $this->assign("category",classify($this->cat_list));
            $this->display();
        }
    }

}