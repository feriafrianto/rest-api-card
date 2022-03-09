module.exports = function(app) {
    var userHandlers = require('../controllers/userController');
    app.route('/profile')
        .post(userHandlers.loginRequired, userHandlers.profile);
    app.route('/auth/register')
        .post(userHandlers.register);
    app.route('/auth/sign_in')
        .post(userHandlers.sign_in);
    app.route('/user')
        .get(userHandlers.getUsers);
};