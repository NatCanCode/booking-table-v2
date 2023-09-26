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
        res.json({ rooms });
    } catch (error) {
        next(error);
    }
//  res.json({ message: "Hello, get user!" });
});

/* POST */
router.post('/', async (req, res, next) => {
    const user = await User.create({
        role: 'client',
        firstName: 'Louie',
        lastName: 'Rose',
        email: 'louis.rose@gmail.com',
        phoneNumber: '+44 4567 456 457',
        password: 'DoNotDare0'
    })
  res.json({ user });
});

/* PUT */
router.put('/', function(req, res, next) {
  res.json({ message: "Hello, put user!" });
});

/* DELETE */
router.delete('/', function(req, res, next) {
  res.json({ message: "Hello, delete user!" });
});

module.exports = router;