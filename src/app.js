import Constants from './config/constants.json';
import Config from './config/config';
import Run from './config/run';

import './components';
import './controllers';
import './services';

import './config/templateCache';

const requires = [
    'ngAnimate',
    'ngAria',
    'ngMaterial',
    'ngMessages',
    'ngSanitize',
    'pascalprecht.translate',
    'ui.router',
    'ct.ui.router.extras',
    'ngStorage',
    'md.data.table',
    'logisticapi.templates',
    'logisticapi.components',
    'logisticapi.controllers',
    'logisticapi.services'
];

window.app = angular.module('logisticapi', requires);

angular.module('logisticapi').constant('AppConstants', Constants);
angular.module('logisticapi').config(Config);
angular.module('logisticapi').run(Run);

angular.bootstrap(document, ['logisticapi'], { strictDi: true });