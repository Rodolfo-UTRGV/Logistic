import UserMeController from './me';

const requires = [
];

let userModule = angular.module('logisticapi.controllers.user', requires);

userModule.controller('UserMeController', UserMeController);

export default userModule;