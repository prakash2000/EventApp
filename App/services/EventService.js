
var EventService=["$http", "$q",
        function ($http, $q) {
            var self = this;            
			self.save = function (event) {
                var deferred = $q.defer();

                debugger;
                console.log(deferred);
                // $http
                //     .post("api/administrator/religion/save", angular.toJson(event))
                //     .success(function (res) {
                //         deferred.resolve(res);
                //     })
                //     .error(function (error) {
                //         deferred.reject(error);
                //     });

                return deferred.promise;
            };
 }];
 
 angular
     .module("EventApp")
     .service("eventService",EventService);