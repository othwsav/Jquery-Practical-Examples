$(document).ready(function(){
    let newplan = $("#todolist form input");
    $("#todolist form").on("submit", function(e){
        e.preventDefault();
        if(newplan.val() != ""){
            $(` <div class="item">
                    <div class="content">
                        <div class="header">${newplan.val()}</div>
                    </div>
                </div>`).prependTo("#todolist .programlist>div.list");
            newplan.val("");
        }else
            newplan.parent().next(".error.message").slideDown().delay(2000).fadeOut();
    });
    $("#todolist .programlist").on("dblclick", ".item", function(){
        $(this).css("text-decoration", "line-through").delay(200).fadeOut(700, function(){
            $(this).detach();
        });
    });

});