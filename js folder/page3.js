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
            $(".container3__title__box").css('opacity','1',5000);
            $(".container3__title__box").animate({bottom:'30px'},1000);     
        }
        if($(document).scrollTop() > 740){
            $(".container3__name").css('opacity','1',5000);
            $(".container3__name").animate({bottom:'30px'},1000);     
        }
        if($(document).scrollTop() > 840){
            $(".container3__name__intro").css('opacity','1',5000);
            $(".container3__name__intro").animate({bottom:'30px'},1000);     
        }
        if($(document).scrollTop() > 1840){
            $(".container4__name").css('opacity','1',5000);
            $(".container4__name").animate({bottom:'30px'},1000);     
        }
        if($(document).scrollTop() > 1940){
            $(".container4__content").css('opacity','1',5000);
            $(".container4__content").animate({bottom:'30px'},1000);     
        }
    });
});