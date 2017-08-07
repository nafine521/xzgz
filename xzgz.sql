# Host: localhost  (Version: 5.5.53)
# Date: 2017-08-07 17:56:28
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "xz_admin"
#

DROP TABLE IF EXISTS `xz_admin`;
CREATE TABLE `xz_admin` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT COMMENT '管理员id',
  `ue_username` varchar(20) NOT NULL DEFAULT '' COMMENT '管理员账号',
  `ue_password` char(32) NOT NULL DEFAULT '' COMMENT '管理员密码',
  `ue_nickname` varchar(20) NOT NULL DEFAULT '' COMMENT '管理员昵称',
  `ue_login_num` mediumint(8) unsigned NOT NULL DEFAULT '0' COMMENT '登录次数',
  `ue_login_ip` varchar(15) NOT NULL DEFAULT '' COMMENT '登录IP',
  `ue_login_time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '上次登录时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='管理员表';

#
# Data for table "xz_admin"
#

/*!40000 ALTER TABLE `xz_admin` DISABLE KEYS */;
INSERT INTO `xz_admin` VALUES (1,'admin','21232f297a57a5a743894a0e4a801fc3','超级管理员',39,'127.0.0.1',1502068608);
/*!40000 ALTER TABLE `xz_admin` ENABLE KEYS */;

#
# Structure for table "xz_admin_jilu"
#

DROP TABLE IF EXISTS `xz_admin_jilu`;
CREATE TABLE `xz_admin_jilu` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT COMMENT '记录ID',
  `jl_username` varchar(20) NOT NULL DEFAULT '' COMMENT '账户',
  `jl_operation` varchar(20) NOT NULL DEFAULT '' COMMENT '操作',
  `jl_login_ip` varchar(15) NOT NULL DEFAULT '' COMMENT '登录ip',
  `jl_login_time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '登录时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=31 DEFAULT CHARSET=utf8 COMMENT='管理员记录表';

#
# Data for table "xz_admin_jilu"
#

/*!40000 ALTER TABLE `xz_admin_jilu` DISABLE KEYS */;
INSERT INTO `xz_admin_jilu` VALUES (1,'admin','登录','127.0.0.1',1500320758),(2,'admin','登录','127.0.0.1',1500321592),(3,'admin','登录','127.0.0.1',1500345057),(4,'admin','登录','127.0.0.1',1500966505),(5,'admin','登录','127.0.0.1',1500971259),(6,'admin','登录','127.0.0.1',1500989316),(7,'admin','登录','127.0.0.1',1501403548),(8,'admin','登录','0.0.0.0',1501403562),(9,'admin','登录','0.0.0.0',1501404107),(10,'admin','登录','127.0.0.1',1501465005),(11,'admin','登录','0.0.0.0',1501465037),(12,'admin','退出','0.0.0.0',1501465144),(13,'admin','登录','0.0.0.0',1501465152),(14,'admin','登录','0.0.0.0',1501465183),(15,'admin','登录','0.0.0.0',1501465239),(16,'admin','登录','0.0.0.0',1501465321),(17,'admin','登录','0.0.0.0',1501465414),(18,'admin','登录','0.0.0.0',1501465585),(19,'admin','登录','0.0.0.0',1501465671),(20,'admin','登录','0.0.0.0',1501465689),(21,'admin','登录','127.0.0.1',1501551017),(22,'admin','登录','127.0.0.1',1501635971),(23,'admin','登录','127.0.0.1',1501660272),(24,'admin','登录','127.0.0.1',1501667081),(25,'admin','登录','127.0.0.1',1501722805),(26,'admin','登录','127.0.0.1',1501741933),(27,'admin','登录','127.0.0.1',1501808636),(28,'admin','登录','127.0.0.1',1501832165),(29,'admin','登录','127.0.0.1',1501897564),(30,'admin','登录','127.0.0.1',1502068608);
/*!40000 ALTER TABLE `xz_admin_jilu` ENABLE KEYS */;

#
# Structure for table "xz_archives"
#

DROP TABLE IF EXISTS `xz_archives`;
CREATE TABLE `xz_archives` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '文章id',
  `cat_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '所属栏目',
  `sortrank` smallint(5) unsigned NOT NULL DEFAULT '0' COMMENT '排序权重',
  `click` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '点击率',
  `source` char(30) NOT NULL DEFAULT '' COMMENT '来源',
  `title` char(100) NOT NULL DEFAULT '' COMMENT '标题',
  `litpic` char(100) NOT NULL DEFAULT '' COMMENT '缩略图',
  `pubdate` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '更新时间',
  `senddate` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '发表时间',
  `description` tinytext COMMENT '描述',
  `body` text COMMENT '文章内容',
  `keyword` varchar(250) NOT NULL DEFAULT '' COMMENT '关键词',
  `refer` tinyint(1) unsigned DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COMMENT='文章表';

#
# Data for table "xz_archives"
#

/*!40000 ALTER TABLE `xz_archives` DISABLE KEYS */;
INSERT INTO `xz_archives` VALUES (1,13,11,92,'11','321321','',0,0,' ','&lt;p&gt;11&lt;/p&gt;','11111111111111111',0),(2,13,0,70,'1121','321','/Uploads/article/2017-08-03/5982c7a54c9cd.png',0,0,' ',NULL,'321',0),(3,14,99,93,'1121','321','/Uploads/article/2017-08-03/5982c7a54c9cd.png',1501744799,0,'  ',NULL,'321',0),(4,14,0,81,'122','公司简介','/Uploads/article/2017-08-03/5982e76cde0ec.png',1501751161,1501751161,' ','&lt;p&gt;fsdafdsafdsafdsafdsafdfdsafds&lt;/p&gt;','11111111111111111',0),(5,14,21,64,'3213213','公司简介','/Uploads/article/2017-08-03/5982e8ed05c9c.png',1501751544,1501751544,' ','&lt;p&gt;3211111111111111111111111111111111111111111111111111111111111111111a&amp;#39;s&amp;#39;da&amp;#39;s&amp;#39;d&amp;#39;d&amp;#39;d&amp;#39;d&amp;#39;d阿三顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶&amp;nbsp;&lt;/p&gt;','321',0),(6,14,1,82,'1','公司简介','/Uploads/article/2017-08-03/5982e98e09222.png',1501751699,1501751699,' ','&lt;p&gt;是的股份烦烦烦烦烦烦烦烦烦烦烦烦烦烦烦&lt;/p&gt;','321',0),(7,13,1,99,'1','公司简介','/Uploads/article/2017-08-03/5982ea8998313.png',1501751956,1501751956,'法国大使馆鬼鬼鬼鬼鬼鬼鬼鬼三个地方烦烦烦烦烦烦烦烦烦烦烦烦烦烦烦鬼鬼鬼鬼鬼鬼','&lt;p&gt;法国大使馆鬼鬼鬼鬼鬼鬼鬼鬼三个地方烦烦烦烦烦烦烦烦烦烦烦烦烦烦烦鬼鬼鬼鬼鬼鬼&lt;/p&gt;','321',0);
/*!40000 ALTER TABLE `xz_archives` ENABLE KEYS */;

#
# Structure for table "xz_category"
#

DROP TABLE IF EXISTS `xz_category`;
CREATE TABLE `xz_category` (
  `id` smallint(6) NOT NULL AUTO_INCREMENT COMMENT '栏目ID',
  `cat_name` varchar(20) NOT NULL DEFAULT '' COMMENT '栏目名称',
  `pid` smallint(6) NOT NULL DEFAULT '0' COMMENT '父级ID',
  `cat_sort` smallint(6) NOT NULL DEFAULT '0' COMMENT '排序',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COMMENT='栏目表';

#
# Data for table "xz_category"
#

/*!40000 ALTER TABLE `xz_category` DISABLE KEYS */;
INSERT INTO `xz_category` VALUES (13,'房产类',0,1),(14,'金子',13,1);
/*!40000 ALTER TABLE `xz_category` ENABLE KEYS */;

#
# Structure for table "xz_member"
#

DROP TABLE IF EXISTS `xz_member`;
CREATE TABLE `xz_member` (
  `uid` int(11) NOT NULL COMMENT '用户ID',
  `member_name` varchar(50) NOT NULL DEFAULT '' COMMENT '前台用户名',
  `member_level` int(11) NOT NULL DEFAULT '0' COMMENT '会员等级',
  `reg_time` int(11) NOT NULL COMMENT '注册时间',
  `memo` varchar(1000) DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AVG_ROW_LENGTH=147 COMMENT='前台用户表';

#
# Data for table "xz_member"
#

INSERT INTO `xz_member` VALUES (1,'',545,1501919184,NULL);

#
# Structure for table "xz_member_account"
#

DROP TABLE IF EXISTS `xz_member_account`;
CREATE TABLE `xz_member_account` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL COMMENT '会员uid',
  `shop_id` int(11) NOT NULL COMMENT '店铺ID',
  `point` int(11) NOT NULL DEFAULT '0' COMMENT '会员积分',
  `balance` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '余额',
  `coin` int(11) NOT NULL DEFAULT '0' COMMENT '购物币',
  `member_cunsum` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '会员消费',
  `member_sum_point` int(11) NOT NULL DEFAULT '0' COMMENT '会员累计积分',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AVG_ROW_LENGTH=3276 COMMENT='会员账户统计表';

#
# Data for table "xz_member_account"
#


#
# Structure for table "xz_member_account_records"
#

DROP TABLE IF EXISTS `xz_member_account_records`;
CREATE TABLE `xz_member_account_records` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `uid` int(11) NOT NULL DEFAULT '0' COMMENT '用户ID',
  `shop_id` int(11) NOT NULL DEFAULT '0' COMMENT '店铺ID',
  `account_type` int(11) NOT NULL DEFAULT '1' COMMENT '账户类型1.积分2.余额3.购物币',
  `sign` smallint(6) NOT NULL DEFAULT '1' COMMENT '正负号',
  `number` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '数量',
  `from_type` smallint(6) NOT NULL DEFAULT '0' COMMENT '产生方式1.商城订单2.订单退还3.兑换4.充值5.签到6.分享7.注册8.提现9提现退还',
  `data_id` int(11) NOT NULL DEFAULT '0' COMMENT '相关表的数据ID',
  `text` varchar(255) NOT NULL DEFAULT '' COMMENT '数据相关内容描述文本',
  `create_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AVG_ROW_LENGTH=108 COMMENT='会员流水账表';

#
# Data for table "xz_member_account_records"
#


#
# Structure for table "xz_member_balance_withdraw"
#

DROP TABLE IF EXISTS `xz_member_balance_withdraw`;
CREATE TABLE `xz_member_balance_withdraw` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `shop_id` int(11) NOT NULL COMMENT '店铺编号',
  `withdraw_no` varchar(255) NOT NULL DEFAULT '' COMMENT '提现流水号',
  `uid` int(11) NOT NULL COMMENT '会员id',
  `bank_name` varchar(50) NOT NULL COMMENT '提现银行名称',
  `account_number` varchar(50) NOT NULL COMMENT '提现银行账号',
  `realname` varchar(10) NOT NULL COMMENT '提现账户姓名',
  `mobile` varchar(20) NOT NULL COMMENT '手机',
  `cash` decimal(10,2) NOT NULL COMMENT '提现金额',
  `ask_for_date` datetime NOT NULL COMMENT '提现日期',
  `payment_date` datetime DEFAULT NULL COMMENT '到账日期',
  `status` smallint(6) NOT NULL DEFAULT '0' COMMENT '当前状态 0已申请(等待处理) 1已同意 -1 已拒绝',
  `memo` varchar(255) NOT NULL DEFAULT '' COMMENT '备注',
  `modify_date` datetime DEFAULT NULL COMMENT '修改日期',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AVG_ROW_LENGTH=4096 COMMENT='会员余额提现记录表';

#
# Data for table "xz_member_balance_withdraw"
#


#
# Structure for table "xz_member_bank_account"
#

DROP TABLE IF EXISTS `xz_member_bank_account`;
CREATE TABLE `xz_member_bank_account` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL COMMENT '会员id',
  `bank_type` varchar(50) NOT NULL DEFAULT '1' COMMENT '账号类型 1银行卡2支付宝',
  `branch_bank_name` varchar(50) DEFAULT NULL COMMENT '支行信息',
  `realname` varchar(50) NOT NULL DEFAULT '' COMMENT '真实姓名',
  `account_number` varchar(50) NOT NULL DEFAULT '' COMMENT '银行账号',
  `mobile` varchar(20) NOT NULL DEFAULT '' COMMENT '手机号',
  `is_default` int(11) NOT NULL DEFAULT '0' COMMENT '是否默认账号',
  `create_date` datetime DEFAULT NULL COMMENT '创建日期',
  `modify_date` datetime DEFAULT NULL COMMENT '修改日期',
  PRIMARY KEY (`id`),
  KEY `IDX_member_bank_account_uid` (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AVG_ROW_LENGTH=16384 COMMENT='会员提现账号';

#
# Data for table "xz_member_bank_account"
#


#
# Structure for table "xz_member_express_address"
#

DROP TABLE IF EXISTS `xz_member_express_address`;
CREATE TABLE `xz_member_express_address` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL COMMENT '会员基本资料表ID',
  `consigner` varchar(255) NOT NULL DEFAULT '' COMMENT '收件人',
  `mobile` varchar(11) NOT NULL DEFAULT '' COMMENT '手机',
  `phone` varchar(20) NOT NULL DEFAULT '' COMMENT '固定电话',
  `province` int(11) NOT NULL DEFAULT '0' COMMENT '省',
  `city` int(11) NOT NULL DEFAULT '0' COMMENT '市',
  `district` int(11) NOT NULL DEFAULT '0' COMMENT '区县',
  `address` varchar(255) NOT NULL DEFAULT '' COMMENT '详细地址',
  `zip_code` varchar(6) NOT NULL DEFAULT '' COMMENT '邮编',
  `alias` varchar(50) NOT NULL DEFAULT '' COMMENT '地址别名',
  `is_default` int(11) NOT NULL DEFAULT '0' COMMENT '默认收货地址',
  PRIMARY KEY (`id`),
  KEY `IDX_member_express_address_uid` (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AVG_ROW_LENGTH=2340 COMMENT='会员收货地址管理';

#
# Data for table "xz_member_express_address"
#


#
# Structure for table "xz_member_favorites"
#

DROP TABLE IF EXISTS `xz_member_favorites`;
CREATE TABLE `xz_member_favorites` (
  `log_id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '记录ID',
  `uid` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '会员ID',
  `fav_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '商品或店铺ID',
  `fav_type` varchar(20) NOT NULL DEFAULT 'goods' COMMENT '类型:goods为商品,shop为店铺,默认为商品',
  `fav_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '收藏时间',
  `shop_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '店铺ID',
  `shop_name` varchar(20) NOT NULL DEFAULT '' COMMENT '店铺名称',
  `shop_logo` varchar(255) NOT NULL DEFAULT '' COMMENT '店铺logo',
  `goods_name` varchar(50) NOT NULL DEFAULT '' COMMENT '商品名称',
  `goods_image` varchar(100) NOT NULL DEFAULT '' COMMENT '商品图片',
  `log_price` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '商品收藏时价格',
  `log_msg` varchar(1000) NOT NULL DEFAULT '' COMMENT '收藏备注',
  PRIMARY KEY (`log_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AVG_ROW_LENGTH=8192 COMMENT='收藏表';

#
# Data for table "xz_member_favorites"
#


#
# Structure for table "xz_member_gift"
#

DROP TABLE IF EXISTS `xz_member_gift`;
CREATE TABLE `xz_member_gift` (
  `gift_id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `uid` int(11) NOT NULL COMMENT '会员ID',
  `promotion_gift_id` int(11) NOT NULL COMMENT '赠品活动ID',
  `goods_id` int(11) NOT NULL COMMENT '赠品ID',
  `goods_name` varchar(255) NOT NULL DEFAULT '' COMMENT '赠品名称',
  `goods_picture` int(11) NOT NULL DEFAULT '0' COMMENT '赠品图片',
  `num` int(11) NOT NULL DEFAULT '1' COMMENT '赠品数量',
  `get_type` int(11) NOT NULL DEFAULT '1' COMMENT '获取方式',
  `get_type_id` int(11) NOT NULL COMMENT '获取方式对应ID',
  `create_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `desc` text NOT NULL COMMENT '说明',
  PRIMARY KEY (`gift_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='会员赠品表';

#
# Data for table "xz_member_gift"
#


#
# Structure for table "xz_member_level"
#

DROP TABLE IF EXISTS `xz_member_level`;
CREATE TABLE `xz_member_level` (
  `level_id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '等级ID',
  `shop_id` int(11) NOT NULL DEFAULT '0' COMMENT '店铺ID',
  `level_name` varchar(50) NOT NULL DEFAULT '' COMMENT '等级名称',
  `min_integral` int(11) NOT NULL DEFAULT '0' COMMENT '累计积分',
  `goods_discount` decimal(3,2) NOT NULL DEFAULT '1.00' COMMENT '折扣率',
  `desc` varchar(1000) NOT NULL DEFAULT '' COMMENT '等级描述',
  `is_default` int(11) NOT NULL DEFAULT '0' COMMENT '是否是默认',
  `quota` int(11) NOT NULL DEFAULT '0' COMMENT '消费额度',
  `upgrade` int(11) NOT NULL COMMENT '升级条件  1.累计积分 2.消费额度 3.同时满足',
  `relation` int(11) NOT NULL DEFAULT '1' COMMENT '1.或 2. 且',
  PRIMARY KEY (`level_id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8 AVG_ROW_LENGTH=16384 COMMENT='会员等级';

#
# Data for table "xz_member_level"
#

INSERT INTO `xz_member_level` VALUES (47,0,'普通会员',0,1.00,'',1,0,0,2);

#
# Structure for table "xz_member_recharge"
#

DROP TABLE IF EXISTS `xz_member_recharge`;
CREATE TABLE `xz_member_recharge` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `recharge_money` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '支付金额',
  `uid` varchar(255) NOT NULL COMMENT '用户uid',
  `out_trade_no` varchar(255) NOT NULL DEFAULT '' COMMENT '支付流水号',
  `create_time` varchar(255) NOT NULL DEFAULT '0' COMMENT '创建时间',
  `is_pay` varchar(255) NOT NULL DEFAULT '0' COMMENT '是否支付',
  `status` varchar(255) NOT NULL DEFAULT '0' COMMENT '状态',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AVG_ROW_LENGTH=16384 COMMENT='会员充值余额记录';

#
# Data for table "xz_member_recharge"
#


#
# Structure for table "xz_nav"
#

DROP TABLE IF EXISTS `xz_nav`;
CREATE TABLE `xz_nav` (
  `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT COMMENT '导航ID',
  `nav_name` varchar(50) NOT NULL DEFAULT '' COMMENT '导航名称',
  `nav_link` varchar(100) NOT NULL DEFAULT '' COMMENT '导航链接',
  `nav_position` varchar(20) NOT NULL DEFAULT '' COMMENT '导航位置',
  `is_show` tinyint(4) NOT NULL DEFAULT '0' COMMENT '是否显示',
  `is_open_new` tinyint(4) NOT NULL DEFAULT '0' COMMENT '是否新窗口',
  `nav_sort` tinyint(4) NOT NULL DEFAULT '0' COMMENT '排序',
  PRIMARY KEY (`id`),
  KEY `is_show` (`is_show`),
  KEY `is_open_new` (`is_open_new`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='导航表';

#
# Data for table "xz_nav"
#

/*!40000 ALTER TABLE `xz_nav` DISABLE KEYS */;
INSERT INTO `xz_nav` VALUES (3,'产品中心','Product/product','中间',0,0,1),(4,'关于我们','About/about_us','中间',1,0,2);
/*!40000 ALTER TABLE `xz_nav` ENABLE KEYS */;

#
# Structure for table "xz_photo"
#

DROP TABLE IF EXISTS `xz_photo`;
CREATE TABLE `xz_photo` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '相册id',
  `aid` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '关联id',
  `sortrank` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '排序',
  `imgsrc` varchar(200) NOT NULL DEFAULT '' COMMENT '链接地址',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='相册表';

#
# Data for table "xz_photo"
#

/*!40000 ALTER TABLE `xz_photo` DISABLE KEYS */;
INSERT INTO `xz_photo` VALUES (1,0,1,'/Uploads/photo/2017-08-04/598424f1cae1d.png');
/*!40000 ALTER TABLE `xz_photo` ENABLE KEYS */;

#
# Structure for table "xz_product"
#

DROP TABLE IF EXISTS `xz_product`;
CREATE TABLE `xz_product` (
  `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT COMMENT '产品ID',
  `product_name` varchar(255) NOT NULL DEFAULT '' COMMENT '产品标题',
  `product_time` varchar(5) NOT NULL DEFAULT '' COMMENT '项目周期',
  `product_award` varchar(10) NOT NULL DEFAULT '' COMMENT '返还比例',
  `product_plan` varchar(10) NOT NULL DEFAULT '' COMMENT '项目进度',
  `product_assure` varchar(50) NOT NULL DEFAULT '' COMMENT '担保公司',
  `product_amount` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '项目总额',
  `product_surplus` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '可加入金额',
  `product_money` mediumint(8) unsigned NOT NULL DEFAULT '0' COMMENT '购买金额',
  `product_classify_id` smallint(5) unsigned NOT NULL DEFAULT '0' COMMENT '产品所属分类ID',
  `product_shelf_time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '项目发布时间',
  `product_buy_time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '项目购买时间',
  `product_next` mediumint(8) unsigned NOT NULL DEFAULT '0' COMMENT '项目购买次数',
  `produc_intro` text COMMENT '产品介绍',
  `produc_intro1` text NOT NULL COMMENT '安全保障',
  `produc_intro2` text NOT NULL COMMENT '常见问题',
  `produc_sort` smallint(6) NOT NULL DEFAULT '0' COMMENT '排序',
  `produc_status` varchar(1) NOT NULL DEFAULT '1' COMMENT '状态:1=发布 0=下架',
  `produc_xz` varchar(1) NOT NULL DEFAULT '0' COMMENT '购买限制:1=限制购买 0=不限制',
  PRIMARY KEY (`id`),
  KEY `product_name` (`product_name`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='产品表';

#
# Data for table "xz_product"
#

/*!40000 ALTER TABLE `xz_product` DISABLE KEYS */;
/*!40000 ALTER TABLE `xz_product` ENABLE KEYS */;

#
# Structure for table "xz_session"
#

DROP TABLE IF EXISTS `xz_session`;
CREATE TABLE `xz_session` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `session_ticket` varchar(40) NOT NULL DEFAULT '' COMMENT 'session查询凭证',
  `uid` varchar(255) NOT NULL COMMENT '用户uid',
  `expression` int(11) NOT NULL DEFAULT '0' COMMENT '过期时间',
  `user_ip` varchar(100) NOT NULL DEFAULT '' COMMENT '本次登陆ip',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='session凭证表';

#
# Data for table "xz_session"
#

/*!40000 ALTER TABLE `xz_session` DISABLE KEYS */;
/*!40000 ALTER TABLE `xz_session` ENABLE KEYS */;

#
# Structure for table "xz_user"
#

DROP TABLE IF EXISTS `xz_user`;
CREATE TABLE `xz_user` (
  `uid` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `instance_id` int(11) NOT NULL DEFAULT '0' COMMENT '实例信息',
  `user_name` varchar(50) NOT NULL DEFAULT '' COMMENT '用户名',
  `user_password` varchar(255) NOT NULL DEFAULT '' COMMENT '用户密码（MD5）',
  `salt` varchar(5) NOT NULL DEFAULT '0' COMMENT '密码加盐',
  `user_status` int(11) NOT NULL DEFAULT '1' COMMENT '用户状态  用户状态默认为1',
  `user_headimg` varchar(255) NOT NULL DEFAULT '' COMMENT '用户头像',
  `is_system` int(1) unsigned NOT NULL DEFAULT '0' COMMENT '是否是系统后台用户 0 不是 1 是',
  `is_member` int(11) NOT NULL DEFAULT '0' COMMENT '是否是前台会员',
  `user_tel` varchar(20) NOT NULL DEFAULT '' COMMENT '手机号',
  `user_tel_bind` int(1) NOT NULL DEFAULT '0' COMMENT '手机号是否绑定 0 未绑定 1 绑定 ',
  `user_email` varchar(50) NOT NULL DEFAULT '' COMMENT '邮箱',
  `user_email_bind` int(1) NOT NULL DEFAULT '0' COMMENT '是否邮箱绑定',
  `other_info` varchar(255) DEFAULT NULL COMMENT '附加信息',
  `reg_time` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '注册时间',
  `last_login_time` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '上次登录时间',
  `last_login_ip` varchar(255) DEFAULT NULL COMMENT '上次登录ip',
  `last_login_type` int(11) DEFAULT NULL COMMENT '上次登录的操作终端类型',
  `login_num` int(11) NOT NULL DEFAULT '0' COMMENT '登录次数',
  `real_name` varchar(50) DEFAULT '' COMMENT '真实姓名',
  `sex` smallint(6) DEFAULT '0' COMMENT '性别 0保密 1男 2女',
  `birthday` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '生日',
  `location` varchar(255) DEFAULT '' COMMENT '所在地',
  `nick_name` varchar(50) DEFAULT '牛酷用户' COMMENT '用户昵称',
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 AVG_ROW_LENGTH=372 COMMENT='系统用户表';

#
# Data for table "xz_user"
#

INSERT INTO `xz_user` VALUES (1,0,'mm3','8136a00c3df04173393ae7df62e90f04','0',1,'',0,1,'13700000000',0,'321@123.com',0,NULL,0,0,NULL,NULL,0,'',2,0,'北京东城区','牛酷用户');
