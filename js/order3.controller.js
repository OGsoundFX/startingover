function OrderController() {
  this.orderName = "Vegan Burger";
  this.orderQuantity = 0;

};

angular
  .module('app')
  .controller('Order3Controller', OrderController);
