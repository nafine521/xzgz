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
        $list=$db->field("location,uid,user_name,sex,user_status,user_headimg,user_email")->where(["is_member"=>1])->select();
        $mlist=M("member")->field("uid,reg_time")->select();
        foreach ($list as $k=>$item) {
            foreach ($mlist as $key=>$value) {
                if($item['uid']==$value['uid']) $list[$k]=array_merge($list[$k],$mlist[$key]);
            }
        }

        $this->assign("list",$list);
        $this->display();
    }
    /*会员添加修改管理*/
    public function memberAdd()
    {
        if (IS_POST){
            $salt=C("SALT");
            $data=I("post.");
            $field=M("user")->where([
                "user_email"=>$data['user_email'],
                "user_name"=>$data['user_name']
            ])->find();
            if($field['user_email']) $this->ajaxReturn(["status"=>"n","info"=>"该邮箱被注册了"]);
            if ($field['user_name']) $this->ajaxReturn(["status"=>"n","info"=>"该用户被注册了"]);
            $data['user_password']=md5($data['user_password'].$salt);
            $data["location"]=$data['prov'].$data['city'].$data['dist'];
            $data['is_member']=1;
            $db=M("user");
            if($data['id']>0){
                $b=$db->save($data);
            }else{
                $b=$db->add($data);
            }
            $data['reg_time']=time();

            if($b){
                $mdata=[
                    "uid"=> $b,
                    "member_name"=>$data['user_name'],
                    "member_level"=> $data['rank']
                ];
                $member=$this->save_add("member",$mdata);
                if(!$member) {
                    M("user")->rollback();
                    $b=$member;
                }
            }

            $this->ajaxReturn(getReturn($b));
        }else{
            $id=I("id");
            $info=M("user")->find($id);
            $rank=M("member")->field("member_level")->find($id);
            $info['rank']=$rank['member_level'];
            $this->assign("info",$info);
            $this->display();
        }

    }
    public function userShow(){
        $id=I("uid");
        $info=M("user")->find($id);
        $info['reg_time']=M("member")->
        $this->assign("info",$info);
        $this->display();
    }


}