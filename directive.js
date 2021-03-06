// derived from accepted answer here: 
// http://stackoverflow.com/questions/27988502/applying-angularjs-ng-repeat-to-owl-carousel
angular.module('myApp').directive('owlCarousel', function(){
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

angular.module('myApp').directive('owlCarouselItem', [function() {
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

//example with events attached
// angular.module('myApp').directive('owlGalleryCarousel', function(){
//   return {
//     restrict: 'A',
//     transclude: false,
//     link: function (scope,element) {
              
//       element.on('initialized.owl.carousel changed.owl.carousel', function(event) {
//         scope.itemNumber = event.item.index+1;
//         scope.itemCount = event.item.count;
//         document.getElementById("item-number").innerHTML = "" + scope.itemNumber + "";
//       })

//       scope.initCarousel = function(element) {
//         var defaultOptions = {};
//         var customOptions = scope.$eval($(element).attr('data-options'));
//         // combine the two options objects
//         for(var key in customOptions) {
//           defaultOptions[key] = customOptions[key];
//         }
//         // init carousel
//         $(element).owlCarousel(defaultOptions);                
//       };
//     }
//   };
// });
