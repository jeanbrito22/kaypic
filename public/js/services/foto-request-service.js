angular.module("servicesModule").factory('fotoRequestService', function($resource) {
    let fotoResource = $resource("v1/fotos/:fotoId", null, {
        update: {
            method: "PUT"
        }
    });
    
    return fotoResource;
});