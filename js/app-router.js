var routeConfig = {
	
	//For About us
	'/aboutus' : 'about/aboutus.html',
	'/vision' : 'about/vision.html',
	'/ourCampus' : 'about/ourCampus.html',
	'/principalMessage' : 'about/principalMessage.html',
	'/theresaMessage' : 'about/theresaMessage.html',
	
	//For Administration
	'/staffCouncil' : 'administration/staffCouncil.html',
	'/administration' : 'administration/administration.html',
	'/examinationCell' : 'administration/examinationCell.html',
	'/examinationSystem' : 'administration/examinationSystem.html',
	'/academicCouncil' : 'administration/academicCouncil.html',
	'/protocal' : 'administration/protocal.html',
	
	//For Academics
	'/other-courses' : 'academics/addOnCourses.html',
	'/degree' : 'academics/degree.html',
	'/ignou' : 'academics/ignou.html',
	'/intermediate' : 'academics/intermediate.html',
	'/pg' : 'academics/pg.html',
	'/career-oriented' : 'academics/careerOrientedCourses.html',
	'/community-college' : 'academics/communityCollege.html',
	'/results' : 'academics/results.html',
	
	//For Campus
	'/auditorium' : 'campus/auditorium.html',
	'/bank' : 'campus/bank.html',
	'/canteen' : 'campus/canteen.html',
	'/health-club' : 'campus/healthClub.html',
	'/hostel' : 'campus/hostel.html',
	'/internet' : 'campus/internet.html',
	'/language-lab' : 'campus/languageLab.html',
	'/library' : 'campus/library.html',
	'/instrument-room' : 'campus/instrumentRoom.html',
	'/stationary' : 'campus/stationary.html',
	
	//For Students
	'/cgc' : 'students/careerGuidence.html',
	'/counselling-cell' : 'students/counsellingCell.html',
	'/department-club' : 'students/departmentClub.html',
	'/grievance-redressal-cell' : 'students/grievanceRedressalCell.html',
	'/leadership' : 'students/leadershipTraining.html',
	'/scholarships' : 'students/scholarshipsAndCashAwards.html',
	'/spoken-english' : 'students/spokenEnglish.html',
	'/tutor-ward-system' : 'students/tutorWardSystem.html',
	'/student-parliament' : 'students/studentParliament.html',
	'/ncc' : 'students/coCurricularActivities/ncc.html',
	'/sports' : 'students/coCurricularActivities/sports.html',
	'/nss' : 'students/coCurricularActivities/nss.html',
	'/aicuf' : 'students/coCurricularActivities/aicuf.html',
	'/red-ribbon-club' : 'students/coCurricularActivities/redRibbonClub.html',

	//For Departments
	'/departments' : 'departments/index.html',

};




chsdApp.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/main', {
            templateUrl: 'main.html',
            controller: 'mainCtrl'
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
        
        
        for(var key in routeConfig){
        	$routeProvider.when(key,{
        		templateUrl:'placeholder.html',
        		controller: 'templateCtrl'
        	});
        }
  }]);
