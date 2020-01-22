(function() {
        'use strict';

        angular
            .module('app')
            .controller('Login.IndexController', Controller);

        function Controller($location, AuthenticationService) {
            var viewModel = this;

            viewModel.login = login;

            viewModel.title = "LOREM IPSUM";
            viewModel.text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis orci sed nisi pellentesque, at sodales turpis euismod. Pellentesque eu elit lacus. Pellentesque vulputate tristique dignissim.";

            initController();

            function initController() {
                //Aqui iremos resetar o status do login:
                AuthenticationService.Logout();
            };

            function login() {
                viewModel.loading = true;
                AuthenticationService.Login(viewModel.username, viewModel.password, function(result) {
                    if (result === true) {
                        $location.path('/');
                    } else {
                        viewModel.error = 'Usuário e senha estão incorretos!';
                        viewModel.loading = false;
                    }
                });
            };
        }

    })();