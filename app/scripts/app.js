'use strict';

angular.module('askDysonWebApp', ['pascalprecht.translate', 'ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/cylinders', {
                templateUrl: 'views/cylinders.html',
                controller: 'MainCtrl'
            })
            .when('/cordless', {
                templateUrl: 'views/cordless.html',
                controller: 'MainCtrl'
            })
            .when('/handhelds', {
                templateUrl: 'views/handhelds.html',
                controller: 'MainCtrl'
            })
            .when('/fans-and-heaters', {
                templateUrl: 'views/fans.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .config(['$translateProvider', function($translateProvider) {

        $translateProvider
            .translations('en-GB', {

                MENU:
                {
                    CYLINDER: 'Cylinders',
                    CORDLESS: 'Cordless',
                    HANDHELD: 'Handhelds',
                    FANS_HEATERS: 'Fans & heaters'
                },
                SHARED:
                {
                    SELECT_VACUUM: 'Select vacuum',
                    SELECT_FAN: 'Select a fan',

                    INCLUDED_BOX: 'This machine also comes with',

                    SHOP_NOW: 'Shop now',

                    HYGENIC_BIN_TITLE: 'Hygenic bin emptying',
                    EXTRA_TOOLS_TITLE: 'Extra tools',
                    NO_EXTRA_COSTS_TITLE: 'No extra costs',
                    TWO_GUARANTEE_TITLE: '2 year guarantee',
                    FIVE_GUARANTEE_TITLE: '5 year guarantee',

                    HYGENIC_BIN_TEXT: 'Just press the button to release the dirt – quickly and hygienically.',
                    EXTRA_TOOLS_TEXT: 'Dyson-engineered tools to remove dust and dirt from awkward places.',
                    NO_EXTRA_COSTS_TEXT: 'Dyson vacuums don\'t use bags and have lifetime washable filters - so no extra costs.',

                    CREVICE_TOOL: 'Crevice tool',
                    COMBINATION_TOOL: 'Combination tool',
                    TFT_TOOL: 'Tangle-free turbine tool',
                    MOTORISED_TOOL: 'Mini motorised tool',
                    STAIR_TOOL: 'Stair tool',
                    MATTRESS_TOOL: 'Mattress tool',
                    HARD_TOOL: 'Articulating hard floor tool',
                    STUBBORN_TOOL: 'Stubborn dirt brush'

                },
                INDEX:
                {
                    DC62_CAROUSEL_HEADLINE: 'Sucks up as much dust as even a corded vacuum.',
                    DC62_CAROUSEL_BUTTON: 'Learn more',

                    AIR_MULTIPLIER_HEADLINE: 'Niew. Krachtige luchstroom. Nu tot 75% stiller.',

                    CYLINDER_TITLE: 'Cylinder',
                    CORDLESS_TITLE: 'Cordless',
                    HANDHELD_TITLE: 'Handhelds',
                    FANS_HEATERS_TITLE: 'Fans & heaters',

                    CYLINDER_TEXT: 'Remove dust from all floors, and follow you around the home with greater control.',
                    CORDLESS_TEXT: 'A new way to clean. Balanced for easy floor to ceiling cordless cleaning.',
                    HANDHELD_TEXT: 'Portable Dyson power for quick clean-ups around the home and car.',
                    FANS_HEATERS_TEXT: 'No blades - just an uninterrupted stream of smooth hot or cool air.',

                    CYLINDER_BUTTON: 'All cylinders',
                    CORDLESS_BUTTON: 'All cordless',
                    HANDHELD_BUTTON: 'All handhelds',
                    FANS_HEATERS_BUTTON: 'All fans & heaters',

                    MISSION_HEADER: 'Our mission is simple. We solve the problems others seem to ignore.',

                    MORE_THAN_MACHINE_HEADER: 'More than just a machine',

                    BALL_TECH_TITLE: 'Latest Ball™ technology',
                    CYCLONE_TITLE: 'Root Cyclone™ technology',
                    MULTIPLIER_TITLE: 'Air Multiplier™ technology',

                    BALL_TECH_TEXT: 'All of the vacuum\'s key components are housed within the ball itself, including the electronics, the motor, filter and power cable. This creates a low centre of gravity and provides stability allow it to follow you effortlessly around the home, without the awkward moves.',
                    CYCLONE_TEXT: 'Capturing more microscopic dust than any other vaccum. The Arrangment of the inner cyclones in a radial formation means airflow can be channelled directly onto the ball. This improves flow efficiency, preserving air pressure and maximising suction.',
                    MULTIPLIER_TEXT: 'Dyson fans and heaters are safe and produce an uninterrupted stream of smooth air. Drawn in by an energy efficient, brushless motor. A combination of the technologies used in turbochargers and jet engines generates powerful airflow.'
                },
                HANDHELD:
                {
                    HERO_HEADLINE: 'The highest suction of any handheld',
                    HERO_BUTTON: 'Learn more',

                    PRODUCT_1_NAME: 'DC34 Origin',
                    PRODUCT_1_PRICE: '€279',
                    PRODUCT_1_TAGLINE: '15 minutes of high powerful suction that doesn’t fade.',

                    PRODUCT_2_NAME: 'DC34 Animal',
                    PRODUCT_2_PRICE: '€379',
                    PRODUCT_2_TAGLINE: '2 15 minutes of high powerful suction that doesn’t fade.',

                    ALL_DYSONS_HAVE: 'All Dyson handheld vacuums have',

                    TWO_GUARANTEE_TEXT: 'All new Dyson handheld vacuums come with a free 2 year parts and labour guarantee.'

                },
                CORDLESS:
                {
                    HERO_HEADLINE: 'Sucks up as much dust as even a corded vacuum.',
                    HERO_BUTTON: 'Learn more',

                    PRODUCT_1_NAME: 'DC62 Animal Pro',
                    PRODUCT_1_PRICE: '€379',
                    PRODUCT_1_TAGLINE: 'The most powerful cordless vacuum for floor to ceiling cleaning.',

                    PRODUCT_2_NAME: 'DC62 Up Top',
                    PRODUCT_2_PRICE: '€379',
                    PRODUCT_2_TAGLINE: 'The most powerful cordless vacuum for floor to ceiling cleaning.',

                    PRODUCT_3_NAME: 'DC45 Animal Pro',
                    PRODUCT_3_PRICE: '€359',
                    PRODUCT_3_TAGLINE: 'The most powerful cordless vacuum for floor to ceiling cleaning.',

                    PRODUCT_4_NAME: 'DC35 Multifloor',
                    PRODUCT_4_PRICE: '€329',
                    PRODUCT_4_TAGLINE: 'The most powerful cordless vacuum for floor to ceiling cleaning.',

                    ALL_DYSONS_HAVE: 'All Dyson cordless vacuums have',

                    TWO_GUARANTEE_TEXT: 'All new Dyson fans & heaters come with a free 2 year parts and labour guarantee.'

                },
                CYLINDER:
                {
                    HERO_HEADLINE_1: 'The only vacuum with',
                    HERO_HEADLINE_2: 'No maintenance of filters No bags to buy and',
                    HERO_HEADLINE_3: 'No loss of suction',
                    HERO_BUTTON: 'Learn more',

                    PRODUCT_1_NAME: 'DC52 Animal Complete',
                    PRODUCT_1_PRICE: '€379',
                    PRODUCT_1_TAGLINE: 'Powerful complete clean around the home.',

                    PRODUCT_2_NAME: 'DC52 Allergy Musclehead Parquet',
                    PRODUCT_2_PRICE: '€3',
                    PRODUCT_2_TAGLINE: 'Powerful complete clean around the home.',

                    PRODUCT_3_NAME: 'DC52 Allergy Musclehead',
                    PRODUCT_3_PRICE: '€379',
                    PRODUCT_3_TAGLINE: 'Powerful complete clean around the home.',

                    PRODUCT_4_NAME: 'DC33c Allergy',
                    PRODUCT_4_PRICE: '€379',
                    PRODUCT_4_TAGLINE: 'Powerful complete clean around the home.',

                    PRODUCT_5_NAME: 'DC33c Origin Plus',
                    PRODUCT_5_PRICE: '€379',
                    PRODUCT_5_TAGLINE: 'Powerful complete clean around the home.',

                    PRODUCT_6_NAME: 'DC33 Musclehead',
                    PRODUCT_6_PRICE: '€379',
                    PRODUCT_6_TAGLINE: 'Powerful complete clean around the home.',


                    
                    ALL_DYSONS_HAVE: 'All Dyson cylinder vacuums have',

                    FIVE_GUARANTEE_TEXT: 'All new Dyson cylinder vacuums come with a free 5 year parts and labour guarantee.'

                },
                FANS:
                {
                    HERO_HEADLINE: 'Fast, even room heating. High velocity air to cool.',
                    HERO_BUTTON: 'Learn more',

                    PRODUCT_1_NAME: 'AM05 Iron/Blue',
                    PRODUCT_1_PRICE: '€179',
                    PRODUCT_1_TAGLINE: 'In winder provides long-range heat projection. In summer it has powerful airflow and air velocity to cool you effectively.',
                    PRODUCT_1_EXTRA: 'Heating and cooling fan - iron/blue.',

                    PRODUCT_2_NAME: 'AM05 Black/Nickel',
                    PRODUCT_2_PRICE: '€279',
                    PRODUCT_2_TAGLINE: 'In winder provides long-range heat projection. In summer it has powerful airflow and air velocity to cool you effectively.',
                    PRODUCT_2_EXTRA: 'Heating and cooling fan - iron/blue.',

                    PRODUCT_3_NAME: 'AM05 White/Silver',
                    PRODUCT_3_PRICE: '€379',
                    PRODUCT_3_TAGLINE: 'In winder provides long-range heat projection. In summer it has powerful airflow and air velocity to cool you effectively.',
                    PRODUCT_3_EXTRA: 'Heating and cooling fan - iron/blue.',

                    PRODUCT_4_NAME: 'AM06 White/Silver',
                    PRODUCT_4_PRICE: '€479',
                    PRODUCT_4_TAGLINE: 'In winder provides long-range heat projection. In summer it has powerful airflow and air velocity to cool you effectively.',
                    PRODUCT_4_EXTRA: 'Heating and cooling fan - iron/blue.',

                    PRODUCT_5_NAME: 'AM07 Black/Nickel',
                    PRODUCT_5_PRICE: '€579',
                    PRODUCT_5_TAGLINE: 'In winder provides long-range heat projection. In summer it has powerful airflow and air velocity to cool you effectively.',
                    PRODUCT_5_EXTRA: 'Heating and cooling fan - iron/blue.',

                    PRODUCT_6_NAME: 'AM08 White/Silver',
                    PRODUCT_6_PRICE: '€679',
                    PRODUCT_6_TAGLINE: 'In winder provides long-range heat projection. In summer it has powerful airflow and air velocity to cool you effectively.',
                    PRODUCT_6_EXTRA: 'Heating and cooling fan - iron/blue.',

                    ALL_DYSONS_HAVE: 'All Dyson fans & heaters have:',

                    SAFE_TITLE: 'Safe',
                    SAFE_TEXT: 'Dyson fans & heaters have no blades or visible heating elements.',

                    TILT_TITLE: 'Touch tilt',
                    TILT_TEXT: 'Dyson fans aren\'t top-heavy like some other fans, pivot on their own centre of gravity.',

                    CLEAN_TITLE: 'Easy to clean',
                    CLEAN_TEXT: 'Unlike many conventional fans Dyson fans & heaters have no grille, so they\'re easy to clean',

                    TWO_GUARANTEE_TEXT: 'All new Dyson fans & heaters come with a free 2 year parts and labour guarantee.'
                }
            })
            .translations('de-DE', {
                MENU:
                {
                    CYLINDER: 'Cylinders',
                    CORDLESS: 'Cordless',
                    HANDHELD: 'Handhelds',
                    FANS_HEATERS: 'Fans & heaters'
                },
            });

        function getUrlVars(queryString)
        {
            var vars = [], hash;
            var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
            for(var i = 0; i < hashes.length; i++)
            {
                hash = hashes[i].split('=');
                vars.push(hash[0]);
                vars[hash[0]] = hash[1];
            }
            return vars;
        }
        $translateProvider.preferredLanguage(getUrlVars()['language'] || 'en-GB');
        $translateProvider.fallbackLanguage('en-GB');
}]);
