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

	param["pageBean.pageNum"]=i;
	//回调页面方法
	initListInfo(param);}
