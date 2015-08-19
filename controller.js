var app = angular.module("github-api");

app.controller("GitHubController", function($scope, githubService) {
	$scope.getUserData = function() {
		// githubService.getInfo();
		githubService.getUser($scope.searchText).then(function(res){
			$scope.user = res.data;
		});
	}
});