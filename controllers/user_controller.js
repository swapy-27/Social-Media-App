const User = require('../models/user');

module.exports.profile = function (req, res) {
    res.render('user_profile', {
        title: "Profile"
    })
}
module.exports.signIn = function (req, res) {
    res.render('user_sign_In', {
        title: "Profile"
    })
}
module.exports.signUp = function (req, res) {
    res.render('user_sign_Up', {
        title: "Profile"
    })
}



//get the signUp data
module.exports.create = function (req, res) {
    console.log(req.body);
    if (req.body.password != req.body.confirm_password) {
        return res.redirect('back');
    }

    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) {
            console.log('error in signing up');
            return;
        }
        if (!user) {
            User.create(req.body, function (err, user) {
                if (err) {
                    console.log('error in creating user while signing up');
                    return;
                }
                return res.redirect('/user/sign-in');
            })

        }
        else {
            return res.redirect('back');
        }
    })
}

module.exports.createSession = function (req, res) {

}

