

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
  'chsdControllers'
]);

chsdApp.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/main', {
            templateUrl: 'main.html',
            controller: 'mainCtrl'
        }).

          //For About us
          when('/aboutus', {
              templateUrl: 'about/aboutus.html',
             
          }).
          when('/academicCouncil', {
              templateUrl: 'about/academicCouncil.html',

          }).
           when('/vision', {
               templateUrl: 'about/vision.html',

           }).
          when('/administration', {
              templateUrl: 'about/administration.html',

          }).
          when('/examinationCell', {
              templateUrl: 'about/examinationCell.html',

          }).
          when('/examinationSystem', {
              templateUrl: 'about/examinationSystem.html',

          }).
          when('/ourCampus', {
              templateUrl: 'about/ourCampus.html',

          }).
          when('/theresaMessage', {
              templateUrl: 'about/theresaMessage.html',

          }).
          when('/staffCouncil', {
              templateUrl: 'about/staffCouncil.html',

          }).
       
          //For Courses
          when('/other-courses', {
              templateUrl: 'courses/addOnCourses.html',

          }).
           when('/degree', {
               templateUrl: 'courses/degree.html',

           }).
           when('/ignou', {
               templateUrl: 'courses/ignou.html',

           }).
           when('/intermediate', {
               templateUrl: 'courses/intermediate.html',

           }).
           when('/pg', {
               templateUrl: 'courses/pg.html',

           }).
           when('/ugc-courses', {
               templateUrl: 'courses/ugcCourses.html',

           }).
           when('/value-added-courses', {
               templateUrl: 'courses/valueAddedCourses.html',

           }).

          //For Campus

           when('/auditorium', {
               templateUrl: 'campus/auditorium.html',

           }).
           when('/bank', {
               templateUrl: 'campus/bank.html',

           }).
           when('/canteen', {
               templateUrl: 'campus/canteen.html',

           }).
           when('/health-club', {
               templateUrl: 'campus/healthClub.html',

           }).
           when('/hostel', {
               templateUrl: 'campus/hostel.html',

           }).
           when('/internet', {
               templateUrl: 'campus/internet.html',

           }).
           when('/language-lab', {
               templateUrl: 'campus/languageLab.html',

           }).
           when('/library', {
               templateUrl: 'campus/library.html',

           }).

          //For Students
           when('/cgc', {
               templateUrl: 'students/careerGuidence.html',

           }).
          when('/couselling-cell', {
              templateUrl: 'students/counsellingCell.html',

          }).
          when('/department-club', {
              templateUrl: 'students/departmentClub.html',

          }).
          when('/grievance-redressal-cell', {
              templateUrl: 'students/grievanceRedressalCell.html',

          }).
          when('/instrument-room', {
              templateUrl: 'students/instrumentRoom.html',

          }).
          when('/leadership', {
              templateUrl: 'students/leadershipTraining.html',

          }).
          when('/scholarships', {
              templateUrl: 'students/scholarshipsAndCashAwards.html',

          }).
          when('/spoken-english', {
              templateUrl: 'students/spokenEnglish.html',

          }).
          when('/tutor-ward-system', {
              templateUrl: 'students/tutorWardSystem.html',

          }).

          //For Contact
           when('/contact', {
               templateUrl: 'contact.html',

           }).

           when('/mandatory-disclosure', {
               templateUrl: 'mandatory-disclosure/mandatoryDisclosure.html',

           }).

           when('/gallery', {
               templateUrl: 'gallery.html',
           }).

        otherwise({
            redirectTo: '/main'
        });
  }]);

var chsdControllers = angular.module('chsdControllers', []);

chsdControllers.controller('mainCtrl', ['$scope', function () {
    // Activates the Carousel
    $('.carousel').carousel({
        interval: 5000
    });

    // Activates Tooltips for Social Links
    $('.tooltip-social').tooltip({
        selector: "a[data-toggle=tooltip]"
    });

    $(".eventsAlerts").marquee({
        duration: 5000,
        gap: 50,
        delayBeforeStart: 0,
        direction: 'up',
        duplicated: true,
        pauseOnHover: true
    });

    //alert("added");
}]);
