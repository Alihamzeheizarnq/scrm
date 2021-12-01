const redirectNextMiddleware = (req, res, next) => {
    req.redirectTo = (route) => {
        return {
            redirect: {
                destination: route,
                permanent: false,
            },
        }
    }

    next()
}

module.exports = redirectNextMiddleware
