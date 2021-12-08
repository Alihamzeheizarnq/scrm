const checkAuthMiddleware = (req, res, next) => {
    console.log(req.session.user)
    if (req.session.user) {
        req.auth = req.session.user
    }
    next()
}

module.exports = checkAuthMiddleware
