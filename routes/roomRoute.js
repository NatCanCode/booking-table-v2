const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController.js');
const isAdmin = require("../controllers/isAdminController.js");

// GET all rooms
router.get('/', isAdmin, roomController.getAllRooms);

// POST Create Room
router.post("/", roomController.createRoom);

// PUT Update Room
router.put("/:roomId", roomController.updateRoom);

// DELETE Room
router.delete("/:roomId", roomController.deleteRoom);

module.exports = router;
