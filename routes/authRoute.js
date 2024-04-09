const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const {signUpValidationRules, signInValidationRules} = require('../middlewares/validationRules');
const { validationResult } = require('express-validator');

// POST Signup
// router.post('/signup', authController.signup);

// POST Signin
// router.post('/signin', authController.signin);

// POST Reset password
router.post('/reset-password', authController.resetPassword);

// Import fonctions signUpValidationRules and signInValidationRules from file authValidationRules.js, and method validationResult from express-validator
// POST Signup
router.post('/signup', signUpValidationRules(), async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    authController.signup(req, res);
});

// POST Signin
router.post('/signin', signInValidationRules(), async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    authController.signin(req, res);
});

module.exports = router;


// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcrypt');
// const { User } = require('../db');
// const jwt = require('jsonwebtoken');

// router.post('/signup', async (req, res) => {
//     // if req.body.password is empty, add "Password field is empty"
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(req.body.password, salt);
//     const { role, firstName, lastName, email, phoneNumber } = req.body
//     const user = { 
//         role: "client",
//         firstName,
//         lastName,
//         email,
//         phoneNumber,
//         password: hashedPassword 
//     };
//     await User.create(user);
//     res.json({ message: 'User created', user });
// });

// const SECRET_KEY = 'secretkey23456'; // A remplacer par une clé secrète

// router.post('/signin', async (req, res) => {
//   const user = await User.findOne({
//     where: {
//       email: req.body.email,
//     },
//   });

//     if (!user) return res.status(400).json({message: `Nom d'utilisateur ou mot de passe incorrect`});

//     const validPassword = await bcrypt.compare(req.body.password, user.password);
//     if (!validPassword) return res.status(400).json({message: `Nom d'utilisateur ou mot de passe incorrect`});

//     const payload = {
//         email: req.body.email,
//         id: user.id,
//         role: user.role,
//     // Vous pouvez ajouter d'autres propriétés ici
//     };
//     const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
//     res.json({message: token});
// });

// // Password reset
// router.post('/reset-password', async (req, res) => {
//   try {
//     const { email, newPassword } = req.body;

//       // Validation de base
//       if (!email || !newPassword) {
//         return res.status(400).json({ error: 'Email and new password are required' });
//       }

//     // Recherche de l'utilisateur par email
//     const user = await User.findOne({ where: { email: email } });

//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     // Hachage du nouveau mot de passe
//     const salt = await bcrypt.genSalt(10);
//     console.log('Salt generated successfully');
//     const hashedPassword = await bcrypt.hash(newPassword, salt);
//     console.log('Password hashed successfully');

//     // Mise à jour du mot de passe dans la base de données
//     console.log('Before saving:', user.password);
//     user.password = hashedPassword;
//     await user.save();
//     console.log('After saving:', user.password);
  

//     // Répondez avec un message de succès
//     res.json({ message: 'Password reset successfully' });
//   } catch (error) {
//     // Gérez les erreurs qui pourraient survenir pendant le processus de réinitialisation
//     console.error(error);
//     res.status(500).json({ error: 'Password reset error' });
//   }
// });

// module.exports = router;
