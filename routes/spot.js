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
// router.post('/', async (req, res, next) => {
//     const spot = await Spot.create({
//         name: 'Hey!'
//     })
//   res.json({ spot });
// });

/* POST Spot */
router.post("/", async (req, res, next) => {
    try {
      const { name } = req.body;
  
      if (!name) {
        return res.status(400).json({ error: "Spot name is required." });
      }
  
      const spot = await Spot.create({
        name: name,
      });
  
      res.json({ spot });
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while creating the spot." });
    }
  });

/* PUT */
// router.put('/', async function(req, res, next) {
//     const id = 1;
//     const spot = await Spot.findByPk(id);
//     spot.name = name;
//     await spot.save();
//     res.json({ spot });
// });

/* PUT Spot */
router.put("/:spotId", async (req, res, next) => {
    try {
        const { spotId } = req.params;
        const { name } = req.body;
  
        if (!name) {
            return res.status(400).json({ error: "Spot name is required." });
        }
  
        const spot = await Spot.findByPk(spotId);
  
      if (!spot) {
        return res.status(404).json({ error: "Spot not found." });
      }
  
      spot.name = name;
      await spot.save();
  
      res.json({ message: "Spot updated." });
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while updating the spot." });
    }
  });

/* DELETE */
// router.delete('/:id', async function(req, res, next) {
//     const id = 3;
//     const spot = await Spot.findByPk(id);
//     await spot.destroy();
//     res.json({ spot });
// });

/* DELETE Spot */
router.delete("/:spotId", async (req, res, next) => {
    try {
      const { spotId } = req.params;
      const spot = await Spot.findByPk(spotId);
  
      if (!spot) {
        return res.status(404).json({ error: "Spot not found." });
      }
  
      await spot.destroy();
  
      res.json({ message: "Spot deleted." });
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while deleting the spot." });
    }
  });

module.exports = router;