$.ajax({
  	type:"get",
  	url:"json/case.json",
  	async:true,
  	dataType:'json',

  	success:function(data){
  		var str = '';
		for(var i = 0;i < data.length;i++){
			str += "<li>"+
	      	'<img src="' + data[i].images + '"/>'+
	      	'<div class="case_detail_mask"></div>'+
	      	'<div class="case_detail_logo"><img src="' + data[i].case_detail_logo + '"/><div class="case_detail_name">'+data[i].case_detail_name+'</div></div>'
	      	"</li>"
		}
		$("#case_list").html(str);
		
//		var nums = 6; //每页出现的数量
//		var pages = Math.ceil(data.length / nums); //得到总页数
//		var thisDate = function(curr) {
//			//此处只是演示，实际场景通常是返回已经当前页已经分组好的数据
//			var str = '',
//				last = curr * nums - 1;
//			last = last >= data.length ? (data.length - 1) : last;
//			for (var i = (curr * nums - nums); i <= last; i++) {
//				str += "<li>"+
//	      	'<img src="' + data[i].images + '"/>'+
//	      	'<div class="case_detail_mask"></div>'+
//	      	'<div class="case_detail_logo"><img src="' + data[i].case_detail_logo + '"/><div class="case_detail_name">'+data[i].case_detail_name+'</div></div>'
//	      	"</li>"
//			}
//			return str;
//		};
//		//调用分页
//		laypage({
//			cont: 'biuuu_city',
//			pages: pages,
//			jump: function(obj) {
//				document.getElementById('case_list').innerHTML = thisDate(obj.curr);
//			}
//		})
//  	var str = '';
//  	var nums = 6; //每页数量
//		var pages = Math.ceil(data.length/nums); //总页数
//		var thisDate = function(curr){
//		    var str = '', last = curr*nums - 1;
//		    last = last >= data.length ? (data.length-1) : last;
//		    for(var i = (curr*nums - nums); i <= last; i++){
//		        str += "<li>"+
//	      	'<img src="' + data[i].images + '"/>'+
//	      	'<div class="case_detail_mask"></div>'+
//	      	'<div class="case_detail_logo"><img src="' + data[i].case_detail_logo + '"/><div class="case_detail_name">'+data[i].case_detail_name+'</div></div>'
//	      	"</li>";
//		    }
//		    return str;
//		};
//  	$("#case_list").html(str);
//  	
//		//调用分页
//		laypage({
//		    cont: 'biuuu_city',
//		    pages: pages,
//		    jump: function(obj){
//		        document.getElementById('case_list').innerHTML = thisDate(obj.curr);
//		    }
//		})
		
		$('#case_list li').click(function(){
			var index = $(this).index();
//			alert(index);
			sessionStorage.setItem("key",index);
			if(index == 0||index == 4){
				window.location = "case_specific2.html";
			}else{
				window.location = "case_specific1.html";
			}
		})
  	}
})

