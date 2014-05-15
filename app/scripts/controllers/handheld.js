'use strict';

angular.module('dysonKrefelWebApp')
    .controller('HandheldController', function ($scope, $rootScope, $translate, productService) 
    {
        $rootScope.handheldData = productService.setIndexValue($rootScope.handheldData);

        $scope.setIndexValueAndRefreshContent = function(indexValue) {
            $rootScope.handheldData.expectedIndexValue = indexValue;
        }

        $scope.getProductPriceText = function(indexValue) 
        {
            return productService.getProductAttributeFromIndexValue(indexValue, 'handheldProductPrice');
        };

        $scope.getProductTagText = function(indexValue) 
        {
            return productService.getProductAttributeFromIndexValue(indexValue, 'handheldProductTag');
        };

        $scope.getProductLinkText = function(indexValue) 
        {
            return productService.getProductAttributeFromIndexValue(indexValue, 'handheldProductLink');
        };



    });