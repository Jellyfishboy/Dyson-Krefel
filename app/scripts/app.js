'use strict';

angular.module('askDysonWebApp', ['pascalprecht.translate'])
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
                INDEX :
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
                }
            })
            .translations('de-DE', {
                HEADLINE: 'Willkommen',
                INTRO_TEXT: 'Das ist ziemlich genial'
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
        $translateProvider.preferredLanguage(getUrlVars()['language']) || 'en-GB';
        $translateProvider.fallbackLanguage('en-GB');
}]);
