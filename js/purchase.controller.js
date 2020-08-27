function PurchaseController() {
    this.test = "just testing";

    this.customerPurchase = {
        name: '',
        email: '',
        location: '',
        product: {
            label: '',
            id: ''
        },
        comment: ''
    };
    this.submitPurchase = () => {
    };
}

angular
    .module('app')
    .controller('PurchaseController', PurchaseController);