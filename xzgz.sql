# Host: localhost  (Version: 5.5.53)
# Date: 2017-08-09 17:57:30
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
INSERT INTO `xz_admin` VALUES (1,'admin','21232f297a57a5a743894a0e4a801fc3','超级管理员',40,'127.0.0.1',1502240931);
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
) ENGINE=MyISAM AUTO_INCREMENT=32 DEFAULT CHARSET=utf8 COMMENT='管理员记录表';

#
# Data for table "xz_admin_jilu"
#

/*!40000 ALTER TABLE `xz_admin_jilu` DISABLE KEYS */;
INSERT INTO `xz_admin_jilu` VALUES (1,'admin','登录','127.0.0.1',1500320758),(2,'admin','登录','127.0.0.1',1500321592),(3,'admin','登录','127.0.0.1',1500345057),(4,'admin','登录','127.0.0.1',1500966505),(5,'admin','登录','127.0.0.1',1500971259),(6,'admin','登录','127.0.0.1',1500989316),(7,'admin','登录','127.0.0.1',1501403548),(8,'admin','登录','0.0.0.0',1501403562),(9,'admin','登录','0.0.0.0',1501404107),(10,'admin','登录','127.0.0.1',1501465005),(11,'admin','登录','0.0.0.0',1501465037),(12,'admin','退出','0.0.0.0',1501465144),(13,'admin','登录','0.0.0.0',1501465152),(14,'admin','登录','0.0.0.0',1501465183),(15,'admin','登录','0.0.0.0',1501465239),(16,'admin','登录','0.0.0.0',1501465321),(17,'admin','登录','0.0.0.0',1501465414),(18,'admin','登录','0.0.0.0',1501465585),(19,'admin','登录','0.0.0.0',1501465671),(20,'admin','登录','0.0.0.0',1501465689),(21,'admin','登录','127.0.0.1',1501551017),(22,'admin','登录','127.0.0.1',1501635971),(23,'admin','登录','127.0.0.1',1501660272),(24,'admin','登录','127.0.0.1',1501667081),(25,'admin','登录','127.0.0.1',1501722805),(26,'admin','登录','127.0.0.1',1501741933),(27,'admin','登录','127.0.0.1',1501808636),(28,'admin','登录','127.0.0.1',1501832165),(29,'admin','登录','127.0.0.1',1501897564),(30,'admin','登录','127.0.0.1',1502068608),(31,'admin','登录','127.0.0.1',1502240931);
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
  `refer` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '热门推荐',
  `topics_title` varchar(255) NOT NULL DEFAULT '' COMMENT '专题标题',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='文章表';

#
# Data for table "xz_archives"
#

/*!40000 ALTER TABLE `xz_archives` DISABLE KEYS */;
INSERT INTO `xz_archives` VALUES (1,1,0,86,'','公司简介','',1502262877,1502248781,' 深圳市前海小猪互联网金融服务有限公司成立于2014年7月14日，注册资本3125万元，实缴资本312...','&lt;ul class=&quot;mt20 list-paddingleft-2&quot; style=&quot;list-style-type: none;&quot;&gt;&lt;li&gt;&lt;p&gt;深圳市前海小猪互联网金融服务有限公司成立于2014年7月14日，注册资本3125万元，实缴资本3125万元，注册地址为深圳市前海深港合作区前湾一路1号A栋201室。&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;小猪罐子（&lt;a target=&quot;_blank&quot; style=&quot;color: rgb(30, 174, 88); outline: none; font-weight: bold;&quot;&gt;www.xiaozhu168.com&lt;/a&gt;）为深圳市前海小猪互联网金融服务有限公司建立的网络借贷信息中介平台，于2014年8月15日正式上线，总部位于深圳。作为较早基于互联网的P2P网络借贷信息中介机构之一，小猪罐子频获行业殊荣，荣获11届金鼎奖“互联网金融安全示范单位”、互联网金融公益联盟首届会员单位等。&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;2017年1月，小猪罐子获得武汉光谷创业投资有限公司4000万元人民币A轮融资。&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;小猪罐子联系方式：400-882-5188。旗下移动APP应用、微信订阅号可通过扫描下方二维码进行下载和关注。&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;/li&gt;&lt;/ul&gt;','',0,'资质材料'),(2,1,0,86,'','高管团队','',1502248904,1502248904,'公司的核心成员均来自于银行、小额贷款、投资管理及电子商务等行业精英，具有金融行业和电子商务复合管理、...','&lt;ul class=&quot;mt20 list-paddingleft-2&quot; style=&quot;list-style-type: none;&quot;&gt;&lt;li&gt;&lt;p&gt;公司的核心成员均来自于银行、小额贷款、投资管理及电子商务等行业精英，具有金融行业和电子商务复合管理、实战经验，曾成功运营多个知名平台，从业背景深厚。想要了解更多的高管资料请点击&lt;a target=&quot;_blank&quot; style=&quot;color: rgb(30, 174, 88); outline: none;&quot;&gt;管理团队介绍&amp;gt;&amp;gt;&lt;/a&gt;&lt;/p&gt;&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;','',0,''),(3,19,0,90,'','汇金公司是什么','',1502270272,1502270272,'看财经新闻的时候，经常会出现汇金公司增资，汇金公司减持等等词汇，很多人就好奇，中央汇金公司是？感觉很...','&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;p&gt;&lt;span style=&quot;font-size:14px;&quot;&gt;&lt;span style=&quot;font-family:微软雅黑;&quot;&gt;看财经新闻的时候，经常会出现汇金公司增资，汇金公司减持等等词汇，很多人就好奇，中央汇金公司是？感觉很牛逼的样子，投哪网小编就为大家介绍下汇金公司的背景资料。&lt;br/&gt;中央汇金投资有限责任公司（简称“中央汇金公司”），总部设在北京，是依据《中华人民共和国公司法》由国家出资设立的国有独资公司。根据国务院授权，代表国家依法行使对国有商业银行等重点金融企业出资人的权利和义务。&lt;br/&gt;汇金公司主要控股参股金融机构包括：&lt;br/&gt;1、 国家开发银行；&lt;br/&gt;2、中国进出口银行&lt;br/&gt;3、 中国工商银行股份有限公司；&lt;br/&gt;4、 中国农业银行股份有限公司；&lt;br/&gt;5、 中国银行股份有限公司；&lt;br/&gt;6、 中国建设银行股份有限公司；&lt;br/&gt;7、 中国光大银行股份有限公司；&lt;br/&gt;8、 中国再保险（集团）股份有限公司；&lt;br/&gt;9、 中国建银投资有限责任公司；&lt;br/&gt;10、 中国银河金融控股有限责任公司；&lt;br/&gt;11、申银万国证券股份有限公司；&lt;br/&gt;12、中信建投证券股份有限公司；&lt;br/&gt;13、国泰君安证券股份有限公司；&lt;br/&gt;14、新华人寿保险股份有限公司。&lt;br/&gt;2003年12月，承担着代表国家投资并持有国有商业银行等重点金融企业的股权，并代表国务院行使股东权利的汇金公司正式成立，注册资本2000亿美元。&lt;br/&gt;2007年9月，财政部发行特别国债，从中国人民银行购买汇金公司的全部股权，并将上述股权作为对中国投资有限责任公司(以下简称“中投公司”)出资的一部分，注入中投公司。自此，汇金公司被纳入中投公司旗下，与其海外投资平台实行严格的“防火墙”隔离制度。&lt;br/&gt;正是由于带有强烈政府意图的金融控股公司，汇金公司一举一动往往被猜测或过分解读其背后的市场信号。&lt;br/&gt;汇金公司虽然名为公司，但有观点认为它仍是政府机构，由于国资委不负责管理金融类国有资产，所以汇金公司被认为是“金融国资委”。此外，动用国家外汇储备用于国有企业因制度和机制的原因产生的亏损，也遭到部分学者专家的质疑，在程序上也有如吴敬琏等人认为汇金公司应取得人大财经委的授权。&lt;br/&gt;&amp;nbsp;&lt;br/&gt;【免责声明】融金宝理财发布的 汇金公司是什么 一文目的在于传播更多信息，与本网站立场无关。融金宝理财不保证该信息（包括但不限于文字、数据及图表）全部或者部分内容的准确性、真实性、完整性、有效性、及时性、原创性等。相关信息并未经过本网站证实，不对您构成任何投资建议，据此操作，风险自担。&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;','',0,''),(4,19,0,77,'','惠投无忧怎么样','',1502270379,1502270379,'惠投无忧简介深圳前海皓能互联网服务有限公司(简称前海皓能)是深圳市赛为智能股份有限公司(股票代码：3...','&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;p&gt;&lt;img alt=&quot;&quot; src=&quot;https://www.xiaozhu168.com/upload/images/333_webp(13).jpg&quot; style=&quot;width: 600px; height: 400px;&quot;/&gt;&lt;/p&gt;&lt;p&gt;&lt;span style=&quot;font-size:14px;&quot;&gt;&lt;span style=&quot;font-family:微软雅黑;&quot;&gt;&lt;strong&gt;惠投无忧简介&lt;/strong&gt;&lt;br/&gt;深圳前海皓能互联网服务有限公司(简称前海皓能)是深圳市赛为智能股份有限公司(股票代码：300044)全资控股子公司，公司成立于2013年10月12日，注册资本2000万，致力于提供专业的全流程互联网金融服务，打造完善、安全、便捷、可信透明的互联网投融资平台——惠投无忧，为投资客户提供安全、稳健、高收益的互联网金融服务。&lt;br/&gt;前海皓能旗下惠投无忧创新投融资服务平台于2015年8月8号上线运营, 是国内真正引入信用保险和商业保理项目的专业P2B平台，依托赛为智能品牌资源、管理经验、研发技术等，携手第三方支付和资金托管平台，运用互联网高效、 透明、便捷优势，推出保理、融资租赁、供应链金融等业务板块，满足企业和个人资金的资金融通需求，实现财富安全、高效益地增值。&lt;br/&gt;惠投无忧以国内巨大的应收账款市场为依托，颠覆业内以抵押和担保为主要风控手段模式，重视融资方真实的交易背景、信用记录和财务状况、应收账款管理体系以及产品品质等指标。惠投无忧以健全的风险管控体系为基础、专业化和结构化的产品设计为核心，构建安全、稳定、规范、透明的投融资互联网金融信息服务平台。公司现已荣获中国电子商务协会可信网站认证公司，核心创始团队拥有丰富的金融业、互联网和第三方支付背景及经验沉淀，在产品、技术、业务和风控等方面皆有出色表现，公司专心、专注于创建安全、稳定、便捷、可信透明的投融资服务平台，力争成为中国最具影响力的互联网金融服务公司之一，我们将以透明、公开、平等、分享的服务宗旨，为企业及个人提供投融资理财服务，精益求精、关怀客户、注重体验，力求实现惠普金融。&lt;br/&gt;南方基金管理有限公司成立于1998年3月6日，为国内首批获中国证监会批准的三家基金管理公司之一，成为中国证券投资基金行业的起始标志。南方基金继发起、设立、管理国内首只证券投资基金之后，又首批获得全国社保基金投资管理人、企业年金基金投资管理人资格。目前，公司业务覆盖公募基金、全国社保基金、企业年金基金、一对一理财、一对多专户理财。公司管理着17只公募基金，4个全国社保基金组合，企业年金签约客户超过70家。公司管理的公募基金包括15只开放式基金和2只封闭式基金，覆盖股票、债券、保本、货币市场基金等各种风险收益。&lt;br/&gt;&lt;strong&gt;公司名称&lt;/strong&gt;&lt;br/&gt;南方基金管理有限公司外文名称China Southern Fund成立时间1998年3月6日经营范围证券投资基金公司口号一切为了客户，做受人敬重的理财专家员工数191人注册资本1.5亿元目录1 基金规模2 T+0业务3 企业文化4 投资理念5 人才培养6 企业大事表基金规模编辑公司注册资本1.5亿元，股东结构为：华泰证券股份有限公司(45%)，深圳市机场(集团)有限公司(30%)，厦门国际信托有限公司(15%)，兴业证券股份有限公司(10%)。公司从事基金的发起、发行、设立与管理业务，吸收、培养了一支高度专业化的人才队伍。公司现有员工190多人，硕士以上学历超过55%，近70%的员工具有5年以上证券从业经验，超过30%的员工具有海外学习与工作经验，成为公司持续快速发展的坚实基础。&lt;br/&gt;T+0业务编辑南方基金发布公告，自2012年11月28日起，该公司对电子直销网上交易客户开通货币基金“T+0”实时赎回业务。据南方基金官网公告显示，从11月28日起每个工作日的9:00至17:00，公司电子直南方基金销网上交易客户可将持有的货币基金实时赎回，资金可立即回到银行卡。该业务手续费全免，并支持工商银行、农业银行、中国银行、建设银行等20余家银行的银行卡。投资者每日实时赎回累计金额可达5万元人民币，每笔最低实时赎回金额100元，每日实时赎回累计可达3笔。[1] 企业文化编辑公司以“一切为了客户，做受人敬重的理财专家”为长期奋斗目标，坚持“专业、公司旗下公募基金产品线稳健、规范”的经营理念，“稳见未来”是南方基金的信条，以持续优秀的管理业绩、完善周到的客户服务，赢得了800多万客户的信赖，向基金持有人累计分红达到230亿元，资产管理规模超过2400亿元。(2007年12月)截止2008年12月31日，管理规模业内排名第四。投资理念编辑秉承&amp;quot;规范、稳健&amp;quot;的投资风格，本着&amp;quot;一流人才、一流管理、一流效益&amp;quot;的经营理念，南方基金管理有限公司以专业化经营、规范化管理运作基金资产，使基金业绩不断提高，为投资者创造了丰厚的回报，9年来南方基金管理公司旗下各基金累计向投资者分红超过200亿元。在长期的投资实践中，南方基金管理公司建立了一套与成熟、高效的投资决策、风险南方基金控制、研究支持、运作保障和市场拓展体系，为公司投资管理运作提供了强大的支持。人才培养编辑同时，南方基金管理有限公司吸收、培养了一支高度专业化的人才队伍。公司现有员工191人，其中硕士以上学历占55.3%，有近70%的员工有5年以上的证券从业经验，超过30%的员工有在海外学南方基金网站习和工作的经验，为公司的发展和规范运作带来了先进的经验和观念。&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;','',0,''),(5,19,0,60,'','为为贷理财平台','',1502270458,1502270458,'为为贷是东北地区首家专业的网络汽车借贷(P2P)平台，由沈阳尚合电子商务有限公司运营，公司成立于20...','&lt;p&gt;&lt;span style=&quot;font-family: 微软雅黑; font-size: 14px;&quot;&gt;为为贷是东北地区首家专业的网络汽车借贷(P2P)平台，由沈阳尚合电子商务有限公司运营，公司成立于2014年7月，立志为辽沈地区建立一个安全、规范、专业、诚信的网络借贷平台。公司团队由资深的互联网与金融行业团队组建，为广大投资理财者保驾护航。&lt;/span&gt;&lt;br/&gt;&lt;/p&gt;&lt;p&gt;&lt;span style=&quot;font-size:14px;&quot;&gt;&lt;span style=&quot;font-family:微软雅黑;&quot;&gt;为为贷专注于为个人与小微企业提供优质的借贷服务，立足沈阳，服务全东北，为为贷本着以以诚信为本，以客户为先的精神，整合行业资源，发展自身优势，在确保用户资金安全的前提下，努力进取，拼搏向上，让有资金需求的人能快速便捷的得到资金，让有投资意向的人安全高效的获得收益。继而推动多方合作，达成多方共赢的局面。&lt;br/&gt;为为贷拥有最安全的网络平台技术和最完善的风控体系，最大限度杜绝交易中可能出现的风险，让每一笔交易都在最安全的状态下进行，努力构建让所有投资理财者放心的网络借贷平台。&lt;br/&gt;为为贷将继续发扬&amp;quot;开拓、进取&amp;quot;的创业精神，在各行各业，各届朋友的热忱支持下取得更大的成就。 为用户带来最优秀的金融服务，为投资理财者建立安全、快捷的网络借贷平台，为为贷愿与您共同成长，共同构建网络借贷的美好明天，为您的未来保驾护航。&lt;br/&gt;管理团队&lt;br/&gt;林鹰-总经理&lt;br/&gt;1984年9月出生，福建省福清市人，现已定居辽宁沈阳，2008年毕业于爱尔兰都柏林城市大学(Dublin City Univercity)市场营销、心理学双学士学位。回国后从事民间借贷业务，在小额贷款、担保、典当、第三方支付行业有着丰富的从业经验，2013年7月创立为为贷，现担任总经理。&lt;br/&gt;孙旸旸-副总经理&lt;br/&gt;1982年2月出生，辽宁省沈阳市人，研究生学历。2006年毕业于辽宁大学公共事业管理专业，管理学学士;2010年毕业于辽宁大学行政管理专业，管理学硕士。毕业之初便投身金融行业，先后任职小额贷款公司、融资担保公司等准金融行业企业，担任行政、人事管理负责人，行政主管，办公室主任，董事会秘书。现任本公司副总经理。&lt;br/&gt;穆欣-风控总监&lt;br/&gt;1979年6月出生，辽宁省沈阳市人，本科学历。2004年毕业于沈阳大学计算机财务会计专业，2014年毕业于北京自修学院金融专业。毕业后在企业从事会计工作，之后在兴业银行及大连银行从事企业金融客户经理工作，具体负责与企业洽谈融资方案，帮助企业合理安排借款及对借款使用的监督，全面收集借款人资料，整理及上报审批，对借款后期的管理，风险的把控及分析。现任本公司风控总监。&lt;br/&gt;口号&lt;br/&gt;轻松借贷，投资无忧。&lt;br/&gt;目标&lt;br/&gt;立足辽沈，服务全国，为所有理财者提供最好的服务，最安全的平台，最高效的收益。&lt;br/&gt;服务理念&lt;br/&gt;让借贷人感到宾至如归，让投资者做到日进斗金。&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;','',0,'');
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
  `clink` varchar(255) NOT NULL DEFAULT '' COMMENT '指向链接',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=utf8 COMMENT='栏目表';

#
# Data for table "xz_category"
#

/*!40000 ALTER TABLE `xz_category` DISABLE KEYS */;
INSERT INTO `xz_category` VALUES (1,'关于',0,1,''),(2,'安全',0,2,''),(3,'服务',0,3,''),(4,'新手指引',0,4,''),(5,'公司简介',1,1,''),(6,'商务合作',1,2,''),(7,'团队故事',1,3,''),(8,'安全保障',2,1,''),(9,'风控体系',2,2,''),(10,'资金托管',2,3,''),(11,'电子保全',2,4,''),(12,'会员权益',3,1,''),(13,'帮助中心',3,2,''),(14,'资费说明',3,3,''),(15,'理财百科',3,4,''),(16,'找回密码',4,1,''),(17,'注册帐号',4,2,''),(18,'网站地图',4,3,''),(19,'P2P理财',15,1,''),(20,'网络理财',15,2,''),(21,'银行理财',15,3,''),(22,'信用卡',15,4,''),(23,'贷款',15,5,''),(24,'基金',15,6,''),(25,'资讯',15,7,'');
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
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COMMENT='导航表';

#
# Data for table "xz_nav"
#

/*!40000 ALTER TABLE `xz_nav` DISABLE KEYS */;
INSERT INTO `xz_nav` VALUES (3,'我要投资','Product/product','中间',1,0,2),(4,'信息披露','Index/about_us','中间',1,0,3),(5,'首页','/','中间',1,0,1),(6,'充值','javascript:loginWin();','顶部',1,1,1),(7,'帮助中心','/','顶部',1,0,2),(8,'小猪问答','/','顶部',1,0,3);
/*!40000 ALTER TABLE `xz_nav` ENABLE KEYS */;

#
# Structure for table "xz_photo"
#

DROP TABLE IF EXISTS `xz_photo`;
CREATE TABLE `xz_photo` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '相册id',
  `aid` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '关联id',
  `sortrank` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '排序',
  `imgsrc` varchar(200) NOT NULL DEFAULT '' COMMENT '图片地址',
  `imgtitle` varchar(255) NOT NULL DEFAULT '' COMMENT '图片标题',
  `img_link` varchar(255) NOT NULL DEFAULT '' COMMENT '链接地址',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='相册表';

#
# Data for table "xz_photo"
#

/*!40000 ALTER TABLE `xz_photo` DISABLE KEYS */;
INSERT INTO `xz_photo` VALUES (1,0,1,'/Uploads/photo/2017-08-04/598424f1cae1d.png','',''),(2,1,1,'/Uploads/photo/2017-08-09/598ab27c5ae56.png','','');
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
  PRIMARY KEY (`id`),
  KEY `凭证查询` (`session_ticket`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=utf8 COMMENT='session凭证表';

#
# Data for table "xz_session"
#

/*!40000 ALTER TABLE `xz_session` DISABLE KEYS */;
INSERT INTO `xz_session` VALUES (1,'f56bdb1a6536b045b9f9989659eef05d','1',1502158140,'0.0.0.0'),(2,'15ae1a6c3d1f6c5ca54f522fdb5ab1e0','1',1502158141,'0.0.0.0'),(3,'71bcd938a6d39150a7d99b5b045380b7','1',1502158142,'0.0.0.0'),(4,'ae1214af234352a7345d5b0b00968128','1',1502158143,'0.0.0.0'),(5,'1602ad3162e66e8901ac1af22e1170bd','1',1502159351,'0.0.0.0'),(6,'f61167a1ac37da6ca33922fd7c1fe78f','1',1502159352,'0.0.0.0'),(7,'ba13c0c32336472ec1f989158d4214e5','1',1502159353,'0.0.0.0'),(8,'6f23ea7fad44cfc917425ee0aee7eba0','1',1502159354,'0.0.0.0'),(9,'bd455c236ff2cf0b57e716782b1a89bc','1',1502159640,'0.0.0.0'),(10,'cfac3223d9e539bfe24db798f76d56b1','1',1502159641,'0.0.0.0'),(11,'f879a16600f7edafb89fb4f63556d399','1',1502159642,'0.0.0.0'),(12,'b381cf9bcc954b9c2f181ef7e7d5d67b','1',1502159643,'0.0.0.0'),(13,'b34a9566bc924cd10a3cdfd7746cee03','1',1502165430,'0.0.0.0'),(14,'9956a6bf4d388bac13357371c1f4e349','1',1502165431,'0.0.0.0'),(15,'60fdc683d66ced7c797b354d9573b134','1',1502165842,'0.0.0.0'),(16,'52d9b67b6d620ad245becba1058aaf39','1',1502166045,'0.0.0.0'),(17,'827630835f53799dbc745e0dce8f3030','1',1502166648,'0.0.0.0'),(18,'33c47d941eb31e2c33f700107d21be8f','1',1502164555,'0.0.0.0'),(19,'ed6ce04fbeb2cff0a6227b5bc7323cac','1',1502171688,'0.0.0.0'),(20,'86b1b13fe5a39d12495d97551857a9e0','1',1502172459,'0.0.0.0'),(21,'67be16163339f1162f20825032f55eda','1',1502172460,'0.0.0.0'),(22,'a148678139768f95b7f619872d838772','1',1502241142,'0.0.0.0'),(23,'cf00af4a003751848c3b410079721a0c','1',1502241308,'0.0.0.0');
/*!40000 ALTER TABLE `xz_session` ENABLE KEYS */;

#
# Structure for table "xz_smscod"
#

DROP TABLE IF EXISTS `xz_smscod`;
CREATE TABLE `xz_smscod` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `sms_ticket` varchar(6) NOT NULL DEFAULT '' COMMENT '短信凭证',
  `uid` varchar(255) NOT NULL COMMENT '用户uid',
  `expression` int(11) NOT NULL DEFAULT '0' COMMENT '过期时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='短信验证表';

#
# Data for table "xz_smscod"
#

/*!40000 ALTER TABLE `xz_smscod` DISABLE KEYS */;
/*!40000 ALTER TABLE `xz_smscod` ENABLE KEYS */;

#
# Structure for table "xz_specil"
#

DROP TABLE IF EXISTS `xz_specil`;
CREATE TABLE `xz_specil` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '专题id',
  `cat_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '所属栏目',
  `aid` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '所属文章',
  `title` char(100) NOT NULL DEFAULT '' COMMENT '专题标题',
  `litpic` char(100) NOT NULL DEFAULT '' COMMENT '缩略图',
  `description` tinytext COMMENT '描述',
  `body` text COMMENT '文章内容',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='专题表';

#
# Data for table "xz_specil"
#

/*!40000 ALTER TABLE `xz_specil` DISABLE KEYS */;
/*!40000 ALTER TABLE `xz_specil` ENABLE KEYS */;

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
