(function(){
	var ngModule = angular.module('warp');
	ngModule.controller('HomeCtrl',HomeCtrl);

	HomeCtrl.$inject=['$scope', '$state', '$interval','BusesService'];
	function HomeCtrl($scope, $state, $interval,BusesService){

		BusesService.getBuses().then(function(data){
			console.log(data)
			$scope.buses = data;


			$scope.route = function(e, b){
				$state.go('route',{id:b.id});
			}

			var i = 0;
			var j = 0;
			$interval(updatePosition, 3000);
			function updatePosition(){ 

					if(typeof $scope.buses[0].wayPoints[i] != "undefined"){
						var latlng = new google.maps.LatLng($scope.buses[0].wayPoints[i].lat, $scope.buses[0].wayPoints[i].lng);
						$scope.map.markers[1].setPosition(latlng);
						$scope.map.markers[1].setMap($scope.map);
					}
					i++;
					if(i== $scope.buses[0].wayPoints.length){
						i = 0;
					}

					if(typeof $scope.buses[1].wayPoints[j] != "undefined"){
						var latlng = new google.maps.LatLng($scope.buses[1].wayPoints[j].lat, $scope.buses[1].wayPoints[j].lng);
						$scope.map.markers[2].setPosition(latlng);
						$scope.map.markers[2].setMap($scope.map);
					}
					j++;
					
					if(j == $scope.buses[1].wayPoints.length){
						j = 0;
					}
			}

		});



	}
})();

