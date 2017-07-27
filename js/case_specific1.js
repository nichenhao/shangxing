var y = sessionStorage.getItem("key")
$.ajax({
  	type:"get",
  	url:"json/banner.json",
  	async:true,
  	dataType:'json',

  	success:function(data){
  		
		var a = '';
		var b = '';
	    for(i in data){
	      a = '<img src="' + data[y].images + '" />';
	      b = data[y].words;
	    }
	    $(".case_banner").html(a);
	    $(".case_introduce_words").html(b);
  	}
})

$.ajax({
	type:"get",
	url:"json/case_detail.json",
	async:true,
	dataType:'json',
	
	success:function(data){
		var c = '';
		var arr = ["rokid","greenRecovery","gardenerOne","NiurenWharf","KissKissFish","LetMe","TX","YSBB","motherPoint","datedate"];
		
		var d = arr[y];
		for(var j in data ){
			if(j==d){
				for(var i=0;i<data[j].length;i++){   
//					console.log(data[j][i].detail_img)
					c += '<li><img src="'+data[j][i].detail_img+'"></li>'
				}	
			}
  		}
		$('.case_introduce_body ul').html(c);
		
	}
});
