(function(){
	var ngModule = angular.module('warp');
	ngModule.controller('HomeCtrl',HomeCtrl);

	HomeCtrl.$inject=['$scope', '$state', '$interval','BusesService'];
	function HomeCtrl($scope, $state, $interval,BusesService){

		BusesService.getBuses().then(function(data){
			$scope.buses = data;


			$scope.route = function(e, b){
				$state.go('route',{id:b.id});
			}

			var i = 0;
			$interval(updatePosition, 3000);
			function updatePosition(){ 
				var latlng = new google.maps.LatLng($scope.buses[0].wayPoints[i].lat, $scope.buses[0].wayPoints[i].lng);
				$scope.map.markers[1].setPosition(latlng);
				$scope.map.markers[1].setMap($scope.map);
				i++;
			}

		});



	}
})();

