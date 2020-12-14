/*
* @Author: 吕计宏
* @Date:   2020-12-10 10:22:41
* @Last Modified by:   吕计宏
* @Last Modified time: 2020-12-14 20:51:23
*/

// 登陆界面
var welcome = document.createElement("p");
document.getElementById("login1").onclick = function(){
	if (document.getElementById("oldAccount").value && document.getElementById("oldPassword").value) {
		welcome.innerHTML = "欢迎登陆：" + document.getElementById("oldAccount").value + "!";
		document.getElementsByClassName("container")[0].appendChild(welcome);
		document.getElementById("oldAccount").value = "";
		document.getElementById("oldPassword").value = "";
		document.getElementById("oldUser").style.display = "none";
	}
	
}
// 注册表单
document.getElementById("signIn").onclick = function(){
	document.getElementById("oldUser").style.display = "none";
	document.getElementById("newUser").style.display = "block";
};
var cnt = 0;
var pNode1 = document.createElement("p");
var pNode2 = document.createElement("p");
document.getElementById("userName").onfocus = function(){
	pNode1.innerHTML = "支持中文数字";
	document.getElementById("div1").appendChild(pNode1);			
};
document.getElementById("userName").onblur = function(){
	if (document.getElementById("userName").value.length == 0) {
		pNode1.innerHTML = "用户名不能为空";
	}else{
		pNode1.parentNode.removeChild(pNode1);			
	}
};
document.getElementById("password").onfocus = function(){
	pNode2.innerHTML = "建议至少使用两种字符组合";
	document.getElementById("div2").appendChild(pNode2);
};
document.getElementById("password").onblur = function(){
	if (document.getElementById("password").value.length == 0) {
		pNode2.innerHTML = "密码不能为空";
	}else{
		pNode2.parentNode.removeChild(pNode2);
	}
};	

document.getElementById("login").onclick = function (){
	var btn = document.createElement("button");
	btn.innerHTML = "返回登陆";
	btn.onclick = function(){
		document.getElementById("oldUser").style.display = "block";
		document.getElementById("newUser").style.display = "none";
		document.getElementById("userName").value = "";
		document.getElementById("password").value = "";
		for(var i = 0;i < 4;i++){
			document.getElementsByClassName("div")[0].removeChild(document.getElementsByClassName("div")[0].lastChild);
		}
		cnt = 0;
	};
	var	text1 = document.createElement("p");
	text1.innerHTML = "注册成功!";
	var	text2 = document.createElement("p");
	text2.innerHTML = "用户名：" + document.getElementById("userName").value;
	var	text3 = document.createElement("p");
	text3.innerHTML = "密码：" + document.getElementById("password").value;
	if (document.getElementById("userName").value.length != 0 && document.getElementById("password").value.length != 0) {
		if (cnt == 0) {
			document.getElementsByClassName("div")[0].appendChild(text1);
			document.getElementsByClassName("div")[0].appendChild(text2);
			document.getElementsByClassName("div")[0].appendChild(text3);
			document.getElementsByClassName("div")[0].appendChild(btn);
			cnt++;
		}else{
			document.getElementsByClassName("div")[0].firstElementChild.nextElementSibling.innerHTML = "用户名：" + document.getElementById("userName").value;
			document.getElementsByClassName("div")[0].lastChild.previousSibling.innerHTML = "密码：" + document.getElementById("password").value;
		}
		
	}
}

//轮播图
var slideshow = document.getElementById('slideshow');
var oNavlist = document.getElementById('nav5').children;
var slider = document.getElementById('slider');
var left = document.getElementById('left');
var right = document.getElementById('right');
var index = 1;
var timer;
var isMoving = false;
slideshow.onmouseover = function(){
	animate(left,{opacity:50})
	animate(right,{opacity:50})
	clearInterval(timer)
}
slideshow.onmouseout = function(){
	animate(left,{opacity:0})
	animate(right,{opacity:0})
	timer = setInterval(next, 3000);
}
right.onclick = next;
left.onclick = prev;
for( var i=0; i<oNavlist.length; i++ ){
	oNavlist[i].index = i;
	oNavlist[i].onclick = function(){
		index = this.index+1;
		navmove();
		animate(slider,{left:-317*(index-1)});
	}
}
function next(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index++;
	navmove();
	animate(slider,{left:-317*index},function(){
		if(index==5){
			slider.style.left = '-317px';
			index = 1;
		}
		isMoving = false;
	});
}
function prev(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index--;
	navmove();
	animate(slider,{left:-317*index},function(){
		if(index==0){
			slider.style.left = '-1268px';
			index = 4;
		}
		isMoving = false;
	});
}
function navmove(){
	for( var i=0; i<oNavlist.length; i++ ){
		oNavlist[i].className = "";
	}
	if(index >4 ){
		oNavlist[0].className = "active";
	}else if(index<=0){
		oNavlist[3].className = "active";
	}else {
		oNavlist[index-1].className = "active";
	}
}
timer = setInterval(next, 3000);