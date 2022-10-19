const { PrismaClient } = require('@prisma/client')
const jwt = require('jsonwebtoken')
const prisma = new PrismaClient()
bcrypt = require('bcrypt')

exports.register = async (req, res) => {
    user = {
        name: req.body.name,
        email: req.body.email,
        pwdHash: bcrypt.hashSync(req.body.pwd, 10),
    }
    const newUser = await prisma.User.create({
        data: user,
    })
    console.log(user)
    console.log('ok')
    return res.json(newUser);

}
exports.sign_in = async (req, res) => {
    const user = await prisma.User.findFirst({
        where: {
            email: req.body.email,
        }
    })
    if (user) {
        var correctPass = bcrypt.compareSync(req.body.pwd, user.pwdHash)
        if (correctPass) {
            return res.json({ token: jwt.sign({ email: user.email, name: user.name, _id: user._id }, 'RESTFULAPIs') })
        }

    }

    res.status(401).json({ message: "Authentication failed: Wrong username or Password" })

}
exports.login_required = (req, res) => {

}