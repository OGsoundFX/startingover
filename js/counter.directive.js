function counter () {
    return {
        scope: {},
        bindToController: {
            count: '=', // '=count'
            name: '@' // @ gives access to the read only property, also same as '=name' in case both ar the same
        },
        restrict: 'E',
        controller: 'CounterController as counter',
        templateUrl: '../tmpl/counter.html',
    //     template: `
    //     <div class="container d-flex justify-content-center mt-5 borderline">
    //     <div>
    //       <input class="btn" type="text" ng-model="counter.count">
    //     </div>
    //     <div>
    //       <button class="btn" type="button" ng-click="counter.increment()">
    //         +
    //       </button>
    //     </div>
    //     <div>
    //       <button class="btn" type="button" ng-click="counter.decrement()">
    //         -
    //       </button>
    //     </div>
    //   </div>
    //     `


    // IMPORTANT COMMENT: the templateUrl option only works when launching the app on a local host server or in production, not in the browser
    };
}

angular
    .module('app')
    .directive('counter', counter);