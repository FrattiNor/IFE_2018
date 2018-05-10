$(".face").hover(
    function(){
        $(".ear-left").addClass("ear-left1");
        $(".ear-right").addClass("ear-right1");
        $(".eye-bottom2").addClass("eye-bottom3");
        $(".eye-core2").addClass("eye-core3");
        // $(".face-red2").addClass("face-red3");
        $(".face-red2").css("opacity","0.5");
        $(".face-red2").css("transition","3s");
        // $(".mouth-ani").addClass("mouth-ani2");
        $(".mouth-ani").css("border-radius","50%");
},
    function(){
        $(".ear-left").removeClass("ear-left1");
        $(".ear-right").removeClass("ear-right1");
        $(".eye-bottom2").removeClass("eye-bottom3");
        $(".eye-core2").removeClass("eye-core3");
        // $(".face-red2").removeClass("face-red3");
        $(".face-red2").css("opacity","0");
        $(".face-red2").css("transition","1s");
        // $(".mouth-ani").removeClass("mouth-ani2");
        $(".mouth-ani").css("border-radius","");
})
