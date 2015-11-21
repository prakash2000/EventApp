var saveController=["$scope", "eventService","$timeout", function ($scope, eventService,$timeout) {
    var messageTimer = false;    
    $scope.save = function (event) {        
        if ($scope.NewEventForm.$valid) {   
            
            var SubmitMsg; 
            $scope.showMessage = false;                    
            var response=eventService.save(event);                                                 
                if (response==true) {
                    $scope.event = {};                                      
                    SubmitMsg="New Event Added Successfully";
                    $scope.NewEventForm.$setPristine();                                               
                } else {                                                                                           
                    $scope.hasError = true;                               
                    SubmitMsg = "Event not Added.Something went Wrong!!";
                }    
                if (messageTimer) {
                    $timeout.cancel(messageTimer);
                }
                $scope.showMessage = true;
                $scope.submitMsg =  SubmitMsg; 
                messageTimer = $timeout(function() {
                    $scope.submitMsg="";
                    $scope.showMessage = false; 
                    console.log(messageTimer);   
                }, 3000);            
        }
        
        else
            $scope.NewEventForm.$setDirty();
    };
}];

angular
        .module("EventApp")
        .controller("eventSaveCtrl", saveController);