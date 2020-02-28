// 封装公共模块

(function($, w){
	//$ 即看成对象 也看成方法
	//options 对象
	//content  提示的内容
	//type   提示的类型  info  error  warning
	//interval 提示的时间
	$.tooltip = function(options){
		//3. 判断定时器是否存在 存在就清楚定时器
		if(w.timer) {
			clearTimeout(w.timer)
		}
		
		$('.alter').remove()
		
		//1. 往页面添加提示语
		var html = $(`<div class="alter alter-${options.type}">${options.content}</div>`)
		$("body").append(html)
		
		//2. 添加延时器   隔interval时间 将提示语清楚
		w.timer = setTimeout(function(){
			
			html.remove()
			
			if(options.success) {
				
				options.success()
			}
		}, options.interval || 3000)
    }
    
    //md5加密封装 
    $.md5=function(psd){
        hex_md5(psd)
    }

})(jQuery, window)
