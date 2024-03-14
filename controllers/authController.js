const bcrypt = require('bcrypt');
const { User } = require('../db');
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'secretkey23456'; // A remplacer par une clé secrète

// Signup function
async function signup(req, res) {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const { role, firstName, lastName, email, phoneNumber } = req.body;
        const user = {
            role: "client",
            firstName,
            lastName,
            email,
            phoneNumber,
            password: hashedPassword
        };
        await User.create(user);
        res.json({ message: 'User created', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while creating the user.' });
    }
}

// Signin function
async function signin(req, res) {
    try {
        const user = await User.findOne({
            where: {
                email: req.body.email,
            },
        });

        if (!user) {
            return res.status(400).json({ message: `Nom d'utilisateur ou mot de passe incorrect` });
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(400).json({ message: `Nom d'utilisateur ou mot de passe incorrect` });
        }

        const payload = {
            email: req.body.email,
            id: user.id,
            role: user.role,
            // Vous pouvez ajouter d'autres propriétés ici
        };
        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
        res.json({ message: token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while signing in.' });
    }
}

// Password reset function
async function resetPassword(req, res) {
    try {
        const { email, newPassword } = req.body;

        // Validation de base
        if (!email || !newPassword) {
            return res.status(400).json({ error: 'Email and new password are required' });
        }

        // Recherche de l'utilisateur par email
        const user = await User.findOne({ where: { email: email } });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Hachage du nouveau mot de passe
        const salt = await bcrypt.genSalt(10);
        console.log('Salt generated successfully');
        const hashedPassword = await bcrypt.hash(newPassword, salt);
        console.log('Password hashed successfully');

        // Mise à jour du mot de passe dans la base de données
        console.log('Before saving:', user.password);
        user.password = hashedPassword;
        await user.save();
        console.log('After saving:', user.password);

        // Répondez avec un message de succès
        res.json({ message: 'Password reset successfully' });
    } catch (error) {
        // Gérez les erreurs qui pourraient survenir pendant le processus de réinitialisation
        console.error(error);
        res.status(500).json({ error: 'Password reset error' });
    }
}

module.exports = {
    signup,
    signin,
    resetPassword
};
