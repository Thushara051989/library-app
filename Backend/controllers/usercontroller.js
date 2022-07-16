const mongoose = require('mongoose');
const User = mongoose.model('User');
module.exports.register = (req, res, next) => {
    console.log('Inside register')
    var user = new User();
    user.fullname = req.body.fullname;
    user.email = req.body.email;
    user.mobile = req.body.mobile;
    user.password = req.body.password;
   
    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }

    });
    
}