'use strict';

angular.module('dysonKrefelWebApp')
    .factory('carouselService', function($translate) 
    {
        var $translator = $translate.instant;

        var toolList =
        {
            crevice: $translator('SHARED.CREVICE_TOOL'),
            combination: $translator('SHARED.COMBINATION_TOOL'),
            tft: $translator('SHARED.TFT_TOOL'),
            motorised: $translator('SHARED.MOTORISED_TOOL'),
            stair: $translator('SHARED.STAIR_TOOL'),
            mattress: $translator('SHARED.MATTRESS_TOOL'),
            hard: $translator('SHARED.HARD_TOOL'),
            stubborn: $translator('SHARED.STUBBORN_TOOL'),
            '0': 
                {
                    cordlessToolList: $translator('CORDLESS.PRODUCT_1_TOOLS'),
                    cylinderToolList: $translator('CYLINDER.PRODUCT_1_TOOLS'),
                    handheldToolList: $translator('HANDHELD.PRODUCT_1_TOOLS')
                },
            '1': 
                {
                    cordlessToolList: $translator('CORDLESS.PRODUCT_2_TOOLS'),
                    cylinderToolList: $translator('CYLINDER.PRODUCT_2_TOOLS'),
                    handheldToolList: $translator('HANDHELD.PRODUCT_2_TOOLS')
                },
            '2': 
                {
                    cordlessToolList: $translator('CORDLESS.PRODUCT_3_TOOLS'),
                    cylinderToolList: $translator('CYLINDER.PRODUCT_3_TOOLS')
                },
            '3': 
                {
                    cordlessToolList: $translator('CORDLESS.PRODUCT_4_TOOLS'),
                    cylinderToolList: $translator('CYLINDER.PRODUCT_4_TOOLS')
                },
            '4': 
                {
                    cordlessToolList: $translator('CORDLESS.PRODUCT_5_TOOLS'),
                    cylinderToolList: $translator('CYLINDER.PRODUCT_5_TOOLS')
                },
            '5': 
                {
                    cordlessToolList: $translator('CORDLESS.PRODUCT_6_TOOLS'),
                    cylinderToolList: $translator('CYLINDER.PRODUCT_6_TOOLS')
                }

        };

        return {

            buildToolsObjectFromIndexValue: function(indexValue, property, itemCount, $translator)
            {
                var $result, $tempArray, $toolArray;
                $result = [[]];
                $tempArray = [];
                $toolArray = toolList[indexValue][property].split(',');

                for(var i = 0; i < $toolArray.length; i++)
                {
                    if(i != 0 && i % 2 == 0)
                    {
                        $result[0].push($tempArray);
                        $tempArray = [];
                    }
                    $tempArray.push({
                        className: $toolArray[i],
                        productName: toolList[$toolArray[i]]
                    });
                    if (i == $toolArray.length-1)
                    {
                        $result[0].push($tempArray);
                    }
                }
                return $result[0];
            },

            getCarouselItemCount: function(indexValue, property, itemCount)
            {
                return Math.round(toolList[indexValue][property].split(',').length/itemCount)
            }

        };

    });