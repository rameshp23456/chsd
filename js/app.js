// Activates the Carousel
$('.carousel').carousel({
  interval: 5000
})

// Activates Tooltips for Social Links
$('.tooltip-social').tooltip({
  selector: "a[data-toggle=tooltip]"
})

$(function () {
    //for menu scrolling
        var menu = $('.navbar');
        var origOffsetY = menu.offset().top;
    
        function scroll() {
            if ($(window).scrollTop() >= origOffsetY) {
                $('.navbar').removeClass("navbar-static-top").addClass('navbar-fixed-top');
               
            } else {
                
                $('.navbar').addClass("navbar-static-top").removeClass('navbar-fixed-top');
               
            }
        }
        document.onscroll = scroll;
        
        
        $(".eventsAlerts").marquee({
        	duration: 5000,
        	gap: 50,
        	delayBeforeStart: 0,
        	direction: 'up',
        	duplicated: true,
        	pauseOnHover: true
        });
        
        
    
    });