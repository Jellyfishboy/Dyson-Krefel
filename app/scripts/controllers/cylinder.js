'use strict';

angular.module('dysonKrefelWebApp')
    .controller('CylinderController', function ($scope, $rootScope, $translate, productService, carouselService) 
    {
        $rootScope.cylinderData = productService.setIndexValue($rootScope.cylinderData);

        $rootScope.cylinderData.carouselItemsPerSlide = 2;

        $scope.setIndexValueAndRefreshContent = function(indexValue) {
            $rootScope.cylinderData.expectedIndexValue = indexValue;
            $scope.tools = carouselService.buildToolsObjectFromIndexValue(indexValue, 'cylinderToolList', $rootScope.cylinderData.carouselItemsPerSlide);
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

        $scope.tools = carouselService.buildToolsObjectFromIndexValue($rootScope.cylinderData.expectedIndexValue, 'cylinderToolList', $rootScope.cylinderData.carouselItemsPerSlide)

        $scope.getCarouselItemCount = function(indexValue)
        {
            return new Array(carouselService.getCarouselItemCount(indexValue, 'cylinderToolList', $rootScope.cylinderData.carouselItemsPerSlide));
        }


    });