function UserController(UserService) {
    API = '//jsonplaceholder.typicode.com/users/';
    let ctrl = this;
    this.userId = "";
    this.getUser = () => {
        UserService
            .getUser(this.userId)
            .then(function (response) {
                ctrl.result = response;
            })
    };
}


angular
    .module('app')
    .controller('UserController', UserController)