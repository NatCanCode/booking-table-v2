const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController.js');
const isAdmin = require("../controllers/isAdminController.js");

// GET all reservations
router.get('/', isAdmin, reservationController.getAllReservations);

// POST create reservation
router.post("/", reservationController.createReservation);

// PUT update reservation
router.put("/:id", reservationController.updateReservation);

// DELETE reservation
router.delete("/:reservationId", reservationController.deleteReservation);

module.exports = router;
