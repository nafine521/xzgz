<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends PublicController {
    public function index(){

    	$this->setPageInfo('首页','产品','丰富的内容',array('index'),array('html5zoo','lovelygallery','index_1'));
        $this->display();
    }
    public function porduct(){

    	$display=R("Product/product");
    }

    public function about_us(){
    	$display=R("Article/about_us");
    	
    }
}