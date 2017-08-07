<?php
namespace Home\Controller;
use Think\Controller;
class ArticleController extends PublicController {
    public function about_us(){
    	$this->setPageInfo('关于我们','关于','众多产品供你选择',array('about'));
        return $this->display();
    }

}