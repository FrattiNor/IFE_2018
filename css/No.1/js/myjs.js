$(".button").click(function(){
    let c = $("#font").attr("class");
    if(c == "font color1"){
        $("#font").removeClass("color1");
        $("#font").addClass("color2");
        $("#bottom").removeClass("bottom1");
        $("#bottom").addClass("bottom2");
    }
    else{
        $("#font").removeClass("color2");
        $("#font").addClass("color1");
        $("#bottom").removeClass("bottom2");
        $("#bottom").addClass("bottom1");
    }
});
