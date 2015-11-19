
    var invalidFocus = function () {
        return {
            restrict: "A",
            link: function (scope, element) {
                element.on("submit", function () {
                    var firstInvalidElement = angular.element(element[0].querySelector(".ng-invalid"))[0];

                    if (firstInvalidElement) {
                        firstInvalidElement.focus();
                    }
                });
            }
        };
    };

    angular
        .module("appdash")
        .directive("invalidFocus", invalidFocus);