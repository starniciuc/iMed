/*
	Collapsed Left Navigation
 */

$(".collapse-btn").click(function() {
		var mybtn = $(this);
		var par = mybtn.parents("li").children(".collapse");
		par.slideToggle(200);
		$(mybtn).toggleClass("close-menu");
});

$(function () { $("[data-toggle='tooltip']").tooltip(); });

/*$(document).ready(function() {
  $('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
    $('#top-nav').collapse('hide');
  });
});*/

$(document).ready(function() {
	$('[data-toggle=offcanvas]').click(function() {
		$('.row-offcanvas').toggleClass('active');
	});
	$('.datepicker').datepicker();
});
$(document).ready(function() {
	$('.sidebar-btn').click(function() {
			$(this).toggleClass("left-20");
	});
	$(".hide-form").click(function() {
		if ($(this).text() == 'Ascunde formularul') {
			$(this).text('Arată formularul');
		} else {
			$(this).text('Ascunde formularul');
		}
		});

});



