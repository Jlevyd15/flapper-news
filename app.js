var app = angular.module('flapperNews', []);

app.factory('posts', [function(){
	var o = {
		posts: []
	};
	return o;
}]);

app.controller('MainCtrl', [
	'$scope',
	'posts',
	function($scope, posts){
		$scope.posts = posts.posts;
		$scope.test = 'Hello World!';
		$scope.posts = [ 
			{title:'post 1', upvotes:5},
			{title:'post 2', upvotes:15},
			{title:'post 3', upvotes:28},
			{title:'post 4', upvotes:4},
			{title:'post 5', upvotes:9},
		];
		$scope.addPost = function(){
				if(!$scope.title || $scope.title === '') { return; }
				$scope.posts.push({
					title: $scope.title,
					link: $scope.link,  
					upvotes:0
				});
				$scope.title = '';
				$scope.link = '';
		};
		$scope.addVote = function(post){
			post.upvotes += 1;
		};
	}]);
