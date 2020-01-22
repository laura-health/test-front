(function() {
    'use strict';

    angular
      .module('app')
      .run(setupBackEndMock);

    // Creates the fake user
    // (i know this is horrible)
    // i wish i had more time to make it right with database persistence and etc.
    function setupBackEndMock($httpBackend) {
      var testUsuario = {
        username: 'admin',
        password: 'admin',
        nome: 'Jean',
        sobrenome: 'Mayer'
      };

      // Creates a fake endpoint
      $httpBackend.whenPOST('/api/authenticate').respond(function(method, url, data) {

        var params = angular.fromJson(data);

        // Check user/password
        if (params.username === testUsuario.username && params.password === testUsuario.password) {
          return [200, {
            token: 'jwt-token-laura'
          }, {}];
        } else {
          return [200, {}, {}];
        }
      });

      $httpBackend.whenGET(/^\w+.*/).passThrough();

    }
  })();