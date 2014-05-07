$(document).ready(main);

function main () {
    init();
    $(document).scroll(function(){
        renderFrames(window.scrollY);
    });
}

function init() {
    $('.paralyx-obj').css({
        'position' : 'relative'
    });
    $('.move-down').each(function(index) {
        var parallaxLevel = $(this).attr('paralyx-level') || 1;
        console.log(parallaxLevel);
        $(this).css({
            'top' : -100 * parallaxLevel + 'px'
        });
    });
    $('.move-up').each(function(index) {
        var parallaxLevel = $(this).attr('paralyx-level') || 1;
        $(this).css({
            'bottom' : -100 * parallaxLevel + 'px'
        });
    });
    $('.move-left').each(function(index) {
        var parallaxLevel = $(this).attr('paralyx-level') || 1;
        $(this).css({
            'right' : -100 * parallaxLevel + 'px'
        });
    });
    $('.move-right').each(function(index) {
        var parallaxLevel = $(this).attr('paralyx-level') || 1;
        $(this).css({
            'left' : -100 * parallaxLevel + 'px'
        });
    });
}

function renderFrames(curScroll) {
    $('.paralyx-frame').each(function(index) {
        var parallaxStart = $(this).attr('paralyx-start');
        if (curScroll < parallaxStart)
            return;
        var parallaxEnd = $(this).attr('paralyx-end');
        var delta = parallaxEnd-parallaxStart,
            ratio = (curScroll-parallaxStart)/delta;
        $(this).find('.paralyx-obj').each(function() {
            var parallaxLevel = $(this).attr('paralyx-level');
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
