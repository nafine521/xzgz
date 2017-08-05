<?php
/**
 * Created by PhpStorm.
 * User: ethl
 * Date: 2017/1/18
 * Time: 1:30
 */

namespace Admin\Controller;

use Think\Controller;
class UserController extends BaseController
{
    /*会员列表管理*/
    public function member_list()
    {
        $db=M("user");
        $list=$db->select();
        $this->assign("list",$list);
        $this->display();
    }
    /*会员添加修改管理*/
    public function memberAdd()
    {
        if (IS_POST){
            $data=I("post.");
            $data['password']=md5($data['password']);
            $data["address"]=$data['prov'].$data['city'].$data['dist'];
            //$data['reg_time']=time();
            $b=$this->save_add("user",$data);
            $this->ajaxReturn($b);
        }else{
            $id=I("id");
            $info=M("user")->find($id);
            $this->assign("info",$info);
            $this->display();
        }

    }


}