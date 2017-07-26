$.ajax({
  	type:"get",
  	url:"json/banner.json",
  	async:true,
  	dataType:'json',

  	success:function(data){
  		var y = sessionStorage.getItem("key")
		console.log(y);
  	}
})
