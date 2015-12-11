

var notifyController=["$scope", "eventService", function ($scope, eventService) {             
        $scope.rowCollection = [];
        $scope.events = [];           
        $scope.todaysDate=new Date();
       // var TodayDate= new Date();
        var Allevents=eventService.get();                                                 
        if (Allevents!=null) {                    
                $scope.rowCollection = Allevents;
                $scope.events = [].concat($scope.rowCollection);                                       
        }                                                                                            
}]; 

app.filter('upcommingEvents', function() {
    return function( items, todayDate ) {
      // console.log('upcommingEvents',arguments);      
      var filtered = [];
      angular.forEach(items, function(item) {         
        var GMTDate = new Date(item.date);
       // console.log(todayDate + " EQUALS " + GMTDate);
        if( todayDate <= GMTDate ) {                
          filtered.push(item);
        }
      });
      
      return filtered;
    };
});

angular
        .module("EventApp")        
        .controller("eventNotifyCtrl", notifyController);