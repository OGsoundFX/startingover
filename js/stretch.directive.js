function stretch() {
    return {
        restrict: 'A',
        link: function ($scope, $element, $attrs) {
            var element = $element[0];
            element.addEventListener('focus', function() {
                console.log("working?");
                this.style.width = 500;
            });
            element.addEventListener('blur', function() {
                console.log('back to blur');
                this.style.width = 120;
            });
        }
    };
}



angular
    .module('app')
    .directive('stretch', stretch);