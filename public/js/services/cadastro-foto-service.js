angular.module('servicesModule').factory('cadastroFotoService', function(fotoRequestService, $q) {

    const servico = {};

    servico.cadastrar = function(foto) {

        let promise = $q( (resolve, reject) => {
            
            if(foto._id) {
                fotoRequestService
                    .update({fotoId: foto._id}, foto,
                        () => {
                            resolve({
                                mensagem: "Foto atualizada com sucesso!",
                                inclusao: false
                            });
                        },
                        err => {
                            console.log(err);
                            reject({
                                mensagem: "Foto não foi atualizada"
                            });
                        }
                    );
            } else {
                fotoRequestService
                    .save(foto,
                          () => {
                            resolve({
                                mensagem: "Foto atualizada com sucesso!",
                                inclusao: true
                            });
                          },
                          err => {
                            console.log(err);
                            reject({
                                mensagem: "Foto não foi atualizada"
                            });
                          }
                    )

            }
        });

        return promise

    }

    return servico

});