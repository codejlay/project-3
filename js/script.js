(function(){

  var app = angular.module("project3", [ ]);

  app.controller("InstaCtrl", ['$scope', '$http', function($scope, $http) {
    
    $scope.loading = false;
    $scope.posts = [];
    $scope.getPhotos = function(e) {
      e && e.preventDefault();
      $scope.loading = true;
      var instagramUrl = 'https://api.instagram.com/v1/tags/' + $scope.hashtag + '/media/recent?count=12&callback=JSON_CALLBACK&client_id=ad73472270e1464ab7693e380de0856d';
      $http.jsonp(instagramUrl).then(function(response) {
      $scope.loading = false;
        $scope.posts = response.data.data;
        // console.log($scope.posts);
        $scope.loading = false;
      });
    };
     
  }]);
})();

 