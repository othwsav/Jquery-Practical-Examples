$(document).ready(function(){
    colorjoe.hsl('hslPicker', 'red', [
        'currentColor',
        ['fields', {space: 'HSLA', limit: 100}],
        ['fields', {space: 'CMYKA', limit: 100}],
        'hex',
    ]);
    $('div.choosecolor .addcolor').on("click", function(e) {

        e.preventDefault();
        let CurColor = $("div.currentColor").css("background-color");
        let colorpat = "<li style='background-color :" + CurColor + "' data-color='" + CurColor + "'></li>";
        $("div.colors ul").prepend(colorpat);

        $("ul.col li").on("click",function(){
            e.preventDefault();
            $("p.colored").css("color", $(this).data("color"));
        });

    });
    
});