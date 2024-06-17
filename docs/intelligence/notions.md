Explication de sujet

Exemple : Controller

Autres choix : 
API (REST)
Promesse et Asynchrone
Fonctionnement de Node et Moteur v8 (théorique)
Framework express
middleware
HTTP / Request et Response
Tests
ORM Sequelize
Bonnes pratiques
Performance
Debugging
...

Controller
L'architecture Modèle vue controller est reconnu au niveau professionnelle. Elle est efficace et adaptée à notre sujet.
Nous n'avons pas de vue spécifique, mais nous allons renvoyé des réponses via une API au format JSON.

Composants de l'architecture
Models : Entités de l'application en lien avec la base de données PostgreSQL.
Views : API REST qui renvoient des réponses JSON.
Controllers : Gèrent la logique d'application, traitent les requêtes utilisateur, et renvoient les réponses appropriées.

Avantages du controller
Séparation des préoccupations (S -> SOLID) : Les contrôleurs gèrent la logique de l'application. Les routes gèrent les requêtes HTTP. Les modèles gèrent les données.
Réutilisation du code : Les contrôleurs peuvent être réutilisés dans différentes parties de l'application.
Facilité de test : Les contrôleurs peuvent être testés de manière unitaire.
Lisibilité : Les contrôleurs rendent le code plus lisible et plus facile à maintenir.


// reservationController.js
const Reservation = require('../models/reservation');

// Créer une nouvelle réservation
exports.createReservation = async (req, res) => {
    try {
        const reservation = await Reservation.create(req.body);
        res.status(201).json(reservation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtenir toutes les réservations
exports.getReservations = async (req, res) => {
    try {
        const reservations = await Reservation.findAll();
        res.status(200).json(reservations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Mettre à jour une réservation
exports.updateReservation = async (req, res) => {
    try {
        const reservation = await Reservation.update(req.body, {
            where: { id: req.params.id }
        });
        res.status(200).json(reservation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Supprimer une réservation
exports.deleteReservation = async (req, res) => {
    try {
        await Reservation.destroy({
            where: { id: req.params.id }
        });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
