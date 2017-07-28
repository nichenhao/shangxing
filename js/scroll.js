function scroll(opt){
	this.box = document.getElementById(opt.box);
	this.urlList = opt.urlList;
	this.times = opt.times || 3;

	this.init();
	this.create();
}

scroll.prototype = {
	//初始化相关参数
	init:function(){
		this.boxWid = this.box.offsetWidth;
		this.boxHei = this.box.offsetHeight;
		this.index = 0;
	},
	//创建元素
	create:function(){
		var box = this.box;
		var w = this.boxWid;
		var h = this.boxHei;
		//创建图片容器
		this.oUl = document.createElement('ul');
		box.appendChild(this.oUl);
		var list = this.urlList;
		for(var i = 0;i < list.length;i++){
			//创建图片，跳转链接
			var oLi = document.createElement('li');
			oLi.style.cssText = 'width:'+w+'px;height:'+h+'px;list-style:none;opacity:1;filter:alpha(opacity=100);';

			var oA = document.createElement('a');
			oA.style.cssText = 'display:block;width:100%;height:100%;border:0;';
			oA.href = list[i].href;

			var img = document.createElement('img');
			img.style.cssText = 'display:block;width:100%;height:100%;border:0;'
			img.src = list[i].url;

			oA.appendChild(img);
			oLi.appendChild(oA);
			this.oUl.appendChild(oLi);
			//创建缩略图
			/*var small = document.createElement('span');
			small.index = i;
			small.style.cssText = 'display:block;width:'+(w/list.length)+'px;height:'+(w/list.length)+'px;position:absolute;z-index:10;';
			
			small.style.background = 'url('+list[i].url+') center no-repeat';
			small.style.backgroundSize = '100% 100%';
			small.style.bottom = 0;
			small.style.left = i * (w/list.length) + 'px';

			box.appendChild(small);	*/
		}
		//创建左右按钮
//		this.prev = document.createElement('a');
//		this.prev.flag = 'prev';
//		this.prev.innerHTML = '&lt;'
//		this.prev.style.cssText = 'display:block;font-size:20px;color:#ffffff;background:rgba(0,0,0,0.4);position:absolute;padding:5px 10px;top:'+(h-30)/2+'px;z-index:100;text-decoration:none;display:none;';
//		this.next = document.createElement('a');
//		this.next.flag = 'next';
//		this.next.innerHTML = '&gt;'
//		this.next.href = this.prev.href = 'javascript:void(0);';
//		this.next.style.cssText = this.prev.style.cssText;
//		this.next.style.right = 0;
//		this.prev.style.left = 0;
//		box.appendChild(this.prev);	
//		box.appendChild(this.next);	
		
	},
	//滚动版
	move:function(){
		//缓存相关参数
		var box = this.box;
		var w = this.boxWid;
		var h = this.boxHei;
		var list = this.urlList;
		var ball = this.oUl;
		var cells = ball.children;
		//设置容器样式
		box.style.cssText = 'position:relative;overflow:hidden;';
//		box.style.height = (h + (w/list.length)) +'px';
		//设置图片容器样式
		ball.style.cssText = 'position:absolute;left:0;top:0;overflow:hidden;width:'+(cells.length+1)*w+'px;';
		for(var i = 0;i < cells.length;i++){
			cells[i].style.float = 'left';
		}
		//复制第一张图片
		var first = cells[0].cloneNode(true);
		ball.appendChild(first);
		//开始轮播
		
		this.timer = setTimeout(move,this.times*1000);
		var self = this;
		var flag = true;
		//自动轮播
		function move(){
			self.index--;
			//边界判断
			if(self.index==-cells.length){
				self.index = -1;
				ball.style.left = 0;
			}
			//动画
			animation(ball,'left',self.index*w,function(){
				clearTimeout(self.timer)
				if(flag){
					self.timer = setTimeout(move,self.times*1000);
				}
			})
		}
		//切换事件
//		box.onmouseover = function(){
//			flag = false;
//			clearTimeout(self.timer);
//			self.next.style.display = self.prev.style.display = 'block';
//		}
//		box.onmouseout = function(){
//			flag = true;
//			self.timer = setTimeout(move,self.times*1000);
//			self.next.style.display = self.prev.style.display = 'none';
//		}
		//事件委托
		box.onclick = function(event){
			var e = event || window.event;
			//兼容委托者对象
			var btn = e.target?e.target:e.srcElement;
			//缩略图点击切换
			//判断节点
			if(btn.nodeName.toLowerCase()=='span'){
				if(self.index==-(cells.length-1)){
					ball.style.left = 0;
				}
				self.index = -btn.index;
				animation(ball,'left',self.index*w)
			}
			//左右按钮点击切换
			//判断节点
			if(btn.flag == 'prev'){
				self.index++;
				if(self.index==1){
					self.index = -(list.length-1);
					ball.style.left = -list.length * w + 'px';
				}
				animation(ball,'left',self.index*w);
			}
			if(btn.flag == 'next'){
				self.index--;
				if(self.index==-cells.length){
					self.index = -1;
					ball.style.left = 0;
				}
				animation(ball,'left',self.index*w)
			}
		}
	},
	//淡入淡出版
	fade:function(){
		var box = this.box;
		var w = this.boxWid;
		var h = this.boxHei;
		var list = this.urlList;
		var ctnBox = this.oUl;
		var cells = ctnBox.children;
		//容器样式
		box.style.cssText = 'position:relative;overflow:hidden;';
		box.style.height = (h + (w/list.length)) +'px';
		//图片容器布局
		ctnBox.style.cssText = 'width:'+w+'px;height:'+h+'px;position:relative;';

		for(var i = 0;i < cells.length;i++){
			cells[i].style.position = 'absolute';
			cells[i].style.left = 0;
			cells[i].style.top = 0;
			cells[i].style.opacity = 0;
			cells[i].style.filter = 'alpha(opacity=0)';
		}
		cells[0].style.opacity = 1;
		cells[0].style.filter = 'alpha(opacity=100)';
		//开始轮播
		var flag = true;
		var self = this;
		//设置自动轮播
		this.timer = setTimeout(fade,this.times*1000);
		function fade(){
			self.index++;
			if(self.index==cells.length){
				self.index = 0;
			}
			for(var i = 0;i < cells.length;i++){
				animation(cells[i],'opacity',0)
			}

			animation(cells[self.index],'opacity',1,function(){
				clearTimeout(self.timer)
				if(flag){
					self.timer = setTimeout(fade,self.times*1000);
				}
			})
		}
		//点击切换
		//切换事件
		box.onmouseover = function(){
			flag = false;
			clearTimeout(self.timer);
			self.next.style.display = self.prev.style.display = 'block';
		}
		box.onmouseout = function(){
			flag = true;
			self.timer = setTimeout(fade,self.times*1000);
			self.next.style.display = self.prev.style.display = 'none';
		}

		box.onclick = function(event){
			var e = event||window.event;
			var btn = e.target?e.target:e.srcElement;
			//缩略图切换
			if(btn.nodeName.toLowerCase()=='span'){
				self.index = btn.index;
				for(var i = 0;i < cells.length;i++){
					animation(cells[i],'opacity',0)
				}
				animation(cells[self.index],'opacity',1)
			}
			//左右切换
			if(btn.flag=='prev'){
				self.index--;
				if(self.index==-1){
					self.index = cells.length-1;
				}
				for(var i = 0;i < cells.length;i++){
					animation(cells[i],'opacity',0)
				}
				animation(cells[self.index],'opacity',1)
			}
			if(btn.flag == 'next'){
				self.index++;
				if(self.index==cells.length){
					self.index = 0;
				}
				for(var i = 0;i < cells.length;i++){
					animation(cells[i],'opacity',0)
				}
				animation(cells[self.index],'opacity',1)
			}
		}
	}
}