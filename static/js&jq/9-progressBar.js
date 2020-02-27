$(document).ready(function (){
    $("input.pervalue").on('keyup change',function(){
        let percentage = (Number($("input.pervalue").val()) > 100)? 100 : (Number($("input.pervalue").val()) < 0)? 0 : Number($("input.pervalue").val()),
            invartedPer = 100 - percentage;
            $("div.progress div.bar.normal").data("percentage", percentage);
            $("div.progress div.bar.invert").data("percentage", invartedPer);
        // $("div.progress div.bar.normal .progress").text(percentage + "%");
        // $("div.progress div.bar.invert .progress").text(invartedPer + "%");
        // $("div.progress div.bar.normal,div.bar.invert").css("width",$(this).children().text());
        // $("div.progress div.bar.invert").animate({
        //     width : `${invartedPer}%`
        // },100);
        // $("div.progress div.bar.normal").animate({
        //     width : `${percentage}%`
        // },100);
        $("div.ui.progress div.bar div.progress").each(function(){
            let perval = $(this).parent().data("percentage") +"%";
            $(this).text(perval);
            $(this).parent().animate({
                width : perval
            },0);
        });
    });
    

});