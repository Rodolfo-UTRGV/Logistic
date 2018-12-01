import User from '../../Logistic/user';

module.exports = (req, res, next) => 
{
    if(req.isAuthenticated() == false) 
        return next();

    return User.loadUserInfo(req.user.id, null).then((userInfo) => {
        if(userInfo == null)
            req.user.person = null;
        
        req.user.person = userInfo;

        return next();
    }).catch((err) => 
    {
        return res.status(400).send({errors: true, error: err.message, session: req.user}).end();
    });
}