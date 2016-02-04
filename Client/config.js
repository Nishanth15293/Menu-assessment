/*
/!**
 * Created by Nishanth on 2/3/2016.
 *!/
(function(){
    'use strict';

    angular.module('app')
        .config(function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

            $stateProvider

                .state('home', {
                    url: '/',
                    controller: 'mainController',
                    templateUrl: './index.html'
                })

                .state('Drinks', {
                    url: '/drinks',
                    controller: 'mainController',
                    templateUrl: './drinks.html'
                })


        })
})();
*/
