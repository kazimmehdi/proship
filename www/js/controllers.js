angular.module('app.controllers', ['app.services'])

.controller('page1Ctrl', function($scope) {

})

.controller('cartCtrl', function($scope) {

})

.controller('cloudCtrl', function($scope) {

})

.controller('loginCtrl', function($scope) {

})

.controller('signupCtrl', ['$scope', '$location' , 'UserFactory', function($scope, $location,  UserFactory) {

    $scope.user = {};

    $scope.saveUser = function () {
      UserFactory.saveUser($scope.user, function (response) {
        if (response.saved) {
          alert('User created successfully');
          //if (client.isVendor) {
          //  $location.path('/sidemenu/ven_joblist');
          //} else if (client.isClient) {
          //  $location.path('/sidemenu/user_joblist');
          //}

        } else {
          $scope.error = response.message;
          $scope.dataLoading = false;
          alert(response.message);
        }
      });
    }

}])

.controller('dashboardCtrl', function($scope) {

})

.controller('selectDestinationCtrl', ['$scope','$rootScope', '$location' , 'UserFactory', function($scope, $rootScope,$location,  UserFactory) {
    $scope.userName = "";


    $scope.searchUser = function(){
      var param = $scope.userName;
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


      if(param.charAt(0) == '@'){
        param=param.substr(1);
        param = '?userName='+param;

      }else if(re.test(param)){
        param = '?email='+param;

      }else if(param.match(/\d/g).length===10){
        param = '?phone='+param;

      }

      UserFactory.searchUser(param, function (response) {


        if (response.saved) {

          $rootScope.user = response;

          if ($rootScope.user != null) {

             $location.path('/side-menu21/page8');
          }


        } else {
          $scope.error = response.message;
          $scope.dataLoading = false;
          $location.path('/page16');

        }
      });
    }

}])

.controller('packageDetailsCtrl', ['$scope','$rootScope', '$location', function($scope,$rootScope, $location) {

    $scope.navigate = function(index){
      if (index == 1) {
        $location.path('/page9');
      } else if (index == 2)  {
        $location.path('/page10');
      } else if (index == 3) {
        $location.path('/page11');
      }

    }

}])

.controller('fedExPackageCtrl', ['$scope','$rootScope', '$location', function($scope,$rootScope, $location) {
    $scope.navigate = function(){
      $location.path('/page12');
    }

}])

.controller('customPackageCtrl', ['$scope','$rootScope', '$location', function($scope,$rootScope, $location) {
    $scope.navigate = function(){
      $location.path('/page12');
    }

}])

.controller('openItemCtrl', ['$scope','$rootScope', '$location', function($scope,$rootScope, $location) {
    $scope.navigate = function(){
      $location.path('/page12');
    }

}])

.controller('schedulePickupCtrl', function($scope) {

})

.controller('paymentCtrl', function($scope) {

})

.controller('finalReviewCtrl', function($scope) {

})
  .controller('recipientCtrl', function($scope) {

  })

  .controller('deliveryOptionsCtrl', function($scope) {

})
