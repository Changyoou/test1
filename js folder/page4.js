$(document).ready(function(){    
    let $ul = $(".nav__list"),
    $menu = $(".nav__menu");

    $($menu).click(function(){
        $ul.toggleClass("menu-click")
    });
});
$(document).ready(function(){    
    $(".nav__link").hover(function(){
        $(this).css('font-size','18px').css('color','#B84C25')
    });
    $(".nav__link").mouseleave(function(){
        $(this).css('font-size','16px').css('color','#FFFFFF')
    });
    $(".nav__menu").hover(function(){
        $(this).css('color','#B84C25')
    });
    $(".nav__menu").mouseleave(function(){
        $(this).css('color','#FFFFFF')
    });
});

$(document).ready(function(){    
    $(".container2__box1").css('opacity','1',1000)
    $(".container2__box1").animate({left:'20px'},45);
});

$(document).ready(function(){    
    $(window).scroll(function(){
        if($(document).scrollTop() > 440){
            $(".container3__title").css('opacity','1',5000);
            $(".container3__title").animate({bottom:'30px'},1000);     
        }
        if($(document).scrollTop() > 540){
            $(".container3__content").css('opacity','1',5000);
            $(".container3__content").animate({bottom:'30px'},1000);     
        }
        if($(document).scrollTop() > 540){
            $(".container3__info").css('opacity','1',5000);
            $(".container3__info").animate({bottom:'30px'},1000);     
        }
        if($(document).scrollTop() > 640){
            $(".container3__subtitle").css('opacity','1',5000);
            $(".container3__subtitle").animate({bottom:'30px'},1000);     
        }
        if($(document).scrollTop() > 640){
            $(".container3__img__box").css('opacity','1',5000);
            $(".container3__img__box").animate({bottom:'30px'},1000);     
        }
        if($(document).scrollTop() > 840){
            $(".container3__subtitle1").css('opacity','1',5000);
            $(".container3__subtitle1").animate({bottom:'30px'},1000);     
        }
        if($(document).scrollTop() > 840){
            $(".container3__subtitle2").css('opacity','1',5000);
            $(".container3__subtitle2").animate({bottom:'30px'},1000);     
        }
        if($(document).scrollTop() > 940){
            $(".container3__but").css('opacity','1',5000);
            $(".container3__but").animate({bottom:'30px'},1000);     
        }
        if($(document).scrollTop() > 940){
            $(".container3__but10").css('opacity','1',5000);
            $(".container3__but10").animate({bottom:'30px'},1000);     
        }
        if($(document).scrollTop() > 940){
            $(".container3__but11").css('opacity','1',5000);
            $(".container3__but11").animate({bottom:'30px'},1000);     
        }
        if($(document).scrollTop() > 940){
            $(".container3__but12").css('opacity','1',5000);
            $(".container3__but12").animate({bottom:'30px'},1000);     
        }
        if($(document).scrollTop() > 940){
            $(".container3__but13").css('opacity','1',5000);
            $(".container3__but13").animate({bottom:'30px'},1000);     
        }
        if($(document).scrollTop() > 940){
            $(".container3__but__cap").css('opacity','1',5000);
            $(".container3__but__cap").animate({bottom:'0px'},1000);     
        }
        if($(document).scrollTop() > 940){
            $(".container3__input__word").css('opacity','1',5000);
            $(".container3__input__word").animate({bottom:'30px'},1000);     
        }
        if($(document).scrollTop() > 1000){
            $(".container3__input").css('opacity','1',5000);
            $(".container3__input").animate({bottom:'30px'},1000);     
        }
        if($(document).scrollTop() > 1140){
            $(".container3__but1").css('opacity','1',5000);
            $(".container3__but1").animate({bottom:'30px'},1000);     
        }             
    });
});

$(document).ready(function(){    
    $(".container3__but1").hover(function(){
        $(this).css('color','#FFFFFF').css('background-color','#549417');      
    });
    $(".container3__but1").mouseleave(function(){
        $(this).css('color','#000').css('background-color','#FFFFFF').css('border','solid').css('border-color','#549417');       
    });
    $(".container3__but1").click(function(){
        $(this).css('background-color','#B84C25').css('border-color','#B84C25');         
    });
});

$(document).ready(function(){    
    
    
    $(".container3__but10").click(function(){
        $(this).css('color','#FFFFFF').css('background-color','#549417').css('border-color','#FFFFFF').css('border','solid 1px') ; 
        $(".container3__but11").css('color','#000').css('background-color','#DEDEDE').css('border-color','#000').css('border','solid 1px') ;               
    });
    $(".container3__but11").click(function(){
        $(this).css('color','#FFFFFF').css('background-color','#549417').css('border-color','#FFFFFF').css('border','solid 1px') ; 
        $(".container3__but10").css('color','#000').css('background-color','#DEDEDE').css('border-color','#000').css('border','solid 1px') ;               
    });
    $(".container3__but12").click(function(){
        $(this).css('color','#FFFFFF').css('background-color','#549417').css('border-color','#FFFFFF').css('border','solid 1px') ; 
        $(".container3__but13").css('color','#000').css('background-color','#DEDEDE').css('border-color','#000').css('border','solid 1px') ;               
    });
    $(".container3__but13").click(function(){
        $(this).css('color','#FFFFFF').css('background-color','#549417').css('border-color','#FFFFFF').css('border','solid 1px') ; 
        $(".container3__but12").css('color','#000').css('background-color','#DEDEDE').css('border-color','#000').css('border','solid 1px') ;               
    });


    
});