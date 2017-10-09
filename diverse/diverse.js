var app = angular.module('homeApp', []);
app.controller('homeCtrl', function($scope, $http){
	
	hideFunction();
	$scope.homeShow = true;
	$scope.visionShow = true;
	$scope.missionShow = false;
	$scope.valuesShow = false;
	

function hideFunction(){
	$scope.productsShow = false;
	$scope.servicesShow = false;
	$scope.aboutShow = false;
	$scope.contactsShow = false;
	$scope.homeShow = false;
	}

function navclick(){
	hideFunction();
	$('.mdl-layout__obfuscator.is-visible').click();
}	

$scope.homeClick = function(){
	navclick();
	$scope.homeShow = true;	
}

$scope.productsClick = function(){
	navclick();
	$scope.productsShow = true;	
}

$scope.servicesClick = function(){
	navclick();
	$scope.servicesShow = true;	
}

$scope.aboutClick = function(){
	navclick();
	$scope.aboutShow = true;	
}

$scope.contactsClick = function(){
	navclick();
	$scope.contactsShow = true;	
}

});

app.directive("products", function(){
	return{
		templateUrl: 'products.html' 
	};
});

app.directive("services", function(){
	return{
		templateUrl: 'services.html' 
	};
});

app.directive("about", function(){
	return{
		templateUrl: 'about.html' 
	};
});

app.directive("contacts", function(){
	return{
		templateUrl: 'contacts.html' 
	};
});