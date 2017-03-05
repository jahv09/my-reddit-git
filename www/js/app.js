
  (function(){ 
    var app = angular.module('starter', ['ionic'])


app.controller('RedditCtrl', function($scope, $http){
 // $scope.posts = [
 //   {title: 'Primer post'},
 //   {title: 'Segundo post'},
  //  {title: 'Tercero post'}
 // ]
//})
$scope.posts = [];
  $http.get('https://www.reddit.com/r/gaming/.json')
        .success(function(posts){
          //console.log(posts);
          angular.forEach(posts.data.children, function(post){
          $scope.posts.push(post.data);
         // console.log(post);
          })
  });
});
app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {

      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
}());