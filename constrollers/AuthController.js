const { sequelize, Usuario } = require('../models');
const bcrypt = require('bcrypt');
const AuthController = {
    
    showLogin: (req,res) => {
        res.render('auth/login');
    },

    showRegistro: (req,res) => {
        res.render('auth/register');
    },

    showHome: (req,res) => {
        res.render('index');
    },

    login: async (req, res) => {
        const { email, password } = req.body;
        console.log(req.body)
        const user = await Usuario.findOne({
            where: {
                email
            },
        }).then(user => user).catch(err => console.log('err1', err));
        if(!user){
            return res.redirect('/login?error=1')
        }
        if(!bcrypt.compareSync(password, user.senha)) {
            res.redirect('/login?error=2')
        }
        req.session.user = user;
        return res.redirect('/home');
    }
}

module.exports = AuthController;