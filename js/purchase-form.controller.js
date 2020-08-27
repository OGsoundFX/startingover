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
    }
};

angular
    .module('app')
    .controller('PurchaseFormController', PurchaseFormController);