-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2017-05-27 05:32:49
-- 服务器版本： 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `thinkphp`
--

-- --------------------------------------------------------

--
-- 表的结构 `tp_admin`
--

CREATE TABLE `tp_admin` (
  `id` int(10) UNSIGNED NOT NULL COMMENT '管理员id',
  `ue_username` varchar(20) NOT NULL DEFAULT '' COMMENT '管理员账号',
  `ue_password` char(32) NOT NULL DEFAULT '' COMMENT '管理员密码',
  `ue_nickname` varchar(20) NOT NULL DEFAULT '' COMMENT '管理员昵称',
  `ue_login_num` int(10) UNSIGNED NOT NULL DEFAULT '0' COMMENT '登录次数',
  `ue_login_ip` varchar(15) NOT NULL DEFAULT '' COMMENT '上次登录时间',
  `ue_login_time` int(10) UNSIGNED NOT NULL DEFAULT '0' COMMENT '上次登录时间'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='管理员表';

--
-- 转存表中的数据 `tp_admin`
--

INSERT INTO `tp_admin` (`id`, `ue_username`, `ue_password`, `ue_nickname`, `ue_login_num`, `ue_login_ip`, `ue_login_time`) VALUES
(1, 'admin', '21232f297a57a5a743894a0e4a801fc3', '超级管理员', 73, '127.0.0.1', 1495797653);

-- --------------------------------------------------------

--
-- 表的结构 `tp_admin_jilu`
--

CREATE TABLE `tp_admin_jilu` (
  `id` int(10) UNSIGNED NOT NULL COMMENT '记录ID',
  `jl_username` varchar(20) NOT NULL DEFAULT '' COMMENT '账户',
  `jl_operation` varchar(20) NOT NULL DEFAULT '' COMMENT '操作',
  `jl_login_ip` varchar(15) NOT NULL DEFAULT '' COMMENT '登录ip',
  `jl_login_time` datetime DEFAULT NULL COMMENT '登录时间'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='管理员记录表';

--
-- 转存表中的数据 `tp_admin_jilu`
--

INSERT INTO `tp_admin_jilu` (`id`, `jl_username`, `jl_operation`, `jl_login_ip`, `jl_login_time`) VALUES
(10, 'admin', '登录', '127.0.0.1', '2017-05-26 19:20:53'),
(8, 'admin', '退出', '127.0.0.1', '2017-05-25 13:37:16'),
(9, 'admin', '登录', '127.0.0.1', '2017-05-25 13:37:22');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tp_admin`
--
ALTER TABLE `tp_admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tp_admin_jilu`
--
ALTER TABLE `tp_admin_jilu`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `tp_admin`
--
ALTER TABLE `tp_admin`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '管理员id', AUTO_INCREMENT=3;
--
-- 使用表AUTO_INCREMENT `tp_admin_jilu`
--
ALTER TABLE `tp_admin_jilu`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '记录ID', AUTO_INCREMENT=11;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- 文章表
CREATE TABLE `xz_archives`(
  id int UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT '文章id',
  cat_id int UNSIGNED NOT NULL DEFAULT '0' COMMENT '所属栏目',
  sortrank smallint UNSIGNED NOT NULL DEFAULT '0' COMMENT '排序权重',
  click int UNSIGNED NOT NULL DEFAULT '0' COMMENT '点击率',
  source char(30) NOT NULL DEFAULT '' COMMENT '来源',
  title char(100) NOT NULL DEFAULT '' COMMENT '标题',
  litpic char(100) NOT NULL DEFAULT '' COMMENT '缩略图',
  pubdate int UNSIGNED NOT NULL DEFAULT '0' COMMENT '更新时间',
  senddate int UNSIGNED NOT NULL DEFAULT '0' COMMENT '发表时间',
  keyword varchar(250) NOT NULL DEFAULT '' COMMENT '关键词',
  description tinytext COMMENT '描述',
  body text COMMENT '文章内容'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='文章表';



-- 相册表
CREATE TABLE  `xz_photo`(
  id int UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT '相册id',
  aid int UNSIGNED NOT NULL DEFAULT '0' COMMENT '关联id,0为轮播类型',
  sortrank tinyint UNSIGNED NOT NULL DEFAULT '0' COMMENT '排序',
  imgsrc VARCHAR(200) NOT NULL DEFAULT '' COMMENT '链接地址'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='相册表';


-- 用户表
CREATE TABLE `xz_member` (
  `uid` int(11) NOT NULL COMMENT '用户ID',
  `member_name` varchar(50) NOT NULL DEFAULT '' COMMENT '前台用户名',
  `member_level` int(11) NOT NULL DEFAULT '0' COMMENT '会员等级',
  `reg_time` datetime NOT NULL COMMENT '注册时间',
  `memo` varchar(1000) DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AVG_ROW_LENGTH=147 COMMENT='前台用户表';

#
# Data for table "ns_member"
#

INSERT INTO `xz_member` VALUES (1,'admin',47,'2017-08-01 02:25:25','');

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
# Data for table "ns_member_level"
#

INSERT INTO `xz_member_level` VALUES (47,0,'普通会员',0,1.00,'',1,0,0,2);


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


-- session数据库
CREATE TABLE `xz_session` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `session_ticket` VARCHAR(40) NOT NULL DEFAULT '' COMMENT 'session查询凭证',
  `uid` varchar(255) NOT NULL COMMENT '用户uid',
  `expression` INT NOT NULL DEFAULT '0' COMMENT '过期时间',
  `user_ip` VARCHAR(100) NOT NULL DEFAULT '' COMMENT '本次登陆ip',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8  COMMENT='session凭证表';


-- 短信验证表
CREATE TABLE `xz_smscod` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `sms_ticket` VARCHAR(6) NOT NULL DEFAULT '' COMMENT '短信凭证',
  `uid` varchar(255) NOT NULL COMMENT '用户uid',
  `expression` INT NOT NULL DEFAULT '0' COMMENT '过期时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8  COMMENT='短信验证表';

-- 专题页面表
CREATE TABLE `xz_specil`(
  id int UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT '专题id',
  cat_id int UNSIGNED NOT NULL DEFAULT '0' COMMENT '所属栏目',
  aid int UNSIGNED NOT NULL DEFAULT '0' COMMENT '所属文章',
  title char(100) NOT NULL DEFAULT '' COMMENT '专题标题',
  litpic CHAR(100) NOT NULL DEFAULT '' COMMENT '缩略图',
  description tinytext COMMENT '描述',
  body text COMMENT '文章内容'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='专题表';