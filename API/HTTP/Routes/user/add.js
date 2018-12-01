import Logistic from '../../../Logistic';

module.exports = (req, res, next) => {

    if(req.body.username == undefined || null || req.body.email == undefined || null || req.body.password == undefined || null)
    {
        res.locals = {
            status: 400,
            errors: true,
            error: 'invalid_parameters'
        };

        return next();
    }

    return Logistic.User.addUser(req.body.username, req.body.email, req.body.password)
    .then(() => {
        return next();
    })
    .catch((err) => {
        res.locals = {
            status: 400,
            errors: true,
            error: err.message
        };

        return next();
    });
}