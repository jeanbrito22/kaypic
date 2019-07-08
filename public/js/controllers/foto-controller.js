angular.module('kaypic').controller('FotoController', function($scope, $routeParams, fotoRequestService, cadastroFotoService) {
    
    $scope.foto = {
        titulo: "Kaypic",
        url: "",
        descricao: ""
    };

    $scope.mensagem = "";

    if($routeParams.fotoId) {
        fotoRequestService
            .get( {fotoId: $routeParams.fotoId},
                foto => $scope.foto = foto,
                err => console.log(err)
            );
    }

    $scope.submeter = function() {
        
        cadastroFotoService
            .cadastrar($scope.foto)
                .then( resultado => {
                    $scope.mensagem = resultado.mensagem;
                    if (resultado.inclusao) {
                        $scope.foto = {};
                    }
                })
                .catch( (err) => $scope.mensagem = err.mensagem)

        /*
        if ($scope.formulario.$valid) {
            if (!$scope.foto._id){
                fotoRequestService
                    .save($scope.foto,
                        () => {
                            $scope.mensagem = "Foto enviada com sucesso!";
                            $scope.foto = {};
                        },
                        err => {
                            $scope.mensagem = "Foto não foi enviada";
                            console.log(err);
                        }
                    );
            } else {
                fotoRequestService
                    .update( {fotoId: $scope.foto._id}, $scope.foto,
                        () => {
                            $scope.mensagem = "Foto atualizada com sucesso!";
                        },
                        err => {
                            $scope.mensagem = "Foto não foi atualizada";
                            console.log(err);
                        }
                    )
            }
        }
        */
    }


});