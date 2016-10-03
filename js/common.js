$(document).ready(function() {


	function heightDetect(){
		if($(window).width()>765){
			if($(window).height()>900){
				$(".container .l_side").css('height', $(window).height());
				$(".container .m_posts").css('height', $(window).height());}
				else{
					$(".container .l_side").css('height', 1050);
					$(".container .m_posts").css('height', 1050);
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

			$(".content .con_pic").mouseover(function() {
				$(this).children(".img_det").css('display', "block");
			});
			$(".content .con_pic").mouseout(function() {
				$(this).children(".img_det").css('display', "none");
			});

		});
$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
