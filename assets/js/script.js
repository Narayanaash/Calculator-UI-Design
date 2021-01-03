$(document).ready(function(){
    $('.buttons > div').mousedown(function(){
        $(this).addClass('active')
    }).mouseup(function(){
        $(this).removeClass('active')
    });
});