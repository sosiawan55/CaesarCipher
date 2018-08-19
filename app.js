var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'pages/home.html'
  })

  .when('/encrypt', {
    templateUrl : 'pages/encrypt.html',
    controller  : 'EncController'
  })

  .when('/decrypt', {
    templateUrl : 'pages/decrypt.html',
    controller  : 'DecController'
  })

  .otherwise({redirectTo: '/'});
});


app.controller('EncController', function($scope) {
  $scope.enkripsi = "";
  $scope.shiftAmount = 1;

  $scope.enkrip = function() {
    var ciphertext = '';

      for(var i = 0; i < $scope.enkripsi.length; i++) {
        var plainCharacter = $scope.enkripsi.charCodeAt(i);
          if(plainCharacter >= 97 && plainCharacter <= 122) {
            ciphertext += String.fromCharCode((plainCharacter - 97 + $scope.shiftAmount) % 26 + 97);
          } else if(plainCharacter >= 65 && plainCharacter <= 90) {
            ciphertext += String.fromCharCode((plainCharacter - 65 + $scope.shiftAmount) % 26 + 65);
          } else {
            ciphertext += String.fromCharCode(plainCharacter);
          }
      }
      return ciphertext;
  };
});

app.controller('DecController', function($scope) {
  $scope.deskripsi = "";
  $scope.shiftAmount = 1;

  $scope.deskrip = function() {
    var plaintext = '';

      for(var i = 0; i < $scope.deskripsi.length; i++) {
        var cipherCharacter = $scope.deskripsi.charCodeAt(i);
          if(cipherCharacter >= 97 && cipherCharacter <= 122) {
            plaintext += String.fromCharCode((cipherCharacter - 97 - $scope.shiftAmount + 26) % 26 + 97);
          } else if(cipherCharacter >= 65 && cipherCharacter <= 90) {
            plaintext += String.fromCharCode((cipherCharacter - 65 - $scope.shiftAmount + 26) % 26 + 65);
          } else {
            plaintext += String.fromCharCode(cipherCharacter);
          }
      }
      return plaintext;
  };

});

$('.navbar-nav .nav-link').click(function(){
    $('.navbar-nav .nav-link').removeClass('active');
    $(this).addClass('active');
});

function HeaderController($scope, $location) { 
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
}