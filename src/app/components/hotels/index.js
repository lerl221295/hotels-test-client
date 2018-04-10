import angular from 'angular';
import { HotelsListComponent } from './list.component';
import { GetHotelsService }  from '../../services';

export default angular
    .module('hotels', [])
    .component('hotelsList', HotelsListComponent)
    .service('getHotelsService', GetHotelsService)
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('hotels', {
                url: '/hotels',
                component: 'hotelsList'
            });
        $urlRouterProvider.otherwise('hotels');
    })
    .name;