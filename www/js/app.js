// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('ninjacode', ['ionic', 'ninjacode.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.inicio', {
    url: "/inicio",
    views: {
      'menuContent': {
        templateUrl: "templates/inicio.html"
      }
    }
  })

  .state('app.acerca', {
    url: "/acerca",
    views: {
      'menuContent': {
        templateUrl: "templates/acerca.html"
      }
    }
  })
    .state('app.albumes', {
      url: "/albumes",
      views: {
        'menuContent': {
          templateUrl: "templates/albumes.html",
          controller: 'AlbumesCtrl'
        }
      }
    })

  .state('app.album', {
    url: "/album/:albumId",
    views: {
      'menuContent': {
        templateUrl: "templates/album.html",
        controller: 'AlbumCtrl'
      }
    }
  })

  .state('app.artistas', {
      url: "/artistas",
      views: {
        'menuContent': {
          templateUrl: "templates/artistas.html",
          controller: 'ArtistasCtrl'
        }
      }
    })

  .state('app.artista', {
    url: "/artista/:artistaId",
    views: {
      'menuContent': {
        templateUrl: "templates/artista.html",
        controller: 'ArtistaCtrl'
      }
    }
  })

  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/inicio');
});
