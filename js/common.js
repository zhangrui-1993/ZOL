function loadHtml(url,target){
	$.ajax({
		  	url:url,
		  	dataType:"html",
		  	async:false,
		  	success:function(msg){
		  		$("."+target).html(msg);
		  	}
		})
};
