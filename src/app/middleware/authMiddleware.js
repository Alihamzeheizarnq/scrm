module.exports = (req, res, next) => {
    if (!req.session.user) {
        res.status(401).json({ errors: { message: 'هویت نامعتبر' } })
    } else {
        req.auth = req.session.user
        next()
    }
}
