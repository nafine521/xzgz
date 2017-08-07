var param = {};
/**   
*    
* @Description 跳转页面方法
* @param i 跳转页数
* @Author leixy
* @Date: 2014-07-24 12：03
* @Version  1.0
*    
*/
function doJumpPage(i){
	if(isNaN(i)){
		alert("输入格式不正确!");
		return;
	}
	//param["pageBean.pageNum"]=i;
	
	var title= $(":hidden[name=search]").val();
	var searchType= $(":hidden[name=searchType]").val();
	var typeId= $(":hidden[name=typeId]").val();
	var  newsType=$(":hidden[name=type]").val();
	var  articlesType=$(":hidden[name=articlesType]").val();
	var mediareport = $("#mediareport").val();
	var labelname=$("#labelname").val();
	var platform = $("#platform").val();
	var platUrlPage = $("#platUrlPage").val();
	var category = $("#category").val();
	var toptic = $("#toptic").val();
	var supervision=$("#supervision").val();


	if(typeof(title)=='undefined'){
		title="";
	}
	if(typeof(searchType)=='undefined'){
		searchType="";
	}
	if(typeof(typeId)=='undefined'){
		typeId="";
	}
	
	if(typeof(newsType)=='undefined'){
		newsType="";
	}
	if(typeof(articlesType)=='undefined'){
		articlesType="";
	}
	if(typeof(labelname)=='undefined'){
		labelname="";
	}
	if(typeof(platform)=='undefined'){
		platform="";
	}
	if(typeof(mediareport)=='undefined'){
		mediareport="";
	}
	if(typeof(platUrlPage)=='undefined'){
		platUrlPage="";
	}
	if(typeof(category)=='undefined'){
		category="";
	}
	if(typeof(toptic)=='undefined'){
		toptic="";
	}

	var url=  window.location.href;
	var  index=url.indexOf('-');
	var despos = url.indexOf('_');

	if(index==-1){
		var  actionName=url.substring(url.lastIndexOf('/')+1);
		var  head=url.substring(0,url.lastIndexOf('/')+1);
	    if(actionName=="queryNewsList"){//公告
	    	url=head+"webnotice-0-"+i+".html";
	    }else if(actionName=="mediareport"){//媒体报道
	    	url=head+"mediareport-"+i+".html";
	    }else  if(actionName=="articlesection"){//文章栏目
	      	url=head+"articlesection-1-"+i+".html";
	    }else  if(actionName=="investProductList"){//标列表分页
	      	url=head+"invest-1-"+i+".html";
	    }else  if(actionName=="queryPlatform"){//网贷平台导航页
	      	url=head+"platform-"+i+".html";
	    }else if(actionName==""){
	    	url=head+"platform-"+i+".html";
	    }else  if(supervision=="supervision"){//信息披露页
			url=head+"superVision-"+i+".html";
		}

	    if(despos != -1){
	    	url=head+toptic+"_"+i+".html";   //专题
	    }
	}else{

		if(title!=""&&searchType!=""){
			url=url.substring(0, index+1)+searchType+"-"+i+title+".html";//小猪问答条件查询分页
		}else if(searchType!=""){
			url=url.substring(0, index+1)+searchType+"-"+i+".html";//小猪问答不带条件分页
		}else  if(newsType!=""){
			url=url.substring(0, index+1)+newsType+"-"+i+".html";//公告不带条件分页
		}else  if(articlesType!=""){
			url=url.substring(0, index+1)+articlesType+"-"+i+".html";//文章栏目不带条件分页
		}else  if(articlesType!=""){
			url=url.substring(0, index+1)+articlesType+"-"+i+".html";//文章栏目不带条件分页
		}else if(labelname!=""){
			url=url.substring(0, index+1)+labelname+"-"+i+".html";//其他分页
		}else if(platform!=""){
			url=url.substring(0, index+1)+i+".html";//网贷平台文章分页
		}else if(mediareport!=""){
			url=url.substring(0,index+1)+i+".html";
		}else if(platUrlPage !=""){
			url=url.substring(0,index+1)+i+".html";  //网贷平台导航页分页
		}else if(category !=""){
			url=url.substring(0,index+1)+i+".html";  //专题类导航页分页
		}else  if(supervision=="supervision"){//信息披露页
			url=url.substring(0,index+1)+i+".html";
		}
		if(typeId!=""){
			url=url+"?typeId="+typeId;
		}
	
	}
	window.location.href=url;

}