const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController.js');
const isAdmin = require("../controllers/isAdminController.js");

// GET all reservations
/**
 * @swagger
 * /api/reservations:
 *   get:
 *     summary: Get a reservation
 *     description: Modifie une reservation dans la base de données
 *     responses:
 *       200:
 *         description: Reservation modifie avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Votre reservation a été modifiée avec succès"
 */
router.get('/', isAdmin, reservationController.getAllReservations);

// POST create reservation
/**
 * @swagger
 * /api/reservations:
 *   post:
 *     summary: Create a reservation
 *     description: Modifie une reservation dans la base de données
 *     responses:
 *       200:
 *         description: Reservation modifie avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Votre reservation a été modifiée avec succès"
 */
router.post("/", reservationController.createReservation);

// PUT update reservation
/**
 * @swagger
 * /api/reservations:
 *   put:
 *     summary: Update a reservation
 *     description: Modifie une reservation dans la base de données
 *     responses:
 *       200:
 *         description: Reservation modifie avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Votre reservation a été modifiée avec succès"
 */
router.put("/:id", reservationController.updateReservation);

// DELETE reservation
/**
 * @swagger
 * /api/reservations:
 *   delete:
 *     summary: Delete a reservation
 *     description: Modifie une reservation dans la base de données
 *     responses:
 *       200:
 *         description: Reservation modifie avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Votre reservation a été modifiée avec succès"
 */
router.delete("/:reservationId", reservationController.deleteReservation);

module.exports = router;
