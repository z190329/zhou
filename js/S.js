$(document).ready(function(){
	$("form").submit(function(){
		var lol = $("#tel").val();
		var reg = /^1\d{10}$/;
		var m1=$(".mmk1").val();
		var m2=$(".mmk2").val();
		var uName=$(".name").val();
		if(m2 != m1){
			alert("两次密码不一致！");
			return false;
		}
		if(reg.test(lol) != true){
			alert("手机号码必须11位");
			return false;
		}
		if(isNaN(uName)==false){
			alert("名字不能为数字！");
			return false;
		}	
		return true;
	})
})
$(function(){
	$("#xsq").click(function(){
		var nn =$(".hh6 li input[type=text]")
	})
})
	
	
	
	

