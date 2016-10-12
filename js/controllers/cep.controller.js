angular.module('amarosystem').controller('cepController', function($scope, cepService) {

	$scope.getCep = function() {
		delete $scope.error;
		delete $scope.endereco;
		try {
			if($scope.cep.length != 8 || isNaN($scope.cep)) {
				throw 'CEP informado está inválido.';
			}

			cepService.getCep($scope.cep).success(function(data) {
				$scope.endereco = data;
			});
		} catch(e) {
			$scope.error = e;
		}
	};

});