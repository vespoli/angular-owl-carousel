angular.module('ccbApp').directive('owlCarousel', function(){
  return {
    restrict: 'A',
    transclude: false,
    link: function (scope) {
      scope.initCarousel = function(element) {
        var defaultOptions = {};
        var customOptions = scope.$eval($(element).attr('data-options'));
        // combine the two options objects
        for(var key in customOptions) {
          defaultOptions[key] = customOptions[key];
        }
        // init carousel
        $(element).owlCarousel(defaultOptions);
      };
    }
  };
});

angular.module('ccbApp').directive('owlCarouselItem', [function() {
  return {
    restrict: 'A',
    transclude: false,
    link: function(scope, element) {
      // wait for the last item in the ng-repeat then call init
      if(scope.$last) {
        scope.initCarousel(element.parent());
      }
    }
  };
}]);