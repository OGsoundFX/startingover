function UserService($http) {
    let API = '//jsonplaceholder.typicode.com/users/';
    this.getUser = function (userId) {
        return $http
            .get(API + userId)
            .then(function (response) {
                console.log(response.data);
                return response.data;
            }, function (reason) {

            })
    };
}

angular
    .module('app')
    .service('UserService', UserService);