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
            
            <form name="purchaseForm" novalidate ng-submit="form.onSubmit();">
                <input name="name" required="" type="text" ng-model="form.data.name" placeholder="your name">
                <div ng-show="purchaseForm.name.$error.required && purchaseForm.name.$touched">Need a name</div>
                <input name="email" required="" type="email" ng-model="form.data.email" placeholder="your email">
                <input name="location" type="text" ng-model="form.data.location" placeholder="your location">
                <select name="purchaseChoise" required="" ng-model="form.data.product" ng-options="product.label for product in form.products">
                    <option value="">Select ...</option>
                </select>
                <text-area name="comment" placeholder="your comment" ng-model="form.data.comment"></text-area>
                <button type="submit" ng-disabled="purchaseForm.$invalid">Purchase</button>
            </form>
            `
    };
};

angular
    .module('app')
    .directive('purchaseForm', purchaseForm);

// <pre>{{ purchaseForm.email | json }}</pre>