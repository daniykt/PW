const User = require('../models/User')
const bcrypt = require('bcryptjs')

modulo.exports = class UserController {
    static login(req, res) {
        res.render('auth/login')
    }
    
}