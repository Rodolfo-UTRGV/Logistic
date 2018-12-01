import SQL from '../SQL';

export default class User
{
    static addUser(username = null, email = null, password = null)
    {
        console.log("[API] Database Add User");

        return new Promise((resolve, reject) =>
        {
            if(username == null || email == null || password == null) 
            {
                return reject(new Error('invalid_paramemters'));
            }
            
            return new SQL.Models.Logistic.Users.User({
                    id: null,
                    username: username,
                    password: password,
                    email: email,
                    account_created: Math.floor(Date.now() / 1000)}).save(null, {method: 'insert'})
            .then((result) => {
                if(result == null) 
                    return reject(new Error('invalid_user'));

                    return resolve(null);
            })
            .catch((err) =>
            {
                return reject(err);
            });
        });
    }
}