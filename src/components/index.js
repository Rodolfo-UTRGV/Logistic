import FooterComponent from './footer';
import HeaderComponent from './header';
import NavigationComponent from './navigation';

const requires = [

];

let componentsModule = angular.module('logisticapi.components', requires);

componentsModule.component('apiFooter', FooterComponent);
componentsModule.component('apiHeader', HeaderComponent);
componentsModule.component('apiNavigation', NavigationComponent);

export default componentsModule;