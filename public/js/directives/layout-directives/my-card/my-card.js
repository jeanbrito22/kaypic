angular.module('layoutDirectives').directive("myCard", function(){

    let ddo = {};

    ddo.scope = {
        titulo: "@titulo",
        imagem: "@imagem"
    }

    ddo.restrict = "AE";

    ddo.transclude = true;

    ddo.templateUrl = "./js/directives/layout-directives/my-card/my-card.html";

    return ddo;

});