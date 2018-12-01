import states from './states.json';
import translationEnglish from '../../translation.json';

export default function Config($locationProvider, $urlRouterProvider, $translateProvider, $mdThemingProvider, $stateProvider, $mdAriaProvider) {
    'ngInject';
    
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');
    
    $urlRouterProvider.otherwise('/home');
    $urlRouterProvider.when('/acp', '/acp/login');

    $translateProvider.translations('en', translationEnglish);
    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.usePostCompiling(true);

    $mdThemingProvider.disableTheming();

    if(states != null || states.length != 0)
	{
		angular.forEach(states, (value, key) =>
		{
			$stateProvider.state(value.name, value);
		});
	}

    $mdAriaProvider.disableWarnings();
}