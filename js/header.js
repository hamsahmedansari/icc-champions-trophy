$(document).ready(function(e) {
	function dex_nav(){

																				   
						$('.main-li-1').mouseenter(function(){
								
								$('.main-ul-2').removeClass('animated bounceOutDown');
								$('.main-ul-2').css('display' , 'block')
								$('.main-ul-2').addClass('animated bounceInDown');
					
							});
							
						$('.main-ul-2-1').mouseenter(function(){
								
								$('.main-ul-2-1-1').removeClass('animated bounceOutRight');
								$('.main-ul-2-1-1').css('display' , 'block')
								$('.main-ul-2-1-1').addClass('animated bounceInLeft');
							
						});
						
						$('.main-li-1').mouseleave(function(){
							
								$('.main-ul-2').removeClass('animated bounceInDown');
								$('.main-ul-2').addClass('animated bounceOutDown');
								setTimeout(function(){
									$('.main-ul-2').css('display' , 'none');
								},500);
					
							});
							
						$('.main-ul-2-1').mouseleave(function(){
							
								$('.main-ul-2-1-1').removeClass('animated bounceInLeft');
								$('.main-ul-2-1-1').addClass('animated bounceOutRight');
								setTimeout(function(){
								$('.main-ul-2-1-1').css('display' , 'none');
								},500);
							
						});
						
						$('.main-li-11').mouseenter(function(){
								
								$('.main-ul-22').removeClass('animated bounceOutDown');
								$('.main-ul-22').css('display' , 'block')
								$('.main-ul-22').addClass('animated bounceInDown');
							
						});
							
						$('.main-li-11').mouseleave(function(){
							
								$('.main-ul-22').removeClass('animated bounceInDown');
								$('.main-ul-22').addClass('animated bounceOutDown');
								setTimeout(function(){
								$('.main-ul-22').css('display' , 'none');
								},500);
							
						});
					
						$('.main-li-111').mouseenter(function(){
								
								$('.main-ul-222').removeClass('animated bounceOutDown');
								$('.main-ul-222').css('display' , 'block')
								$('.main-ul-222').addClass('animated bounceInDown');
							
						});
							
						$('.main-li-111').mouseleave(function(){
							
								$('.main-ul-222').removeClass('animated bounceInDown');
								$('.main-ul-222').addClass('animated bounceOutDown');
								setTimeout(function(){
								$('.main-ul-222').css('display' , 'none');
								},500);
							
						});
																
		};
		
		function tab_res(){
			
				$(".main-li-1").click(function(e) {
                   $('.main-ul-2').slideToggle(1000);
                });
				$(".main-ul-2-1").click(function(e) {
					$('.main-ul-2-1-1').slideToggle(1000);
                    
                });
				$(".main-li-11").click(function(e) {
                    $('.main-ul-22').slideToggle(500)
                });
				$(".main-li-111").click(function(e) {
                    $('.main-ul-222').slideToggle(500)
                });
				$(".res_1").click(function(e) {
								
								$(".res_ch_1,.res_ch_2").css('background-position','center');
								$(".res_ch_1").css('transform','rotate(45deg)');
								$(".res_ch_2").css('transform','rotate(-45deg)');
								$(".res_ch_3").addClass("res_ch_3_hover");
								$(".nav").addClass('nav_block');
								$(".nav_block").removeClass("animated slideOutRight");
								$(".nav_block").addClass("animated slideInRight");
								setTimeout(function(){
											$(".res_1").css('display','none');
											$(".res_2").css('display','block');
											
									},1000);
				});
				$(".res_2").click(function(e) {
								
								
								$(".res_ch_1").css('background-position','top center');
								$(".res_ch_2").css('background-position','center center');
								$(".res_ch_1").css('transform','rotate(0deg)');
								$(".res_ch_2").css('transform','rotate(0deg)');
								$(".res_ch_3").removeClass("res_ch_3_hover");
								$(".nav_block").removeClass("animated slideInRight");
								$(".nav_block").addClass("animated slideOutRight");

								setTimeout(function(){
											$(".nav").removeClass('nav_block');										
											$(".res_2").css('display','none');
											$(".res_1").css('display','block');
											
									},1000);
								
				});
		};
			<!-- res -->
					
						 var checkMod = function(){
													   if(Modernizr.mq('(max-width: 900px)')){
														   tab_res();
														$(".nav_block").removeClass("animated slideOutRight slideInRight");
													   }
													   else{
														   dex_nav();
														   $(".nav").removeClass("nav_block");		
														$(".nav").removeClass("animated slideOutRight slideInRight");
													   }
					mu();
													   
						 		}
						
						 // Call on every window resize
						 $(window).resize(checkMod);
						 // Call once on initial load
						 checkMod ();
					mu();
						 
    
	
				function mu(){
						
				$(window).scroll(function(){
						var me = $(this).scrollTop();
				
						console.log(me);
						if(me<50)
						{
							$(".social_stiky_main").removeClass('check200 check2001');
						}
						else if(me>50 && me<1000)
						{
							$(".social_stiky_main").addClass('check200');	
							$(".social_stiky_main").removeClass('check2001');	
						}
						else
						{
							$(".social_stiky_main").removeClass('check200');
							$(".social_stiky_main").addClass('check2001');
						}
						
						if($(".social_stiky_main").hasClass('check200'))
						{
							$('.social_stiky_main').css('margin-top',me/50+'%');	
						}
						else if($(".social_stiky_main").hasClass('check2001'))
						{
							$('.social_stiky_main').css('margin-top','20%');		
						}
						else
						{
							$('.social_stiky_main').css('margin-top','0%');
						}
						
					});	
					};
	
});