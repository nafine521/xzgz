<?php
namespace Home\Controller;
use Think\Controller;
class ProductController extends PublicController {
    public function Product(){
    	$this->setPageInfo('产品中心','产品','众多产品供你选择',array('product'));
        $this->display();
    }

}