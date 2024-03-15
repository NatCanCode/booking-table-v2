const { Room } = require("../db.js")
const isAdmin = require("../routes/isAdminRoute.js");

// GET all rooms
async function getAllRooms(req, res, next) {
    try {
        const rooms = await Room.findAll();
        res.json({ rooms });
    } catch (error) {
        next(error);
    }
}

// POST create room
async function createRoom(req, res, next) {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ error: "Room name is required." });
        }

        const room = await Room.create({ name });
        res.json({ room });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while creating the room." });
        next(error);
    }
}

// PUT update room
async function updateRoom(req, res, next) {
    const roomId = req.params.roomId;
    const { name } = req.body;

    try {
        const room = await Room.findByPk(roomId);

        if (!room) {
            return res.status(404).json({ error: "Room not found." });
        }

        room.name = name;
        await room.save();
        res.json({ room });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while updating the room." });
        next(error);
    }
}

// DELETE room
async function deleteRoom(req, res, next) {
    const roomId = req.params.roomId;

    try {
        const room = await Room.findByPk(roomId);

        if (!room) {
            return res.status(404).json({ error: "Room not found." });
        }

        await room.destroy();
        res.json({ message: "Room deleted." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while deleting the room." });
        next(error);
    }
}

module.exports = {
    getAllRooms,
    createRoom,
    updateRoom,
    deleteRoom
};
