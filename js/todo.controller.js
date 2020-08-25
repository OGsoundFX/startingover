function TodoController() {
    this.list = [
        {
            title: "Laundry",
            completed: false,
            difficulty: "hard"
        },
        {
            title: "Bicycle",
            completed: false,
            difficulty: "medium"
        },
        {
            title: "Make bed",
            completed: true,
            difficulty: "easy"
        },
    ];
};

angular
    .module('app')
    .controller('TodoController', TodoController);