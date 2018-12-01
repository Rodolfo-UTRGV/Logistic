import LogisticAPI from './logisticapi';
import LogisticUser from './user';
import Utility from './utility';

let servicesModule = angular.module('logisticapi.services', []);

servicesModule.service('LogisticAPI', LogisticAPI);
servicesModule.service('LogisticUser', LogisticUser);
servicesModule.service('Utility', Utility);

export default servicesModule;