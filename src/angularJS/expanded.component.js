import angular from 'angular';
import template from './expanded.template.html';
import panelExpanded from '../images/wo-details.png';
import './angular.css';

angular
    .module('angularJS-app')
    .component('expanded', {
        template,
        controllerAs: 'vm',
        controller() {
            const vm = this;
            vm.image = panelExpanded;
        },
    });
