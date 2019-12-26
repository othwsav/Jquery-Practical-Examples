$(document).ready(function(){
    let i = 1;
    let flatUI = ["#1abc9c","#9b59b6","#3498db","#2ecc71","#f39c12","#22a6b3","#c0392b","#bdc3c7","#d35400","#34495e"];
    var distance = 0;
    $("#Shuffle .shufflean .controlbut button.refresh").click(function(){
        $("#Shuffle .deck .card").fadeOut(700,function(){
            $(this).detach();
        });
        i=1;
    });
    $("#Shuffle .shufflean .controlbut button.add").on("click", function(e){
        if(i <= 25){
            distance = $("#Shuffle .inputs .field input[type='number']").val();
            for (i = 1; i <= 25; i++) {
                let flatindex = (flatUI.length < i)? ((i-1)%flatUI.length) : (i-1);
                $("#Shuffle .deck").prepend(`<div class="card">${i}</div>`).children().eq(0).css({
                    "background" : flatUI[flatindex]
                }).animate({
                    left : "-=" + ((i-1)*distance),
                    top : "+=" + (i-1)*distance
                });
            }
        }
    });
    let zIndexOrder = 99999;
    $("#Shuffle .deck").on("click", ".card", function(){
        console.log(distance);
        $("#Shuffle .deck .card").each(function (){
            $(this).animate({
                left : "+="+distance,
                top : "-="+distance
            },distance*100);
        });
        let realtop = Math.max(...$("#Shuffle .deck .card").map((e,i) => $(i).position().top)),
            realleft = Math.min(...$("#Shuffle .deck .card").map((e,i) => $(i).position().left));
        $(this).animate({
            left : "+="+500,
            top : "-="+30
        },300,function(){
            $(this).css("z-index", zIndexOrder);
        }).animate({
            left : realleft,//"-="+500,
            top : realtop //"-="+30
        },300);
        zIndexOrder--;
    });
});