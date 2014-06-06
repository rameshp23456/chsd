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
        
        $('.navbar .dropdown').hover(function() {
            $(this).find('.dropdown-menu').first().stop(true, true).slideToggle(400);
            }, function() {
            $(this).find('.dropdown-menu').first().stop(true, true).slideToggle(400)
            });
        
    
});

var chsdApp = angular.module('chsdApp', [
  'ngRoute',
  'chsdControllers',
  'chsdServices'
]);

