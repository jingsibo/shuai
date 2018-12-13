function $(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}

function bianse(idbian){
	for(let i=0;i<idbian.length;i++){
		let idbiana=idbian[i];
		let idbianafu=idbiana.parentNode.parentNode.parentNode.parentNode.firstElementChild;
		let idbianaxiong=idbiana.parentNode.parentNode.parentNode;
		let idbianaye=idbiana.parentNode.parentNode.parentNode.parentNode;
		idbiana.style.display="block";
		idbiana.style.backgroundColor="#000000";	
		idbiana.style.color="#ffffff";
		idbianaye.style.background="#000000";
		idbianafu.style.color="#ffffff";
		idbianaxiong.style.background="#000000";
		idbianaxiong.style.display="block";
		idbianaxiong.style.zIndex=1;
	}
}
function huifu(idbian){
	for(let i=0;i<idbian.length;i++){
		let idbiana=idbian[i];
		let idbianafu=idbiana.parentNode.parentNode.parentNode.parentNode.firstElementChild;
		let idbianaxiong=idbiana.parentNode.parentNode.parentNode;
		let idbianaye=idbiana.parentNode.parentNode.parentNode.parentNode;
		idbiana.style.display="none";
		idbianaye.style.backgroundColor="#ffffff";	
		idbianafu.style.color="#000000";
		idbianaxiong.style.backgroundColor="#ffffff";
		idbianaxiong.style.zIndex=-1;
		idbianaxiong.style.display="none";
	}
}
function bianse(idbian){
	for(let i=0;i<idbian.length;i++){
		let idbiana=idbian[i];
		let idbianafu=idbiana.parentNode.parentNode.parentNode.parentNode.firstElementChild;
		let idbianaxiong=idbiana.parentNode.parentNode.parentNode;
		let idbianaye=idbiana.parentNode.parentNode.parentNode.parentNode;
		idbiana.style.display="block";
		idbiana.style.backgroundColor="#000000";	
		idbiana.style.color="#ffffff";
		idbianaye.style.background="#000000";
		idbianafu.style.color="#ffffff";
		idbianaxiong.style.background="#000000";
		idbianaxiong.style.display="block";
		idbianaxiong.style.zIndex=1;
	}
}
function huifu(idbian){
	for(let i=0;i<idbian.length;i++){
		let idbiana=idbian[i];
		let idbianafu=idbiana.parentNode.parentNode.parentNode.parentNode.firstElementChild;
		let idbianaxiong=idbiana.parentNode.parentNode.parentNode;
		let idbianaye=idbiana.parentNode.parentNode.parentNode.parentNode;
		idbiana.style.display="none";
		idbianaye.style.backgroundColor="#ffffff";	
		idbianafu.style.color="#000000";
		idbianaxiong.style.backgroundColor="#ffffff";
		idbianaxiong.style.zIndex=-1;
		idbianaxiong.style.display="none";
		
	}
}
function zidong(){
	//alert(document.cookie);//键=值；"username=jzm"
	let str = document.cookie;
	
	//获取cookie中保存的username；
	//1、方法一:
	let index = str.indexOf("=");
	let username = str.substring(index+1);
	// alert(username);
	//2、方法二；
	// var arr = str.split("=");
	// alert(arr[1]);
	if(username==""){
	}else{
		$("#wddl").style.display="none";
		$("#wdzh").style.display="block";
		$("#wdgw").style.display="none";
		$("#wdgwc").style.display="block";
	}
}
function zhxs(){
	$("#wdzh1").style.backgroundColor="#000";
	$("#wdzh11").style.color="#fff";
	let age=$(".wdzh12");
	for(let i=0;i<=age.length;i++){
		let mug=age[i];
		mug.style.display="block";
		mug.onmouseover=function(){
			zhxs();
		}
	}
}
function zhxz(){
	$("#wdzh1").style.backgroundColor="#fff";
	$("#wdzh11").style.color="#000";
	let age=$(".wdzh12");
	for(let i=0;i<=age.length;i++){
		let mug=age[i];
		mug.style.display="none";
		mug.onmouseout=function(){
			zhxz();
		}
	}
}
function zhuxiao(){
	document.cookie = "username" + '=;  expires=Thu, 01 Jan 1970 00:00:01 GMT;'
	window.location.reload();
}
function xialajin(){
		let idbian=$(".xialaa");
		bianse(idbian);
	}
	function xialachu(){
		let idbian=$(".xialaa");
		huifu(idbian);
	}
	function xialajinx(){
		let idbian=$(".xialab");
		bianse(idbian);
	}
	function xialachux(){
		let idbian=$(".xialab");
		huifu(idbian);
	}
	function biansea(){
		let idbian=$("#dhbqc");
		let idbianafu=idbian.parentNode;
		idbianafu.style.backgroundColor="#000"
		idbian.style.color="#fff"
	}
	function bianseaa(){
		let idbian=$("#dhbqc");
		let idbianafu=idbian.parentNode;
		idbianafu.style.backgroundColor="#fff"
		idbian.style.color="#000"
	}
	function bianseb(){
		let idbian=$("#dhbqd");
		let idbianafu=idbian.parentNode;
		idbianafu.style.backgroundColor="#000"
		idbian.style.color="#fff"
	}
	function biansebb(){
		let idbian=$("#dhbqd");
		let idbianafu=idbian.parentNode;
		idbianafu.style.backgroundColor="#fff"
		idbian.style.color="#000"
	}
	function biansec(){
		let idbian=$("#dhbqe");
		let idbianafu=idbian.parentNode;
		idbianafu.style.backgroundColor="#000"
		idbian.style.color="#fff"
	}
	function biansecc(){
		let idbian=$("#dhbqe");
		let idbianafu=idbian.parentNode;
		idbianafu.style.backgroundColor="#fff"
		idbian.style.color="#000"
	}
	function gaibianyanse(){
	let evt=event||window.event;
	evt.target.style.backgroundColor="#203348";
	evt.target.style.color="#47a8ff";
}