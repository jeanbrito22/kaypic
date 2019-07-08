angular.module('kaypic').controller('GruposController', function($scope, $resource) {

    $scope.grupos = [];

    let recursoGrupo = $resource("v1/grupos/:grupoId")

    recursoGrupo
        .query(
            grupos => $scope.grupos = grupos,
            err => console.log(err)
        );

});