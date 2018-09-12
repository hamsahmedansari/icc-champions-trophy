$(document).ready(function(e) {
    	
	$(".f1 .filter_left,.f1 .filter_right").click(function(e) {
        $(".f1 ul,.f11 ul").css('display' ,'block');
		$(".f1").css('display','none');
		$(".f11").css('display','block');
    });
	
	$(".f11 .filter_left,.f11 .filter_right").click(function(e) {
        $(".f1 ul,.f11 ul").css('display' ,'none');
		$(".f11").css('display','none');
		$(".f1").css('display','block');
    });
	
	$(".f3 .filter_left,.f3 .filter_right").click(function(e) {
        $(".f3 ul,.f33 ul").css('display' ,'block');
		$(".f3").css('display','none');
		$(".f33").css('display','block');
    });
	
	$(".f33 .filter_left,.f33 .filter_right").click(function(e) {
        $(".f3 ul,.f33 ul").css('display' ,'none');
		$(".f33").css('display','none');
		$(".f3").css('display','block');
    });

	$(".all").click(function(e) {
        $(".k1").html('All Teams');
		$(".a").removeClass('ab');
		$(this).addClass('ab');
		$(".eng ,.sri ,.aus ,.ind ,.new ,.sa ,.pak ,.ban").css('display','block');
		$(".no").html("");
    });
	$(".e1").click(function(e) {
        $(".k1").html('ENGLAND');
		$(".a").removeClass('ab');
		$(this).addClass('ab');
		$(".eng ,.sri ,.aus ,.ind ,.new ,.sa ,.pak ,.ban").css('display','none');
		$(".eng").css('display','block');
		$(".no").html("");
    });
	$(".s1").click(function(e) {
        $(".k1").html('SRI LANKA');
		$(".a").removeClass('ab');
		$(this).addClass('ab');
		$(".eng ,.sri ,.aus ,.ind ,.new ,.sa ,.pak ,.ban").css('display','none');
		$(".sri").css('display','block');
		$(".no").html("NO MATCH");
    });
	$(".i1").click(function(e) {
        $(".k1").html('INDIA');
		$(".a").removeClass('ab');
		$(this).addClass('ab');
		$(".eng ,.sri ,.aus ,.ind ,.new ,.sa ,.pak ,.ban").css('display','none');
		$(".ind").css('display','block');
		$(".no").html("NO MATCH");
    });
	$(".a1").click(function(e) {
        $(".k1").html('AUSTRALIA');
		$(".a").removeClass('ab');
		$(this).addClass('ab');
		$(".eng ,.sri ,.aus ,.ind ,.new ,.sa ,.pak ,.ban").css('display','none');
		$(".aus").css('display','block');
		$(".no").html("NO MATCH");
    });
	$(".n1").click(function(e) {
        $(".k1").html('NEW ZEALAND');
		$(".a").removeClass('ab');
		$(this).addClass('ab');
		$(".eng ,.sri ,.aus ,.ind ,.new ,.sa ,.pak ,.ban").css('display','none');
		$(".new").css('display','block');
    });
	$(".sa1").click(function(e) {
        $(".k1").html('SOUTH AFRICA');
		$(".a").removeClass('ab');
		$(this).addClass('ab');
		$(".eng ,.sri ,.aus ,.ind ,.new ,.sa ,.pak ,.ban").css('display','none');
		$(".sa").css('display','block');
		$(".no").html("NO MATCH");
    });
	$(".p1").click(function(e) {
        $(".k1").html('PAKISTAN');
		$(".a").removeClass('ab');
		$(this).addClass('ab');
		$(".eng ,.sri ,.aus ,.ind ,.new ,.sa ,.pak ,.ban").css('display','none');
		$(".pak").css('display','block');
    });
	$(".b1").click(function(e) {
        $(".k1").html('BANGLADESH');
		$(".a").removeClass('ab');
		$(this).addClass('ab');
		$(".eng ,.sri ,.aus ,.ind ,.new ,.sa ,.pak ,.ban").css('display','none');
		$(".ban").css('display','block');
    });
	
	$(".all1").click(function(e) {
        $(".v11").html('All Venues');
		$(".a").removeClass('ab');
		$(this).addClass('ab');
		$(".oval,.edg").css('display','block');
    });
	$(".e11").click(function(e) {
        $(".v11").html('Oval');
		$(".a").removeClass('ab');
		$(this).addClass('ab');
		$(".oval,.edg").css('display','none');
		$(".oval").css('display','block');
    });
	$(".s11").click(function(e) {
        $(".v11").html('Edgbaston');
		$(".a").removeClass('ab');
		$(this).addClass('ab');
		$(".oval,.edg").css('display','none');
		$(".edg").css('display','block');
    });
});