/*
 Collapsed Left Navigation
 */

$(".collapse-btn").click(function() {
    var mybtn = $(this);
    var par = mybtn.parents("li").children(".collapse");
    par.slideToggle(200);
    $(mybtn).toggleClass("close-menu");
});

$(function() {
    $("[data-toggle='tooltip']").tooltip();
});

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
$("#open-pacient-info").click(function() {
    $(".btn-group").toggleClass("open");
});

$(".i-menu").click(function() {
    $("a").removeClass("open-item-menu");
    $(this).toggleClass("open-item-menu");
});
$(".hide-btn-tab").click(function() {
    console.log("asda");
    $(".hide-btn-tab").fadeOut();
});
$(".show-btn").click(function() {
    $(".hide-btn-tab").fadeIn();
});
if (!('boxShadow' in document.body.style)) {
    document.body.setAttribute('class', 'noBoxShadow');
}
$(document).ready(function() {
    var $menu = $(".aside");
    $(window).scroll(function() {
        console.log($(this).scrollTop());
        margin = 70 - $(this).scrollTop();
        _margin = margin < 0 ? 0 : margin;
        console.log(_margin);
        $menu.css("margin-top", _margin);

    });//scroll
});