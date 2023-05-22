const { dbConnection } = require('../db');
const bcrypt = require("bcryptjs");
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

const generateAccessToken = (id, role) => {
    const payload = {
        id,
        role
    };

    return jwt.sign(payload, secret, {expiresIn: "24h"}) 
}

class authController {
    async registration (req, res) {
        try {
            const errors = validationResult(req);

            if(!errors.isEmpty()) {
                return res.status(400).json({ message: "Ошибка при регистрации", errors })
            }

            const { login, password } = req.body;
    
            dbConnection.query("SELECT * FROM users WHERE login = ?", [login], (err, result) => {
                const candidate = result[0];

                if(candidate) {
                    return res.status(400).json({ message: "Пользователь с таким именем существует" });
                }
                
                const hashPassword = bcrypt.hashSync(password, 7);

                dbConnection.query("INSERT INTO users (login, password, role) VALUES (?,?,?)", [login, hashPassword, "user"], (err, result) => {
                    if(err) {
                        console.log(err);
                    }
                    res.json({ message: "Пользователь был успешно зарегистрирован" });
                });
            });

        } catch (err) {

        }
    }

    async login (req, res) {
        try {
            const { login, password } = req.body;
    
            dbConnection.query("SELECT * FROM users WHERE login = ?", [login], (err, result) => {
                const user = result[0];

                if(!user) {
                    return res.status(400).json({ message: `Пользователь ${login} не найден`});
                }
                
                const validPassword = bcrypt.compareSync(password, user.password);

                if(!validPassword) {
                    return res.status(400).json({ message: 'Введён не верный пароль'});
                }

                const token = generateAccessToken(user.id, user.role);
                
                return res.json(token);
            });
        } catch (err) {

        }
    }

    async getUsers (req, res) {
        try {
            dbConnection.query("SELECT * FROM users", (err, result) => {
                res.json(result);
            })
        } catch (err) {

        }
    }

    async adminAccess (req, res) {
        res.json({
            "adminAccess": true
        });
    }
}

module.exports = new authController();