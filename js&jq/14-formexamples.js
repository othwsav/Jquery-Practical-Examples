$(document).ready(function(){
    // Preventing the form from submiting.
    $("#formexamples input, #formexamples textarea").on("submit", function(ev) {
        ev.preventDefault()
    });
    // Hide placeholder on Focus & Restore on Blur.
    let currentP;
    $("#formexamples [placeholder]").on("focus", function (){
        currentP = $(this).prop("placeholder");
        $(this).prop("placeholder", "");
    }).on("blur", function(){
        $(this).prop("placeholder", currentP);
    });

    // Show Warning Message if a required field is blank, and a Success one if all required fields are filled.
    $("#formexamples [required]").on("blur", function (){
        if($(this).val() == ""){
            $(this).next(".error.message").slideDown().delay(2000).fadeOut();
        } else {
            let a = 0;
            $("#formexamples [required]").each(function() {
                if($(this).val() != "")
                    a++
            });
                if(a == $("#formexamples [required]").length)
                    $(".message.success").slideDown().delay(2000).fadeOut();
            
        }
    });

    // Add an asterisk character at the end of each required input.

    $("#formexamples .field").has("[required]").find("label").append("<span class='asterisk'>*</span>");

    //change input direction and placeholders depend on the language
        
    let placeholderAr = ["أحمد","علي","أبجد","السلام عليكم","لصنع اشارات اضغط على مساحة أو فاصلة"];
    let placeholderEn = ["John","Wack","Abc123","Hello, World!...","To create Tags, click Space or comma"];

    $("#formexamples input, #formexamples textarea").on("keyup", function(){

        if($(this).val().charCodeAt(0) > 200){
            $("#formexamples input, #formexamples textarea").each(function (i){
                $(this).css("direction", "rtl");
                $(this).attr("placeholder", placeholderAr[i]);
            });
        }else{
            $("#formexamples input, #formexamples textarea").each(function (i){
                $(this).css("direction", "ltr");
                $(this).attr("placeholder", placeholderEn[i]);
            });
        }
    });

    //convert input text to tags
    function addTag (element,value){
        let tagSpanElement = "<span class='span-tag'>"+ value +"<i class='close icon'></i></span>";
        $(element).next(".tags").append(tagSpanElement);
    }
    let tagsValueArr = [];
    $("#formexamples input.tag").on("keyup", function(e){
        let keyPressedCode = e.keyCode || e.which;
        e.preventDefault();
        if(keyPressedCode == 188 || keyPressedCode == 32){
            if($(this).val().slice(0, -1) != ""){
                let tagValue = $(this).val().slice(0, -1);
                if(tagsValueArr.length > 1){
                    if(tagsValueArr.indexOf(tagValue) == -1){
                        tagsValueArr.push(tagValue);
                        addTag(this, tagsValueArr[tagsValueArr.length - 1]);
                    } else{
                        $(this).prev(".error.message").find('.header').text(tagValue)
                        $(this).prev(".error.message").slideDown().delay(2000).fadeOut();
                    }
                } else {
                    tagsValueArr.push(tagValue);
                    addTag(this, tagsValueArr[tagsValueArr.length - 1]);
                }
            }
            $(this).val("");
        }
    });
    $("#formexamples div.tags").on("click", ".span-tag i.close", function(){
        let spantag = $(this).parent(".span-tag");
        tagsValueArr.splice(tagsValueArr.indexOf(spantag.text()),1);
        spantag.fadeOut(500,function(){
            $(this).detach();
        });

    });

    //showing trimmed textarea text in paragraph
    let maxlength = Number($("#formexamples .trimmedtext").data("maxlength")),
        trimmedtext;
    $("#formexamples span.length").text($("#formexamples textarea").val().length + "/" + maxlength);
    $("#formexamples textarea").on("keypress keyup keydown", function(){
        if($(this).val().length > maxlength){
            trimmedtext = $(this).val().substr(0, maxlength) + "...";
            $("#formexamples span.length").addClass("warning");
        }else{
            trimmedtext = $(this).val();
            $("#formexamples span.length").removeClass("warning");
        }
        $("#formexamples .trimmedtext p").text(trimmedtext);
        $("#formexamples span.length").text($(this).val().length + "/" + maxlength);
        if($(this).val().length == 0)
            $("#formexamples .trimmedtext p").text("Write something in Textarea");
    });
});