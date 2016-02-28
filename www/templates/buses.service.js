(function(){
	var ngModule = angular.module('warp');
	ngModule.factory('BusesService',BusesService);

	BusesService.$inject = ['$http', '$q'];

	function BusesService($http, $q){

		function getBuses(){
			var deferred = $q.defer();

			$http.get('./routes.json').then(function(res){
				deferred.resolve(res.data);
			}).catch(function(res) {
				deferred.reject(res);
			});

			return deferred.promise;
		}

		return {
			getBuses: getBuses
		};
	}

})();