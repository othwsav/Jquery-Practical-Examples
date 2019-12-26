$(document).ready(function(){
    $("div.showsidemenu, div.shadow").on("click" ,function(){
        togglePosition($("div.showsidemenu").parent(".menu"));
    });
    function togglePosition(element){
        element.toggleClass("visible")
        if(element.hasClass("visible")){
            element.animate({
                left: 0
            },200);
            $("div.shadow").show(0);
            $("div.showsidemenu").css({
                "color": "black",
                "background": "white",
                "border": "1px solid #dedede"
            });
        }else{
            element.animate({
                left: "-86px"
            },200);
            $("div.shadow").hide(0);
            $("div.showsidemenu").css({
                "color": "white",
                "background": "black",
                "border": "none"
            });
        }
    }
});