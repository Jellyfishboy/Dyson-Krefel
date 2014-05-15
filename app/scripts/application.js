'use strict';

angular.module('dysonKrefelWebApp', ['pascalprecht.translate', 'ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainController'
            })
            .when('/cylinders', {
                templateUrl: 'views/cylinders.html',
                controller: 'CylinderController'
            })
            .when('/cordless', {
                templateUrl: 'views/cordless.html',
                controller: 'CordlessController'
            })
            .when('/handhelds', {
                templateUrl: 'views/handhelds.html',
                controller: 'HandheldController'
            })
            .when('/fans-and-heaters', {
                templateUrl: 'views/fans.html',
                controller: 'FanController'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    
