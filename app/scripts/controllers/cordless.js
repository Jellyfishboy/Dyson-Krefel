'use strict';

angular.module('dysonKrefelWebApp')
    .controller('CordlessController', function ($scope, $rootScope, $translate, productService) 
    {
        $rootScope.cordlessData = productService.setIndexValue($rootScope.cordlessData);

        $scope.setIndexValueAndRefreshContent = function(indexValue) {
            $rootScope.cordlessData.expectedIndexValue = indexValue;
        }

        $scope.getProductPriceText = function(indexValue) 
        {
            return productService.getProductAttributeFromIndexValue(indexValue, 'cordlessProductPrice');
        };

        $scope.getProductTagText = function(indexValue) 
        {
            return productService.getProductAttributeFromIndexValue(indexValue, 'cordlessProductTag');
        };

        $scope.getProductLinkText = function(indexValue) 
        {
            return productService.getProductAttributeFromIndexValue(indexValue, 'cordlessProductLink');
        };
    });