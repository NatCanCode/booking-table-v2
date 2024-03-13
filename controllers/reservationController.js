// Importation des modèles Sequelize
const { Reservation, Table, Client } = require('../models');

// Contrôleur pour créer une réservation
exports.createReservation = async (req, res) => {
    try {

        const {id_user, id_spot, id_room, number_of_customers, reservation_date, reservation_name, reservation_note, reservation_status,  userId } = req.body;
        
        if (!reservation_name) {
            res.status(422).json({error: "Le nom de la réservation est obligatoire"});
          }

        if (typeof number_of_customers !== 'number' || !Number.isInteger(number_of_customers)) {
            res.status(422).json({error: "Le format du nombre de convive n'est pas bon (Nombre d'entier attendu)"});
        }

        if (!reservation_date) {
            res.status(422).json({error: "La date de réservation est obligatoire"});
            return;
          }
        
        if (!id_spot && !id_room) {
            res.status(422).json({message:"Vous devez renseigner un spot ou une room"});
        }

        const r1 = Reservation.build({
            id_user: id_user,
            number_of_customers: number_of_customers,
            reservation_date: reservation_date,
            reservation_name: reservation_name,
            reservation_note: reservation_note,
            reservation_status: reservation_status,
            userId: userId
        });
          
        r1.save().then(
        () => console.log("Réservation enregistrée")
        );
    
        res.json({message: 'Votre reservation a bien été enregistrée'});
    } catch (error) {
        console.log(error);
        // res.status(400).json({ error: error.message });
    }
};

// Contrôleur pour obtenir la liste des réservations
exports.getReservations = async (req, res) => {
    try {
        const reservations = await Reservation.findAll({
            include: [Table, Client] // Pour inclure des détails sur la table et le client
        });
        res.status(200).json(reservations);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};