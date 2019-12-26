$(document).ready(function () {
    $("#emailsuggest .field input").on("keyup keydown keypress focus", function () {
        if ($(this).val().length) {
            let inputval = $("#emailsuggest .field input").val();
            let emailName = (inputval.search("@") >= 0) ? inputval.slice(0, inputval.search("@")) : inputval;
            $(this).parent().find(".choices").slideDown().children("div").each(function () {
                $(this).find("span").detach().end()
                    .prepend(`<span>${emailName}</span>`);
            });
        } else {
            $(this).parent().find(".choices").slideUp();
        }
    });
    $("#emailsuggest .field input").blur(function () {
        $(this).parent().find(".choices").slideUp();
    });
    $("#emailsuggest .choices>div.choice").on("click", function () {
        $("#emailsuggest .field input").val($(this).text());
        $(this).parent().slideUp();
    });

});