function TodoController() {
    this.newTitle = "";
    this.newCategory = "";
    this.newDifficulty = "";
    this.favorite = [];

    this.list = [
        {
            title: "Laundry",
            completed: false,
            difficulty: "hard",
            type: "chore"
        },
        {
            title: "Bicycle",
            completed: false,
            difficulty: "medium",
            type: "sport"
        },
        {
            title: "Make bed",
            completed: true,
            difficulty: "easy",
            type: "chore"
        },
    ];
    
    this.addTodo = () => {
        this.list.unshift({
            title: this.newTitle,
            type: this.newCategory,
            difficulty: this.newDifficulty,
            completed: false
        });
        this.newTitle = "";
        this.newCategory = "";
        this.newDifficulty = "";
    };

    this.addToFavorite = (item) => {
        this.favorite.push(item);
    };
    
    this.removeTodo = (item, index) => {
        this.list.splice(index, 1)
    }

    this.remaining = () => {
        let result = this.list.filter((obj) => obj.completed === false).length;
        return result;
    };
};

angular
    .module('app')
    .controller('TodoController', TodoController);