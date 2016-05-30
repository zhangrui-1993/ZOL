/*--------------------------------轮播图1--------------------------------------------*/
var index = 0;
lunbo();

function lunbo() {
	$(".main .list li").eq(0).css({
		"background": "#c40000",
		"color": "#fff"
	});
	setInterval(function() {
		$(".main .list li").eq(index).css({
			"background": "#c40000",
			"color": "#fff",
		}).siblings().css({
			"background": "#000",
			"color": "#fff"
		});
		$(".main .banner img").eq(index).show().animate({
			left: "0",
		}, 500).slideUp(500).next().show();
		//		animate({height:"0",},500);slideUp(500)
		index++;
		if (index == 6) {
			index = 0;
		}
	}, 1000);
}
/*--------------------------------小轮播图--------------------------------------------*/
/*var pBox=$(".li-lb").find("p");
var num=1;
var val=419;
var timer;
smlunbo();
function smlunbo(){	
	var oleft;
	clearTimeout(timer);
		$(".li-lb .sm-ul li").click(function(){	
			pBox.eq(0).css("left",function(index,value){
				console.log()
				return parseInt(-val*($(this).index()));
			});		
		})
	timer=setInterval(function slb(){			
		$(".li-lb .sm-ul li").eq(num).css("background","#f00").siblings().css("background","#ccc");
		pBox.eq(0).css("left",function(index,value){
			return parseInt(value)-val;
		});		
		num++;*/
var oUL;
var oLIs;
var oNavlist;
var currentIndex = 0;
window.onload = function() {
	oUL = document.getElementsByClassName("img-list")[0];
	oLIs = oUL.children;
	oNavlist = document.getElementsByClassName("banner-nav-list")[0].children;
	banner(); //轮播图

	////xxxx();
}

function banner() {
	currentIndex = 1;
	var newli = oLIs[0].cloneNode(true);
	oUL.appendChild(newli);
	oUL.style.width = oLIs.length * oLIs[0].offsetWidth + "px";

	for (var i = 0; i < oNavlist.length; i++) {
		oNavlist[i].index = i;
		oNavlist[i].onclick = function() {
			clearInterval(timer);

			startMove(oUL, {
				left: this.index * -oLIs[0].offsetWidth
			});
			for (var i = 0; i < oNavlist.length; i++) {
				oNavlist[i].className = "";
			}
			this.className = "active";
			currentIndex = this.index + 1;

			timer = setInterval(move, 3000);
		}
	}

	var timer = setInterval(move, 3000);

	function move() {
		if (currentIndex == 4) {
			oUL.style.left = 0;
			currentIndex = 1;
		}
		//oUL.style.left = oUL.offsetLeft - 810 + "px";
		startMove(oUL, {
			left: currentIndex * -oLIs[0].offsetWidth
		});
		for (var i = 0; i < oNavlist.length; i++) {
			oNavlist[i].className = "";
		}
		oNavlist[currentIndex >= 3 ? 0 : currentIndex].className = "active";
		currentIndex++;
	}

}
/*--------------------------侧边导航栏--------------------------------*/
var $navImg=$(".nav div");
$navImg.hover(function() {
	$(this).css("backgroundColor","#f33").find("p").show();
}, function() {
	$(this).css("backgroundColor","#000").find("p").hide()
})

