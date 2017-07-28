// JavaScript Document
/* global $ , jQuery , alert */
$(function(){
    
    "use strick";
    //Nice scroll
    
    //$("html,body").niceScroll();
    
    var scrollButton = $(".scroll-top");
    $(window).scroll(function () {
        
        if ($(this).scrollTop() >= 700) {
            
            scrollButton.show();
            
        } else {
            
            scrollButton.hide();
        }
    });
        
    scrollButton.click(function () {
        
        $("html,body").animate({ scrollTop : 0 }, 600);
        
    });
        
	 $(window).scroll(function(){
         
             var scrol = $(this).scrollTop();
             console.log(scrol);
             if(scrol > 418 )
             {
                 $('.nav2').show(100);
             }
             else
             {
                 $('.nav2').hide(100);
             }
     });
    
		 
 
		$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
		$('html,body').animate({
			scrollTop: target.offset().top
		}, 700);
		return false;
		}
}
});
 
});