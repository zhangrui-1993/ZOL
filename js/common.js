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
$(".dlLi1>dd").click(function() {
	$(this).css("backgroundColor","#f33");
}, function() {
	$(this).css("backgroundColor","#000");
})