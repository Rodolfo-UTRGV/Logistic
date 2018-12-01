import Logistic from '../../../../Logistic';

module.exports = (req, res, next) => {
    if(req.body.username == undefined || null)
    {
        res.locals = {
            status: 400,
            errors: true,
            error: 'invalid_user'
        };

        return next();
    }

    return Logistic.User.loadProfileInfo(0, req.body.username).then((profileInfo) => 
    {
        res.locals = {
            profileInfo: profileInfo
        };

        return next();

    }).catch(() => 
    {
        res.locals = {
            status: 400,
            errors: true,
            error: err.message
        };

        return next();  
    });
}