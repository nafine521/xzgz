<?php
return array(
	//数据库配置信息
	'DB_TYPE'   => 'mysqli', // 数据库类型
	'DB_HOST'   => 'localhost', // 服务器地址
	'DB_NAME'   => 'xzgz', // 数据库名
	'DB_USER'   => 'root', // 用户名
	'DB_PWD'    => 'root', // 密码
	'DB_PORT'   => 3306, // 端口
	'DB_PREFIX' => 'xz_', // 数据库表前缀
	'DB_CHARSET'=> 'utf8', // 字符集

	'MODULE_ALLOW_LIST'=>array('Admin','Home'),
	'DEFAULT_MODULE'=>'Home',
    'SALT'=> "tv48l",


	'URL_ROUTER_ON'=>true,
	'URL_ROUTE_RULES'=>array(

	)
);