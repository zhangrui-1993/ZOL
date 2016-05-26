//轮播图
var index = 0;
lunbo();
function lunbo(){
	$(".main .list li").eq(0).css({"background":"#c40000","color":"#fff"});
	setInterval(function(){
		$(".main .list li").eq(index).css({"background":"#c40000","color":"#fff",}).siblings().css({"background":"#000","color":"#fff"});
		$(".main .banner img").eq(index).show().animate({left:"0",},500).slideUp(500).next().show();
//		animate({height:"0",},500);slideUp(500)
		index++;
		if(index == 6){
			index = 0;
		}
	},1000);
}
