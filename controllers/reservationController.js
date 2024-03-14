const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.json')['development'];
const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect
});
const Reservation = require('../models/reservationModel.js')(sequelize, DataTypes);

// GET all reservations
async function getAllReservations(req, res, next) {
    try {
        const reservations = await Reservation.findAll();
        res.json({ reservations });
    } catch (error) {
        next(error);
    }
}

// POST create reservation
async function createReservation(req, res, next) {
    try {
        const { spotId, date, name, note, status, userId, roomId } = req.body;

        const reservation = Reservation.create({ date, name, note, status, userId, spotId, roomId })

        res.json({ reservation });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while creating the reservation." });
        next(error);
    }
}

// PUT update reservation
async function updateReservation(req, res, next) {
    const id = req.params.id;
    const { note } = req.body;

    try {
        const reservation = await Reservation.findByPk(id);
        if (!reservation) {
            return res.status(404).json({ error: "Reservation not found." });
        }

        reservation.note = note;
        await reservation.save();
        res.json({ reservation });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while updating the reservation." });
        next(error);
    }
}

// DELETE reservation
async function deleteReservation(req, res, next) {
    const reservationId = req.params.reservationId;

    try {
        const rowsDeleted = await Reservation.destroy({
            where: { id: reservationId },
        });

        if (rowsDeleted === 0) {
            return res.status(404).json({ message: "Reservation not found." });
        }

        res.status(200).json({ message: "Reservation deleted." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while deleting the reservation." });
        next(error);
    }
}

module.exports = {
    getAllReservations,
    createReservation,
    updateReservation,
    deleteReservation
};
