let label = $(".form__label");
let wrapper = $(".form__wrapper");
let input = $(".form__input");

for(let i = 0; i < 2; i++){
    input.eq(i).focus(function(){
        label.eq(i).css("top","-10px");
        label.eq(i).css("font-size","15px");
        wrapper.eq(i).removeClass("form__wrapper3");
        wrapper.eq(i).addClass("form__wrapper2");
    })
    input.eq(i).blur(function(){
        let x = input.eq(i).val();
        if(!x){
            label.eq(i).css("top","");
            label.eq(i).css("font-size","");
        }
        wrapper.eq(i).removeClass("form__wrapper2");
        wrapper.eq(i).addClass("form__wrapper3");
        big();
    })
}

let big = function(){
    if(input.eq(0).val() != "" && input.eq(1).val() != ""){
        $(".btn").eq(0).addClass("btn2");
    }
    else{
        $(".btn").eq(0).removeClass("btn2");
    }
}



// $("#email").focus(function(){
//     label.eq(0).css("top","-10px");
//     label.eq(0).css("font-size","15px");
//     wrapper.eq(0).removeClass("form__wrapper3");
//     wrapper.eq(0).addClass("form__wrapper2");
// });
// $("#email").blur(function(){
//     let x = input.eq(0).val();
//     if(!x){
//         label.eq(0).css("top","");
//         label.eq(0).css("font-size","");
//     }
//     wrapper.eq(0).removeClass("form__wrapper2");
//     wrapper.eq(0).addClass("form__wrapper3");
// });
// $("#password").focus(function(){
//     label.eq(1).css("top","-10px");
//     label.eq(1).css("font-size","15px");
//     wrapper.eq(1).removeClass("form__wrapper3");
//     wrapper.eq(1).addClass("form__wrapper2");
// });
// $("#password").blur(function(){
//     let x = input.eq(1).val();
//     if(!x){
//         label.eq(1).css("top","");
//         label.eq(1).css("font-size","");
//     }
//     wrapper.eq(1).removeClass("form__wrapper2");
//     wrapper.eq(1).addClass("form__wrapper3");
// });
