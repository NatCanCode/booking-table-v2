const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const isAdmin = require("../controllers/isAdminController.js");

// GET all users (accessible only by admin)
router.get('/', isAdmin, userController.getAllUsers);

// POST Create User
router.post("/", userController.createUser);

// PUT Update User
router.put("/:userId", userController.updateUser);

// DELETE User
router.delete("/:userId", userController.deleteUser);

// GET current user
router.get("/me", userController.getCurrentUser);

// GET all users with admin role
router.get("/admin", userController.getAllAdminUsers);

// PUT Route for updating user details (accessible by the authenticated user)
router.put("/edit/:id", userController.updateUserDetails);

// PUT Route for updating user's role (accessible by the admin only)
router.put("/isAdmin/:id", isAdmin, userController.updateUserRole);

module.exports = router;
