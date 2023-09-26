const express = require('express');
const router = express.Router();
const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.json')['development'];

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect
  });
const Spot = require('../models/spot')(
    sequelize, DataTypes
);

/* GET */
router.get('/', function(req, res, next) {
  res.json({ message: "Hello, get spot!" });
});

/* POST */
router.post('/', async (req, res, next) => {
    const spot = await Spot.create({
        name: 'Peony'
    })
  res.json({ spot });
});

/* PUT */
router.put('/', function(req, res, next) {
  res.json({ message: "Hello, put spot!" });
});

/* DELETE */
router.delete('/', function(req, res, next) {
  res.json({ message: "Hello, delete spot!" });
});

module.exports = router;