$(document).ready(function(){
    $('.buttons > div').mousedown(function(){
        $(this).addClass('active')
    }).bind('mouseup mouseleave', function(){
        $(this).removeClass('active')
    });
});