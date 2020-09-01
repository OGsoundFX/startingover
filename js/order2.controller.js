function OrderController() {
    this.orderName = "Fritz Limo";
    this.orderQuantity = 0;
};

angular
    .module('app')
    .controller('Order2Controller', OrderController);
