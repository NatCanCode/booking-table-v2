const express = require('express');
const router = express.Router();
const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.json')['development'];

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect
});
const User = require('../models/user')(
    sequelize, DataTypes
);

/* GET */
router.get('/', async (req, res, next) => {
    try {
        const users = await User.findAll();
        res.json({ users });
    } catch (error) {
        next(error);
    }
//  res.json({ message: "Hello, get user!" });
});

/* POST */
router.post('/', async (req, res, next) => {
    const user = await User.create({
        role: 'client',
        firstName: 'Yvan',
        lastName: 'Black',
        email: 'yvan.black@gmail.com',
        phoneNumber: '+44 4567 456 457',
        password: 'DoNotDare@'
    })
  res.json({ user });
});

/* PUT */
router.put('/', async function(req, res, next) {
    const id = 1;
    const user = await User.findByPk(id);
    user.name = 'Gaspard';
    await user.save();
    res.json({ user });
});

/* DELETE */
router.delete('/', async function(req, res, next) {
    const id = 2;
    const user = await User.findByPk(id);
    await user.destroy();
    res.json({ user });
});

module.exports = router;