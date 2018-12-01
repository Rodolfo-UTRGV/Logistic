export default function Run(AppConstants, $state, $rootScope)
{
    'ngInject';

    $rootScope.appConfig    = AppConstants;
    $rootScope.state		= $state;

}