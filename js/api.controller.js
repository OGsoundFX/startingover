// function ApiController($http) {
//     API = '//jsonplaceholder.typicode.com/users/';
//     this.userId = "";
//     this.getUser = () => {
//         $http
//             .get(API + this.userId)
//             .then(function (response) {
//                 console.log(response);
//             }, function (reason) {

//             })
//     };
// }

function ApiController($http) {
    API = '//localhost:3000/parentheses';
    this.request = { string: "((test)"};
    this.getUser = () => {
        $http
            .post(API, this.request)
            .then(function (response) {
                console.log(response);
            }, function (reason) {

            })
    };
}

angular
    .module('app')
    .controller('ApiController', ApiController);
