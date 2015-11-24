
var EventService=[
        function () {
            var self = this;    
            var tempEvents;          
                self.get = function () {                                                                       	                            
                        try{                  
                                tempEvents=localStorage.getItem('Events');
                                tempEvents=(tempEvents==null)?[]:JSON.parse(tempEvents); 
                                return tempEvents;                                           
                        }
                        catch(exception){
                           return false;
                        }                                                
                };
                            
	        self.save = function (event) {  
                   tempEvents=localStorage.getItem('Events');
                   tempEvents=(tempEvents==null)?[]:JSON.parse(tempEvents);                        	                            
                   try{                  
                        tempEvents.push(event);    
                        localStorage.setItem('Events',angular.toJson(tempEvents))  
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