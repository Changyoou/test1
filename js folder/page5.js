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
            $(".container3__title1").css('opacity','1',5000);
            $(".container3__title1").animate({bottom:'30px'},1000);     
        }
        if($(document).scrollTop() > 1340){
            $(".container3__img__box").css('opacity','1',5000);
            $(".container3__img__box").animate({bottom:'30px'},1000);     
        }
        if($(document).scrollTop() > 1640){
            $(".container3__title2").css('opacity','1',5000);
            $(".container3__title2").animate({bottom:'30px'},1000);     
        }
        if($(document).scrollTop() > 1940){
            $(".container3__img__box1").css('opacity','1',5000);
            $(".container3__img__box1").animate({bottom:'30px'},1000);     
        }
        if($(document).scrollTop() > 2540){
            $(".container4__title2").css('opacity','1',5000);
            $(".container4__title2").animate({bottom:'30px'},1000);     
        }
        if($(document).scrollTop() > 2640){
            $(".container4__intro").css('opacity','1',5000);
            $(".container4__intro").animate({bottom:'30px'},1000);     
        }
        if($(document).scrollTop() > 2840){
            $(".container4__content1").css('opacity','1',5000);
            $(".container4__content1").animate({bottom:'30px'},1000);     
        }
        if($(document).scrollTop() > 3540){
            $(".container4__title1").css('opacity','1',5000);
            $(".container4__title1").animate({bottom:'30px'},1000);     
        }
        if($(document).scrollTop() > 3840){
            $(".container4__img__box").css('opacity','1',5000);
            $(".container4__img__box").animate({bottom:'30px'},1000);     
        }
        if($(document).scrollTop() > 4240){
            $(".container4__title3").css('opacity','1',5000);
            $(".container4__title3").animate({bottom:'30px'},1000);     
        }
        if($(document).scrollTop() > 4440){
            $(".container4__subtitle").css('opacity','1',5000);
            $(".container4__subtitle").animate({bottom:'30px'},1000);     
        }
        if($(document).scrollTop() > 4640){
            $(".container4__content").css('opacity','1',5000);
            $(".container4__content").animate({bottom:'30px'},1000);     
        }
        if($(document).scrollTop() > 4840){
            $(".container4__img__box1").css('opacity','1',5000);
            $(".container4__img__box1").animate({bottom:'30px'},1000);     
        }
        
    });
});