/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//$(element).find("[rel='tooltip']").tooltip();

/* Load optimizer*/
$(".collapse-btn").click(function () {
    var mybtn = $(this);
    var par = mybtn.parents("li").children(".collapse");
    par.slideToggle(200);
    $(mybtn).toggleClass("close-menu");
});

$(function () {
    //$("[data-toggle='tooltip']").tooltip();
});
$(document).ready(function () {
    $('.sidebar-btn').click(function () {
        $(this).toggleClass("left-20");
    });
    $(".hide-form").click(function () {
        if ($(this).text() == 'Ascunde formularul') {
            $(this).text('Arată formularul');
        } else {
            $(this).text('Ascunde formularul');
        }
    });

});
$("#open-pacient-info").click(function () {
    $(".btn-group").toggleClass("open");
});

$(".i-menu").click(function () {
    $("a").removeClass("open-item-menu");
    $(this).toggleClass("open-item-menu");
});
$(".hide-btn-tab").click(function () {
    $(".hide-btn-tab").fadeOut();
});
$(".show-btn").click(function () {
    $(".hide-btn-tab").fadeIn();
});
if (!('boxShadow' in document.body.style)) {
    document.body.setAttribute('class', 'noBoxShadow');
}
$(document).ready(function () {
    var $menu = $(".aside");
    if ($(window).scrollTop() > 70) {
        $menu.css("margin-top", "0");
    }
    $(window).scroll(function () {

        margin = 70 - $(this).scrollTop();
        _margin = margin < 0 ? 0 : margin;
        $menu.css("margin-top", _margin);

    });//scroll
    
    // auto adjust the height of
    $('#container').on( 'keyup', 'textarea', function (e){
        $(this).css('height', 'auto' );
        $(this).height( this.scrollHeight );
    });
    $('#container').find( 'textarea' ).keyup();
    $("#refuz-check").change(function(){
        $("#accept").slideToggle();
        $("#refuz").slideToggle();
    });
	
	$(".tree-menu").click(function(){
		var $p = $(this).parent("li");
		$p.toggleClass("open-submenu");
		console.log("test");
	});
});

