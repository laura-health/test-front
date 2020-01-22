(function () {
        'use strict';

        angular
            .module('app')
            .factory('AuthenticationService', Service);

        function Service($http, $localStorage) {
            var service = {};

            service.Login = Login;
            service.Logout = Logout;

            return service;

            function Login(username, password, callback) {
                $http.post('/api/authenticate', {
                        username: username,
                        password: password
                    })
                    .success(function(response) {
                        // Receive token if login is ok
                        if (response.token) {
                            // Save the data in local storage
                            $localStorage.currentUser = {
                                username: username,
                                token: response.token
                            };

                            // Adds jwt in every request
                            $http.defaults.headers.common.Authorization = 'Coders ' + response.token;

                            // Returns login success
                            callback(true);
                        } else {
                            // Returns login error
                            callback(false);
                        }
                    });
            }

            function Logout() {
                // Cleans local storage and authorization
                delete $localStorage.currentUser;
                $http.defaults.headers.common.Authorization = '';
            }
        }
    })();