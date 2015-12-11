var saveController=["$scope", "eventService","$timeout", function ($scope, eventService,$timeout) {
    var messageTimer = false;    
    $scope.save = function (event) {        
        if ($scope.NewEventForm.$valid) {   
            var localDate= $scope.event.date;
            var monthName=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
            var localDay=localDate.getDate();
            var localMonth=localDate.getMonth();            
            var localYear=localDate.getFullYear();
            var fullDate= localDay +" "+ monthName[localMonth] +" "+ localYear;
            //var parsedDate = new Date(parseInt(localDate.substr(6), 10));
           
            $scope.event.date=fullDate;
            
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

var listController=["$scope", "eventService", function ($scope, eventService) {             
            $scope.rowCollection = [];
            $scope.events = [];
            var Allevents=eventService.get();                
                if (Allevents!=null) {                   
                    $scope.rowCollection = Allevents;
                    $scope.events = [].concat($scope.rowCollection);                                       
                }                 
}]; 

app.controller('DatepickerCtrl', function ($scope) {
    $scope.today = function () {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
        $scope.dt = null;
    };

    // Disable weekend selection
    $scope.disabled = function (date, mode) {
        // return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
        return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
    };

    $scope.toggleMin = function () {
        $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.opened = true;
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];

    $scope.status = {
        opened: false
    };

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date();
    afterTomorrow.setDate(tomorrow.getDate() + 2);
    $scope.events =
      [
        {
            date: tomorrow,
            status: 'full'
        },
        {
            date: afterTomorrow,
            status: 'partially'
        }
      ];

    $scope.getDayClass = function (date, mode) {
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

            for (var i = 0; i < $scope.events.length; i++) {
                var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                if (dayToCheck === currentDay) {
                    return $scope.events[i].status;
                }
            }
        }
        return '';
    };
});

function DeleteAll(){
    localStorage.clear();
}
function DeleteEvent(){
    localStorage.removeItem();
}

angular
        .module("EventApp")
        .controller("eventSaveCtrl", saveController)
        .controller("eventListCtrl", listController);