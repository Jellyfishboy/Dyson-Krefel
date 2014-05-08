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
                templateUrl: 'views/fans_heaters.html',
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
                    NO_EXTRA_COSTS_TEXT: 'Dyson vacuums don\'t use bags and have lifetime washable filters - so no extra costs.'
                },
                INDEX:
                {
                    HERO_HEADLINE: 'Sucks up as much dust as even a corded vacuum.',
                    HERO_BUTTON: 'Learn more',

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

                    PRODUCT_1_PRICE: '€379',
                    PRODUCT_1_TAGLINE: '15 minutes of high powerful suction that doesn’t fade.',
                    PRODUCT_1_TOOL_1_TITLE: 'Crevice tool',
                    PRODUCT_1_TOOL_2_TITLE: 'Combination tool',

                    // PRODUCT_2_PRICE:
                    // PRODUCT_2_TAGLINE
                    // PRODUCT_2_TOOL_1_TITLE:
                    // PRODUCT_2_TOOL_2_TITLE:

                    ALL_DYSONS_HAVE: 'All Dyson handheld vacuums have',

                    TWO_GUARANTEE_TEXT: 'All new Dyson handheld vacuums come with a free 2 year parts and labour guarantee.'

                },
                CORDLESS:
                {
                    HERO_HEADLINE: 'Sucks up as much dust as even a corded vacuum.',
                    HERO_BUTTON: 'Learn more',

                    PRODUCT_1_PRICE: '€379',
                    PRODUCT_1_TAGLINE: 'The most powerful cordless vacuum for floor to ceiling cleaning.',
                    PRODUCT_1_TOOL_1_TITLE: 'Combination tool',
                    PRODUCT_1_TOOL_2_TITLE: 'Flexi tool',
                    PRODUCT_1_TOOL_3_TITLE: 'Mini motorised tool',

                    // PRODUCT_2_PRICE:
                    // PRODUCT_2_TAGLINE
                    // PRODUCT_2_TOOL_1_TITLE:
                    // PRODUCT_2_TOOL_2_TITLE:

                    ALL_DYSONS_HAVE: 'All Dyson cordless vacuums have',

                    TWO_GUARANTEE_TEXT: 'All new Dyson fans & heaters come with a free 2 year parts and labour guarantee.'

                },
                CYLINDER:
                {
                    HERO_HEADLINE_1: 'The only vacuum with',
                    HERO_HEADLINE_2: 'No maintenance of filters No bags to buy and',
                    HERO_HEADLINE_3: 'No loss of suction',
                    HERO_BUTTON: 'Learn more',

                    PRODUCT_1_PRICE: '€379',
                    PRODUCT_1_TAGLINE: 'Powerful complete clean around the home.',
                    PRODUCT_1_TOOL_1_TITLE: 'Tangle-free turbine',
                    PRODUCT_1_TOOL_2_TITLE: 'Articulating hard floor tool',
                    PRODUCT_1_TOOL_3_TITLE: 'Stubborn dirt brush',

                    // PRODUCT_2_PRICE:
                    // PRODUCT_2_TAGLINE
                    // PRODUCT_2_TOOL_1_TITLE:
                    // PRODUCT_2_TOOL_2_TITLE:

                    ALL_DYSONS_HAVE: 'All Dyson cylinder vacuums have',

                    FIVE_GUARANTEE_TEXT: 'All new Dyson cylinder vacuums come with a free 5 year parts and labour guarantee.'

                },
                FANS:
                {
                    HERO_HEADLINE: 'Fast, even room heating. High velocity air to cool.',
                    HERO_BUTTON: 'Learn more',

                    PRODUCT_1_PRICE: '€379',
                    PRODUCT_1_TAGLINE: 'In winder provides long-range heat projection. In summer it has powerful airflow and air velocity to cool you effectively.',
                    PRODUCT_1_EXTRA: 'Heating and cooling fan - iron/blue.',

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
