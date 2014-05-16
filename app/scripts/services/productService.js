'use strict';

angular.module('dysonKrefelWebApp')
    .factory('productService', function($translate) 
    {
        var $translator = $translate.instant;

        var indexValueToProductAttribute = 
        {
            '0': 
            {
                handheldProductPrice: $translator('HANDHELD.PRODUCT_1_PRICE'),
                handheldProductTag: $translator('HANDHELD.PRODUCT_1_TAGLINE'),
                handheldProductLink: $translator('HANDHELD.PRODUCT_1_SHOP'),

                cordlessProductPrice: $translator('CORDLESS.PRODUCT_1_PRICE'),
                cordlessProductTag: $translator('CORDLESS.PRODUCT_1_TAGLINE'),
                cordlessProductLink: $translator('CORDLESS.PRODUCT_1_SHOP'),

                cylinderProductPrice: $translator('CYLINDER.PRODUCT_1_PRICE'),
                cylinderProductTag: $translator('CYLINDER.PRODUCT_1_TAGLINE'),
                cylinderProductLink: $translator('CYLINDER.PRODUCT_1_SHOP'),

                fanProductPrice: $translator('FANS.PRODUCT_1_PRICE'),
                fanProductTag: $translator('FANS.PRODUCT_1_TAGLINE'),
                fanProductExtra: $translator('FANS.PRODUCT_1_EXTRA')
            },
            '1': 
            {
                handheldProductPrice: $translator('HANDHELD.PRODUCT_2_PRICE'),
                handheldProductTag: $translator('HANDHELD.PRODUCT_2_TAGLINE'),
                handheldProductLink: $translator('HANDHELD.PRODUCT_2_SHOP'),

                cordlessProductPrice: $translator('CORDLESS.PRODUCT_2_PRICE'),
                cordlessProductTag: $translator('CORDLESS.PRODUCT_2_TAGLINE'),
                cordlessProductLink: $translator('CORDLESS.PRODUCT_2_SHOP'),

                cylinderProductPrice: $translator('CYLINDER.PRODUCT_2_PRICE'),
                cylinderProductTag: $translator('CYLINDER.PRODUCT_2_TAGLINE'),
                cylinderProductLink: $translator('CYLINDER.PRODUCT_2_SHOP'),

                fanProductPrice: $translator('FANS.PRODUCT_2_PRICE'),
                fanProductTag: $translator('FANS.PRODUCT_2_TAGLINE'),
                fanProductExtra: $translator('FANS.PRODUCT_2_EXTRA')
            },
            '2': 
            {
                cordlessProductPrice: $translator('CORDLESS.PRODUCT_3_PRICE'),
                cordlessProductTag: $translator('CORDLESS.PRODUCT_3_TAGLINE'),
                cordlessProductLink: $translator('CORDLESS.PRODUCT_3_SHOP'),

                cylinderProductPrice: $translator('CYLINDER.PRODUCT_3_PRICE'),
                cylinderProductTag: $translator('CYLINDER.PRODUCT_3_TAGLINE'),
                cylinderProductLink: $translator('CYLINDER.PRODUCT_3_SHOP'),

                fanProductPrice: $translator('FANS.PRODUCT_3_PRICE'),
                fanProductTag: $translator('FANS.PRODUCT_3_TAGLINE'),
                fanProductExtra: $translator('FANS.PRODUCT_3_EXTRA')
            },
            '3': 
            {
                cordlessProductPrice: $translator('CORDLESS.PRODUCT_4_PRICE'),
                cordlessProductTag: $translator('CORDLESS.PRODUCT_4_TAGLINE'),
                cordlessProductLink: $translator('CORDLESS.PRODUCT_4_SHOP'),

                cylinderProductPrice: $translator('CYLINDER.PRODUCT_4_PRICE'),
                cylinderProductTag: $translator('CYLINDER.PRODUCT_4_TAGLINE'),
                cylinderProductLink: $translator('CYLINDER.PRODUCT_4_SHOP'),

                fanProductPrice: $translator('FANS.PRODUCT_4_PRICE'),
                fanProductTag: $translator('FANS.PRODUCT_4_TAGLINE'),
                fanProductExtra: $translator('FANS.PRODUCT_4_EXTRA')
            },
            '4': 
            {
                cylinderProductPrice: $translator('CYLINDER.PRODUCT_5_PRICE'),
                cylinderProductTag: $translator('CYLINDER.PRODUCT_5_TAGLINE'),
                cylinderProductLink: $translator('CYLINDER.PRODUCT_5_SHOP'),

                fanProductPrice: $translator('FANS.PRODUCT_5_PRICE'),
                fanProductTag: $translator('FANS.PRODUCT_5_TAGLINE'),
                fanProductExtra: $translator('FANS.PRODUCT_5_EXTRA')
            },
            '5': 
            {
                cylinderProductPrice: $translator('CYLINDER.PRODUCT_6_PRICE'),
                cylinderProductTag: $translator('CYLINDER.PRODUCT_6_TAGLINE'),
                cylinderProductLink: $translator('CYLINDER.PRODUCT_6_SHOP'),

                fanProductPrice: $translator('FANS.PRODUCT_6_PRICE'),
                fanProductTag: $translator('FANS.PRODUCT_6_TAGLINE'),
                fanProductExtra: $translator('FANS.PRODUCT_6_EXTRA')
            }
        };

        return {

            getProductAttributeFromIndexValue: function(indexValue, property) 
            {
                return indexValueToProductAttribute[indexValue][property];
            },
            setIndexValue: function(object) 
            {
                if (object === undefined)
                {
                    object =
                    {
                        expectedIndexValue: 0
                        // carouselIndexvalue: 0
                    };
                }
                return object;
            }
        };
    });