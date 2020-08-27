function purchaseForm() {
    return {
        restrict: 'E',
        scope: {},
        bindToController: {
            data: '=',
            submit: '&'
        },
        controller: 'PurchaseFormController as form',
        template: `
            <pre>{{ form.data | json }}</pre>
            <form novalidate ng-submit="form.onSubmit">
                <input type="text" ng-model="form.data.name" placeholder="your name">
                <input type="email" ng-model="form.data.email" placeholder="your email">
                <input type="text" ng-model="form.data.location" placeholder="your location">
                <select value=""></select>
                <text-area placeholder="your comment" ng-model="form.data.comment"></text-area>
                <button type="submit">Purchase</button>
            </form>
            `
    };
};

angular
    .module('app')
    .directive('purchaseForm', purchaseForm)