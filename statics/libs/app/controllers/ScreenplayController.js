angular
	.module( APPNAME )
	.controller('ScreenplayController', ['$scope', '$rootScope', '$element',  '$window', 'CanvasService', function($scope, $rootScope, $element, $window, CanvasService)
	{
		CanvasService.init( $element.find('canvas'), jQuery($element).find('.container'), $window, $scope.options.theme );
		CanvasService.setDescription( $scope.title, $scope.subtitle ); 
		$rootScope.saveCanvas = function()
		{
			$rootScope.saveURL = CanvasService.getURL();
			window.location.href = $rootScope.saveURL;
		}

		$scope.$watchCollection( 'options', function(newVal, oldVal)
		{
			CanvasService.update( newVal );
		})
	}])
;