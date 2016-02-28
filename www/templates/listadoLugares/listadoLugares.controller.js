(function(){
	var ngModule = angular.module('warp');
	ngModule.controller('ListadoLugaresCtrl',ListadoLugaresCtrl);

	ListadoLugaresCtrl.$inject=['$scope', '$state'];
	function ListadoLugaresCtrl($scope, $state){ 
		$scope.lugares = [
			{
				id:0,
				name: 'lugar 1'
			},
			{
				id:2,
				name: 'lugar 2'
			}
		];

		$scope.lugar = function(l){
			$state.go('lugar', {id: l.id});
		}
	}
})();

