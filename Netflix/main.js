$(document).ready(function(){
	// alert(1)
	$(window).scroll(function(){
		var scroll=$(window).scrollTop();
		if(scroll>100){
			// alert(1)
			$(".netflix-nav").css("background","#0C0C0C") }
		else{
			$(".netflix-nav").css("background","transparent") }
			
	})
})