(function() {
        'use strict';

        angular
            .module('app', ['ui.router', 'ngStorage', 'ngMockE2E'])
            .config(config)
            .run(run);

        // Defining routes and controllers
        function config($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");

            $stateProvider
                .state('dashboard', {
                    url: '/',
                    templateUrl: 'dashboard/index.view.html',
                    controller: 'Dashboard.IndexController',
                    controllerAs: 'viewModel'
                })
                .state('login', {
                    url: '/login',
                    templateUrl: 'login/index.view.html',
                    controller: 'Login.IndexController',
                    controllerAs: 'viewModel'
                });
        }

        function run($rootScope, $http, $location, $localStorage) {
            // If user is logged, doesnt go to login
            if ($localStorage.currentUser) {
                $http.defaults.headers.common.Authorization = 'Coders ' + $localStorage.currentUser.token;
            }

            // Validating if its logged or not
            $rootScope.$on('$locationChangeStart', function(event, next, current) {
                var publicPages = ['/login'];
                var restrictPages = publicPages.indexOf($location.path()) === -1;

                if (restrictPages && !$localStorage.currentUser) {
                    $location.path('/login');
                }
            });
        }
    })();