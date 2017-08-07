
var tip = popOut( {title : '提示' , content : ''});
$(function() {
	$("#searchQuestion").click(function(){
		var param = {};
		var  search=$(this).prev(":text").val();
		window.open("askIndexs-1-1"+search+".html", "_self");//根据类型及查询条件获取内容第一页
	});
	$("#top-nav li").removeClass("on");
	$("#top-nav li:last a").addClass("on");
	
	$(":text[name=phoneNumber],:password[name=password]").val("");

	/*$("#login").fancybox({
		autoSize:true,
		padding:0,
		openEffect:"fade",
		closeEffect:"fade",
		wrapCSS:"fancybox-transparent"
	});
	login();*/
	$("#content,.comment").val("");
	$("body").css("background","white");
	$(".ul1 li a p,.right_bar li a").css("color","black");
	param = {};
	param["pageBean.pageNum"]=1;
	param["paramMap.type"] = 0;
	param["paramMap.id"] = $(":hidden[name=questionId]").val();
	initListInfo(param);
	$("#answer").click(function(){answer();});
	/*$("#answer").poshytip({
		className: "tip-yellowsimple",
		showTimeout: 1,
		alignTo: "target",
		alignX: "center",
		alignY: "top",
		offsetY: 10,
		offsetX: 50,
		allowTipHover: true,
		content:"现在回答被采纳，额外奖励20金猪币哦！"
	});
	*/
	$(".pinglun").live("click",function(){
		var comment = $(this);
		comment.parents(".bottom").find(".alert_con").slideDown(200);
		comment.parents(".bottom").find(".triangle").fadeIn(200);
		getCommentList(comment,comment.parents(".wrapper:first").find(".commentList").attr("id"));
	});
	
	$(".agree").live("click",function(){
		var answer = $(this).parents("div:eq(2)");
		var param = {};
		param["paramMap.id"] = answer.find(".commentList").attr("id");
		$.post("agree", param,function(data) {
			var agree = answer.find(".agreeCount");
			if(data==1){
				agree.html(parseInt(agree.html())+1);
			}else if(data=="login"){
				$("#login").click();
			}else{
				tip.alert( '你已经点过了哦！');
			}
		});
	});
	
	$(".disagree").live("click",function(){
		var answer = $(this).parents("div:eq(2)");
		var param = {};
		param["paramMap.id"] = $(this).parents("div:eq(2)").find(".commentList").attr("id");
		$.post("disagree", param,function(data) {
			var disagree = answer.find(".disagreeCount");
			if(data==1){
				disagree.html(parseInt(disagree.html())+1);
			}else if(data=="login"){
				$("#login").click();
			}else{
				tip.alert( '你已经点过了哦！');
			}
		});
	});

	$(".hideComment").live("click",function(){
		$(this).parents(".bottom").find(".alert_con").slideUp(200);
		$(this).parents(".bottom").find(".triangle").fadeOut(200);
	});
	
	$(".publish").live("click",function(){
		var obj = $(this);
		if($.trim(obj.parent().prev(".comment").val())==""){
			tip.alert( '请输入评论！');
			return;
		}
		var param = {};
		param["paramMap.parentId"] = obj.parent().next().attr("id");
		param["paramMap.content"] = obj.parent().prev(".comment").val();
		param["paramMap.type"] = 1;
		$.post("answer", param,function(data) {
			if(data==1){
				obj.parent().prev(".comment").val("")
				getCommentList(obj,obj.parent().next().attr("id"));
			}else if(data=="login"){
				$("#login").click();
			}else{
				tip.alert( data.msg);
			}
		});
	});
	
});
function answer(){
	if($.trim($("#content").val())==""){
		tip.alert("请输入要回答的内容！");
		return;
	}
	if($("#content").val().length<4){
		tip.alert("你的回答过于简略，请丰富一下再提交！");
		return;
	}
	var param = {};
	param["paramMap.parentId"] = $(":hidden[name=questionId]").val();
	param["paramMap.content"] = $("#content").val();
	param["paramMap.type"] = 0;
	$("#answer").unbind("click");
	$.post("answer", param,function(data) {
		if(data==1){
			$.fancybox({
				href:'#loginSuccess',
				autoSize:true,
				padding:0,
				openEffect:"fade",
				closeEffect:"fade",
				wrapCSS:'fancybox-transparent'
			});
			$(".fancybox-close").live("click",function(){
				location.reload();
			});
		}else if(data=="login"){
			$("#login").click();
			$("#answer").click(function(){answer();});
		}else{
			tip.alert(data.msg);
			$("#answer").click(function(){answer();});
		}
	});
}
function initListInfo(param) {
	//var param = {};
	//param["paramMap.type"] = 0;
	//param["paramMap.id"] = $(":hidden[name=questionId]").val();
	$.post("getAnswerList", param,function(data) {
		$(".answer_list").html(data);
		if($(":hidden[name=myQuestion]").val()=="1"){
			$(".answer_list>div .adopt").css("cursor","pointer");
			$(".answer_list>div .adopt").css("opacity","1");
			$(".adopt").click(function(){
				var param = {};
				param["paramMap.id"] = $(this).parent().parent().find(".commentList").attr("id");
				$.post("adoptAnswer", param,function(data) {
					if(data==1){
						location.reload();
					}
				});
			});
		}
	});
}
function getCommentList(obj,id){
	var param = {};
	param["paramMap.parentId"] = id;
	$.post("getCommentList", param,function(data) {
		var container = obj.parents(".bottom");
		container.find(".commentList").html(data);
		container.find(".commentCount").html(container.find(".commentList p").length);
	});
}
/*function login(){
	$("a[name=login]").click(function(){
		var login = $(this);
		$("#error").remove();
		$(this).val("登陆中...");
		if($.trim($(":text[name=phoneNumber]").val())==""){
			$(".prompt").html("请输入手机号！");
			$(this).val("登陆");
			return;
		}
		if($.trim($(":password[name=password]").val())==""){
			$(".prompt").html("请输入密码！");
			$(this).val("登陆");
			return;
		}
		var param = {};
		param["paramMap.email"] = $(":text[name=phoneNumber]").val();
		param["paramMap.password"] = $(":password[name=password]").val();
		$.post("logining", param,function(data) {
			if(data.msg==1||data.msg==5){
				$(".fancybox-close").click();
				$.post("loadHead", param,function(data) {
					$("#head").html(data);
				});
				$.post("loadAskHead", param,function(data) {
					$("#askHead").html(data);
				});
			} else {
				if (data.msg == 3) {
					$(".prompt").html("手机号或密码错误！");
				} else if (data.msg == 4) {
					$(".prompt").html("该帐号已被锁定，请联系客服！");
				} else if(data.msg == 8){
					$(".prompt").html("密码错误,您还有"+data.count+"次输入机会！");
				}
				login.val("登陆");
			} 
		});
	});
}*/
window._bd_share_config={
	"common":{"bdSnsKey":{},
	"bdText":"邀请你的朋友，@TA一起参与理财讨论吧~",
	"bdDesc":"小猪罐子官网_P2P理财_资金第三方托管的网贷平台  www.xiaozhu168.com",
	"bdUrl":"www.xiaozhu168.com",
	"bdSign":"normal",
	"bdMini":"2",
	"bdMiniList":false,
	"bdPic":"<%=basePath%>images/logo.jpg",
	"bdStyle":"1",
	"bdSize":"24"},
	"share":{}
};
with(document)0[(getElementsByTagName("head")[0]||body).appendChild(createElement("script")).src="http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion="+~(-new Date()/36e5)];