function PurchaseController() {
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