<?php
namespace Admin\Controller;
use Think\Controller;
class BaseController extends Controller {
    static $flash=false;
    public function _initialize(){
        if (!cookie("admin_cookie")) {
         //判断用户是否登录
            if (!session("admin_session")){
                $this->redirect("Index/login");
            }
            $user_info=session("admin_session");
            $user_id=$user_info['id'];//这里字段要改

            $info=M('admin')->where('id='.$user_id)->find();
            $oldip=$info['ue_login_ip'];
            $ip=$_SERVER['REMOTE_ADDR'];
            //现在的ip
            if ($oldip!=$ip){
                $this->redirect("Index/login");die;
            }
        }
        $this->cat_list=M('category')->select();



    }
    //判断flash

    /**
     * @return bool
     */
    public function isFlash()
    {

        $fls=I("flsf");
        self::$flash= $fls==1 ? ture : false;
        return self::$flash;
    }

    public function status(){
        $tableName=I('tableName');
        $primary=I('primary');
        $id=I('id');
        $fieldName=I('fieldName');
        $fieldVal=I('fieldVal');
        $where[$primary]=$id;
        $db=M($tableName);
        $b=$db->where($where)->setField($fieldName,$fieldVal);
        $info=getReturn($b);
        $this->ajaxreturn($info);

    }


    /*上传图片*/
    public function uploadImg()
    {
       
        $path=I("get.path");
        
        $info=upload($_FILES['imgFile'],$path);
        
        $tmp="/Uploads/".$info['savepath'].$info['savename'];


        if(!$info) {
            // 上传错误提示错误信息        
            $this->ajaxReturn(array("error"=>1,"info"=>$info->getError()));
        }else{
            // 上传成功 
            $this->ajaxReturn(array("error"=>0,"url"=>$tmp));
        }
    }

    //公共删除
    public function comDel(){
        $tableName=I("post.tableName");
        $id=I("post.id");
        $db=M($tableName);
        $where['id']=array("in",rtrim($id,","));
        /*  删除带图片的
         * 没有图片会报错:)
         *  后来用try catch抛出异常
         */
        $info=delImg($tableName,$where);


        //不要先删字段。。。。
        $b=$db->where($where)->delete();
        $status=getReturn($b);

        $status["delete"]=$info;
        //  返回值
        $this->ajaxReturn($status);

    }

    //
    function save_add($tablename="",$data=[]){
        $db=M($tablename);
        if($data['id']){
            $b=$db->save($data);
        } else{
            $b=$db->add($data);
        }
        return getReturn($b);
    }
}
