'use strict';

angular.module('askDysonWebApp', ['pascalprecht.translate'])
    .config(['$translateProvider', function($translateProvider) {

        $translateProvider
            .translations('en-GB', {
                HEADLINE: 'Welcome',
                INTRO_TEXT: 'This is rather awesome'
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
        $translateProvider.preferredLanguage(getUrlVars()["language"]) || 'en-GB';
        $translateProvider.fallbackLanguage('en-GB');
}]);
