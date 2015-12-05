

var notifyController=["$scope", "eventService", function ($scope, eventService) {             
            $scope.rowCollection = [];
            $scope.events = [];           
            
            var TodayDate= new Date();
            var Allevents=eventService.get();                                                 
                if (Allevents!=null) {                    
                    $scope.rowCollection = Allevents;
                    $scope.events = [].concat($scope.rowCollection);                                       
                }
                $scope.filterFunction = function(element) {
                return element.name.match(/^Ma/) ? true : false;
  };    
                                                                           
}]; 

angular
        .module("EventApp")        
        .controller("eventNotifyCtrl", notifyController);