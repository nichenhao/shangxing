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
		$('.catalog').animate({top:"0"})
	})
	$('.shangxing_logo').click(function(){
		$('.catalog').animate({top:"100%"})
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
})











