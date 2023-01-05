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
        $(".container2__box1").animate({left:'20px'},10);
        $(".container2__box2").css('opacity','1',1000)
        $(".container2__box2").animate({left:'20px'},40);
        $(".container2__box3").css('opacity','1',1000)
        $(".container2__box3").animate({left:'20px'},45);
});

$(document).ready(function(){    
    $(window).scroll(function(){
        if($(document).scrollTop() > 400){
            $(".container3").css('opacity','1',5000);
            $(".container3").animate({bottom:'162px'},1000);
        }
        if($(document).scrollTop() > 540){
            $(".container3__title").css('opacity','1',5000);
            $(".container3__title").animate({bottom:'30px'},1000);
            $(".common__title2").css('opacity','1',5000);
            $(".common__title2").animate({bottom:'30px'},1000);       
        }
        if($(document).scrollTop() > 640){
            $(".common__content").css('opacity','1',5000);
            $(".common__content").animate({bottom:'30px'},1000);     
        }
        if($(document).scrollTop() > 740){
            $(".common__but").css('opacity','1',5000);
            $(".common__but").animate({bottom:'30px'},1000);     
        }
    });
});
$(document).ready(function(){    
    $(".common__but").hover(function(){
        $(".common__but").css('color','#FFFFFF').css('background-color','#549417');  
        $(".common__but__link").css('color','#FFFFFF');   
    });
    $(".common__but").mouseleave(function(){
        $(".common__but").css('color','#000').css('background-color','#FFFFFF').css('border','solid').css('border-color','#549417');   
        $(".common__but__link").css('color','#000');      
    
    });
    $(".common__but").click(function(){
        $(".common__but").css('background-color','#B84C25').css('border-color','#B84C25');
        $(".common__but__link").css('color','#FFFFFF');           
    });
});

$(document).ready(function(){    
    $(window).scroll(function(){
        if($(document).scrollTop() > 1200){
            $(".container4__box2").css('opacity','1',5000);
            $(".container4__box2").animate({bottom:'30px'},1000);
        }
    });
});

$(document).ready(function(){    
    $(window).scroll(function(){
        if($(document).scrollTop() > 1500){
            $(".container5").css('opacity','1',5000);
            $(".container5").animate({bottom:'30px'},1000);
        }
        if($(document).scrollTop() > 1640){
            $(".container5__title").css('opacity','1',5000);
            $(".container5__title").animate({bottom:'30px'},1000);
            $(".container5__content").css('opacity','1',5000);
            $(".container5__content").animate({bottom:'30px'},1000);
        }
        if($(document).scrollTop() > 1940){
            $(".container5__but").css('opacity','1',5000);
            $(".container5__but").animate({bottom:'30px'},1000);
        }
    });
    
});


$(document).ready(function(){    
    $(window).scroll(function(){        
        if($(document).scrollTop() > 2200){
            $(".container6").css('opacity','1',5000);
            $(".container6").animate({bottom:'30px'},1000);
        }
        if($(document).scrollTop() > 2440){
            $(".container6__title").css('opacity','1',5000);
            $(".container6__title").animate({bottom:'30px'},1000);
        }
        if($(document).scrollTop() > 2440){
            $(".container6__subtitle").css('opacity','1',5000);
            $(".container6__subtitle").animate({bottom:'30px'},1000);
        }
        if($(document).scrollTop() > 2540){
            $(".container6__content").css('opacity','1',5000);
            $(".container6__content").animate({bottom:'30px'},1000);
        }
        if($(document).scrollTop() > 2740){
            $(".container6__but").css('opacity','1',5000);
            $(".container6__but").animate({bottom:'30px'},1000);
        }
        if($(document).scrollTop() > 2740){
            $(".container6__but1").css('opacity','1',5000);
            $(".container6__but1").animate({bottom:'30px'},1000);
        }
        if($(document).scrollTop() > 3000){
            $(".container7__title").css('opacity','1',5000);
            $(".container7__title").animate({bottom:'30px'},1000);
        }
        if($(document).scrollTop() > 3140){
            $(".container7__content").css('opacity','1',5000);
            $(".container7__content").animate({bottom:'30px'},1000);
        }
        if($(document).scrollTop() > 3240){
            $(".container7__subtitle").css('opacity','1',5000);
            $(".container7__subtitle").animate({bottom:'30px'},1000);
        }
        if($(document).scrollTop() > 3240){
            $(".container7__subtitle__content").css('opacity','1',5000);
            $(".container7__subtitle__content").animate({bottom:'30px'},1000);
        }
        if($(document).scrollTop() > 3240){
            $(".container7__but").css('opacity','1',5000);
            $(".container7__but").animate({bottom:'30px'},1000);
        }

    });
});

$(document).ready(function(){    
    $(".container6__but").hover(function(){
        $(".container6__but").css('color','#FFFFFF').css('background-color','#549417');  
        $(".container6__but__link").css('color','#FFFFFF');
    });
    $(".container6__but").mouseleave(function(){
        $(".container6__but").css('color','#000').css('background-color','#FFFFFF').css('border','solid').css('border-color','#549417');  
        $(".container6__but__link").css('color','#000');     
    });
    $(".container6__but").click(function(){
        $(".container6__but").css('background-color','#B84C25').css('border-color','#B84C25');     
        $(".container6__but__link").css('color','#FFFFFF');    
    });
    $(".container6__but1").hover(function(){
        $(".container6__but1").css('color','#FFFFFF').css('background-color','#549417'); 
        $(".container6__but1__link").css('color','#FFFFFF');     
    });
    $(".container6__but1").mouseleave(function(){
        $(".container6__but1").css('color','#000').css('background-color','#FFFFFF').css('border','solid').css('border-color','#549417'); 
        p$(".container6__but1__link").css('color','#000');      
    });
    $(".container6__but1").click(function(){
        $(".container6__but1").css('background-color','#B84C25').css('border-color','#B84C25');    
        $(".container6__but1__link").css('color','#FFFFFF');     
    });
    $(".container7__but").hover(function(){
        $(".container7__but").css('color','#000').css('background-color','#FFFFFF');      
    });
    $(".container7__but").mouseleave(function(){
        $(".container7__but").css('color','#FFFFFF').css('background-color','#549417').css('border-color','#FFFFFF');       
    });
    $(".container7__but").click(function(){
        $(".container7__but").css('color','#FFFFFF').css('background-color','#B84C25').css('border-color','#B84C25');         
    });
});











