// TODO: flag UK circle on click
// TODO: add splash screen for correct/incorrect
// TODO: add custom GA event tracking

const app = angular.module('app', ['ngAnimate']);

app.controller('GfxCtrl', ['$scope', '$window', '$animate', function ($scope, $window, $animate) {
  $scope.hover = {};
  $scope.quizOver = false;

  $scope.isGroup8 = () => {
    console.log('Group 8');

    $scope.quizOver = true;
    $scope.answeredHeading = 'Heading that shows if you get it RIGHT!';
    $window.ga('send', 'event', 'Responses', 'submit', 1);
  };

  $scope.isGroupN = () => {
    console.log('Not group 8');

    $scope.quizOver = true;
    $scope.answeredHeading = 'Heading that shows if you get it WRONG!';
    $window.ga('send', 'event', 'Responses', 'submit', 0);
  };
}]);
