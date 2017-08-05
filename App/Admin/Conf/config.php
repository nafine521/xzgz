<?php
return array(
	//'配置项'=>'配置值'
		'TMPL_PARSE_STRING'=>array(
		"__PUBLIC__"=>__ROOT__."/Public/Admin/",	
	),
	
	"PREFIX_SN"=>"DD",
	'APP_DEBUG' => true,
	'LOG_RECORD'    =>    true, // 日志记录
	'LOG_EXCEPTION_RECORD' => true, // 记录异常信息日志
	'DB_SQL_LOG'    =>    true, // 记录SQL信息
    'VIEW_PATH'=>'./Template/admin/'
);