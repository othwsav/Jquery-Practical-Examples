$(document).ready(function (){
    let i = 1;
    let bounceparameters = [];

    $.fn.createBounceEffect = function (){
        let times = $(this).data("times"),
            distance = $(this).data("distance"),
            speed = $(this).data("speed");
        for (let j = 0; j < times; j++) {
            $(this).animate({
                top : "-="+distance
            },speed,"easeOutQuad").animate({
                top : "+="+distance
            },speed,"easeOutBounce");
        }
    }

    function checkingIfNumberIsCorrect (selector){
        let inputvalue = Number($(selector).val());
        if (!(Number.isInteger(inputvalue)))
            $(selector).parent().next(".error.message").slideDown().delay(2000).fadeOut();
        else {
            if (inputvalue <= 0){
                $(selector).parent().next(".error.message").slideDown().delay(2000).fadeOut();
            } else {
                bounceparameters.push(inputvalue);
            }
        }
    }
    $("#dynamicbounce .bouncegenerator").on("click", function(){
        bounceparameters = [];
        $("#dynamicbounce").find("input").each(function (){
            checkingIfNumberIsCorrect(this);
        });
        if(bounceparameters.length == 3){
            $("#dynamicbounce .buttonscon").prepend(`<div class='ui button' data-times='${bounceparameters[0]}' data-distance='${bounceparameters[1]}' data-speed='${bounceparameters[2]}'>Bounce${i}</div>`);
        }
        i++;
    });
    $("#dynamicbounce .buttonscon").on("click", "div.button", function(){
        $(this).createBounceEffect();
    });
});