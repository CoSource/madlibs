angular.module('madlibs', [])
	.constant('GENDER', 'f')
	.controller('genderController', function(GENDER, $scope){
			$scope.gender = GENDER;
			if ($scope.gender ==  'm'){
				$scope.HisHerToggle = 'his';
				$scope.HeSheToggle = 'he';
			} else {
				$scope.HisHerToggle = 'her';
				$scope.HeSheToggle = 'she';
			}
	});