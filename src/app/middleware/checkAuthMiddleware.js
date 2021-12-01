const checkAuthMiddleware = (req, res, next) => {
    if (req.session.user) {
        req.auth = req.session.user
    }
    next()
}

module.exports = checkAuthMiddleware
