angular.module("kaypic").controller("FotosController", function ($scope, fotoRequestService) {

    $scope.fotos = [];
    $scope.filtro = "";
    $scope.mensagem = "";

    $scope.remover = function(foto) {
        fotoRequestService
            .delete( { fotoId: foto._id},
                () => {
                    $scope.mensagem = "Foto removida com sucesso!";
                    let i = $scope.fotos.indexOf(foto);
                    $scope.fotos.splice(i, 1);
                },
                err => {
                    console.log(err);
                    $scope.mensagem = "A foto não foi removida";
                }
            );
    }

    fotoRequestService
        .query(
            fotos => $scope.fotos = fotos,
            err => console.log(err)
        );



});