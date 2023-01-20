const Account = require('../models/Account')

class LoginController{
    index(req, res){
        res.render('login')
    }

    show(req, res){
        res.send('Login');
    }

    find(req, res){
        Account.find({username: req.body.username,password: req.body.password})
        .then((object) => {
            if(object.length > 0)
            {
                res.redirect('/home')
            }
            else
                res.render('login', { msg: 'Incorrect username or password!' })
        }).catch((err) => {
            res.send(err);
        });
    }
}

module.exports = new LoginController;
