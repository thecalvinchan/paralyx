$(document).ready(main);

function main () {
    init();
    $(document).scroll(function(){
        renderFrames(window.scrollY);
    });
}

function init() {
    $('.move-down').each(function(index) {
        var parallaxLevel = $(this).attr('parallax-level') || 1;
        console.log(parallaxLevel);
        $(this).css({
            "top" : -100 * parallaxLevel + "px"
        });
    });
    $('.move-up').each(function(index) {
        var parallaxLevel = $(this).attr('parallax-level') || 1;
        $(this).css({
            "bottom" : -100 * parallaxLevel + "px"
        });
    });
    $('.move-left').each(function(index) {
        var parallaxLevel = $(this).attr('parallax-level') || 1;
        $(this).css({
            "right" : -100 * parallaxLevel + "px"
        });
    });
    $('.move-right').each(function(index) {
        var parallaxLevel = $(this).attr('parallax-level') || 1;
        $(this).css({
            "left" : -100 * parallaxLevel + "px"
        });
    });
}

function renderFrames(curScroll) {
    $('.parallax-frame').each(function(index) {
        var parallaxStart = $(this).attr('parallax-start');
        if (curScroll < parallaxStart)
            return;
        var parallaxEnd = $(this).attr('parallax-end');
        var delta = parallaxEnd-parallaxStart,
            ratio = (curScroll-parallaxStart)/delta;
        $(this).find('.parallax-obj').each(function() {
            var parallaxLevel = $(this).attr('parallax-level');
            console.log(parallaxLevel);
            if ($(this).hasClass('move-down')) {
                $(this).css('top', (-100*parallaxLevel*(1-ratio))); 
            } else if ($(this).hasClass('move-up')) {
                $(this).css('bottom', (-100*parallaxLevel*(1-ratio))); 
            } else if ($(this).hasClass('move-left')) {
                $(this).css('right', (-100*parallaxLevel*(1-ratio))); 
            } else if ($(this).hasClass('move-right')) {
                $(this).css('left', (-100*parallaxLevel*(1-ratio))); 
            }
        });
    });
}
