function stretch() {
    return {
        restrict: 'A',
        link: function ($scope, $element, $attrs) {
            var element = $element[0]; // jquery syntax equivalent to const documrny.querySelector('.something')
            console.log($attrs);
            element.addEventListener('focus', function() { // focus is like ng-focus, same for blur bellow
                this.style.width = "500px";  // style accesses the css
            });
            element.addEventListener('blur', function() {
                this.style.width = "120px";
            });
        }
    };
}

angular
    .module('app')
    .directive('stretch', stretch);
