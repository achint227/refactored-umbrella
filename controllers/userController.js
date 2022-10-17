const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
bcrypt = require('bcrypt')

exports.register = (req, res) => {
    var newUser = prisma.User.create({
        data: {
            name: 'Achint Bhat',//req.body.name,
            email: 'abhat29@asu.edu',//req.body.email,
            pwdHash: bcrypt.hashSync('s@mplePa55', 10)
        }
    })
    console.log('ok')
    return res.json(newUser);

}
exports.sign_in = (req, res) => {

}
exports.login_required = (req, res) => {

}