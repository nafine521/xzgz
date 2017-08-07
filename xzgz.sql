# Host: localhost  (Version: 5.5.53)
# Date: 2017-08-04 17:18:13
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
INSERT INTO `xz_admin` VALUES (1,'admin','21232f297a57a5a743894a0e4a801fc3','超级管理员',37,'127.0.0.1',1501832165);
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
) ENGINE=MyISAM AUTO_INCREMENT=29 DEFAULT CHARSET=utf8 COMMENT='管理员记录表';

#
# Data for table "xz_admin_jilu"
#

/*!40000 ALTER TABLE `xz_admin_jilu` DISABLE KEYS */;
INSERT INTO `xz_admin_jilu` VALUES (1,'admin','登录','127.0.0.1',1500320758),(2,'admin','登录','127.0.0.1',1500321592),(3,'admin','登录','127.0.0.1',1500345057),(4,'admin','登录','127.0.0.1',1500966505),(5,'admin','登录','127.0.0.1',1500971259),(6,'admin','登录','127.0.0.1',1500989316),(7,'admin','登录','127.0.0.1',1501403548),(8,'admin','登录','0.0.0.0',1501403562),(9,'admin','登录','0.0.0.0',1501404107),(10,'admin','登录','127.0.0.1',1501465005),(11,'admin','登录','0.0.0.0',1501465037),(12,'admin','退出','0.0.0.0',1501465144),(13,'admin','登录','0.0.0.0',1501465152),(14,'admin','登录','0.0.0.0',1501465183),(15,'admin','登录','0.0.0.0',1501465239),(16,'admin','登录','0.0.0.0',1501465321),(17,'admin','登录','0.0.0.0',1501465414),(18,'admin','登录','0.0.0.0',1501465585),(19,'admin','登录','0.0.0.0',1501465671),(20,'admin','登录','0.0.0.0',1501465689),(21,'admin','登录','127.0.0.1',1501551017),(22,'admin','登录','127.0.0.1',1501635971),(23,'admin','登录','127.0.0.1',1501660272),(24,'admin','登录','127.0.0.1',1501667081),(25,'admin','登录','127.0.0.1',1501722805),(26,'admin','登录','127.0.0.1',1501741933),(27,'admin','登录','127.0.0.1',1501808636),(28,'admin','登录','127.0.0.1',1501832165);
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
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='相册表';

#
# Data for table "xz_photo"
#

/*!40000 ALTER TABLE `xz_photo` DISABLE KEYS */;
INSERT INTO `xz_photo` VALUES (1,1,1,'/Uploads/photo/2017-08-04/598424f1cae1d.png');
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
