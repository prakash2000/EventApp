
var EventService=[
        function () {
            var self = this;                    
	    self.save = function (event) {              
                try{
                        localStorage.setItem('Events',angular.toJson(event))  
                        return true;                                           
                }
                catch(exception){
                     return false;
                }             
            };
 }];
 
 angular
     .module("EventApp")
     .service("eventService",EventService);