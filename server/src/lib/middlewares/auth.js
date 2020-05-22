module.exports = (req, res, next) => {
    if(req.session.user) {
        const user = {...req.session.user};
        delete user.password;
        res.cookie('user', user);
    } else {
        res.clearCookie('user');
    }
    next();
};