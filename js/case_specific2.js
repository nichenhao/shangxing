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
  	}
})

$.ajax({
	type:"get",
	url:"json/case_detail.json",
	async:true,
	dataType:'json',
	
	success:function(data){
		var e = '';
		var arr = ["rokid","greenRecovery","gardenerOne","NiurenWharf","KissKissFish","LetMe","TX","YSBB","motherPoint","datedate"];
		
		var d = arr[y];
		for(var j in data ){
			if(j==d){
				for(var i=0;i<data[j].length;i++){   
//					console.log(data[j][i].detail_img)
					e += '<img src="'+data[j][i].detail_img+'">'
				}	
			}
  		}
		$('.case_specific2_img').html(e);
		
	}
});