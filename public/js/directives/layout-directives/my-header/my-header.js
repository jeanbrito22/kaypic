angular.module('layoutDirectives').directive('myHeader', function() {

    let ddo = {};

    ddo.scope = {
        titulo: "@titulo"
    };

    ddo.restrict = "AE";

    ddo.tansclude = false;

    ddo.templateUrl = "./js/directives/layout-directives/my-header/my-header.html";

    return ddo;

});