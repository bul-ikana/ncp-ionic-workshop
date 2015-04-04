angular.module('ninjacode.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  
})

.controller('AlbumesCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('ArtistasCtrl', function($scope) {
  $scope.artistas = [
    { title: 'Reggae Man', id: 1, genero:"reggae" },
    { title: 'Chill Girl', id: 2, genero: "Chillout" },
    { title: 'Dubstep Skrillex', id: 3, genero: "electronico" },
    { title: 'Indie dudes', id: 4, genero: "rock alt" },
    { title: 'Rap niggas', id: 5, genero: "hiphop" },
    { title: 'Cowbell guys', id: 6, genero: "country" }
  ];
})

.controller('AlbumCtrl', function($scope, $stateParams) {
})

.controller('ArtistaCtrl', function($scope, $stateParams) {
  $scope.artistas = [
    { title: 'Reggae Man', id: 1, genero:"reggae" },
    { title: 'Chill Girl', id: 2, genero: "Chillout" },
    { title: 'Dubstep Skrillex', id: 3, genero: "electronico" },
    { title: 'Indie dudes', id: 4, genero: "rock alt" },
    { title: 'Rap niggas', id: 5, genero: "hiphop" },
    { title: 'Cowbell guys', id: 6, genero: "country" }
  ];

    var artistaId = $stateParams.artistaId;
    $scope.artista = $scope.artistas[artistaId - 1];

});
