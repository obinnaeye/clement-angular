'use strict';

(function () {
   angular
   //the name of the module can be anything, provided it is the same used in index.html
      .module('clementineApp', ['ngResource'])
      .controller('clickController', ['$scope', '$resource', function ($scope, $resource) {
         var Click = $resource('/api/clicks');

         $scope.getClicks = function () {
            Click.get(function (results) {
               $scope.clicks = results.clicks;
            })
         }

         $scope.getClicks();

         $scope.addClick = function () {
            Click.save(function () {
               $scope.getClicks();
            });
         };

         $scope.resetClicks = function () {
            Click.remove(function () {
               $scope.getClicks();
            })
         };
      }]);
})();