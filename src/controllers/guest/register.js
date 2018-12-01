export default class GuestRegisterController {
    
    //Guest Register Controller Constructor
    constructor(AppConstants, Utility, LogisticUser, $state, $scope)
    {
        'ngInject';
        
        this.AppConstants       = AppConstants;
        this.Utility            = Utility;
        this.LogisticUser       = LogisticUser;
        this.$state             = $state;
        this.$scope             = $scope;

        this.$scope.registerFormDetails = {
            username: null,
            email: null,
            password: null,
            passwordConfirm: null
        };

        this.$scope.register        = () => this.register();
    }

    register() {
        return this.LogisticUser.addUser(this.$scope.registerFormDetails.username, this.$scope.registerFormDetails.email, this.$scope.registerFormDetails.password)
        .then(() => {
            return this.$state.go('home.me');
        })
        .catch((err) =>
        {
            console.error("[Error] Starting Registration:" + err);
        });
    }
}