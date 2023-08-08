const express = require('express');
const router = express.Router();
const { dbConnection } = require('../db');
const controller = require('../controller/authController');
const { check } = require('express-validator'); 
const authMiddlewaree = require('../middlewaree/authMiddlewaree');
const roleMiddlewaree = require('../middlewaree/roleMiddlewaree');

router.post('/registration', [
    check('username', "Имя пользователя не может быть пустым").notEmpty(),
    check('password', "Пароль должен быть не меньше 8 символов и не больше 16").isLength({min: 1, max: 16})
],
controller.registration);
router.post('/login', controller.login);
router.get('/users', roleMiddlewaree(["admin"]), controller.getUsers);
router.post('/admin', roleMiddlewaree(["admin"]), controller.adminAccess)

module.exports = router;