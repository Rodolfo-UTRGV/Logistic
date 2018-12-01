export default class LogisticUser
{
    constructor(LogisticAPI, $localStorage, $q)
	{
		'ngInject';

        this.LogisticAPI        = LogisticAPI;
        this.$localStorage      = $localStorage;
		this.$q 		        = $q;
    }

    addUser(username, email, password)
    {
        console.log("[API] Adding User...");

        if(username == null || email == null || password == null) 
            return this.$q.reject('invalid_parameters');

        return this.LogisticAPI.send('POST', '/user/add', {username: username, password: password, email: email})
        .then((res) =>
        {
            return this.$q.resolve(null);
        })
        .catch((res) =>
        {
            return this.$q.reject(res.data.error);
        });
    }
}