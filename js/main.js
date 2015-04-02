angular.module('madlibs', [])
angular.module('madlibs', ['ngAnimate'])
	.constant('GENDER', 'f')
    .controller('mainController', function ($scope) {
        $scope.showInput = true;
        $scope.showOutput = false;
       

        

        $scope.submit = function () {
            $scope.showInput = $scope.formWords.$invalid;
            $scope.showOutput = $scope.formWords.$valid;
        };

        $scope.startover = function () {
            $scope.persons_name = '';
            $scope.dirty_task = '';
            $scope.obnoxious_celebrity = '';
            $scope.job_title = '';
            $scope.celebrity = '';
            $scope.huge_number = '';
            $scope.tedious_task = '';
            $scope.useless_skill = '';
            $scope.adjective = '';
            $scope.formWords.$setPristine();
            $scope.showInput = true;
            $scope.showOutput = false;
        };
    })
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