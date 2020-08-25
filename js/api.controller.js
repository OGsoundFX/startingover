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
    let ctrl = this;
    this.entry = "";
    this.result = {};
    this.getUser = () => {
        // console.log(this.entry);
        $http
            .post(API, { string: this.entry} )
            .then(function (response) {
                // console.log(response.data);
                ctrl.result = response.data;
            }, function (reason) {
                // error
            })
        this.entry = "";
    };
}

angular
    .module('app')
    .controller('ApiController', ApiController);
