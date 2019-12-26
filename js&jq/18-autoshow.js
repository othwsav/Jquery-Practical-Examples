$(document).ready(function (){

    let texttoshow = ["1-First text showed-1","2-Second text showed-2","3-Third text showed-3","4-Fourth text showed-4","5-Fifth text showed-5","6-Sixth text showed-6"],
        i = 0;
    

    $("#autoshow .container:last-child .button").click(function (){

        // going left
        if($(this).has(".left").length){

            $(this).parent().find(".segment p").each(function(){
                $(this).css("right","auto").animate({
                    left : - $(this).width(),
                    opacity : "0"
                },200,"easeInQuad",function () {
                    i = (i == (texttoshow.length - 1))? 0 : i+1;
                    $(this).text(texttoshow[i]);
                    $(this).css({
                        "right" : "-" + $(this).outerWidth() +"px",
                        "left" : "auto"
                    });
                    $(this).animate({
                        right : ($(this).parent(".segment").outerWidth() - $(this).outerWidth())/2,
                        opacity : "1"
                    },200,"easeOutQuad");
                });
            });

        // going right
        } else {

            $(this).parent().find(".segment p").each(function(){
                $(this).css("left","auto").animate({
                    right : - $(this).width(),
                    opacity : "0"
                },200,"easeInQuad",function () {
                    i = (i == 0)? (texttoshow.length - 1) : i-1;
                    $(this).text(texttoshow[i]);
                    $(this).css({
                        "left" : "-" + $(this).outerWidth() +"px",
                        "right" : "auto"
                    });
                    $(this).animate({
                        left : ($(this).parent(".segment").outerWidth() - $(this).outerWidth())/2,
                        opacity : "1"
                    },200,"easeOutQuad");
                });
            });

        }
    });
    $("#autoshow .container:first-child div.button").click(function(){
        let newText = $("#autoshow .container.form input");
        if(newText.val().length){
            console.log(!(texttoshow.some(e=>e==newText)));
            if (!(texttoshow.some(e=>e==newText.val()))) {
                texttoshow.push(newText.val());
                $("#autoshow .positive.message").find(".header").text(newText.val()).end().slideDown().delay(2000).fadeOut();
            } else
                $("#autoshow .error.message.repeated").find(".header").text(newText.val()).end().slideDown().delay(2000).fadeOut();
        }else
            newText.parentsUntil(".theex").find(".error.message.blank").slideDown().delay(2000).fadeOut();
    });
    
});