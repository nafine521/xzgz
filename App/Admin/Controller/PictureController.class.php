<?php
namespace Admin\Controller;
use Think\Controller;
class PictureController extends BaseController {
    public function picture_list(){
        $db=M("photo");
        /*if (IS_AJAX){
            $list=$db->limit(30)->select();
            $ajax=[
                "sEcho"=> 3,
                "iTotalRecords"=> 57,
                "iTotalDisplayRecords"=> 57
            ];
            $ajax['aaData']=I("get.");
            $this->ajaxReturn($ajax);
        }*/
        $list=$db->limit(30)->select();


        $this->assign("list",$list);
        $achives=M("archives")->field("id,title")->select();
        $this->assign("achives",classify($achives));
        $this->display();
    }

    public function picture_add(){
        $db=M('photo');
        if(IS_POST){

             $data=I();
             if($data['id']>0){
                $oldpic=$db->field('litpic')->find($data['id']);
                if($oldpic==$data['litpic']){
                    @unlink($oldpic);
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
            /*判断是否是火狐或者flash禁用，多图片上传插件无法兼容*/

            $flash = self::$flash  ;
            $this->assign("fls",$flash);
            
            $info=$db->data()->find(I('id'));
            $this->assign("info",$info);
            $achives=M("archives")->field("id,title")->select();
            $this->assign("achives",classify($achives));
            $this->display();
        }
    }

}