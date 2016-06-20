var attachFastClick = require('fastclick');
attachFastClick(document.body);

var app = angular.module('app', ['ngAnimate']);

app.controller('GfxCtrl', ['$scope', '$window', '$animate', '$timeout',
  function ($scope, $window, $animate, $timeout) {
    $scope.hover = {};
    $scope.quizOver = false;

    $scope.isGroup8 = function () {
      $scope.showSplash = true;
      $timeout(() => {
        $scope.showSplash = false;
      }, 250);

      $scope.isCorrect = true;
      $scope.quizOver = true;
      $scope.answeredHeading = 'Impressive! You know your EU';
      $window.ga('send', 'event', 'Responses', 'submit', 'Correct');
    };

    $scope.isGroupN = function () {
      $scope.showSplash = true;
      $timeout(() => {
        $scope.showSplash = false;
      }, 250);

      $scope.isIncorrect = true;
      $scope.quizOver = true;
      $scope.answeredHeading = 'Unlucky! But you\'ve come to the right place';
      $window.ga('send', 'event', 'Responses', 'submit', 'Incorrect');
    };
  }
]);
