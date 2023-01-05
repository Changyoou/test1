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
        if($(document).scrollTop() > 540){
            $(".container3__title").css('opacity','1',5000);
            $(".container3__title").animate({bottom:'30px'},1000);     
        }
        if($(document).scrollTop() > 640){
            $(".container3__content").css('opacity','1',5000);
            $(".container3__content").animate({bottom:'30px'},1000);     
        }
        if($(document).scrollTop() > 1040){
            $(".container3__title2").css('opacity','1',5000);
            $(".container3__title2").animate({bottom:'30px'},1000);     
        }
        if($(document).scrollTop() > 1140){
            $(".container3__box1").css('opacity','1',5000);
            $(".container3__box1").animate({bottom:'30px'},1000);     
        }
        if($(document).scrollTop() > 1540){
            $(".container4__title").css('opacity','1',5000);
            $(".container4__title").animate({bottom:'30px'},1000);     
        }
        if($(document).scrollTop() > 1540){
            $(".container4__subtitle").css('opacity','1',5000);
            $(".container4__subtitle").animate({bottom:'30px'},1000);     
        }
        if($(document).scrollTop() > 1840){
            $(".container4__content").css('opacity','1',5000);
            $(".container4__content").animate({bottom:'30px'},1000);     
        }
        if($(document).scrollTop() > 1840){
            $(".container4__content1").css('opacity','1',5000);
            $(".container4__content1").animate({bottom:'30px'},1000);     
        }
        if($(document).scrollTop() > 2040){
            $(".container4__info").css('opacity','1',5000);
            $(".container4__info").animate({bottom:'30px'},1000);     
        }
        if($(document).scrollTop() > 2240){
            $(".container4__info1").css('opacity','1',5000);
            $(".container4__info1").animate({bottom:'30px'},1000);     
        }
        if($(document).scrollTop() > 2540){
            $(".container5__title").css('opacity','1',5000);
            $(".container5__title").animate({bottom:'30px'},1000);     
        }
        if($(document).scrollTop() > 2540){
            $(".container5__subtitle").css('opacity','1',5000);
            $(".container5__subtitle").animate({bottom:'30px'},1000);     
        }
        if($(document).scrollTop() > 2840){
            $(".container5__content").css('opacity','1',5000);
            $(".container5__content").animate({bottom:'30px'},1000);     
        }
        if($(document).scrollTop() > 2840){
            $(".container5__content1").css('opacity','1',5000);
            $(".container5__content1").animate({bottom:'30px'},1000);     
        }
        if($(document).scrollTop() > 2840){
            $(".container5__content2").css('opacity','1',5000);
            $(".container5__content2").animate({bottom:'30px'},1000);     
        }
        if($(document).scrollTop() > 3040){
            $(".container5__info").css('opacity','1',5000);
            $(".container5__info").animate({bottom:'30px'},1000);     
        }
        if($(document).scrollTop() > 3240){
            $(".container5__info1").css('opacity','1',5000);
            $(".container5__info1").animate({bottom:'30px'},1000);     
        }
    });
});

$(document).ready(function(){    
    $(".container3__box1").hover(function(){
        $(this).css('color','#FFFFFF').css('background-color','#549417');      
    });
    $(".container3__box1").mouseleave(function(){
        $(this).css('color','#000').css('background-color','#FFFFFF').css('border','solid').css('border-color','#549417');       
    });
    $(".container3__box1").click(function(){
        $(this).css('background-color','#B84C25').css('border-color','#B84C25');         
    });
});