import angular from 'angular';
import './root.component.js';
import './expanded.component.js';



angular
    .module('angularJS-app')
    .config(($stateProvider, $locationProvider) => {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false,
        });
        $stateProvider
            .state('root', {
                url: '/angularJS',
                template: '<root />',
            })
            .state('expanded', {
                url: '/expanded',
                template: '<expanded />',
            })
    });
