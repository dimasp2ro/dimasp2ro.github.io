$(document).ready(function() {


		function heightDetect(){
		if($(window).width()>765){
		if($(window).height()>800){
		$(".l_side").css('height', $(window).height());}
		else{
			$(".l_side").css('height', 800);
		}
	}};
	heightDetect();
	$(window).resize(function(){
		heightDetect();
	});


	$(".l_side li").click(function() {
		 $(".current_mnu").removeClass("current_mnu");
	  $(this).addClass("current_mnu");
	});

	$(".post a").click(function() {
		$(".p_current").removeClass("p_current");
	  $(this).parents(".post").addClass("p_current");
	});




});
$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
