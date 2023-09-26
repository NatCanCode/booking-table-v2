const express = require('express');
const router = express.Router();
const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.json')['development'];

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect
  });
const Room = require('../models/room')(
    sequelize, DataTypes
);

/* GET */
router.get('/', function(req, res, next) {
  res.json({ message: "Hello, get room!" });
});

/* POST */
router.post('/', async (req, res, next) => {
    const room = await Room.create({
        name: 'Rose garden'
    });
  res.json({ room });
});

/* PUT */
router.put('/', function(req, res, next) {
  res.json({ message: "Hello, put room!" });
});

/* DELETE */
router.delete('/', function(req, res, next) {
  res.json({ message: "Hello, delete room!" });
});

module.exports = router;