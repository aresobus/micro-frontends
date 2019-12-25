import angular from 'angular';
import template from './root.template.html';
import panel from '../images/wo.png';
import './angular.css';

angular
    .module('angularJS-app')
    .component('root', {
        template,
        controllerAs: 'vm',
        controller() {
            const vm = this;
            vm.image = panel;
        },
    });


