var chsdControllers = angular.module('chsdControllers', []);


var linkConfig = {
	
	//For About us
	'/aboutus' : 'Aboutus',
	'/vision' : 'Aboutus',
	'/ourCampus' : 'Aboutus',
	'/principalMessage' : 'Aboutus',
	'/theresaMessage' : 'Aboutus',
	
	//For Administration
	'/staffCouncil' : 'Administration',
	'/administration' : 'Administration',
	'/examinationCell' : 'Administration',
	'/examinationSystem' : 'Administration',
	'/academicCouncil' : 'Administration',
	'/protocal' : 'Administration',
	
	//For Academics
	'/other-courses' : 'Academics',
	'/degree' : 'Academics',
	'/ignou' : 'Academics',
	'/intermediate' : 'Academics',
	'/pg' : 'Academics',
	'/career-oriented' : 'Academics',
	'/community-college' : 'Academics',
	'/results' : 'Academics',
	
	//For Campus
	'/auditorium' : 'Campus',
	'/bank' : 'Campus',
	'/canteen' : 'Campus',
	'/health-club' : 'Campus',
	'/hostel' : 'Campus',
	'/internet' : 'Campus',
	'/language-lab' : 'Campus',
	'/library' : 'Campus',
	'/instrument-room' : 'Campus',
	'/stationary' : 'Campus',
	
	//For Students
	'/cgc' : 'Students',
	'/counselling-cell' : 'Students',
	'/department-club' : 'Students',
	'/grievance-redressal-cell' : 'Students',
	'/leadership' : 'Students',
	'/scholarships' : 'Students',
	'/spoken-english' : 'Students',
	'/tutor-ward-system' : 'Students',
	'/student-parliament' : 'Students',
	'/ncc' : 'Students',
	'/sports' : 'Students',
	'/nss' : 'Students',
	'/aicuf' : 'Students',
	'/red-ribbon-club' : 'Students',

	//For Departments
	'/departments' : 'Departments',

};



var siteMap = {
	'Aboutus' : [{
		path : "/aboutus",
		name : "History"
	}, {
		path : "/vision",
		name : "Vision and Mission"
	}, {
		path : "/theresaMessage",
		name : "Theresa's Message"
	}, {
		path : "/principalMessage",
		name : "Principal's Message"
	}, {
		path : "/ourCampus",
		name : "Our Campus"
	}],
	'Academics' : [{
		path : "/career-oriented",
		name : "Career Oriented Courses"
	}, {
		path : "/intermediate",
		name : "Intermediate"
	}, {
		path : "/degree",
		name : "Under Graduation"
	}, {
		path : "/pg",
		name : "Post Graduation"
	}, {
		path : "/ignou",
		name : "IGNOU"
	}, {
		path : "/other-courses",
		name : "Add-on Courses"
	}, {
		path : "/community-college",
		name : "Community College"
	}, {
		path : "/results",
		name : "Results"
	}],
	'Campus' : [{
		path : "/hostel",
		name : "Hostel"
	}, {
		path : "/bank",
		name : "Bank"
	}, {
		path : "/canteen",
		name : "Canteen"
	}, {
		path : "/health-club",
		name : "HealthCare"
	}, {
		path : "/internet",
		name : "Internet"
	}, {
		path : "/auditorium",
		name : "Auditorium"
	}, {
		path : "/library",
		name : "Library"
	}, {
		path : "/language-lab",
		name : "Language Lab"
	}, {
		path : "/instrument-room",
		name : "Instrument Room"
	}, {
		path : "/stationary",
		name : "Stationary"
	}],
	'Administration' : [{
		path : "/examinationCell",
		name : "Examination Cell"
	}, {
		path : "/examinationSystem",
		name : "Examination System"
	}, {
		path : "/staffCouncil",
		name : "Staff Council"
	}, {
		path : "/administration",
		name : "Governing Body"
	}, {
		path : "/academicCouncil",
		name : "Academic Council"
	}, {
		path : "/protocal",
		name : "Protocal"
	}],
	'Departments' : [],
	'Students' : [{
		path : "/ncc",
		name : "NCC"
	}, {
		path : "/nss",
		name : "NSS"
	}, {
		path : "/aicuf",
		name : "AICUF"
	}, {
		path : "/red-ribbon-club",
		name : "Red Ribbon Club"
	}, {
		path : "/sports",
		name : "Sports and Games"
	}, {
		path : "/counselling-cell",
		name : "Counselling Cell"
	}, {
		path : "/cgc",
		name : "Career Guidence Cell "
	}, {
		path : "/grievance-redressal-cell",
		name : "Grievance and Redressal Cell"
	}, {
		path : "/tutor-ward-system",
		name : "Tutor-ward System"
	}, {
		path : "/spoken-english",
		name : "Spoken English"
	}, {
		path : "/department-club",
		name : "Departmental Club"
	}, {
		path : "/scholarships",
		name : "Scholarships and Awards"
	}, {
		path : "/leadership",
		name : "Leadership Training"
	}, {
		path : "/student-parliament",
		name : "Student Parliment"
	}],
};

chsdControllers.controller('mainCtrl', ['$scope', '$routeParams', '$route',
function($scope, $routeparams, $route) {
	// Activates the Carousel
	$('.carousel').carousel({
		interval : 5000
	});

	// Activates Tooltips for Social Links
	$('.tooltip-social').tooltip({
		selector : "a[data-toggle=tooltip]"
	});

	$(".eventsAlerts").marquee({
		duration : 5000,
		gap : 50,
		delayBeforeStart : 0,
		direction : 'up',
		duplicated : true,
		pauseOnHover : true
	});

	console.log($route);

	//alert("added");
}]);

chsdControllers.controller('templateCtrl', ['$scope', '$routeParams', '$route',
function($scope, $routeparams, $route) {
	$scope.template = routeConfig[$route.current.originalPath];
	console.log($route.current.originalPath);
	
	var linksName = linkConfig[$route.current.originalPath];
	$scope.links = siteMap[linksName]; 
}]);
