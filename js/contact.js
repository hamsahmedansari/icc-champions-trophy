$(document).ready(function(e) {
    $(".img1").mouseenter(function(e) {
        $(".img_so").addClass("img_so1");
		$(this).removeClass("img_so1");
    });
    $(".img2").mouseenter(function(e) {
        $(".img_so").addClass("img_so1");
		$(this).removeClass("img_so1");
    });
    $(".img3").mouseenter(function(e) {
        $(".img_so").addClass("img_so1");
		$(this).removeClass("img_so1");
    });
    $(".img4").mouseenter(function(e) {
        $(".img_so").addClass("img_so1");
		$(this).removeClass("img_so1");
    });
    $(".img_so").mouseleave(function(e) {
        $(".img_so").removeClass("img_so1");
    });
	function ani1(){
		        $(".f1").addClass("f11");
		setTimeout(function(){
				
			$(".f3").css('display','block');	
				
			setTimeout(function(){
					
					$(".f3").addClass("f22");
					
					setTimeout(function(){
							
							$(".f1_top_1").addClass("f2_1");
							$(".f1_top_2").addClass("f2_2");
							$(".f1_bottom_1").addClass("f2_3");
							$(".f1_bottom_2").addClass("f2_4");
							$(".f2_line_1,.f2_line_2,.f2_line_3,.f2_line_4").css('transition-duration','0s');
							$(".f2_line_1,.f2_line_2,.f2_line_3,.f2_line_4").addClass('zerodeg');
							$(".f2_line_1").addClass('top_class');
							$(".f2_line_2").addClass('right_class');
							$(".f2_line_3").addClass('left_class');
							$(".f2_line_4").addClass('bottom_class');
							setTimeout(function(){
							$(".f2_line_1,.f2_line_2,.f2_line_3,.f2_line_4").css('transition-duration','0.5s');
								
									$(".f2_line_1").addClass("f3_1");
									$(".f2_line_2").addClass("f3_2");
									$(".f2_line_3").addClass("f3_3");
									$(".f2_line_4").addClass("f3_4");
									setTimeout(function(){
											
											$(".f2_line_1").addClass("f3_1_1");
											$(".f2_line_2").addClass("f3_2_2");
											$(".f2_line_3").addClass("f3_3_3");
											$(".f2_line_4").addClass("f3_4_4");
													
										
										},300);
								},100);
							setTimeout(function(){
							
								
							$(".f1,.f2,.f3").css('transition-duration','0s');
							$(".f1_top_1").removeClass("f2_1");
							$(".f1_top_2").removeClass("f2_2");
							$(".f1_bottom_1").removeClass("f2_3");
							$(".f1_bottom_2").removeClass("f2_4");
								setTimeout(function(){
									
							$(".f1,.f2,.f3").css('transition-duration','0.5s');
							$(".f1").removeClass("f11");
							$(".f3").removeClass("f22");
									setTimeout(function(){
										
											
											$(".f2_line_1,.f2_line_2,.f2_line_3,.f2_line_4").css('transition-duration','0s');
											$(".f2_line_1,.f2_line_2,.f2_line_3,.f2_line_4").removeClass('zerodeg');
											$(".f2_line_1").removeClass('top_class');
											$(".f2_line_2").removeClass('right_class');
											$(".f2_line_3").removeClass('left_class');
											$(".f2_line_4").removeClass('bottom_class');
											$(".f2_line_1").removeClass("f3_1");
											$(".f2_line_2").removeClass("f3_2");
											$(".f2_line_3").removeClass("f3_3");
											$(".f2_line_4").removeClass("f3_4");
											$(".f2_line_1").removeClass("f3_1_1");
											$(".f2_line_2").removeClass("f3_2_2");
											$(".f2_line_3").removeClass("f3_3_3");
											$(".f2_line_4").removeClass("f3_4_4");
											
											
											
										},400);
									},500);
								},500);
						},1000);
					
				},50);
			
			},100);

		};
	function ani2(){
		        $(".f1").addClass("f11");
			$(".f3").css('display','none');	
			setTimeout(function(){
				
		$(".f1_top_1").css('left','200%');
		$(".f1_top_2").css('top','200%');
		$(".f1_bottom_1").css('bottom','200%');
		$(".f1_bottom_2").css('right','200%');
		setTimeout(function(){
											
											document.getElementById("icc_name").innerHTML = document.getElementById("first_name").value + " " + document.getElementById("last_name").value;
											document.getElementById("icc_no").innerHTML = document.getElementById("no").value;
											
											document.getElementById("icc_f_name").innerHTML = document.getElementById("first_name").value;
											
											document.getElementById("icc_comment").innerHTML = document.getElementById("comment").value;
											$(".first_1").css('display','none');
											$(".result").css('display','block');
											$(".result").addClass('animated flipInX');
											
												},1000);
				},500);

		};
	function my700(){
			
			
				
				
				var first = document.getElementById('first_name').value;
				var last = document.getElementById('last_name').value;
				var email = document.getElementById('email').value;
				var tele = document.getElementById('no').value;
				var stm = document.getElementById('stmb').value;
				
				
				reg=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9])+\.([A-Za-z]{2,4})$/;
				
				if(first.length == 0)
				{
					$("#first_name").addClass("dander_red_1");
					$("#stmb").html("required");
				}
				else 
				{
					$("#first_name").removeClass("dander_red_1");
					$("#stmb").html("");
				}
				if(last.length == 0)
				{
					$("#last_name").addClass("dander_red_1");
					$("#stmb2").html("required");
				}
				else 
				{
					$("#last_name").removeClass("dander_red_1");
					$("#stmb2").html("");
				}
				if (email.length ==0)
				{
					$("#email").addClass("dander_red_1");
					$("#stmb3").html("required");
				}
				else if(reg.test(email)==false)
				{
					$("#email").addClass("dander_red_1");
					$("#stmb3").html("wrong entry");
						
				}
				else if(email.length !=0)
				{
					$("#email").removeClass("dander_red_1");
					$("#stmb3").html("");
				}
				if (tele.length ==0)
				{
					$("#no").addClass("dander_red_1");
					$("#stmb4").html("required");
				}
				else 
				{
					$("#no").removeClass("dander_red_1");
					$("#stmb4").html("");
				}
				
				if(first.length !=0 && last.length !==0 && reg.test(email) == true && tele.length !=0)
				{	
					$(".form_1").addClass('animated fadeOut');
					setTimeout(function(){	
						$(".form_1").css('display','none');
						ani1();
						setTimeout(function(){
								
								$(".sec_1").css('display','block');
								$(".sec_1").addClass('animated fadeIn');
							},2900);
					},400);
				}
			
		};
	$("#btn1").click(function(e) {
        my700();
		
    });
	$("#btn2").click(function(e) {
		$(".sec_1").addClass('animated fadeOut');
					setTimeout(function(){	
						$(".sec_1").css('display','none');
						ani2();
					},400);
        
		 
    });
	
	$(".back").click(function(e) {
        $(".main_contact").removeClass("animated fadeIn");
        $(".main_contact").addClass("animated fadeOut");
		setTimeout(function(){
		$(".main_contact").css('display','none');
		// white
		$(".f1_top_1").removeClass('animated slideInLeft');
		$(".f1_top_2").removeClass('animated slideInDown');
		$(".f1_bottom_2").removeClass('animated slideInRight');
		$(".f1_bottom_1").removeClass('animated slideInUp');
    
		//form1
		$(".form_1").css('display','none');
		$(".form_1").removeClass('animated fadeOut');
		$(".form_1").removeClass('animated fadeIn fadeOut');
		$(".sec_1").css('display','none');
		$(".sec_1").removeClass('animated fadeIn');
		$(".result").removeClass('animated flipInX')

		
		},400);
    });
	$(".Categories-button").click(function(e) {
        $(".main_contact").removeClass("animated fadeOut");
		$(".main_contact").css('display','block');
		$(".main_contact").addClass("animated fadeIn");
		// white
		$(".f1_top_1").addClass('animated slideInLeft');
		$(".f1_top_2").addClass('animated slideInDown');
		$(".f1_bottom_2").addClass('animated slideInRight');
		$(".f1_bottom_1").addClass('animated slideInUp');
		setTimeout(function(){
		//form1
		$(".form_1").css('display','block');
		$(".form_1").addClass('animated fadeIn');
		},800);
    });
	
	$(".conform2").click(function(e) {
        location.reload();
    });
	$(".conform").click(function(e) {
    	$(".conform,.conform2").addClass('animated fadeOut');
		setTimeout(function(){
				
				$(".name").css('display','block');
				$("#icc_f_name").addClass('animated fadeIn');
				$(".back").css('display','none');
				$(".back2").css('display','block');
				
			},500);
	});
	$(".back2").click(function(e) {
        location.reload();
    });
	
});