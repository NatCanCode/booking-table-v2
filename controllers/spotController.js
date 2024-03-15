const { Spot } = require("../db.js")
const isAdmin = require("../routes/isAdminRoute.js");

// GET all spots
async function getAllSpots(req, res, next) {
    try {
        const spots = await Spot.findAll();
        res.json({ spots });
    } catch (error) {
        next(error);
    }
}

// POST create spot
async function createSpot(req, res, next) {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ error: "Spot name is required." });
        }

        const spot = await Spot.create({ name });
        res.json({ spot });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while creating the spot." });
        next(error);
    }
}

// PUT update spot
async function updateSpot(req, res, next) {
    const spotId = req.params.spotId;
    const { name } = req.body;

    try {
        const spot = await Spot.findByPk(spotId);

        if (!spot) {
            return res.status(404).json({ error: "Spot not found." });
        }

        spot.name = name;
        await spot.save();
        res.json({ message: "Spot updated." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while updating the spot." });
        next(error);
    }
}

// DELETE spot
async function deleteSpot(req, res, next) {
    const spotId = req.params.spotId;

    try {
        const spot = await Spot.findByPk(spotId);

        if (!spot) {
            return res.status(404).json({ error: "Spot not found." });
        }

        await spot.destroy();
        res.json({ message: "Spot deleted." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while deleting the spot." });
        next(error);
    }
}

module.exports = {
    getAllSpots,
    createSpot,
    updateSpot,
    deleteSpot
};
