$(document).ready(function(e) {
    $(".res_img img").mouseenter(function(e) {
		$(".res_img img").removeClass('  scale scale_1');
		$(".res_img img").addClass('blur scale_1');
        $(this).addClass('scale');
		$(this).removeClass('blur scale_1');
		$("footer").addClass('scale_1');
    });
    $(".res_img img").mouseleave(function(e) {
		$(".res_img img").removeClass('  scale scale_1');
		$(".res_img img").removeClass('blur scale_1');
		$("footer").removeClass('scale_1');
    });
});