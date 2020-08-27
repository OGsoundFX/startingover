function PurchaseFormController() {
    this.products = [
        {
            label: 'Tofu',
            id: 1
        },
        {
            label: 'Fruit',
            id: 2
        },
        {
            label: 'Vegetable',
            id: 3
        },
    ];
    this.onSubmit = () => {
        this.submit();
        // This submit() refers to the from the <purchase-form submit="purchase.submitPurchase();"> in the index.html
        // I think this controller is kind of located inside the main controller: purchase.controller.js
    }
};

angular
    .module('app')
    .controller('PurchaseFormController', PurchaseFormController);