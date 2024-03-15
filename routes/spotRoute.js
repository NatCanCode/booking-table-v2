const express = require('express');
const router = express.Router();
const spotController = require('../controllers/spotController.js');
const isAdmin = require("../controllers/isAdminController.js");

// GET all spots
router.get('/', isAdmin, spotController.getAllSpots);

// POST Create Spot
router.post("/", spotController.createSpot);

// PUT Update Spot
router.put("/:spotId", spotController.updateSpot);

// DELETE Spot
router.delete("/:spotId", spotController.deleteSpot);

module.exports = router;
