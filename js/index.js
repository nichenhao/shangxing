var list = [{
	url: 'images/banner.png',
	href: '#'
}, {
	url: 'images/banner2.png',
	href: '#'
}, {
	url: 'images/banner3.png',
	href: '#'
}, {
	url: 'images/banner4.png',
	href: '#'
}]
var sc = new scroll({
	box: 'box',
	times: 2,
	urlList: list
});
sc.move() //滚动版轮播图
	//sc.fade();    //淡入淡出版轮播图

$(function() {
	$('.ability_point1').hover(function() {
		$('#ability_point1_img').attr('src', 'images/Icon_advantage_hover.png');
	}, function() {
		$('#ability_point1_img').attr('src', 'images/Icon_advantage_normal.png');
	})
	$('.ability_point2').hover(function() {
		$('#ability_point2_img').attr('src', 'images/Icon_strategy_hover.png');
	}, function() {
		$('#ability_point2_img').attr('src', 'images/Icon_strategy_normal.png');
	})
	$('.ability_point3').hover(function() {
		$('#ability_point3_img').attr('src', 'images/Icon_advantage_hover.png');
	}, function() {
		$('#ability_point3_img').attr('src', 'images/Icon_advantage_normal.png');
	})
	
	
	$('.more_arrow').click(function(){
		$('.catalog').animate({top:""},100)
		$('.hide_box').animate({
            	opacity:"1"
            },500);
	})
	$('.shangxing_logo').click(function(){
		$('.catalog').animate({top:"100vh"},10)
		$('.hide_box').animate({
            	opacity:"0"
            },10);
	})
	
	$('.border_bottom1').click(function(){
		var s = $(this).index();
		sessionStorage.setItem('key1',s);
	})
	
	
	$('.case_nav li').click(function(){
		var index = $(this).index();
//		alert(index);
		sessionStorage.setItem("key",index);
		if(index == 0){
			window.location = "case_specific2.html";
		}else{
			window.location = "case_specific1.html";
		}
	})
	
	$('.Contact_nav').click(function(){
		document.body.scrollTop=document.body.scrollHeight;
	})
	
	
	
	
	var box=document.getElementById("box");
		 // 添加滚动事件
		if(box.addEventListener){
			box.addEventListener("mousewheel",scroll,false);//谷歌
			box.addEventListener("DOMMouseScroll",scroll,false)//火狐
		}else{
			box.attachEvent("onmousewheel",scroll)//IE
		}
		function scroll(e){
			var ev=e||window.event
			/*阻止浏览器的默认动作*/
			if(ev.preventDefault){
				ev.preventDefault();//火狐谷歌
			}else{
				ev.returnValue=false;//IE
			}
			/*获取滚轮的方向*/
			// ev.wheelDelat是谷歌和IE的方向
			// ev.detail是判断火狐的方向
			var direction=ev.wheelDelta||ev.detail;
			if(direction==120||direction==-3){
				up.call(box);
			}else if(direction==-120||direction==3){
				down.call(box);
			}
		}
		function up(){
			$(".catalog").stop().animate({
               	top:"100vh"  
            },400);
            $('.hide_box').animate({
            	opacity:"0"
            },500);
		}
		function down(){
			$(".catalog").stop().animate({
               	top:"0"  
            },100);
            $('.hide_box').animate({
            	opacity:"1"
            },500);
		}
})













