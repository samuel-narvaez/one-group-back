const User = require('../../models').Users;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
loginController = {};


const isValidPassword = async (res, password, hashDB, email) => {
    textContent = password.toString();
    const compare = await bcrypt.compare(textContent, hashDB, (e, result) => {
        if (result) {
            jwt.sign({ email, expiresIn: process.env.JWT_EXPIRES_IN }, process.env.SECRETKEY, (e, token) => {
                res.status(200).json({
                    message: 'Autenticado con Exito',
                    token
                });
            });

        } else {
            res.status(401).json({
                message: 'Usuario o Contraseña Invalidos'
            })
        }
    });
    return compare
}

loginController.login = async (req, res) => {
    const { email, pass } = req.body
    try {
        let result = await User.findOne({
            where: {
                email
            },
            attributes: ['email', 'password']
        });

        if (result != null) {
            const { password } = result
            isValidPassword(res, pass, password, email)
        } else {
            return res.status(401).json({
                message: 'Usuario o Contraseña Invalidos'
            });
        }

    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
}

loginController.register = async(req, res) =>{
    const { name, last_name, nit, password, email} = req.body;
    try {
        await User.create({
            id_role: 1,
            name,
            last_name,
            nit,
            password,
            email
        });
        return res.status(200).json({
            message: 'successfully created user'
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
}

module.exports = loginController;
