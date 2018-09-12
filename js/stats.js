$(document).ready(function(e) {
     var checkMod = function(){
													   if(Modernizr.mq('(max-width: 900px)')){
														   my1();
															$(".sec_main").css('display','none');
															$(".sec_main_1").css('display','block');
													   }
													   else{
															$(".sec_main").css('display','block');
															$(".sec_main_11,.sec_main_1").css('display','none');
													   }
													   
						 		}
						
						 // Call on every window resize
						 $(window).resize(checkMod);
						 // Call once on initial load
						 checkMod ();
	
	function my1(){
		
		$(".sec_main_1").click(function(e) {
        $(".sec_main").css('display','block');
		$(".sec_main_1").css('display','none');
		$(".sec_main_11").css('display','block');
		});
		$(".sec_main_11").click(function(e) {
			$(".sec_main").css('display','none');
			$(".sec_main_11").css('display','none');
			$(".sec_main_1").css('display','block');
		});
		};
	
	$(".r1").click(function(e) {
		$(".sec_main").removeClass("sec_main_active");
		$(".sec_dec").removeClass("sec_dec_active");
		$(".sec_img").removeClass("sec_img_active");
        $(".r1").addClass("sec_main_active");
		$(".r1 .sec_dec").addClass("sec_dec_active");
		$(".r1 .sec_img").addClass("sec_img_active");
		$(".section_bottom_right").removeClass("animated slideInRight fadeOutLeft");
		$(".section_bottom_right").addClass("animated fadeOutLeft");
		setTimeout(function(){
				
			$(".section_bottom_right").removeClass("animated slideInRight fadeOutLeft");
			$(".section_bottom_right").css('display','none');
			$(".most_run").css('display','block');
			$(".most_run").addClass("animated slideInRight");
			
			},500);
    });
	
	$(".r2").click(function(e) {
		$(".sec_main").removeClass("sec_main_active");
		$(".sec_dec").removeClass("sec_dec_active");
		$(".sec_img").removeClass("sec_img_active");
        $(".r2").addClass("sec_main_active");
		$(".r2 .sec_dec").addClass("sec_dec_active");
		$(".r2 .sec_img").addClass("sec_img_active");
		$(".section_bottom_right").removeClass("animated slideInRight fadeOutLeft");
		$(".section_bottom_right").addClass("animated fadeOutLeft");
		setTimeout(function(){
				
			$(".section_bottom_right").removeClass("animated slideInRight fadeOutLeft");
			$(".section_bottom_right").css('display','none');
			$(".fours").css('display','block');
			$(".fours").addClass("animated slideInRight");
			
			},500);
		
    });
	
	$(".r3").click(function(e) {
		$(".sec_main").removeClass("sec_main_active");
		$(".sec_dec").removeClass("sec_dec_active");
		$(".sec_img").removeClass("sec_img_active");
        $(".r3").addClass("sec_main_active");
		$(".r3 .sec_dec").addClass("sec_dec_active");
		$(".r3 .sec_img").addClass("sec_img_active");
		$(".section_bottom_right").removeClass("animated slideInRight fadeOutLeft");
		$(".section_bottom_right").addClass("animated fadeOutLeft");
		setTimeout(function(){
				
			$(".section_bottom_right").removeClass("animated slideInRight fadeOutLeft");
			$(".section_bottom_right").css('display','none');
			$(".six").css('display','block');
			$(".six").addClass("animated slideInRight");
			
			},500);
		
		
    });
	
	$(".r4").click(function(e) {
		$(".sec_main").removeClass("sec_main_active");
		$(".sec_dec").removeClass("sec_dec_active");
		$(".sec_img").removeClass("sec_img_active");
        $(".r4").addClass("sec_main_active");
		$(".r4 .sec_dec").addClass("sec_dec_active");
		$(".r4 .sec_img").addClass("sec_img_active");
		$(".section_bottom_right").removeClass("animated slideInRight fadeOutLeft");
		$(".section_bottom_right").addClass("animated fadeOutLeft");
		setTimeout(function(){
				
			$(".section_bottom_right").removeClass("animated slideInRight fadeOutLeft");
			$(".section_bottom_right").css('display','none');
			$(".fifty").css('display','block');
			$(".fifty").addClass("animated slideInRight");
			
			},500);
		
		
		
    });
	

	$(".r6").click(function(e) {
		$(".sec_main").removeClass("sec_main_active");
		$(".sec_dec").removeClass("sec_dec_active");
		$(".sec_img").removeClass("sec_img_active");
        $(".r6").addClass("sec_main_active");
		$(".r6 .sec_dec").addClass("sec_dec_active");
		$(".r6 .sec_img").addClass("sec_img_active");
		$(".section_bottom_right").removeClass("animated slideInRight fadeOutLeft");
		$(".section_bottom_right").addClass("animated fadeOutLeft");
		setTimeout(function(){
				
			$(".section_bottom_right").removeClass("animated slideInRight fadeOutLeft");
			$(".section_bottom_right").css('display','none');
			$(".score").css('display','block');
			$(".score").addClass("animated slideInRight");
			
			},500);
		
		
		
    });
	
	$(".r7").click(function(e) {
		$(".sec_main").removeClass("sec_main_active");
		$(".sec_dec").removeClass("sec_dec_active");
		$(".sec_img").removeClass("sec_img_active");
        $(".r7").addClass("sec_main_active");
		$(".r7 .sec_dec").addClass("sec_dec_active");
		$(".r7 .sec_img").addClass("sec_img_active");
		$(".section_bottom_right").removeClass("animated slideInRight fadeOutLeft");
		$(".section_bottom_right").addClass("animated fadeOutLeft");
		setTimeout(function(){
				
			$(".section_bottom_right").removeClass("animated slideInRight fadeOutLeft");
			$(".section_bottom_right").css('display','none');
			$(".bat").css('display','block');
			$(".bat").addClass("animated slideInRight");
			
			},500);
		
		
		
    });
	
	$(".r8").click(function(e) {
		$(".sec_main").removeClass("sec_main_active");
		$(".sec_dec").removeClass("sec_dec_active");
		$(".sec_img").removeClass("sec_img_active");
        $(".r8").addClass("sec_main_active");
		$(".r8 .sec_dec").addClass("sec_dec_active");
		$(".r8 .sec_img").addClass("sec_img_active");
		$(".section_bottom_right").removeClass("animated slideInRight fadeOutLeft");
		$(".section_bottom_right").addClass("animated fadeOutLeft");
		setTimeout(function(){
				
			$(".section_bottom_right").removeClass("animated slideInRight fadeOutLeft");
			$(".section_bottom_right").css('display','none');
			$(".wick").css('display','block');
			$(".wick").addClass("animated slideInRight");
			
			},500);
		
		
		
    });
	
	$(".r9").click(function(e) {
		$(".sec_main").removeClass("sec_main_active");
		$(".sec_dec").removeClass("sec_dec_active");
		$(".sec_img").removeClass("sec_img_active");
        $(".r9").addClass("sec_main_active");
		$(".r9 .sec_dec").addClass("sec_dec_active");
		$(".r9 .sec_img").addClass("sec_img_active");
		$(".section_bottom_right").removeClass("animated slideInRight fadeOutLeft");
		$(".section_bottom_right").addClass("animated fadeOutLeft");
		setTimeout(function(){
				
			$(".section_bottom_right").removeClass("animated slideInRight fadeOutLeft");
			$(".section_bottom_right").css('display','none');
			$(".madin").css('display','block');
			$(".madin").addClass("animated slideInRight");
			
			},500);
		
		
		
    });
	
	$(".r10").click(function(e) {
		$(".sec_main").removeClass("sec_main_active");
		$(".sec_dec").removeClass("sec_dec_active");
		$(".sec_img").removeClass("sec_img_active");
        $(".r10").addClass("sec_main_active");
		$(".r10 .sec_dec").addClass("sec_dec_active");
		$(".r10 .sec_img").addClass("sec_img_active");
		$(".section_bottom_right").removeClass("animated slideInRight fadeOutLeft");
		$(".section_bottom_right").addClass("animated fadeOutLeft");
		setTimeout(function(){
				
			$(".section_bottom_right").removeClass("animated slideInRight fadeOutLeft");
			$(".section_bottom_right").css('display','none');
			$(".dots").css('display','block');
			$(".dots").addClass("animated slideInRight");
			
			},500);
		
		
		
    });
	
	
	
	$(".f1 .filter_left,.f1 .filter_right").click(function(e) {
        $(".filert ul").css('display' ,'block');
		$(".f1").css('display','none');
		$(".f2").css('display','block');
    });
	
	
	$(".f2 .filter_left,.f2 .filter_right").click(function(e) {
        $(".filert ul").css('display' ,'none');
		$(".f2").css('display','none');
		$(".f1").css('display','block');
    });
	
	$(".all").click(function(e) {
        $(".filter_left_2").html('All Teams');
		$(".a").removeClass('ab');
		$(this).addClass('ab');
		$(".pos_main").css('display','block');
    });
	$(".e1").click(function(e) {
        $(".filter_left_2").html('ENGLAND');
		$(".a").removeClass('ab');
		$(this).addClass('ab');
		$(".eng ,.sri ,.aus ,.ind ,.new ,.sa ,.pak ,.ban").css('display','none');
		$(".eng").css('display','block');
    });
	$(".s1").click(function(e) {
        $(".filter_left_2").html('SRI LANKA');
		$(".a").removeClass('ab');
		$(this).addClass('ab');
		$(".eng ,.sri ,.aus ,.ind ,.new ,.sa ,.pak ,.ban").css('display','none');
		$(".sri").css('display','block');
    });
	$(".i1").click(function(e) {
        $(".filter_left_2").html('INDIA');
		$(".a").removeClass('ab');
		$(this).addClass('ab');
		$(".eng ,.sri ,.aus ,.ind ,.new ,.sa ,.pak ,.ban").css('display','none');
		$(".ind").css('display','block');
    });
	$(".a1").click(function(e) {
        $(".filter_left_2").html('AUSTRALIA');
		$(".a").removeClass('ab');
		$(this).addClass('ab');
		$(".eng ,.sri ,.aus ,.ind ,.new ,.sa ,.pak ,.ban").css('display','none');
		$(".aus").css('display','block');
    });
	$(".n1").click(function(e) {
        $(".filter_left_2").html('NEW ZEALAND');
		$(".a").removeClass('ab');
		$(this).addClass('ab');
		$(".eng ,.sri ,.aus ,.ind ,.new ,.sa ,.pak ,.ban").css('display','none');
		$(".new").css('display','block');
    });
	$(".sa1").click(function(e) {
        $(".filter_left_2").html('SOUTH AFRICA');
		$(".a").removeClass('ab');
		$(this).addClass('ab');
		$(".eng ,.sri ,.aus ,.ind ,.new ,.sa ,.pak ,.ban").css('display','none');
		$(".sa").css('display','block');
    });
	$(".p1").click(function(e) {
        $(".filter_left_2").html('PAKISTAN');
		$(".a").removeClass('ab');
		$(this).addClass('ab');
		$(".eng ,.sri ,.aus ,.ind ,.new ,.sa ,.pak ,.ban").css('display','none');
		$(".pak").css('display','block');
    });
	$(".b1").click(function(e) {
        $(".filter_left_2").html('BANGLADESH');
		$(".a").removeClass('ab');
		$(this).addClass('ab');
		$(".eng ,.sri ,.aus ,.ind ,.new ,.sa ,.pak ,.ban").css('display','none');
		$(".ban").css('display','block');
    });
	
});