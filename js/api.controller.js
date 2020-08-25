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
    this.entry = "";
    this.getUser = () => {
        console.log(this.entry);
        $http
            .post(API, { string: this.entry} )
            .then(function (response) {
                console.log(response.data.isValid);
            }, function (reason) {

            })
        this.entry = "";
    };
}

angular
    .module('app')
    .controller('ApiController', ApiController);
