angular.module('app.services', [])

.factory('UserFactory', ['$http', function($http){
    var service = {};

    service.saveUser = function (user, callback) {
      alert(JSON.stringify(user));
      var req = {
        method: 'POST',
        url: 'http://localhost:8080/user',
        headers: {
          "Content-Type": "application/json"
        },
        data: user
      }

      $http(req)
        .success(function (response) {

        if (response.code == 1001) {
          response.saved = false;
          callback(response);
        } else {
          response.saved = true;
          callback(response);
        }

      })
        .error(function (data, status, headers, config) {
          alert(data);
         // response.success = false;
        });
    }

    service.searchUser = function(param, callback) {
      //http://localhost:8080/user/search/findByUserNameOrEmailOrPhone?userName=newuser
      var req = {
        method: 'GET',
        url: 'http://localhost:8080/user/search/findByUserNameOrEmailOrPhone'+param,
        headers: {
          "Content-Type": "application/json"
        }
      }

      $http(req)
        .success(function (response) {
          if (response.code == 1001) {
            response.saved = false;
            callback(response);
          } else {
            response.saved = true;
            callback(response);
          }

        })
        .error(function (response) {
          response.saved = false;
          callback(response);
          // response.success = false;
        });
    }
    return service;
}])


.service('BlankService', [function(){

}]);

