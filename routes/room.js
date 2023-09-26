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
router.get('/', async (req, res, next) => {
    try {
        const rooms = await Room.findAll();
        res.json({ rooms });
    } catch (error) {
        next(error);
    }
//  res.json({ message: "Hello, get room!" });
});

/* POST */
router.post('/', async (req, res, next) => {
    const room = await Room.create({
        name: 'Snow as Rain'
    });
  res.json({ room });
});

/* PUT */
router.put('/', async function(req, res, next) {
    const id = 1;
    const room = await Room.findByPk(id);
    room.name = 'Hell on Earth';
    await room.save();
    res.json({ room });
});

/* DELETE */
router.delete('/', async function(req, res, next) {
    const id = 4;
    const room = await Room.findByPk(id);
    await room.destroy();
    res.json({ room });
});

module.exports = router;