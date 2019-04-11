jQuery(document).ready(function() {
    var menuOffSet = jQuery(".menu-bar").offset().top;

    jQuery(".menu-bar").wrap('<div class="menu-placeholder"></div>');
    jQuery(".menu-placeholder").height(jQuery(".menu-bar").outerHeight());


    jQuery(window).scroll(function(){
        var scrollPos = jQuery(window).scrollTop();

        if (scrollPos>= menuOffSet){
            jQuery(".menu-bar").addClass("fixed");
        } else {
            jQuery(".menu-bar").removeClass("fixed");
        }
    })
  
});