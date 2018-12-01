module.exports = (req, res, next) =>
{
    return res.status(401).send({errors: true, error: 'invalid_session', session: req.user}).end();
}