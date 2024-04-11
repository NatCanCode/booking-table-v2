const { body} = require('express-validator');

const signUpValidationRules = () => {
    return [
        body('email').not().isEmpty().isEmail().withMessage("L'email n'est pas au bon format").normalizeEmail({gmail_remove_dots: true}),
        body('password').isStrongPassword({
            minLength: 10,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 0, // Ajoutez ceci si vous souhaitez spécifier le nombre minimum de symboles
        }).withMessage("Le mot de passe doit contenir au moins 10 caractères, dont au moins 1 majuscule, 1 minuscule, et 1 chiffre"),
        body('firstName').not().isEmpty().withMessage("Le prénom est obligatoire").blacklist("<>", ).escape().trim(),
        body('lastName').not().isEmpty().withMessage("Le nom est obligatoire").blacklist("<>", ).escape().trim(),
    ];
};

const signInValidationRules = () => {
    return [
        body('email').isEmail().withMessage('Le format de l\'email est incorrect').normalizeEmail({gmail_remove_dots: true}),
        body('password').isLength({ min: 5 }).withMessage('Le mot de passe doit contenir au moins 5 caractères')
    ];
}

// TODO:
// Reservation validation rules
// User profile validation rules

// Sanitize with express-validator :
// normalizeEmail : permet de normaliser l'email, par exemple en enlevant les points dans un email gmail.
// blacklist : permet de supprimer des caractères spécifiques.
// escape : permet d'échapper les caractères spéciaux. Par exemple, <script> deviendra &lt;script&gt;.
// trim : permet de supprimer les espaces en début et fin de chaîne. Par exemple, " test " deviendra "test".

module.exports = {signInValidationRules, signUpValidationRules};
