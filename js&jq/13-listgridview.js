$(document).ready(function () {
    $(".cards .card .content button").on("click", function(e){
        $(this).children().toggleClass("plus minus").end()
            .next().slideToggle(200);
    });
    $("#listgridview div.theex .viewstyle button").on("click", function (){
        $(this).children().eq(0).toggleClass("list th");
        $(this).children().eq(1).text(($(this).children().is('.list'))? "List-View" : "Grid-View");
        $(this).parent().next().toggleClass("cards massive list")
            .children().toggleClass("card item")
            .each(function(){
                $(this).children().eq(0).toggleClass("avatar");
            });
        if($(this).children().is('.th')){
            $("#listgridview div.theex .list .item .description").each(function(){
                $(this).show(0);
            });
        } else {
            $(".cards .card .content button").each(function(){
                $(this).has(".plus").next().hide(0);
                $(this).has(".minus").next().show(0);
            });
        }
    });
});