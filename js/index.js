var list = [{
	url: 'images/banner.png',
	href: '#'
}, {
	url: 'images/113110776280189982.png',
	href: '#'
}, {
	url: 'images/647470224810593816.png',
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
})