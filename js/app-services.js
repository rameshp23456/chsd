var chsdServices = angular.module('chsdServices', ['ngResource']);

chsdServices.factory('alertsConfig', ['$resource', function ($resource) {
    return $resource('js/:configId.json', {}, {
        getAlerts: { method: 'GET', params: {configId:"alertsConfig"}, isArray: true }
    });
}]);