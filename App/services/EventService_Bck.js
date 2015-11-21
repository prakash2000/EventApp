
var EventService=["$http", "$q",
        function ($http, $q) {
            var self = this;            
			self.save = function (event) {
                var deferred = $q.defer();
                                                
                // $http
                //     .post("api/administrator/religion/save", angular.toJson(event))
                //     .success(function (res) {
                //         deferred.resolve(res);
                //     })
                //     .error(function (error) {
                //         deferred.reject(error);
                //     });
                // return deferred.promise;
                try{
                        localStorage.setItem('Events',angular.toJson(event))
                        deferred.resolve(res);                        
                }
                catch(exception){
                     deferred.reject();   
                }
                                                                
                console.log(deferred.promise);
                
            };
 }];
 
 angular
     .module("EventApp")
     .service("eventService",EventService);