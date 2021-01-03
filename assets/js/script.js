$(document).ready(function(){
    $('.buttons > div').bind('touchstart mousedown',function(){
        $(this).addClass('active')
    }).bind('mouseup mouseleave touchend', function(){
        $(this).removeClass('active')
    });
});