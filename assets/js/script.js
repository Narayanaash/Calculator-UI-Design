$(document).ready(function(){
    $('.buttons > div').bind('touchstart mousedown',function(){
        $(this).addClass('active')
        window.navigator.vibrate(200); 
    }).bind('mouseup mouseleave touchend', function(){
        $(this).removeClass('active')
    });
});