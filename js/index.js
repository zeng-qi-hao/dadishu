$(function(){
	for(var i=0;i<16;i++){
		$(".map").append("<div></div>")
	}
	$(".map div").append('<img src="images/hole.png" class="hole" >')
	$(".map div").append('<img src="images/mouse.png" class="mouse" >')
	
	//让地鼠先隐藏起来
	$(".mouse").hide();
	
	
	//第二步:让地鼠每隔一秒随机的出现1个或2个
	var num;
	var index;
	var obj;
	setInterval(function(){
		num = Math.ceil(Math.random()*2);
		
		for(var i=0; i<num; i++){
			index = Math.floor(Math.random()*16);
			
			obj = $(".map div:nth-of-type("+index+") .mouse");
			
			obj.slideDown();
			obj.delay(2000).slideUp();
		}
	},1000)
	
	//第三步  绘制锤子并敲击地鼠
	$('.mouse').hover(function(){
		$(this).css({
			cursor:'url(images/cursor-down.png), auto'
		})
	},function(){
		$('body').css({
			cursor:'url(images/cursor.png), auto'
		})
	})
	$(".mouse").click(function(){
		$(this).hide()
	})
})