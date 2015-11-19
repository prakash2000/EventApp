

    var autoFocus = ["$timeout", "$parse",
            function ($timeout, $parse) {
                return {
                    restrict: "A",
                    link: function (scope, element, attributes) {
                        var model = $parse(attributes.autoFocus);

                        scope.$watch(model, function (value) {
                            if (value === true) {
                                $timeout(function () {
                                    element[0].focus();
                                });
                            }
                        });
                        element.bind("blur", function () {
                            model = false;
                            scope.$apply();
                        });
                    }
                };
            }];

    angular
        .module("appdash")
        .directive("autoFocus", autoFocus);
