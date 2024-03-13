const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');
const isAdmin = require("./isAdmin.js");

// GET all rooms
router.get('/', isAdmin, roomController.getAllRooms);

// POST Create Room
router.post("/", roomController.createRoom);

// PUT Update Room
router.put("/:roomId", roomController.updateRoom);

// DELETE Room
router.delete("/:roomId", roomController.deleteRoom);

module.exports = router;


// const express = require('express');
// const router = express.Router();
// const { Sequelize, DataTypes } = require('sequelize');
// const config = require('../config/config.json')['development'];
// const { isAdmin } = require("./isAdmin.js");

// const sequelize = new Sequelize(config.database, config.username, config.password, {
//     host: config.host,
//     dialect: config.dialect
// });
// const Room = require('../models/room')(
//     sequelize, DataTypes
// );

// /* GET Room */
// router.get("/", isAdmin, async (req, res, next) => {
//     const rooms = await Room.findAll();
//     res.json({ rooms });
// });

// /* Post Room */
// router.post("/", async (req, res, next) => {
//     const { name } = req.body;

//     if (!name) {
//         return res.status(400).json({ error: "Room name is required." });
//     }

//     const room = await Room.create({ name });
//     res.json({ room });
// });

// /* Put Room. */
// router.put("/:roomId", async (req, res, next) => {
//     const { roomId } = req.params;
//     const { name } = req.body;

//     if (!name) {
//         return res.status(400).json({ error: "Room name is required." });
//     }

//     const room = await Room.findByPk(roomId);

//     if (!room) {
//         return res.status(404).json({ error: "Room not found." });
//     }

//     room.name = name;
//     await room.save();
//     res.json({ room });
// });

// /* Delete Room */
// router.delete("/:roomId", async (req, res, next) => {
//     const { roomId } = req.params;
//     const room = await Room.findByPk(roomId);

//     if (!room) {
//         return res.status(404).json({ error: "Room not found." });
//     }

//     await room.destroy();
//     res.json({ message: "Room deleted." });
// });

// module.exports = router;
