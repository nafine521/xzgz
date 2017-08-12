# Host: localhost  (Version: 5.5.53)
# Date: 2017-08-12 17:57:26
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
INSERT INTO `xz_admin` VALUES (1,'admin','21232f297a57a5a743894a0e4a801fc3','超级管理员',44,'127.0.0.1',1502528942);
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
) ENGINE=MyISAM AUTO_INCREMENT=36 DEFAULT CHARSET=utf8 COMMENT='管理员记录表';

#
# Data for table "xz_admin_jilu"
#

/*!40000 ALTER TABLE `xz_admin_jilu` DISABLE KEYS */;
INSERT INTO `xz_admin_jilu` VALUES (1,'admin','登录','127.0.0.1',1500320758),(2,'admin','登录','127.0.0.1',1500321592),(3,'admin','登录','127.0.0.1',1500345057),(4,'admin','登录','127.0.0.1',1500966505),(5,'admin','登录','127.0.0.1',1500971259),(6,'admin','登录','127.0.0.1',1500989316),(7,'admin','登录','127.0.0.1',1501403548),(8,'admin','登录','0.0.0.0',1501403562),(9,'admin','登录','0.0.0.0',1501404107),(10,'admin','登录','127.0.0.1',1501465005),(11,'admin','登录','0.0.0.0',1501465037),(12,'admin','退出','0.0.0.0',1501465144),(13,'admin','登录','0.0.0.0',1501465152),(14,'admin','登录','0.0.0.0',1501465183),(15,'admin','登录','0.0.0.0',1501465239),(16,'admin','登录','0.0.0.0',1501465321),(17,'admin','登录','0.0.0.0',1501465414),(18,'admin','登录','0.0.0.0',1501465585),(19,'admin','登录','0.0.0.0',1501465671),(20,'admin','登录','0.0.0.0',1501465689),(21,'admin','登录','127.0.0.1',1501551017),(22,'admin','登录','127.0.0.1',1501635971),(23,'admin','登录','127.0.0.1',1501660272),(24,'admin','登录','127.0.0.1',1501667081),(25,'admin','登录','127.0.0.1',1501722805),(26,'admin','登录','127.0.0.1',1501741933),(27,'admin','登录','127.0.0.1',1501808636),(28,'admin','登录','127.0.0.1',1501832165),(29,'admin','登录','127.0.0.1',1501897564),(30,'admin','登录','127.0.0.1',1502068608),(31,'admin','登录','127.0.0.1',1502240931),(32,'admin','登录','127.0.0.1',1502326262),(33,'admin','登录','127.0.0.1',1502441903),(34,'admin','登录','127.0.0.1',1502499493),(35,'admin','登录','127.0.0.1',1502528942);
/*!40000 ALTER TABLE `xz_admin_jilu` ENABLE KEYS */;

#
# Structure for table "xz_archives"
#

DROP TABLE IF EXISTS `xz_archives`;
CREATE TABLE `xz_archives` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '文章id',
  `cat_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '所属栏目',
  `class_id` varchar(255) NOT NULL DEFAULT '' COMMENT '文章类型',
  `sortrank` smallint(5) unsigned NOT NULL DEFAULT '0' COMMENT '排序权重',
  `click` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '点击率',
  `source` char(30) NOT NULL DEFAULT '' COMMENT '来源',
  `title` char(100) NOT NULL DEFAULT '' COMMENT '标题',
  `litpic` char(100) NOT NULL DEFAULT '' COMMENT '缩略图',
  `pubdate` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '更新时间',
  `senddate` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '发表时间',
  `description` tinytext NOT NULL COMMENT '描述',
  `body` text NOT NULL COMMENT '文章内容',
  `keyword` varchar(250) NOT NULL DEFAULT '' COMMENT '关键词',
  `refer` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '热门推荐',
  `topics_title` varchar(255) NOT NULL DEFAULT '' COMMENT '专题标题',
  `tags` varchar(255) NOT NULL DEFAULT '' COMMENT '文章标签',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COMMENT='文章表';

#
# Data for table "xz_archives"
#

/*!40000 ALTER TABLE `xz_archives` DISABLE KEYS */;
INSERT INTO `xz_archives` VALUES (1,1,'3',0,86,'','公司简介','',1502262877,1502248781,' 深圳市前海小猪互联网金融服务有限公司成立于2014年7月14日，注册资本3125万元，实缴资本312...','&lt;ul class=&quot;mt20 list-paddingleft-2&quot; style=&quot;list-style-type: none;&quot;&gt;&lt;li&gt;&lt;p&gt;深圳市前海小猪互联网金融服务有限公司成立于2014年7月14日，注册资本3125万元，实缴资本3125万元，注册地址为深圳市前海深港合作区前湾一路1号A栋201室。&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;小猪罐子（&lt;a target=&quot;_blank&quot; style=&quot;color: rgb(30, 174, 88); outline: none; font-weight: bold;&quot;&gt;www.xiaozhu168.com&lt;/a&gt;）为深圳市前海小猪互联网金融服务有限公司建立的网络借贷信息中介平台，于2014年8月15日正式上线，总部位于深圳。作为较早基于互联网的P2P网络借贷信息中介机构之一，小猪罐子频获行业殊荣，荣获11届金鼎奖“互联网金融安全示范单位”、互联网金融公益联盟首届会员单位等。&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;2017年1月，小猪罐子获得武汉光谷创业投资有限公司4000万元人民币A轮融资。&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;小猪罐子联系方式：400-882-5188。旗下移动APP应用、微信订阅号可通过扫描下方二维码进行下载和关注。&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;/li&gt;&lt;/ul&gt;','',0,'资质材料',''),(2,1,'3',0,86,'','高管团队','',1502248904,1502248904,'公司的核心成员均来自于银行、小额贷款、投资管理及电子商务等行业精英，具有金融行业和电子商务复合管理、...','&lt;ul class=&quot;mt20 list-paddingleft-2&quot; style=&quot;list-style-type: none;&quot;&gt;&lt;li&gt;&lt;p&gt;公司的核心成员均来自于银行、小额贷款、投资管理及电子商务等行业精英，具有金融行业和电子商务复合管理、实战经验，曾成功运营多个知名平台，从业背景深厚。想要了解更多的高管资料请点击&lt;a target=&quot;_blank&quot; style=&quot;color: rgb(30, 174, 88); outline: none;&quot;&gt;管理团队介绍&amp;gt;&amp;gt;&lt;/a&gt;&lt;/p&gt;&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;','',0,'',''),(3,19,'4',0,90,'','汇金公司是什么','',1502270272,1502270272,'看财经新闻的时候，经常会出现汇金公司增资，汇金公司减持等等词汇，很多人就好奇，中央汇金公司是？感觉很...','&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;p&gt;&lt;span style=&quot;font-size:14px;&quot;&gt;&lt;span style=&quot;font-family:微软雅黑;&quot;&gt;看财经新闻的时候，经常会出现汇金公司增资，汇金公司减持等等词汇，很多人就好奇，中央汇金公司是？感觉很牛逼的样子，投哪网小编就为大家介绍下汇金公司的背景资料。&lt;br/&gt;中央汇金投资有限责任公司（简称“中央汇金公司”），总部设在北京，是依据《中华人民共和国公司法》由国家出资设立的国有独资公司。根据国务院授权，代表国家依法行使对国有商业银行等重点金融企业出资人的权利和义务。&lt;br/&gt;汇金公司主要控股参股金融机构包括：&lt;br/&gt;1、 国家开发银行；&lt;br/&gt;2、中国进出口银行&lt;br/&gt;3、 中国工商银行股份有限公司；&lt;br/&gt;4、 中国农业银行股份有限公司；&lt;br/&gt;5、 中国银行股份有限公司；&lt;br/&gt;6、 中国建设银行股份有限公司；&lt;br/&gt;7、 中国光大银行股份有限公司；&lt;br/&gt;8、 中国再保险（集团）股份有限公司；&lt;br/&gt;9、 中国建银投资有限责任公司；&lt;br/&gt;10、 中国银河金融控股有限责任公司；&lt;br/&gt;11、申银万国证券股份有限公司；&lt;br/&gt;12、中信建投证券股份有限公司；&lt;br/&gt;13、国泰君安证券股份有限公司；&lt;br/&gt;14、新华人寿保险股份有限公司。&lt;br/&gt;2003年12月，承担着代表国家投资并持有国有商业银行等重点金融企业的股权，并代表国务院行使股东权利的汇金公司正式成立，注册资本2000亿美元。&lt;br/&gt;2007年9月，财政部发行特别国债，从中国人民银行购买汇金公司的全部股权，并将上述股权作为对中国投资有限责任公司(以下简称“中投公司”)出资的一部分，注入中投公司。自此，汇金公司被纳入中投公司旗下，与其海外投资平台实行严格的“防火墙”隔离制度。&lt;br/&gt;正是由于带有强烈政府意图的金融控股公司，汇金公司一举一动往往被猜测或过分解读其背后的市场信号。&lt;br/&gt;汇金公司虽然名为公司，但有观点认为它仍是政府机构，由于国资委不负责管理金融类国有资产，所以汇金公司被认为是“金融国资委”。此外，动用国家外汇储备用于国有企业因制度和机制的原因产生的亏损，也遭到部分学者专家的质疑，在程序上也有如吴敬琏等人认为汇金公司应取得人大财经委的授权。&lt;br/&gt;&amp;nbsp;&lt;br/&gt;【免责声明】融金宝理财发布的 汇金公司是什么 一文目的在于传播更多信息，与本网站立场无关。融金宝理财不保证该信息（包括但不限于文字、数据及图表）全部或者部分内容的准确性、真实性、完整性、有效性、及时性、原创性等。相关信息并未经过本网站证实，不对您构成任何投资建议，据此操作，风险自担。&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;','',1,'',''),(4,19,'4',0,77,'','惠投无忧怎么样','',1502270379,1502270379,'惠投无忧简介深圳前海皓能互联网服务有限公司(简称前海皓能)是深圳市赛为智能股份有限公司(股票代码：3...','&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;p&gt;&lt;img alt=&quot;&quot; src=&quot;https://www.xiaozhu168.com/upload/images/333_webp(13).jpg&quot; style=&quot;width: 600px; height: 400px;&quot;/&gt;&lt;/p&gt;&lt;p&gt;&lt;span style=&quot;font-size:14px;&quot;&gt;&lt;span style=&quot;font-family:微软雅黑;&quot;&gt;&lt;strong&gt;惠投无忧简介&lt;/strong&gt;&lt;br/&gt;深圳前海皓能互联网服务有限公司(简称前海皓能)是深圳市赛为智能股份有限公司(股票代码：300044)全资控股子公司，公司成立于2013年10月12日，注册资本2000万，致力于提供专业的全流程互联网金融服务，打造完善、安全、便捷、可信透明的互联网投融资平台——惠投无忧，为投资客户提供安全、稳健、高收益的互联网金融服务。&lt;br/&gt;前海皓能旗下惠投无忧创新投融资服务平台于2015年8月8号上线运营, 是国内真正引入信用保险和商业保理项目的专业P2B平台，依托赛为智能品牌资源、管理经验、研发技术等，携手第三方支付和资金托管平台，运用互联网高效、 透明、便捷优势，推出保理、融资租赁、供应链金融等业务板块，满足企业和个人资金的资金融通需求，实现财富安全、高效益地增值。&lt;br/&gt;惠投无忧以国内巨大的应收账款市场为依托，颠覆业内以抵押和担保为主要风控手段模式，重视融资方真实的交易背景、信用记录和财务状况、应收账款管理体系以及产品品质等指标。惠投无忧以健全的风险管控体系为基础、专业化和结构化的产品设计为核心，构建安全、稳定、规范、透明的投融资互联网金融信息服务平台。公司现已荣获中国电子商务协会可信网站认证公司，核心创始团队拥有丰富的金融业、互联网和第三方支付背景及经验沉淀，在产品、技术、业务和风控等方面皆有出色表现，公司专心、专注于创建安全、稳定、便捷、可信透明的投融资服务平台，力争成为中国最具影响力的互联网金融服务公司之一，我们将以透明、公开、平等、分享的服务宗旨，为企业及个人提供投融资理财服务，精益求精、关怀客户、注重体验，力求实现惠普金融。&lt;br/&gt;南方基金管理有限公司成立于1998年3月6日，为国内首批获中国证监会批准的三家基金管理公司之一，成为中国证券投资基金行业的起始标志。南方基金继发起、设立、管理国内首只证券投资基金之后，又首批获得全国社保基金投资管理人、企业年金基金投资管理人资格。目前，公司业务覆盖公募基金、全国社保基金、企业年金基金、一对一理财、一对多专户理财。公司管理着17只公募基金，4个全国社保基金组合，企业年金签约客户超过70家。公司管理的公募基金包括15只开放式基金和2只封闭式基金，覆盖股票、债券、保本、货币市场基金等各种风险收益。&lt;br/&gt;&lt;strong&gt;公司名称&lt;/strong&gt;&lt;br/&gt;南方基金管理有限公司外文名称China Southern Fund成立时间1998年3月6日经营范围证券投资基金公司口号一切为了客户，做受人敬重的理财专家员工数191人注册资本1.5亿元目录1 基金规模2 T+0业务3 企业文化4 投资理念5 人才培养6 企业大事表基金规模编辑公司注册资本1.5亿元，股东结构为：华泰证券股份有限公司(45%)，深圳市机场(集团)有限公司(30%)，厦门国际信托有限公司(15%)，兴业证券股份有限公司(10%)。公司从事基金的发起、发行、设立与管理业务，吸收、培养了一支高度专业化的人才队伍。公司现有员工190多人，硕士以上学历超过55%，近70%的员工具有5年以上证券从业经验，超过30%的员工具有海外学习与工作经验，成为公司持续快速发展的坚实基础。&lt;br/&gt;T+0业务编辑南方基金发布公告，自2012年11月28日起，该公司对电子直销网上交易客户开通货币基金“T+0”实时赎回业务。据南方基金官网公告显示，从11月28日起每个工作日的9:00至17:00，公司电子直南方基金销网上交易客户可将持有的货币基金实时赎回，资金可立即回到银行卡。该业务手续费全免，并支持工商银行、农业银行、中国银行、建设银行等20余家银行的银行卡。投资者每日实时赎回累计金额可达5万元人民币，每笔最低实时赎回金额100元，每日实时赎回累计可达3笔。[1] 企业文化编辑公司以“一切为了客户，做受人敬重的理财专家”为长期奋斗目标，坚持“专业、公司旗下公募基金产品线稳健、规范”的经营理念，“稳见未来”是南方基金的信条，以持续优秀的管理业绩、完善周到的客户服务，赢得了800多万客户的信赖，向基金持有人累计分红达到230亿元，资产管理规模超过2400亿元。(2007年12月)截止2008年12月31日，管理规模业内排名第四。投资理念编辑秉承&amp;quot;规范、稳健&amp;quot;的投资风格，本着&amp;quot;一流人才、一流管理、一流效益&amp;quot;的经营理念，南方基金管理有限公司以专业化经营、规范化管理运作基金资产，使基金业绩不断提高，为投资者创造了丰厚的回报，9年来南方基金管理公司旗下各基金累计向投资者分红超过200亿元。在长期的投资实践中，南方基金管理公司建立了一套与成熟、高效的投资决策、风险南方基金控制、研究支持、运作保障和市场拓展体系，为公司投资管理运作提供了强大的支持。人才培养编辑同时，南方基金管理有限公司吸收、培养了一支高度专业化的人才队伍。公司现有员工191人，其中硕士以上学历占55.3%，有近70%的员工有5年以上的证券从业经验，超过30%的员工有在海外学南方基金网站习和工作的经验，为公司的发展和规范运作带来了先进的经验和观念。&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;','',1,'',''),(5,19,'4',0,60,'','为为贷理财平台','',1502503205,1502270458,' 为为贷是东北地区首家专业的网络汽车借贷(P2P)平台，由沈阳尚合电子商务有限公司运营，公司成立于20...','&lt;p&gt;&lt;span style=&quot;font-family: 微软雅黑; font-size: 14px;&quot;&gt;为为贷是东北地区首家专业的网络汽车借贷(P2P)平台，由沈阳尚合电子商务有限公司运营，公司成立于2014年7月，立志为辽沈地区建立一个安全、规范、专业、诚信的网络借贷平台。公司团队由资深的互联网与金融行业团队组建，为广大投资理财者保驾护航。&lt;/span&gt;&lt;br/&gt;&lt;/p&gt;&lt;p&gt;&lt;span style=&quot;font-size:14px;&quot;&gt;&lt;span style=&quot;font-family:微软雅黑;&quot;&gt;为为贷专注于为个人与小微企业提供优质的借贷服务，立足沈阳，服务全东北，为为贷本着以以诚信为本，以客户为先的精神，整合行业资源，发展自身优势，在确保用户资金安全的前提下，努力进取，拼搏向上，让有资金需求的人能快速便捷的得到资金，让有投资意向的人安全高效的获得收益。继而推动多方合作，达成多方共赢的局面。&lt;br/&gt;为为贷拥有最安全的网络平台技术和最完善的风控体系，最大限度杜绝交易中可能出现的风险，让每一笔交易都在最安全的状态下进行，努力构建让所有投资理财者放心的网络借贷平台。&lt;br/&gt;为为贷将继续发扬&amp;quot;开拓、进取&amp;quot;的创业精神，在各行各业，各届朋友的热忱支持下取得更大的成就。 为用户带来最优秀的金融服务，为投资理财者建立安全、快捷的网络借贷平台，为为贷愿与您共同成长，共同构建网络借贷的美好明天，为您的未来保驾护航。&lt;br/&gt;管理团队&lt;br/&gt;林鹰-总经理&lt;br/&gt;1984年9月出生，福建省福清市人，现已定居辽宁沈阳，2008年毕业于爱尔兰都柏林城市大学(Dublin City Univercity)市场营销、心理学双学士学位。回国后从事民间借贷业务，在小额贷款、担保、典当、第三方支付行业有着丰富的从业经验，2013年7月创立为为贷，现担任总经理。&lt;br/&gt;孙旸旸-副总经理&lt;br/&gt;1982年2月出生，辽宁省沈阳市人，研究生学历。2006年毕业于辽宁大学公共事业管理专业，管理学学士;2010年毕业于辽宁大学行政管理专业，管理学硕士。毕业之初便投身金融行业，先后任职小额贷款公司、融资担保公司等准金融行业企业，担任行政、人事管理负责人，行政主管，办公室主任，董事会秘书。现任本公司副总经理。&lt;br/&gt;穆欣-风控总监&lt;br/&gt;1979年6月出生，辽宁省沈阳市人，本科学历。2004年毕业于沈阳大学计算机财务会计专业，2014年毕业于北京自修学院金融专业。毕业后在企业从事会计工作，之后在兴业银行及大连银行从事企业金融客户经理工作，具体负责与企业洽谈融资方案，帮助企业合理安排借款及对借款使用的监督，全面收集借款人资料，整理及上报审批，对借款后期的管理，风险的把控及分析。现任本公司风控总监。&lt;br/&gt;口号&lt;br/&gt;轻松借贷，投资无忧。&lt;br/&gt;目标&lt;br/&gt;立足辽沈，服务全国，为所有理财者提供最好的服务，最安全的平台，最高效的收益。&lt;br/&gt;服务理念&lt;br/&gt;让借贷人感到宾至如归，让投资者做到日进斗金。&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;','',1,'',''),(6,0,'1',0,91,'','网站服务协议','',1502503471,1502503471,'小猪罐子网络平台服务协议为开展互联网金融业务、便利用户（投资者）操作，深圳市前海小猪互联网金融服务有...','&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal; text-align: center;&quot;&gt;&lt;strong&gt;小猪罐子网络平台服务协议&lt;/strong&gt;&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;为开展互联网金融业务、便利用户（投资者）操作，深圳市前海小猪互联网金融服务有限公司（下称“小猪罐子”）注册域名http://www.xiaozhu168.com（下称“网络平台”）为用户提供网络金融服务。本网站由小猪罐子运营和管理。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;为保障用户的合法权益，明确各方权利义务，根据我国相关法律、法规的规定，小猪罐子拟定小猪罐子网络平台服务协议（下称“本协议”）。用户在自愿注册使用小猪罐子服务前，应当认真、仔细阅读本协议所有条款，如用户对协议条款有疑问，请咨询专业人士的意见。如果用户不接受或不同意本协议项下任何条款，请立即停止注册或主动停止使用本网站的服务。一旦在本网站注册成功并取得用户身份，将视为用户已经完全理解和接受本协议全部内容。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;如用户对电子合同有任何疑问，请联系小猪罐子客服人员。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;&lt;strong&gt;一、本协议的组成及生效&lt;/strong&gt;&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;1.本协议包括本协议项下条款、小猪罐子已经发布的或将来可能发布的各类规定、指引和规则。该等规定、指引和规则为本协议不可分割的组成部分，与本协议具有同等法律效力。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;2.用户在点击确认本协议后，视为用户同意本协议并签署本协议。用户完成网络平台规定的注册程序成为注册用户后，本协议即行生效，在用户和小猪罐子之间发生法律约束力。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;3.本协议不适用不同用户之间的法律关系。但用户在此同意将全面接受和履行与小猪罐子其他用户在小猪罐子签订的任何电子法律文本，并承诺按该法律文本享有和/或放弃相应的权利、承担和/或豁免相应的义务。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;4.如有必要，小猪罐子有权适时单方面变更本协议的内容或各类规定、指引和规则，并在小猪罐子网络平台发布最新协议条款及各类规则，小猪罐子将不通过其他方式进行通知用户。变更后的协议和规则自网络平台公布之时生效。如用户不接受相关变更后的条款或规则，应当立即停止使用小猪罐子网络平台，如用户继续使用网络平台的，即视为用户接受变更后的协议条款和规则。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;5.小猪罐子网络平台上的投融资合同采用电子合同方式订立，在用户投资成功后将自动生成。用户通过前述方式订立的电子合同对合同各方具有法律约束力。用户应当妥善保管账户、账号、密码及其他信息，用户不得以其账户、账号、密码等账户信息被盗用、被他人借用等理由否认合同的效力或拒不履行合同项下义务。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;&lt;strong&gt;二、小猪罐子网络平台服务&lt;/strong&gt;&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;1.小猪罐子通过网络平台线上方式和实体线下方式向用户提供居间服务，用户在网络平台注册账户后即可享受小猪罐子提供的服务，包括网络平台线上服务及线下实体服务。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;2.小猪罐子致力于为投资人提供理财服务、为融资人提供融资服务，为投融资双方搭建安全、透明、高效的投融资网络交易平台。通过小猪罐子提供的网络平台服务和线下实体服务，用户可发布融资需求、在网络平台上查阅投融资交易机会、提交资料、签订合同、查阅已签订合同、参加小猪罐子组织的活动以及享受其它信息服务及技术服务。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;3.用户通过小猪罐子网络平台发出、确认的交易指令为不可撤销指令，小猪罐子将按照用户发出的交易指令进行相关交易或操作。小猪罐子将按用户发出指令内容及小猪罐子服务纠纷处理规则对交易事项进行处理。如果用户未及时对交易状态进行修改或确认或未能及时提交相关申请所造成的损失由用户自行承担。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;4.小猪罐子仅为通过网络平台认证的用户提供服务，如用户未能完成认证而无法享受相应服务造成的损失，小猪罐子不承担任何法律责任。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;&lt;strong&gt;三、服务费用&lt;/strong&gt;&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;1.用户使用小猪罐子网络平台服务时，小猪罐子可能会向用户收取相关服务费用，小猪罐子将在网络平台公示收费方式和标准，具体数额以双方另行签订的协议为准。小猪罐子有单方面制定和调整服务收费标准的权利。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;2.除非另有约定或规定，用户同意小猪罐子有权直接从用户委托小猪罐子代管、代收或代付的款项中直接扣除上述服务费用而无需用户另外授权或同意。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;3.用户在使用小猪罐子网络平台服务过程中（如充值或提现等）可能需要向第三方（如银行或第三方支付公司等）支付费用，具体收费标准详见第三方网站相关页面或小猪罐子网站的提示。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;&lt;strong&gt;四、用户要求及行为限制&lt;/strong&gt;&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;1.在网络平台注册并使用小猪罐子网络平台服务的自然人用户应当具有完全民事权利和民事行为能力，法人用户在网络平台注册和使用网络平台服务应当获得必要的授权。如用户不符合前述条件，请勿注册，如导致不利后果的，小猪罐子将追究就用户监护人和代理人的法律责任，且小猪罐子有权注销（永久冻结）用户的账户。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;2.用户在注册及使用网络平台服务时，应当按照注册页面的提示准确填写用户真实信息（包括但不限于用户真实姓名（名称）、联系电话、联系地址、电子邮箱等信息），如注册信息发生变更的应当及时更新用户资料。用户承诺向小猪罐子网络平台提供的信息和资料是真实、准确、完整、有效和合法的，提供的复印件与原件一致。若因用户填写的联系方式错误无法正常联系，导致用户在使用小猪罐子平台服务过程中产生任何损失或增加费用的，应由用户自行承担。如小猪罐子有合理理由认为用户提供的资料错误、虚假、过时或残缺的，小猪罐子有权向用户发出询问或要求改正的通知，并有权删除虚假资料，或中止、终止对用户提供部分或全部网络平台服务。小猪罐子对此不承担任何责任，用户将自行承担因此造成的损失。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;3.用户在成功注册为网络平台用户后，应当妥善保管用户名和密码，不得将用户名转让、赠与或授权给第三方使用，并承诺如下事项：&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;（1）不泄露账户或密码，不使用他人的账户或密码。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;（2）对注册账户及密码进行操作行为承担全部责任。小猪罐子将通过用户的账户和密码识别用户的交易指令，在用户的账户下发出的一切指令均视为用户本人的意思表示和行为，该等指令一经发出就不可撤销，由此产生的一切责任和后果由用户本人承担，小猪罐子不承担任何责任。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;（3）使用、盗用、冒用他人账户或密码的，自愿向小猪罐子或其他权利人承担法律责任。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;4.用户发现有他人冒用或盗用其账户及密码或从事任何其他未经授权行为的，用户应立即以有效方式通知小猪罐子，要求小猪罐子暂停账户使用。用户知晓并理解，小猪罐子受理用户的请求后采取行动需要合理时间，在此期间，小猪罐子对已执行的指令及(或)用户遭受的损失不承担任何赔偿责任。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;5.用户在使用网络平台时应当遵守国家法律、法规、有关部门的规定及小猪罐子网络平台规则，不得通过网络平台从事非法行为（包括洗钱等），也不以任何非法方式使用网络平台。如用户违反上述规定，所产生的一切法律责任和后果全部由用户承担，给小猪罐子或网络平台造成损失的，由用户赔偿所有损失。小猪罐子有权将用户违法违规行为及有关信息资料进行公示、录入用户信用档案、按照法律法规的规定提供给有关政府部门或按照有关协议约定提供给第三方。用户不得利用网络平台从事侵害他人合法权益之行为，否则小猪罐子有权终止提供服务，且有权要求用户承担所有相关法律责任。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;6.为保障用户的账户及资金安全，根据协议的约定和相关法律法规，或应司法机关或行政机关的命令或要求，或小猪罐子认为用户的注册账户可能遭受风险，小猪罐子有权对用户的注册账户进行冻结，暂时关闭或限制该账户部分或全部操作权限。小猪罐子有权了解用户使用小猪罐子产品或服务的交易背景及目的，用户应当如实、全面、准确提供小猪罐子所需信息。如果小猪罐子有合理理由怀疑用户提供虚假交易信息的，小猪罐子有权暂时或永久限制用户使用网络平台。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;&lt;strong&gt;五、用户信息的使用与披露&lt;/strong&gt;&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;1.用户同意，为向用户提供服务所需之目的，小猪罐子有权自行收集的用户个人信息和资料，小猪罐子有权按照本协议的约定使用或者披露。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;2.为履行协议、解决争议、调停纠纷、保障本网站用户交易安全等目，用户授权小猪罐子使用其个人资料（包括但不限于用户自行提供以及小猪罐子在信用审查中所获取的其他资料）。小猪罐子有权调查多个用户以识别问题或解决争议，小猪罐子有权审查用户的资料、判定用户是否使用多个用户名或别名。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;3.为防止用户通过网络平台从事诈骗等违反犯罪活动，保护小猪罐子及其正常用户合法权益，用户授权小猪罐子通过人工或自动程序对用户的个人资料进行评价和衡量。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;4.小猪罐子有义务根据有关法律、法规、规章及其他政府规范性文件的要求向司法机关、行政机关、行业组织等提供用户的个人资料及交易信息。在用户未能按照规定和约定履行义务时，小猪罐子有权将用户提交或自行收集的用户信息、违约事实等通过网络、报刊、电视等方式对公众披露，小猪罐子有权将用户提交或自行收集的用户资料和信息与第三方数据共享，以便对用户的其他申请进行审核。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;5.小猪罐子将遵守国家法律和法规的规定、采用采用行业标准及惯例保护用户信息。非因小猪罐子过错导致用户信息泄露的，小猪罐子不承担任何法律责任。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;6.用户授权小猪罐子使用用户的个人资料用以网络平台的推广和促销工作、分析网络平台的使用率、完善网络平台的内容和服务，增强网络平台的服务功能。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;7.用户授权小猪罐子通过在网络平台在特定网页上使用诸如“Cookies”的设置收集用户信息并进行分析研究，以提升用户服务的契合度。小猪罐子有权向用户传递针对用户的兴趣而提供的信息，包括有针对性的广告条、行政管理方面的通知、产品提供以及有关用户使用网络平台的通讯，用户接受服务协议即为明示同意接受这些资料。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;&lt;strong&gt;六、知识产权&lt;/strong&gt;&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;1.小猪罐子网络平台中的全部内容的知识产权（商标权、专利权、著作权）均属于本网站所有，该等内容包括但不限于文本、数据、源代码、软件、图片、平台架构、平台画面的安排、网页设计及其他全部信息（以下称“网络平台内容”）。但法律另有规定或当事人另有约定的除外。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;2.网络平台内容受《中华人民共和国著作权法》以及其他知识产权法律、法规和国际条约的保护。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;3.未经小猪罐子书面授权，任何人擅自使用、修改、复制、公开传播、改变、散布、发行或公开发表网络平台的程序或内容都属于违法行为，小猪罐子将追究行为人的法律责任。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;&lt;strong&gt;七、风险揭示&lt;/strong&gt;&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;1.违规操作风险。用户在在使用网络平台时，如用户不遵从本协议条款、网站说明、交易页面中操作提示、规则，则小猪罐子有权拒绝为用户提供相关服务。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;2.因用户的过错或不当行为导致的损失由用户自行承担，该等过错包括但不限于：决策失误、操作不当、遗忘或泄漏密码、密码被他人盗用、用户的计算机被第三方侵入。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;3.交易对手违约风险。因交易对手不能按时履行偿付义务，用户有可能遭受损失。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;4.不可抗力及其他因素导致的风险。任何投资，均存在不可预见的风险，请用户根据个人的风险偏好及风险承受能力谨慎做出交易决策。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;&lt;strong&gt;八、责任范围、责任限制及责任免除&lt;/strong&gt;&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;（一）责任范围和责任限制&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;1.小猪罐子仅对本协议中所明示的事项承担责任。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;2.小猪罐子将竭力为用户选择优质的第三方服务供应商，但不对第三方服务供应商提供的服务承担瑕疵担保责任或过错赔偿责任。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;3.用户经由网络平台下载或取得任何资料，用户应当自担风险，因资料下载而导致用户电脑系统损坏或资料流失，用户自行承担后果。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;4.用户从网络平台及小猪罐子工作人员取得的建议和资讯，无论其为书面或口头形式，均不构成小猪罐子对服务的保证。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;5.除非本协议另有约定，小猪罐子在本协议项下对用户所承担的违约责任、赔偿责任以用户支付的当次服务费用为限。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;6、小猪罐子不保证除小猪罐子网络平台以外的任何第三方网站上信息的真实性和合法性，无论该第三方网站是否通过小猪罐子予以链接、推广。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;（二）免责条款&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;1.鉴于互联网技术的特殊性，小猪罐子无法保证网络平台的持续运营，网络平台因出现下列状况无法正常运作，使用户无法使用各项服务时，小猪罐子不承担损害赔偿责任，有关损失由用户自己承担。该状况包括但不限于：&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;（1）系统停机维护且经网络平台预先公告的；&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;（2）电信设备出现故障不能进行数据传输的；&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;（3）因台风、地震、海啸、洪水、停电、战争、恐怖袭击等不可抗力之因素，造成网络平台障碍不能提供服务的；&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;（4）由于黑客攻击、电信部门技术调整或故障、网站升级、银行方面的问题等原因而造成的网络平台服务中断或者延迟。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;2.交易异常认可。用户使用网络平台时同意并认可，可能由于银行系统问题、银行相关作业网络连线问题或其他不可抗拒因素，造成网络平台服务无法提供。用户应当确保所输入的用户资料准确无误，如果因资料错误造成小猪罐子在网络平台发生异常而无法及时通知用户相关交易后续处理程序的，小猪罐子不承担任何损害赔偿责任。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;3.小猪罐子作为第三方中介平台，不对任何注册用户和交易方提交的信息和行为提供担保。用户应当自行评估风险承受能力、评判交易对手信息的真实性和可靠性、判断交易对手的履约能力。用户在网络平台交易所发生直接和间接损失，均由用户自行承担。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;&lt;strong&gt;九、协议终止&lt;/strong&gt;&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;1.如因客观原因或正当事由，小猪罐子无需事先通知即可终止网络平台服务，并暂停、关闭或删除账户及用户账号中所有相关资料及档案，并将用户滞留在该账户的全部合法资金退回到用户的银行账户。如有关操作对用户造成损失的，小猪罐子不承担任何责任。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;2.用户有权向小猪罐子申请注销用户的账户。用户决定不再使用个人账号时，应首先清偿所有应付款项（包括但不限于本金、利息、违约金、服务费、管理费等），再将个人账号下所对应的可用款项（如有）全部提现或者向小猪罐子发出其它合法的支付指令，并向小猪罐子申请注销（永久冻结）该账号，经小猪罐子审核同意后可正式注销该账户。届时，用户与小猪罐子的合同关系终止。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;3.用户的账户被注销（永久冻结）后，小猪罐子没有义务为用户保留或向用户披露用户账户中的任何信息，也没有义务向用户或第三方转发任何用户未曾阅读或发送过的信息。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;4.用户同意，用户与小猪罐子的合同关系终止后，小猪罐子仍享有下列权利：&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;（1）继续保存用户的注册信息及用户使用小猪罐子服务期间的其他相关信息。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;（2）用户在使用小猪罐子服务期间存在违法行为或违反本协议和/或规则的行为的，由此产生的违约或者损害赔偿责任，小猪罐子仍可依据本协议向用户主张权利。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;&lt;strong&gt;十、特别约定&lt;/strong&gt;&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;1.小猪罐子不为用户提供“资金管理服务”，用户资金由小猪罐子指定的第三方支付平台“汇付天下”等进行托管。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;2.出借人和借款人委托并授权小猪罐子，根据网络平台交易规则向“汇付天下”发送指令，冻结、扣划、结算资金账户里的资金。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;3.用户参与网络平台上的项目投标，一旦项目满标，即视为用户委托、授权小猪罐子将其在汇付天下账户中的对应投标金额的资金向借款人划拨。在借款人汇付天下注册资金账户收到相应借款则视为借款合同生效。借款人在还款到期前，将当期应还本金、利息以其他费用充值到借款人在“汇付天下”开设的账户，即视为自动委托小猪罐子扣划应还本金、利息到出借人在“汇付天下”的资金账户，出借人资金账户收到相应还款则视为已履行还款义务。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;4.借款期限和利率等事项，由小猪罐子网络平台自动生成的电子借款协议予以确定，协议各方均认可电子协议的法律效力。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;&lt;strong&gt;十一、条文的解释及争议解决&lt;/strong&gt;&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;1.对本协议条款的理解发生争议时，由小猪罐子按照法律规定对进行解释。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;2.本协议的效力、签订、履行、变更、终止、解释和争议解决均适用中国法律。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;3.本协议部分条款被认定为无效时，不影响本协议其他条款的效力&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;4.因本协议产生的任何争议，首先应由双方友好协商解决，协商不能解决的，由广东省深圳市南山区人民法院管辖。&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;（以下无正文）&lt;/p&gt;&lt;p style=&quot;font-family: SimSun; font-size: 12px; white-space: normal;&quot;&gt;&amp;nbsp;&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;','',0,'','');
/*!40000 ALTER TABLE `xz_archives` ENABLE KEYS */;

#
# Structure for table "xz_article_class"
#

DROP TABLE IF EXISTS `xz_article_class`;
CREATE TABLE `xz_article_class` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` char(100) NOT NULL DEFAULT '' COMMENT '分类名称',
  `pid` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '上级分类',
  `sort` int(11) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COMMENT='文章分类表';

#
# Data for table "xz_article_class"
#

/*!40000 ALTER TABLE `xz_article_class` DISABLE KEYS */;
INSERT INTO `xz_article_class` VALUES (1,'服务条款',0,0),(2,'理财百科',0,0),(3,'关于我们',0,0),(4,'特征',2,0),(5,'网络理财',2,0),(6,'银行理财',2,0),(7,'信用卡',2,0),(8,'贷款',2,0),(9,'基金',2,0),(10,'资讯',2,0);
/*!40000 ALTER TABLE `xz_article_class` ENABLE KEYS */;

#
# Structure for table "xz_attribute"
#

DROP TABLE IF EXISTS `xz_attribute`;
CREATE TABLE `xz_attribute` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `pid` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '父键',
  `name` varchar(20) NOT NULL DEFAULT '' COMMENT '名称',
  `sort` mediumint(8) unsigned NOT NULL DEFAULT '0' COMMENT '排序',
  `tips` varchar(255) NOT NULL DEFAULT '' COMMENT '简短提示',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='属性标签表';

#
# Data for table "xz_attribute"
#

/*!40000 ALTER TABLE `xz_attribute` DISABLE KEYS */;
INSERT INTO `xz_attribute` VALUES (1,4,'本金+利息',0,'若借款出现逾期，<br />由合作机构对投资人本息进行全额垫付。'),(2,4,'T(成交日)+1天',0,'成交次日开始计息'),(3,4,'按月付息到期还本',0,'从起息日开始计算，满一个月返还一期利息'),(4,0,'特征',0,'');
/*!40000 ALTER TABLE `xz_attribute` ENABLE KEYS */;

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

INSERT INTO `xz_member_level` VALUES (47,'普通会员',0,1.00,'',1,0,0,2);

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
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COMMENT='导航表';

#
# Data for table "xz_nav"
#

/*!40000 ALTER TABLE `xz_nav` DISABLE KEYS */;
INSERT INTO `xz_nav` VALUES (3,'我要投资','/index/product','中间',1,0,2),(4,'信息披露','/index/about_us','中间',1,0,3),(5,'首页','/','中间',1,0,1),(6,'充值','javascript:loginWin();','顶部',1,1,1),(7,'帮助中心','/','顶部',1,0,2),(8,'小猪问答','/','顶部',1,0,3),(9,'理财百科','/index/baike','中间',1,0,4);
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
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='相册表';

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
# Structure for table "xz_project"
#

DROP TABLE IF EXISTS `xz_project`;
CREATE TABLE `xz_project` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `aid` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '关联内容id',
  `type_id` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '项目类型',
  `attr_id` varchar(100) NOT NULL DEFAULT '0' COMMENT '项目属性',
  `name` char(100) NOT NULL DEFAULT '' COMMENT '名称',
  `expression` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '项目周期',
  `exp_start` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '开始时间',
  `exp_stop` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '结束时间',
  `annual_income` double(6,2) NOT NULL DEFAULT '0.00' COMMENT '年化收益',
  `item_totle` double(6,2) NOT NULL DEFAULT '0.00' COMMENT '项目总额',
  `surplus` double(6,2) NOT NULL DEFAULT '0.00' COMMENT '剩余',
  `description` varchar(1000) NOT NULL DEFAULT '' COMMENT '简介',
  `item_status` tinyint(4) NOT NULL DEFAULT '0' COMMENT '0 未上线 1上线中 2 已完成',
  `litpic` varchar(255) NOT NULL DEFAULT '' COMMENT '项目缩略图',
  `keywords` varchar(255) NOT NULL DEFAULT '' COMMENT '关键字',
  `body` text NOT NULL COMMENT '项目内容',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='项目表';

#
# Data for table "xz_project"
#

/*!40000 ALTER TABLE `xz_project` DISABLE KEYS */;
/*!40000 ALTER TABLE `xz_project` ENABLE KEYS */;

#
# Structure for table "xz_project_type"
#

DROP TABLE IF EXISTS `xz_project_type`;
CREATE TABLE `xz_project_type` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `pid` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '父键',
  `name` varchar(20) NOT NULL DEFAULT '' COMMENT '名称',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='项目类型表';

#
# Data for table "xz_project_type"
#

/*!40000 ALTER TABLE `xz_project_type` DISABLE KEYS */;
INSERT INTO `xz_project_type` VALUES (1,0,'新手团'),(2,0,'双月盈 ');
/*!40000 ALTER TABLE `xz_project_type` ENABLE KEYS */;

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
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=utf8 COMMENT='session凭证表';

#
# Data for table "xz_session"
#

/*!40000 ALTER TABLE `xz_session` DISABLE KEYS */;
INSERT INTO `xz_session` VALUES (1,'f56bdb1a6536b045b9f9989659eef05d','1',1502158140,'0.0.0.0'),(2,'15ae1a6c3d1f6c5ca54f522fdb5ab1e0','1',1502158141,'0.0.0.0'),(3,'71bcd938a6d39150a7d99b5b045380b7','1',1502158142,'0.0.0.0'),(4,'ae1214af234352a7345d5b0b00968128','1',1502158143,'0.0.0.0'),(5,'1602ad3162e66e8901ac1af22e1170bd','1',1502159351,'0.0.0.0'),(6,'f61167a1ac37da6ca33922fd7c1fe78f','1',1502159352,'0.0.0.0'),(7,'ba13c0c32336472ec1f989158d4214e5','1',1502159353,'0.0.0.0'),(8,'6f23ea7fad44cfc917425ee0aee7eba0','1',1502159354,'0.0.0.0'),(9,'bd455c236ff2cf0b57e716782b1a89bc','1',1502159640,'0.0.0.0'),(10,'cfac3223d9e539bfe24db798f76d56b1','1',1502159641,'0.0.0.0'),(11,'f879a16600f7edafb89fb4f63556d399','1',1502159642,'0.0.0.0'),(12,'b381cf9bcc954b9c2f181ef7e7d5d67b','1',1502159643,'0.0.0.0'),(13,'b34a9566bc924cd10a3cdfd7746cee03','1',1502165430,'0.0.0.0'),(14,'9956a6bf4d388bac13357371c1f4e349','1',1502165431,'0.0.0.0'),(15,'60fdc683d66ced7c797b354d9573b134','1',1502165842,'0.0.0.0'),(16,'52d9b67b6d620ad245becba1058aaf39','1',1502166045,'0.0.0.0'),(17,'827630835f53799dbc745e0dce8f3030','1',1502166648,'0.0.0.0'),(18,'33c47d941eb31e2c33f700107d21be8f','1',1502164555,'0.0.0.0'),(19,'ed6ce04fbeb2cff0a6227b5bc7323cac','1',1502171688,'0.0.0.0'),(20,'86b1b13fe5a39d12495d97551857a9e0','1',1502172459,'0.0.0.0'),(21,'67be16163339f1162f20825032f55eda','1',1502172460,'0.0.0.0'),(22,'a148678139768f95b7f619872d838772','1',1502241142,'0.0.0.0'),(23,'cf00af4a003751848c3b410079721a0c','1',1502241308,'0.0.0.0'),(24,'704271d09c293938d7554da38877eb97','1',1502442644,'0.0.0.0'),(25,'652de70dffe60218cf54a3d01d8faeff','1',1502507790,'0.0.0.0');
/*!40000 ALTER TABLE `xz_session` ENABLE KEYS */;

#
# Structure for table "xz_smscod"
#

DROP TABLE IF EXISTS `xz_smscod`;
CREATE TABLE `xz_smscod` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `sms_ticket` varchar(8) NOT NULL DEFAULT '' COMMENT '短信凭证',
  `return_state` varchar(255) NOT NULL COMMENT '短信返回记录',
  `expression` int(11) NOT NULL DEFAULT '0' COMMENT '过期时间',
  `reg_tel` varchar(20) NOT NULL DEFAULT '' COMMENT '匹配手机号',
  PRIMARY KEY (`id`),
  KEY `reg_tel` (`reg_tel`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='短信验证表';

#
# Data for table "xz_smscod"
#

/*!40000 ALTER TABLE `xz_smscod` DISABLE KEYS */;
INSERT INTO `xz_smscod` VALUES (1,'6064','{\"respCode\":\"00134\",\"respDesc\":\"没有和内容匹配的模板\"}accountSid=0fcf3d4cb25a4d0daba6001739d97ec3&timestamp=20170811091217&sig=50ece3e830676f52635c28d9e5f52caf&respDataType=JSON&smsContent=你的验证码为6064&to=18773153922&Array',1502414238,''),(2,'5520','{\"respCode\":\"00000\",\"respDesc\":\"请求成功。\",\"failCount\":\"0\",\"failList\":[],\"smsId\":\"fad6c0fde4c143f5b0535816fe988594\"}',1502417127,''),(3,'349609','{\"respCode\":\"00000\",\"respDesc\":\"请求成功。\",\"failCount\":\"0\",\"failList\":[],\"smsId\":\"b8a4c9045f9d4056aa207caf70c43c52\"}',1502417310,'');
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
