'use strict';

angular.module('dysonKrefelWebApp')
    .controller('FanController', function ($scope, $rootScope, $translate, productService) 
    {
        $rootScope.fanData = productService.setIndexValue($rootScope.fanData);

        $scope.setIndexValueAndRefreshContent = function(indexValue) {
            $rootScope.fanData.expectedIndexValue = indexValue;
        }

        $scope.getProductPriceText = function(indexValue) 
        {
            return productService.getProductAttributeFromIndexValue(indexValue, 'fanProductPrice');
        };

        $scope.getProductTagText = function(indexValue) 
        {
            return productService.getProductAttributeFromIndexValue(indexValue, 'fanProductTag');
        };

        $scope.getProductExtraText = function(indexValue) 
        {
            return productService.getProductAttributeFromIndexValue(indexValue, 'fanProductExtra');
        };



    });