(function(){
	var ngModule = angular.module('warp');
	ngModule.controller('ListadoLugaresCtrl',ListadoLugaresCtrl);

	ListadoLugaresCtrl.$inject=['$scope', '$state','$stateParams'];
	function ListadoLugaresCtrl($scope, $state,$stateParams){ 
		
		var idBus = $stateParams.id;
		$scope.lugares = [
			{
				id:0,
				name: 'El Mesón Principal',
				img:'./img/lugar1.jpg'
			},
			{
				id:2,
				name: 'lugar 2'
			}
		];

		$scope.lugar = function(l){
			$state.go('lugar', {id: l.id,bus: idBus});
		}
	}
})();

