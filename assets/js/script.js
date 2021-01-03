$(document).ready(function(){
    $('.buttons > div').bind('touchstart mousedown',function(){
        $(this).addClass('active')
        window.navigator.vibrate(100); 
    }).bind('mouseup mouseleave touchend', function(){
        $(this).removeClass('active')
    });
});