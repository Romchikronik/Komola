$(document).ready(function(){
    $('.nav-link').click(function(e){
        e.preventDefault();
        $('.nav-link').removeClass('active');
        $('html').animate({
            scrollTop: $($(this).addClass('active').attr('href')).offset().top - $('.navbar').outerHeight() - 30
        }, 1000)
    }) 
    $(window).scroll(function(){
        var scrolled = $(this).scrollTop();
        $('.nav-link').each(function(){
            if(scrolled >= $($(this).attr('href')).offset().top - $('.navbar').outerHeight() - 50){
                $('.nav-link').removeClass('active');
                $(this).addClass('active');
            }
        })
        if($(this).scrollTop() > 500){
            $('#top').fadeIn();
        }
        else{
            $('#top').fadeOut();
        }
    })
    $('#top').click(function(){
        $('html').animate({
          scrollTop: 0  
        }, 1200)
    })
});