function OrderController() {
    this.orderName = "Fanta";
    this.orderQuantity = 0;
};

angular
    .module('app')
    .controller('OrderController', OrderController);