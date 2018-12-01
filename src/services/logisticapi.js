export default class LogisticAPI
{
    constructor(AppConstants, $localStorage, $state, $stickyState, $http, $rootScope, $q)
    {
        'ngInject';
        
        this.AppConstants   = AppConstants;
        this.$localStorage  = $localStorage;
        this.$state         = $state;
        this.$stickyState   = $stickyState;
        this.$http          = $http;
        this.$rootScope     = $rootScope;
        this.$q             = $q;
    }

    send(type, url, data)
    {
        return this.$http({
            method: type,
            url: this.AppConstants.api + url,
            data: data
        })
        .then((res) =>
        {
            console.log(res.data);
        },
        
        (res) =>
        {
            if(res.data == undefined || null) this.$q.reject(res);

            return this.$q.reject(res);
        });
    }
}