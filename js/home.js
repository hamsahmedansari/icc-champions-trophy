$(document).ready(function(e) {
 var checkMod1 = function(){
		if(Modernizr.mq('(max-width: 900px)')){
			my1();
					$(".black_screen").css('display','none');
		}
		else{
			my();
		}
		
	}	
 $(window).resize(function(){
						if ($(window).width() >= 890 && $(window).width() <= 910){	
				window.location.replace("index.html");
			}
				 });
	 $(window).resize(checkMod1);	
	  checkMod1 ();
	function my(){
				$(window).scroll(function(){
				var me = $(this).scrollTop();
				if(me < 540)
				{
					$(".black_screen").css('display','block');
				}else if(me > 540)
				{
					$(".black_screen").css('display','none');
				}
				$(".section_top").removeClass("section_top_1");
				$('.section_top').css('display','block');
				$('.section_top').css('margin-top',+ -me/10+'%');
				console.log(me);
				$(".black_screen").css("background-color", "#000");
				
				$(".black_screen").css("opacity", 1 - $(window).scrollTop() / 566);
				
				if(me<566)
				{
					$(".section_bottom").css('position','fixed');
					$(".section_bottom").css('top','14.7%');
				}
				else if(me>566)
				{
					$(".black_screen").css('display','none');
					$(".section_bottom").css('position','relative');
					$(".section_bottom").css('top','18.7%');
				}
			
	});
		};
	function my1(){
			
				$(".black_screen").css("background-color", "transparent");
				$(".section_top").addClass("section_top_1");
					$(".section_bottom").css('position','relative');
					$(".section_bottom").css('top','0%');
			
		};	
			var me = $(window).scrollTop();
			if(me>1)
			{
			$("html,body").animate({scrollTop:$("header").offset().top},"1000");
			}
	
	
			var ab = document.getElementById('match').clientWidth;
	
		$(".right_match").click(function(){
			
	if(ab>=0 && ab<=1500){	
	
			$(".match_main_full").css('margin-left','-'+ab+'px');
			ab+=215;
	
	}
	else
	{
		$(".match_main_full").css('margin-left','0px');
						
			ab=215
	}
	
		});
	
		$(".left_match").click(function(){
			
			if(ab>=0 && ab<=1500){	
			ab=-215;
					$(".match_main_full").css('margin-left',+ab+'px');
			
			}
			else
			{
				$(".match_main_full").css('margin-left','0px');	
			ab=215
								
			}
		});
		
	
	var im =  150;
	
	$(".images_bottom_bottom_right_left").click(function(e) {
        if(im>=0 && im<=1595)
	{
		im=-150;
		$(".images_1_main").css('margin-left',+im+'px');	
	}
	else
	{
		$(".images_1_main").css('margin-left','0px');	
		im=150;
	}
    });
	$(".images_bottom_bottom_right_right").click(function(e) {
        if(im>=0 && im<=1595)
	{
		$(".images_1_main").css('margin-left','-'+im+'px');	
		im+=150;
	}
	else
	{
		$(".images_1_main").css('margin-left','0px');	
		im=150;
	}
    });
	
	
	$(".images_1_1").click(function(){
			$(".images_1_1 ,.images_1_2,.images_1_3,.images_1_4,.images_1_5,.images_1_6,.images_1_7,.images_1_8,.images_1_9,.images_1_10").removeClass("images_1_hover");
			$(this).addClass("images_1_hover");
			$(".images_bottom_top").removeClass("img_1 img_2  img_3 img_4 img_5 img_6 img_7 img_8 img_9 img_10");
			$(".images_bottom_top").addClass("img_1");
			
		});
	$(".images_1_2").click(function(){
			$(".images_1_1 ,.images_1_2,.images_1_3,.images_1_4,.images_1_5,.images_1_6,.images_1_7,.images_1_8,.images_1_9,.images_1_10").removeClass("images_1_hover");
			
			$(this).addClass("images_1_hover");
			$(".images_bottom_top").removeClass("img_1 img_2  img_3 img_4 img_5 img_6 img_7 img_8 img_9 img_10");
			$(".images_bottom_top").addClass("img_2");
			
		});
	$(".images_1_3").click(function(){
			$(".images_1_1 ,.images_1_2,.images_1_3,.images_1_4,.images_1_5,.images_1_6,.images_1_7,.images_1_8,.images_1_9,.images_1_10").removeClass("images_1_hover");
			
			$(this).addClass("images_1_hover");
			$(".images_bottom_top").removeClass("img_1 img_2  img_3 img_4 img_5 img_6 img_7 img_8 img_9 img_10");
			$(".images_bottom_top").addClass("img_3");
			
		});
	$(".images_1_4").click(function(){
			$(".images_1_1 ,.images_1_2,.images_1_3,.images_1_4,.images_1_5,.images_1_6,.images_1_7,.images_1_8,.images_1_9,.images_1_10").removeClass("images_1_hover");
			
			$(this).addClass("images_1_hover");
			$(".images_bottom_top").removeClass("img_1 img_2  img_3 img_4 img_5 img_6 img_7 img_8 img_9 img_10");
			$(".images_bottom_top").addClass("img_4");
			
		});
	$(".images_1_5").click(function(){
			$(".images_1_1 ,.images_1_2,.images_1_3,.images_1_4,.images_1_5,.images_1_6,.images_1_7,.images_1_8,.images_1_9,.images_1_10").removeClass("images_1_hover");
			
			$(this).addClass("images_1_hover");
			$(".images_bottom_top").removeClass("img_1 img_2  img_3 img_4 img_5 img_6 img_7 img_8 img_9 img_10");
			$(".images_bottom_top").addClass("img_5");
			
		});
	$(".images_1_6").click(function(){
			$(".images_1_1 ,.images_1_2,.images_1_3,.images_1_4,.images_1_5,.images_1_6,.images_1_7,.images_1_8,.images_1_9,.images_1_10").removeClass("images_1_hover");
			
			$(this).addClass("images_1_hover");
			$(".images_bottom_top").removeClass("img_1 img_2  img_3 img_4 img_5 img_6 img_7 img_8 img_9 img_10");
			$(".images_bottom_top").addClass("img_6");
			
		});
	$(".images_1_7").click(function(){
			$(".images_1_1 ,.images_1_2,.images_1_3,.images_1_4,.images_1_5,.images_1_6,.images_1_7,.images_1_8,.images_1_9,.images_1_10").removeClass("images_1_hover");
			
			$(this).addClass("images_1_hover");
			$(".images_bottom_top").removeClass("img_1 img_2  img_3 img_4 img_5 img_6 img_7 img_8 img_9 img_10");
			$(".images_bottom_top").addClass("img_7");
			
		});
	$(".images_1_8").click(function(){
			$(".images_1_1 ,.images_1_2,.images_1_3,.images_1_4,.images_1_5,.images_1_6,.images_1_7,.images_1_8,.images_1_9,.images_1_10").removeClass("images_1_hover");
			
			$(this).addClass("images_1_hover");
			$(".images_bottom_top").removeClass("img_1 img_2  img_3 img_4 img_5 img_6 img_7 img_8 img_9 img_10");
			$(".images_bottom_top").addClass("img_8");
			
		});
	$(".images_1_9").click(function(){
			$(".images_1_1 ,.images_1_2,.images_1_3,.images_1_4,.images_1_5,.images_1_6,.images_1_7,.images_1_8,.images_1_9,.images_1_10").removeClass("images_1_hover");
			
			$(this).addClass("images_1_hover");
			$(".images_bottom_top").removeClass("img_1 img_2  img_3 img_4 img_5 img_6 img_7 img_8 img_9 img_10");
			$(".images_bottom_top").addClass("img_9");
			
		});
	$(".images_1_10").click(function(){
			$(".images_1_1 ,.images_1_2,.images_1_3,.images_1_4,.images_1_5,.images_1_6,.images_1_7,.images_1_8,.images_1_9,.images_1_10").removeClass("images_1_hover");
			
			$(this).addClass("images_1_hover");
			$(".images_bottom_top").removeClass("img_1 img_2  img_3 img_4 img_5 img_6 img_7 img_8 img_9 img_10");
			$(".images_bottom_top").addClass("img_10");
			
		});
	

	
	$(".images_bottom_top_right").click(function(e) {
			    if($(".images_bottom_top").hasClass("img_1")){
				$(".images_bottom_top").removeClass("img_1 img_2  img_3 img_4 img_5 img_6 img_7 img_8 img_9 img_10");
				$(".images_bottom_top").addClass("img_2");
				}
				else if($(".images_bottom_top").hasClass("img_2")){
				$(".images_bottom_top").removeClass("img_1 img_2  img_3 img_4 img_5 img_6 img_7 img_8 img_9 img_10");
				$(".images_bottom_top").addClass("img_3");
				}
				else if($(".images_bottom_top").hasClass("img_3")){
				$(".images_bottom_top").removeClass("img_1 img_2  img_3 img_4 img_5 img_6 img_7 img_8 img_9 img_10");
				$(".images_bottom_top").addClass("img_4");
				}
				else if($(".images_bottom_top").hasClass("img_4")){
				$(".images_bottom_top").removeClass("img_1 img_2  img_3 img_4 img_5 img_6 img_7 img_8 img_9 img_10");
				$(".images_bottom_top").addClass("img_5");
				}
				else if($(".images_bottom_top").hasClass("img_5")){
				$(".images_bottom_top").removeClass("img_1 img_2  img_3 img_4 img_5 img_6 img_7 img_8 img_9 img_10");
				$(".images_bottom_top").addClass("img_6");
				}
				else if($(".images_bottom_top").hasClass("img_6")){
				$(".images_bottom_top").removeClass("img_1 img_2  img_3 img_4 img_5 img_6 img_7 img_8 img_9 img_10");
				$(".images_bottom_top").addClass("img_7");
				}
				else if($(".images_bottom_top").hasClass("img_7")){
				$(".images_bottom_top").removeClass("img_1 img_2  img_3 img_4 img_5 img_6 img_7 img_8 img_9 img_10");
				$(".images_bottom_top").addClass("img_8");
				}
				else if($(".images_bottom_top").hasClass("img_8")){
				$(".images_bottom_top").removeClass("img_1 img_2  img_3 img_4 img_5 img_6 img_7 img_8 img_9 img_10");
				$(".images_bottom_top").addClass("img_9");
				}
				else if($(".images_bottom_top").hasClass("img_9")){
				$(".images_bottom_top").removeClass("img_1 img_2  img_3 img_4 img_5 img_6 img_7 img_8 img_9 img_10");
				$(".images_bottom_top").addClass("img_10");
				}
				else if($(".images_bottom_top").hasClass("img_10")){
				$(".images_bottom_top").removeClass("img_1 img_2  img_3 img_4 img_5 img_6 img_7 img_8 img_9 img_10");
				$(".images_bottom_top").addClass("img_1");
				}
            });
	$(".images_bottom_top_left").click(function(e) {
			    if($(".images_bottom_top").hasClass("img_1")){
				$(".images_bottom_top").removeClass("img_1 img_2  img_3 img_4 img_5 img_6 img_7 img_8 img_9 img_10");
				$(".images_bottom_top").addClass("img_10");
				}
				else if($(".images_bottom_top").hasClass("img_2")){
				$(".images_bottom_top").removeClass("img_1 img_2  img_3 img_4 img_5 img_6 img_7 img_8 img_9 img_10");
				$(".images_bottom_top").addClass("img_1");
				}
				else if($(".images_bottom_top").hasClass("img_3")){
				$(".images_bottom_top").removeClass("img_1 img_2  img_3 img_4 img_5 img_6 img_7 img_8 img_9 img_10");
				$(".images_bottom_top").addClass("img_2");
				}
				else if($(".images_bottom_top").hasClass("img_4")){
				$(".images_bottom_top").removeClass("img_1 img_2  img_3 img_4 img_5 img_6 img_7 img_8 img_9 img_10");
				$(".images_bottom_top").addClass("img_3");
				}
				else if($(".images_bottom_top").hasClass("img_5")){
				$(".images_bottom_top").removeClass("img_1 img_2  img_3 img_4 img_5 img_6 img_7 img_8 img_9 img_10");
				$(".images_bottom_top").addClass("img_4");
				}
				else if($(".images_bottom_top").hasClass("img_6")){
				$(".images_bottom_top").removeClass("img_1 img_2  img_3 img_4 img_5 img_6 img_7 img_8 img_9 img_10");
				$(".images_bottom_top").addClass("img_5");
				}
				else if($(".images_bottom_top").hasClass("img_7")){
				$(".images_bottom_top").removeClass("img_1 img_2  img_3 img_4 img_5 img_6 img_7 img_8 img_9 img_10");
				$(".images_bottom_top").addClass("img_6");
				}
				else if($(".images_bottom_top").hasClass("img_8")){
				$(".images_bottom_top").removeClass("img_1 img_2  img_3 img_4 img_5 img_6 img_7 img_8 img_9 img_10");
				$(".images_bottom_top").addClass("img_7");
				}
				else if($(".images_bottom_top").hasClass("img_9")){
				$(".images_bottom_top").removeClass("img_1 img_2  img_3 img_4 img_5 img_6 img_7 img_8 img_9 img_10");
				$(".images_bottom_top").addClass("img_8");
				}
				else if($(".images_bottom_top").hasClass("img_10")){
				$(".images_bottom_top").removeClass("img_1 img_2  img_3 img_4 img_5 img_6 img_7 img_8 img_9 img_10");
				$(".images_bottom_top").addClass("img_9");
				}
            });
	
		$(".images_bottom_top_full").click(function(){
				
				$(".images_bottom_top").addClass("images_bottom_top_1");
				$(".images_bottom_top_full").css('display','none');
				$(".images_bottom_top_cross").css('display','block');
				$("header").css('position','relative');
				$("body").css('overflow','hidden');
			});
	
		$(".images_bottom_top_cross").click(function(){
				
				$(".images_bottom_top").removeClass("images_bottom_top_1");
				$(".images_bottom_top_full").css('display','block');
				$(".images_bottom_top_cross").css('display','none');
				$("body").css('overflow','inherit');
				$("header").css('position','fixed');
			});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	con_1();
function con_1(){
	
	    //comping
	
	$(".top_team_1").addClass("pak_cap move_in_left");
    $(".top_team_2").addClass("ind_cap move_in_right");
    $(".team_vs").addClass("animated fadeIn");
	$(".top_teams_detils").addClass("animated fadeIn");
	$(".team_name_1").addClass("pak_team_top animated flipInX");
	$(".team_name_2").addClass("ind_team_top animated flipInX");
	$(".animater_team_1").addClass("pak_team_under");
	$(".animater_team_2").addClass("");
	setTimeout(function(){
	$(".team_name_2,.team_name_1").removeClass("animated flipInX");	
	$(".top_teams_detils").removeClass("animated fadeOut");
    $(".team_vs").removeClass("animated fadeIn");
		},600);
	
	//match---2
	
	setTimeout(function(){
		
		$(".top_team_1").addClass("animated fadeOutLeftBig");
		$(".top_team_2").addClass("animated fadeOutRightBig");
		$(".team_name_2,.team_name_1").addClass("animated flipOutX");	
		setTimeout(function(){
		$(".team_name_2,.team_name_1").removeClass("animated flipOutX ind_team_top pak_team_top");	
		$(".animater_team_1,.animater_team_2").removeClass("pak_team_under");
		},400);
		$(".top_teams_detils").addClass("animated fadeOut");
		
		setTimeout(function(){
			$(".background_slider_main").css('margin-left','-100%');
			$(".top_team_1").removeClass("animated fadeOutLeftBig");
			$(".top_team_2").removeClass("animated fadeOutRightBig");
			$(".top_teams_detils").removeClass("animated fadeOut");

			$(".top_team_1").addClass("aus_cap move_in_left");
			$(".top_team_2").addClass("ban_cap move_in_right");
			$(".team_name_1").addClass("aus_team_top animated flipInX");
			$(".team_name_2").addClass("ban_team_top animated flipInX");
			$(".animater_team_1").addClass("aus_team_under");
			$(".animater_team_2").addClass("ban_team_under");
					
			$(".top_teams_detils").addClass("animated fadeIn");
			setTimeout(function(){
			$(".team_name_2,.team_name_1").removeClass("animated flipInX");	
			$(".top_teams_detils").removeClass("animated fadeOut");
			$(".team_vs").removeClass("animated fadeIn");
				},600);
			
			//match---3
				
				setTimeout(function(){
					
					$(".top_team_1").addClass("animated fadeOutLeftBig");
					$(".top_team_2").addClass("animated fadeOutRightBig");
					$(".team_name_2,.team_name_1").addClass("animated flipOutX");	
					setTimeout(function(){
					$(".team_name_2,.team_name_1").removeClass("animated flipOutX aus_team_top ban_team_top");	
					$(".animater_team_1,.animater_team_2").removeClass("aus_team_under ban_team_under");
					},400);
					$(".top_teams_detils").addClass("animated fadeOut");
					
					setTimeout(function(){
						$(".background_slider_main").css('margin-left','-200%');
						$(".top_team_1").removeClass("animated fadeOutLeftBig");
						$(".top_team_2").removeClass("animated fadeOutRightBig");
						$(".top_teams_detils").removeClass("animated fadeOut");
			
						$(".top_team_1").addClass("eng_cap move_in_left");
						$(".top_team_2").addClass("nez_cap move_in_right");
						$(".team_name_1").addClass("eng_team_top animated flipInX");
						$(".team_name_2").addClass("nz_team_top animated flipInX");
						$(".animater_team_1").addClass("eng_team_under");
						$(".animater_team_2").addClass("nz_team_under");
								
						$(".top_teams_detils").addClass("animated fadeIn");
						setTimeout(function(){
						$(".team_name_2,.team_name_1").removeClass("animated flipInX");	
						$(".top_teams_detils").removeClass("animated fadeOut");
						$(".team_vs").removeClass("animated fadeIn");
							},600);
								
								
									//match---4
							
							setTimeout(function(){
								
								$(".top_team_1").addClass("animated fadeOutLeftBig");
								$(".top_team_2").addClass("animated fadeOutRightBig");
								$(".team_name_2,.team_name_1").addClass("animated flipOutX");	
								setTimeout(function(){
								$(".team_name_2,.team_name_1").removeClass("animated flipOutX eng_team_top nz_team_top");	
								$(".animater_team_1,.animater_team_2").removeClass("nz_team_under eng_team_under");
								},400);
								$(".top_teams_detils").addClass("animated fadeOut");
								
								setTimeout(function(){
									$(".background_slider_main").css('margin-left','-299.5%');
									$(".top_team_1").removeClass("animated fadeOutLeftBig");
									$(".top_team_2").removeClass("animated fadeOutRightBig");
									$(".top_teams_detils").removeClass("animated fadeOut");
						
									$(".top_team_1").addClass("sut_cap move_in_left");
									$(".top_team_2").addClass("sri_cap move_in_right");
									$(".team_name_1").addClass("sa_team_top animated flipInX");
									$(".team_name_2").addClass("sl_team_top animated flipInX");
									$(".animater_team_1").addClass("sa_team_under");
									$(".animater_team_2").addClass("sl_team_under");
											
									$(".top_teams_detils").addClass("animated fadeIn");
									setTimeout(function(){
									$(".team_name_2,.team_name_1").removeClass("animated flipInX");	
									$(".top_teams_detils").removeClass("animated fadeOut");
									$(".team_vs").removeClass("animated fadeIn");
									$(".top_team_1").removeClass("animated fadeOutLeftBig");
									$(".top_team_2").removeClass("animated fadeOutRightBig");
									
									
									
											setTimeout(function(){
												
								$(".top_team_1").addClass("animated fadeOutLeftBig");
								$(".top_team_2").addClass("animated fadeOutRightBig");
								$(".team_name_2,.team_name_1").addClass("animated flipOutX");	
								$(".top_teams_detils").addClass("animated fadeOut");
								$(".background_slider_main").css('margin-left','0%');
								
														setTimeout(function(){
																
																$(".top_team_1,.top_team_2,.team_name_1,.team_name_2,.top_teams_detils,.animater_team_1,.animater_team_2,.team_vs,.top_team_2").removeClass("animated fadeOutLeftBig fadeInRightBig flipOutX eng_team_top nz_team_top fadeOut sut_cap move_in_left sri_cap move_in_right sa_team_top flipInX sl_team_top sa_team_under sl_team_under fadeIn aus_cap ban_cap eng_cap ind_cap nez_cap pak_cap sri_cap sut_cap move_in_right fadeOutRightBig");
																con_1();
															},400);
												
												
												},4000);					
								
										
										},600);
												
									},400);
								
							},4000);
								
						},400);
					
				},4000);
				
						
			},400);
		
	},4000);
	
	
	};
});