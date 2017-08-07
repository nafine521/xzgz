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
	
	var  newsType=$(":hidden[name=type]").val();
	var  deadline=$(":hidden[name=deadline]").val();
	var  annualRate=$(":hidden[name=annualRate]").val();
	var  paymentMode=$(":hidden[name=paymentMode]").val();
	var  sortName=$(":hidden[name=sortName]").val();
	var  sortOrder=$(":hidden[name=sortOrder]").val();

	
	if(typeof(newsType)=='undefined'){
		newsType="";
	}

	var url=  window.location.href;
	var  index=url.indexOf('-');

	
	
	if(newsType!=""){
		url=url.substring(0, index+1)+newsType+"-"+deadline+"-"+annualRate+"-"+paymentMode+"-"+sortName+"-"+sortOrder+"-"+i+".html";//新网站列表条件分页
	}else{
		url=url.substring(0, index+1)+i+".html";//其他分页
	}
	
	window.location.href=url;

}