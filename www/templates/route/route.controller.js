(function(){
	var ngModule = angular.module('warp');
	ngModule.controller('RouteCtrl',RouteCtrl);

	RouteCtrl.$inject=['$scope', '$state','NgMap'];
	function RouteCtrl($scope, $state,NgMap){

		$scope.lugarSelected = {};
		$scope.bus = {
			id: 0,
			route:'4A', 
			lat: 25.379904, 
			lng: -100.978688,
			color: "#FF0000",
			wayPoints: [
				{
					lat: 25.379904, 
					lng: -100.978688
				},
				{
					lat: 25.380508,
					lng: -100.978943
				},
				{
						lat: 25.380910,
						lng: -100.979022
				},
				{
				
						lat: 25.381788,
						lng: -100.978921
				}
			]
		};


		$scope.lugares = [
				{
					id:'a',
					lat: 25.380910,
					lng: -100.979022,
					name: 'Lugar a'
				},
				{
					id:'b',
					lat: 25.381788,
					lng: -100.978921,
					name: 'Lugar b'
				}
			]
		$scope.lugar = $scope.lugares[0]

		NgMap.getMap().then(function(map) {
			$scope.map = map;
		});

		$scope.infoLugar = function(e,lugar){
			$scope.map.showInfoWindow('info', lugar.id);
			$scope.lugarSelected = lugar;
		}

		$scope.verLugar = function(l){
			$state.go('lugar', {id: $scope.lugarSelected.id});
		}


		$scope.listadoLugares = function(){
			$state.go('listadoLugares', {id: $scope.bus.id})
		}
	}
})();

