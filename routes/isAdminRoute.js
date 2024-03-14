// const express = require('express');
// const router = express.Router();
// const isAdminController = require('../controllers/isAdminController');

// // Example usage in a route
// router.get('/', isAdminController, (req, res) => {
//     // res.json({ message: "This route is accessible only to admins." });
// });

// module.exports = router;


// const isAdmin = (req, res, next) => {
//     console.log("User:", req.user);
//     if (req.user && req.user.role === "admin") {
//         next(); // user is admin, allow access
//     } else {
//         res.status(403).json({
//             message: "Access denied. Only administrators have access to these resources.",
//         });
//     }
// };

// exports.isAdmin = isAdmin;
