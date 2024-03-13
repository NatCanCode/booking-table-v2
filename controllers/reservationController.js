// reservationController.js
const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.json')['development'];
const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect
});
const Reservation = require('../models/reservation')(sequelize, DataTypes);

const isAdmin = require("../routes/isAdmin.js");

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

        // ... (votre logique existante)

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


// // Importation des modèles Sequelize
// const { Reservation, Table, Client } = require('../models');

// // Contrôleur pour créer une réservation
// exports.createReservation = async (req, res) => {
//     try {

//         const {id_user, id_spot, id_room, number_of_customers, reservation_date, reservation_name, reservation_note, reservation_status,  userId } = req.body;
        
//         if (!reservation_name) {
//             res.status(422).json({error: "Le nom de la réservation est obligatoire"});
//           }

//         if (typeof number_of_customers !== 'number' || !Number.isInteger(number_of_customers)) {
//             res.status(422).json({error: "Le format du nombre de convive n'est pas bon (Nombre d'entier attendu)"});
//         }

//         if (!reservation_date) {
//             res.status(422).json({error: "La date de réservation est obligatoire"});
//             return;
//           }
        
//         if (!id_spot && !id_room) {
//             res.status(422).json({message:"Vous devez renseigner un spot ou une room"});
//         }

//         const r1 = Reservation.build({
//             id_user: id_user,
//             number_of_customers: number_of_customers,
//             reservation_date: reservation_date,
//             reservation_name: reservation_name,
//             reservation_note: reservation_note,
//             reservation_status: reservation_status,
//             userId: userId
//         });
          
//         r1.save().then(
//         () => console.log("Réservation enregistrée")
//         );
    
//         res.json({message: 'Votre reservation a bien été enregistrée'});
//     } catch (error) {
//         console.log(error);
//         // res.status(400).json({ error: error.message });
//     }
// };

// // Contrôleur pour obtenir la liste des réservations
// exports.getReservations = async (req, res) => {
//     try {
//         const reservations = await Reservation.findAll({
//             include: [Table, Client] // Pour inclure des détails sur la table et le client
//         });
//         res.status(200).json(reservations);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// };