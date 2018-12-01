module.exports = (req, res, next) =>
{
    return res.status(401).send({errors: true, error: 'valid_session', session: req.user}).end();
}