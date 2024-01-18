const express = require('express');

const router = express.Router();
const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.json').development;

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
});
const Spot = require('../models/spot')(sequelize, DataTypes);

/* GET */
router.get('/', async (req, res, next) => {
  try {
    const spots = await Spot.findAll();
    res.json({ spots });
  } catch (error) {
    next(error);
  }
//  res.json({ message: "Hello, get spot!" });
});

/* POST */
router.post('/', async (req, res, next) => {
  const spot = await Spot.create({
    name: 'Hey!',
  });
  res.json({ spot });
});

/* PUT */
router.put('/', async (req, res, next) => {
  const id = 1;
  const spot = await Spot.findByPk(id);
  spot.name = 'Beetle';
  await spot.save();
  res.json({ spot });
});

/* DELETE */
router.delete('/', async (req, res, next) => {
  const id = 3;
  const spot = await Spot.findByPk(id);
  await spot.destroy();
  res.json({ spot });
});

module.exports = router;
