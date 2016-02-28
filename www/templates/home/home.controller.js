(function(){
	var ngModule = angular.module('warp');
	ngModule.controller('HomeCtrl',HomeCtrl);

	HomeCtrl.$inject=['$scope', '$state', '$interval'];
	function HomeCtrl($scope, $state, $interval){

		//get buses
		$scope.buses = [
					{
						id: 0,
						route:'4A', 
						lat: 25.379904, 
						lng: -100.978688,
						color: "#FF0000",
						wayPoints: [
							{
								lat: 25.379904, 
								lng: -100.978688,
							},
							{
								lat: 25.380508,
								lng: -100.978943
							},
							{
									lat: 25.380910,
									lng: -100.979022,
							},
							{
							
									lat: 25.381788,
									lng: -100.978921,
							}
						]
					},
					{
						id: 1,
						route:'4B', 
						lat: 25.378601, 
						lng: -100.980156,
						color: "#FF0",
						wayPoints: [
							{
								lat: 25.378601, 
								lng:-100.980156,
							},
							{
								lat: 25.380229, 
								lng: -100.981476
							}
						]
					}
				]

		$scope.route = function(e, b){
			$state.go('route',{id:b.id});
		}

		var i = 0;
		$interval(updatePosition, 3000);
		function updatePosition(){ 
		/*	var latlng = new google.maps.LatLng($scope.buses[0].wayPoints[i].lat, $scope.buses[0].wayPoints[i].lng);
			$scope.map.markers[1].setPosition(latlng);
			$scope.map.markers[1].setMap($scope.map);
			i++;*/
		}
	}
})();

