var visibleText = "Show Less";
var hiddenText = "Show More";

$(document).ready(function(){
    
    $(".info-box button").click(function(){
        $(this).toggleClass("visible");
        
        if($ (this).hasClass("visible") ){
           $(this).html(visibleText);
        }else{
           $(this).html(hiddenText);
           }
        
        $(this).next().toggleClass("visible");
    });
    
});


$(document).ready(function(){
    $(".one-nav").hover(function(){
        console.log("one");
        $(".hero").css("background-image", "url(images/b1.png)");
        },function(){
        $(".one").hide();
    });
});

$(document).ready(function(){
    $(".two-nav").hover(function(){
        console.log("two");
        $(".hero").css("background-image", "url(images/gbackground.jpg)");
        },function(){
        $(".two").hide();
    });
});

$(document).ready(function(){
    $(".three-nav").hover(function(){
        console.log("three");
        $(".hero").css("background-image", "url(images/xs1.png)");
        },function(){
        $(".three").hide();
    });
});

