var saveController=["$scope", "eventService", function ($scope, eventService) {
    $scope.save = function (event) {
        if ($scope.NewEventForm.$valid) {
            debugger;
            eventService
                        .save(event)
                        .then(function (res) {
                            console.log(res);
                            if (res.hasError) {
                                $scope.hasError = res.hasError;
                                $scope.error = res.status;
                                $scope.submitMsg = "Match not Added.Something went Wrong!!";
                            } else {
                                // $modalInstance.close({ id: res.id, name: gender.name                                
                                console.log(res)
                                $scope.event = {};
                                $scope.submitMsg = "New Match Added Successfully";
                            }
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
        }
        else
            $scope.NewEventForm.$setDirty();
    };
}];

angular
        .module("EventApp")
        .controller("eventSaveCtrl", saveController);