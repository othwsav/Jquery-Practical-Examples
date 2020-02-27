$(document).ready(function () {
    $("section#responsiveSlider .galleryimg img").on("click", function(){
        if($(this).is(":not(.focused)")){
            $("img.focused").removeClass("focused").addClass("disabled");
            $(this).addClass("focused").removeClass("disabled");
            $("div.masterimg img").hide(0).attr("src", $(this).attr("src")).fadeIn(250);
        }
    });
    
    $("section#responsiveSlider div.masterimg button").on("click", function(){
        let Fimg = $("section#responsiveSlider .galleryimg img.focused")
        if($(this).has(".left").length){
            if(Fimg.is(":first-child"))
                $("section#responsiveSlider .galleryimg img:last-child").click()
            else
                Fimg.prev().click();
        }else{
            if($(this).has(".right").length){
                if(Fimg.is(":last-child"))
                    $("section#responsiveSlider .galleryimg img:first-child").click()
                else
                    Fimg.next().click();
            }
        }
    });





});