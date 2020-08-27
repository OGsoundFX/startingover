// Best practise is to go through a service to handle the $http rather than directly in the controller
// See user.service.js and user.controller.js

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
