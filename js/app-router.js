var routeConfig = {
	
	//For About us
	'/aboutus' : 'about/aboutus.html',
	'/vision' : 'about/vision.html',
	'/ourCampus' : 'about/ourCampus.html',
	'/principalMessage' : 'about/principalMessage.html',
	'/theresaMessage': 'about/theresaMessage.html',
	'/college-emblem': 'about/collegeEmblem.html',
    '/mile-stones':'about/mileStones.html',
	
	//For Administration
	'/staffCouncil' : 'administration/staffCouncil.html',
	'/administration' : 'administration/administration.html',
	'/examinationCell' : 'administration/examinationCell.html',
	'/examinationSystem' : 'administration/examinationSystem.html',
	'/academicCouncil' : 'administration/academicCouncil.html',
	'/protocal' : 'administration/protocol.html',
	
	//For Academics
	'/other-courses' : 'academics/addOnCourses.html',
	'/degree' : 'academics/degree.html',
	'/ignou' : 'academics/ignou.html',
	'/intermediate' : 'academics/intermediate.html',
	'/pg' : 'academics/pg.html',
	'/career-oriented' : 'academics/careerOrientedCourses.html',
	'/community-college' : 'academics/communityCollege.html',
	//'/results': 'academics/results.html',
    '/b-voc':'academics/bVoc.html',
	
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
	'/cgc' : 'students/careerGuidance.html',
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
	'/red-ribbon-club': 'students/coCurricularActivities/redRibbonClub.html',
	'/women-empowerment-cell': 'students/womenEmpowermentCell.html',
	'/value-education': 'students/valueEducation.html',
	'/student-welfare-committee': 'students/studentWelfareCommittee.html',
	'/snehita': 'students/snehita.html',
    '/anti-ragging-squad':'students/antiRaggingSquad.html',

	//For Departments
	'/departments': 'departments/index.html',

    //UG
	'/bio-applied-science': 'departments/ugBioAppliedSciences.html',
	'/botony': 'departments/ugBotany.html',
	'/chemistry': 'departments/ugChemistry.html',
	'/commerce': 'departments/ugCommerceAndManagement.html',
	'/computers': 'departments/ugComputerScience.html',
	'/english': 'departments/ugEnglish.html',
	'/hindi': 'departments/ugHindi.html',
	'/home-science': 'departments/ugHomeScience.html',
	'/physical-education': 'departments/ugPhysicalEducation.html',
	'/sanskrit': 'departments/ugSanskrit.html',
	'/social': 'departments/ugSocialSciences.html',
	'/telugu': 'departments/ugTelugu.html',
	'/zoology': 'departments/ugZoology.html',

    //PG
	'/mca': 'departments/MCA.html',
	'/mba': 'departments/MBA.html',
	'/ma-economics': 'departments/MA-economics.html',
	'/ma-english': 'departments/MA-English.html',
	'/msc-maths': 'departments/Msc-Maths.html',
	'/msc-microbiology': 'departments/Msc-Microbiology.html',
	'/msc-chemistry': 'departments/Msc-Chemistry.html',
	'/msc-physics': 'departments/Msc-Physics.html',

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
           when('/sitemap', {
               templateUrl: 'sitemap.html',
               controller: 'sitemapCtrl'
           }).
           when('/results', {
               templateUrl: 'placeholder.html',
               controller: 'resultCtrl'
           }).
           when('/alerts/:alertid', {
               templateUrl: 'placeholder.html',
               controller: 'alertsCtrl'
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
