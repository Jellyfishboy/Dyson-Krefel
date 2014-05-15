'use strict';

angular.module('dysonKrefelWebApp')
    .controller('CylinderController', function ($scope, $rootScope, $translate, productService) 
    {
        $rootScope.cylinderData = productService.setIndexValue($rootScope.cylinderData);

        $scope.setIndexValueAndRefreshContent = function(indexValue) {
            $rootScope.cylinderData.expectedIndexValue = indexValue;
        }

        $scope.getProductPriceText = function(indexValue) 
        {
            return productService.getProductAttributeFromIndexValue(indexValue, 'cylinderProductPrice');
        };

        $scope.getProductTagText = function(indexValue) 
        {
            return productService.getProductAttributeFromIndexValue(indexValue, 'cylinderProductTag');
        };

        $scope.getProductLinkText = function(indexValue) 
        {
            return productService.getProductAttributeFromIndexValue(indexValue, 'cylinderProductLink');
        };



    });