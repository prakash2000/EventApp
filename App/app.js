var app=angular.module('EventApp',['ui.bootstrap','ui.router','ui.utils']);

app.config(["$stateProvider","$urlRouterProvider",
	function($stateProvider,$urlRouterProvider){
		$stateProvider
		.state("home",{
			url:'/',
			templateUrl:'Home.html',            
			title:'Event Home'
		})
		.state("new_event",{
			url:'/new_event',
			templateUrl:"NewEvent.html",
            controller:"eventSaveCtrl",	    
			title:'Add New Event'			
		})
        .state("list_event",{
			url:'/list_event',
			templateUrl:"ListEvent.html",
            controller:"eventListCtrl",	    
			title:'All Events'			
		})
        .state("404",{
            url:'/404',
            template:'<h1>404...Page Not Found</h1>',
            title:'Page Not Found'
        });
        $urlRouterProvider.otherwise('/404');
		$urlRouterProvider.when("", "/");
	}]);
	
app.run(['$state','$rootScope',function ($state,$rootScope) {
    // $state.transitionTo('home');	
	$rootScope.$on('$stateChangeSuccess', function (event, current) {
            event.preventDefault();
            if (current.hasOwnProperty("title")) {
                $rootScope.title = current.title;
            }
        });
}]);