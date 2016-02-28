(function(){
	var ngModule = angular.module('warp');
	ngModule.controller('LugarCtrl',LugarCtrl);

	LugarCtrl.$inject=['$scope', '$state', 'NgMap'];
	function LugarCtrl($scope, $state, NgMap){ 
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


		$scope.lugar = {
			id:'a',
			lat: 25.380910,
			lng: -100.979022,
			name: 'Lugar a'
		}


		NgMap.getMap().then(function(map) {
			$scope.map = map;
		});

		$scope.infoLugar = function(e,lugar){
			$scope.map.showInfoWindow('info', lugar.id);
			$scope.lugarSelected = lugar;
		}

	}
})();

