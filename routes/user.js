const express = require('express');
const router = express.Router();
const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.json')['development'];
// const { User } = require("../db.js"); // Error: "Identifier User has already been declared"

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect
});
const User = require('../models/user')(
    sequelize, DataTypes
);

/* GET */
router.get('/', async (req, res, next) => {
    try {
        const users = await User.findAll();
        res.json({ users });
    } catch (error) {
        next(error);
    }
//  res.json({ message: "Hello, get user!" });
});

/* Post User */
router.post("/", async (req, res, next) => {
  try {
    // Check if the email already exists in the database
    const existingUser = await User.findOne({
      where: { email: req.body.email },
    });

    // If an existing user is found, respond with an error
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

   // Create a new user with data from the request body
  const user = await User.create(req.body);

    res.json({ message: user });
  } catch (error) {
    // Handle any errors that occur during user creation
    next(error);
  }
});

/* PUT */ // TODO: Update dynamically
router.put('/', async function(req, res, next) {
    const id = 1;
    const user = await User.findByPk(id);
    user.name = 'Gaspard';
    await user.save();
    res.json({ user });
});

/* DELETE */ // TODO: Update dynamically
router.delete('/', async function(req, res, next) {
    const id = 2;
    const user = await User.findByPk(id);
    await user.destroy();
    res.json({ user });
});

// Dina's code 1/2
// Middleware to check if user is admin
const isAdmin = (req, res, next) => {
    console.log("User:", req.user);
    if (req.user && req.user.role === "admin") {
        next(); // user is admin, allow access
    } else {
        res.status(403).json({
            message: "Access denied. Only administrators have access to these resources.",
        });
    }
};

/* GET */ //only admin can have access to the list of all users
router.get("/", isAdmin, async (req, res, next) => {
    try {
        const users = await User.findAll();
        res.json({ users });
    } catch (error) {
        next(error);
    }
});

/* GET current user */
router.get("/me", async (req, res, next) => {
    try {
        const userID = req.user.id;
        // Find the user by ID
        const currentUser = await User.findByPk(userID);

        if (!currentUser) {
        return res.status(400).json({ error: "User not found" });
        }

        // User found, send the user data in the response
        res.status(200).json({ currentUser });
    } catch (error) {
        next(error);
    }
});

/* GET all users with admin role */
router.get("/admin", async (req, res, next) => {
    try {
        // Find all user with admin role
        const admin = await User.findAll({
            where: {
                role: "admin",
            },
        });
        res.status(200).json({ admin });
    } catch (error) {
        next(error);
    }
});

// Dina's code 2/2
// Route for updating user details, accessible by the authenticated user
router.put("/edit", async (req, res, next) => {
    try {
        const { firstName, lastName, email, phoneNumber } = req.body;

        let user = await User.findByPk(req.user.id);

        if (!user) {
        return res.status(404).json({ error: `User with id:${id} not found` });
        }

        // Update the user attributes
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.phoneNumber = phoneNumber;

        await user.save();

        res.json({ message: "User profile updated we are here" });
    } catch (error) {
    next(error);
    }
});

// Route for updating user's role, accessible by the admin only
// Only admin users can have access to all users
router.put("/isAdmin/:id", isAdmin, async (req, res, next) => {
    try {
        const { id } = req.params;
        const { role } = req.body;

        let user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({ error: `User with id:${id} not found` });
        }

        // Update the user's role
        user.role = role;

        await user.save();

        res.json({ message: "User's role updated successfully" });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
