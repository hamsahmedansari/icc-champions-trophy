$(document).ready(function(e) {
    $(".img").mouseenter(function(e) {
		$(".img").removeClass('  scale scale_1');
		$(".img").addClass('blur scale_1');
        $(this).addClass('scale');
		$(this).removeClass('blur scale_1');
		$("footer").addClass('scale_1');
    });
    $(".img").mouseleave(function(e) {
		$(".img").removeClass('  scale scale_1');
		$(".img").removeClass('blur scale_1');
		$("footer").removeClass('scale_1');
    });
});