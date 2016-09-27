var authenticator = function () {
    // dummy token validation flag
    var isTokenValid = true;

    // checks if user is authenticated
    var isUserAuthenticated = function (req, res, next) {
        // do any checks you want to in here, e.g. verify token
        if (!isTokenValid) {
            return res.status(401).send({
                message: 'User is not authenticated',
                details: 'Failed to authenticate token'
            });
        }

        next();
    }

    return {
        'isUserAuthenticated': isUserAuthenticated
    };
} ();

module.exports = authenticator;  