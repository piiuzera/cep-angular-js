angular.module('amarosystem').factory('cepService', function($http) {
	var _getCep = function(cep) {
		return $http.get('https://viacep.com.br/ws/' + cep + '/json/');
	}

	return {
		getCep : _getCep
	};
});