import './guest';
import './user';
import './web';

const requires = [
    'logisticapi.controllers.guest',
    'logisticapi.controllers.user',
    'logisticapi.controllers.web'
];

let controllersModule = angular.module('logisticapi.controllers', requires);

export default controllersModule;