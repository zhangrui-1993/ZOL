//轮播图
var index = 0;
lunbo();
function lunbo(){
	$(".main .list li").eq(0).css({"background":"#c40000","color":"#fff"});
	setInterval(function(){
		$(".main .banner img").eq(index).slideUp(2000).css("top","2600px");
//		$(".main .banner img").eq(index).siblings()
		$(".main .list li").eq(index).css({"background":"#c40000","color":"#fff",}).siblings().css({"background":"#000","color":"#fff"});
		index++;
		if(index == 6){
			index = 0;
		}
	},2000);
}
