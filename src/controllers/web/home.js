export default class HomeController {
    
    //Guest Register Controller Constructor
    constructor(AppConstants, Utility, LogisticUser, $state, $scope)
    {
        'ngInject';
        
        this.AppConstants       = AppConstants;
        this.Utility            = Utility;
        this.LogisticUser       = LogisticUser;
        this.$state             = $state;
        this.$scope             = $scope;

        this.$scope.Slides = 2;
    }
}