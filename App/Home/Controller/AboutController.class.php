<?php
namespace Home\Controller;
use Think\Controller;
class AboutController extends PublicController {
	public function about_us(){
		$this->setPageInfo('关于我们','公司','公司风采',array('about'));
		$this->display();
	}

}