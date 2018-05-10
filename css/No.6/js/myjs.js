$("li").click(function(){
    let x = $(this).find("img").attr("src");
    for(let i = 0; i < 5; i++){
        let y = $(".show").find("img").eq(i);
        y.removeClass("ani"+(i+1));
        if(y.css("z-index") == "3" && y.attr("src") == x){
            return;
        }
        if(y.css("z-index") == "3"){
            y.css("z-index","2");
        }
        else{
            y.css("z-index","1");
        }
        if(y.attr("src") == x){
            y.css("z-index","3");
            y.addClass("ani"+(i+1));
        }
    }
});
