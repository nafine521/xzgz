<?php
/**
 * 验证码通知短信接口
 */

class UserRegMsg {
    protected $sms_config;
    public $CONTENT_TYPE = "application/x-www-form-urlencoded";
    public $ACCEPT = "application/json";
    public $base_url='https://api.miaodiyun.com/20150822/';

    public function __construct($config=[])
    {
        $this->sms_config=$config;
    }

    /**
    * url中{function}/{operation}?部分
    */
    function sendSMS($msg,$phone){

        $funAndOperate = "industrySMS/sendSMS";
        // 参数详述请参考http://miaodiyun.com/https-xinxichaxun.html

        // 生成body
        $body = $this->createBasicAuthData();
        // 在基本认证参数的基础上添加短信内容和发送目标号码的参数
        $body['smsContent'] = $msg;
        $body['to'] = $phone;

        // 提交请求
        $result = $this->post($funAndOperate, $body);

        return $result;
    }
		/**
	 * 创建url
	 *
	 * @param funAndOperate
	 *            请求的功能和操作
	 * @return
	 */
//	function createUrl($funAndOperate)
//	{
//	    global $BASE_URL, $ACCOUNT_SID, $AUTH_TOKEN;
//	    // 时间戳
//	    date_default_timezone_set("Asia/Shanghai");
//	    $timestamp = date("YmdHis");
//
//	    return $BASE_URL . $funAndOperate;
//	}

	function createSig()
	{
	    //global $ACCOUNT_SID, $AUTH_TOKEN;
        date_default_timezone_set("Asia/Shanghai");
	    $timestamp = date("YmdHis");

	    // 签名
	    $sig = md5($this->sms_config['account_sid'] . $this->sms_config['auth_token'] . $timestamp);
	    return $sig;
	}

	function createBasicAuthData()
	{
        date_default_timezone_set("Asia/Shanghai");
	    $timestamp = date("YmdHis");
	    // 签名
	    $sig = md5( $this->sms_config['account_sid'] . $this->sms_config['auth_token'] . $timestamp);
	    return array("accountSid" => $this->sms_config['account_sid'], "timestamp" => $timestamp, "sig" => $sig, "respDataType"=> "JSON");
	}

	/**
	 * 创建请求头
	 * @param body
	 * @return array
	 */
	function createHeaders()
	{
	    //global $CONTENT_TYPE, $ACCEPT;

	    $headers = array('Content-type: '.$this->CONTENT_TYPE, 'Accept: '.$this->ACCEPT );

	    return $headers;
	}

	/**
	 * post请求
	 *
	 * @param funAndOperate
	 *            功能和操作
	 * @param body
	 *            要post的数据
	 * @return string
	 * @throws IOException
	 */
	function post($funAndOperate, $body)
	{
	    // 构造请求数据
	    $url =  $this->base_url . $funAndOperate;
	    $headers = $this->createHeaders();

	    // 要求post请求的消息体为&拼接的字符串，所以做下面转换
	    $fields_string = "";
	    foreach ($body as $key => $value) {
	        $fields_string .= $key . '=' . $value . '&';
	    }
	    rtrim($fields_string, '&');

	    // 提交请求
	    $con = curl_init();
	    curl_setopt($con, CURLOPT_URL, $url);
	    curl_setopt($con, CURLOPT_SSL_VERIFYHOST, FALSE);
	    curl_setopt($con, CURLOPT_SSL_VERIFYPEER, FALSE);
	    curl_setopt($con, CURLOPT_HEADER, 0);
	    curl_setopt($con, CURLOPT_POST, 1);
	    curl_setopt($con, CURLOPT_RETURNTRANSFER, 1);
	    curl_setopt($con, CURLOPT_HTTPHEADER, $headers);
	    curl_setopt($con, CURLOPT_POSTFIELDS, $fields_string);
	    $result = curl_exec($con);
	    curl_close($con);

	    return "" . $result;
	}
}
