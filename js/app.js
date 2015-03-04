'use strict';

var app = angular.module('app',['ngRoute','ui.bootstrap']);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/main', {
                templateUrl: 'partials/main.html'
            }).
            when('/about', {
                templateUrl: 'partials/aboutme.html'
                ,controller : 'aboutmeCtrl'
            })
            .otherwise({
                redirectTo: '/main'
            });
    }
]);

