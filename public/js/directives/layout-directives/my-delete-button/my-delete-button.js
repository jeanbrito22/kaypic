angular.module('layoutDirectives').directive('myDeleteButton', function() {

    let ddo = {};

    ddo.scope = {
        titulo: "@titulo",
        acao: "&acao"
    };

    ddo.restrict = "AE";

    ddo.tansclude = false;

    ddo.template = `<button ng-click="acao()" class="btn btn-danger btn-block">{{titulo}}</button>`

    return ddo;

});