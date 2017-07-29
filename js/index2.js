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
	
	$('.shangxing_logo').click(function(){
		window.location = 'index.html';
	})
	
	var S = sessionStorage.getItem('key1');
	var p = $('.black_ li');
	var li_arr = [];
	for(var q = 0;q < p.length;q++){
		li_arr.push(p[q]);
		$(li_arr[q]).css("border-bottom-color","#ffffff");
	}
	
	$(li_arr[S]).css("border-bottom-color","#000000")
	
	
	$('.border_bottom').click(function(){
		$(this).css("border-bottom-color","#000000");
		$(this).siblings('.border_bottom').css("border-bottom-color","#FFFFFF");
	})
})
