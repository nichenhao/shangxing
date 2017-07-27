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











