import GuestRegisterController from './register';

let guestModule = angular.module('logisticapi.controllers.guest', []);

guestModule.controller('GuestRegisterController', GuestRegisterController);

export default guestModule;