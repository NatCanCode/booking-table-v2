const bcrypt = require('bcrypt');
const { User } = require("../db.js")
const { isAdmin } = require("../routes/isAdminRoute.js");

// GET all users (accessible only by admin)
async function getAllUsers(req, res, next) {
    try {
        const users = await User.findAll();
        res.json({ users });
    } catch (error) {
        next(error);
    }
}

// POST create user
// async function createUser(req, res, next) {
//     try {
//         const existingUser = await User.findOne({
//             where: { email: req.body.email },
//         });

//         if (existingUser) {
//             return res.status(400).json({ error: "Email already exists" });
//         }

//         const user = await User.create(req.body);
//         res.json({ message: user });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "An error occurred while creating the user." });
//         next(error);
//     }
// }

// PUT update user
async function updateUser(req, res, next) {
    try {
        const userId = req.params.userId;
        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.email = req.body.email;
        user.phoneNumber = req.body.phoneNumber;

        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt);
            user.password = hashedPassword;
        }

        await user.save();
        res.json({ message: "User updated", user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while updating the user." });
        next(error);
    }
}

// DELETE user
async function deleteUser(req, res, next) {
    try {
        const userId = req.params.userId;
        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        await user.destroy();
        res.json({ message: "User deleted" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while deleting the user." });
        next(error);
    }
}

// GET current user
async function getCurrentUser(req, res, next) {
    try {
        const userID = req.user.id;
        const currentUser = await User.findByPk(userID);

        if (!currentUser) {
            return res.status(400).json({ error: "User not found" });
        }

        res.status(200).json({ currentUser });
    } catch (error) {
        next(error);
    }
}

// GET all users with admin role
async function getAllAdminUsers(req, res, next) {
    try {
        const admin = await User.findAll({
            where: {
                role: "admin",
            },
        });
        res.status(200).json({ admin });
    } catch (error) {
        next(error);
    }
}

// PUT route for updating user details (accessible by the authenticated user)
// async function updateUserDetails(req, res, next) {
//     try {
//         const { firstName, lastName, email, phoneNumber, password } = req.body;
//         const user = await User.findOne({ where: { id: req.params.id } });

//         if (!user) {
//             return res.status(404).json({ error: `User with id:${req.params.id} not found` });
//         }

//         user.firstName = firstName;
//         user.lastName = lastName;
//         user.email = email;
//         user.phoneNumber = phoneNumber;

//         if (password) {
//             const salt = await bcrypt.genSalt(10);
//             const hashedPassword = await bcrypt.hash(password, salt);
//             user.password = hashedPassword;
//         }

//         await user.save();
//         res.json({ message: "User profile updated successfully" });
//     } catch (error) {
//         next(error);
//     }
// }

// PUT route for updating user's role (accessible by the admin only)
async function updateUserRole(req, res, next) {
    try {
        const { id } = req.params;
        const { role } = req.body;
        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({ error: `User with id:${id} not found` });
        }

        user.role = role;
        await user.save();
        res.json({ message: "User's role updated successfully" });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllUsers,
    // createUser,
    updateUser,
    deleteUser,
    getCurrentUser,
    getAllAdminUsers,
    // updateUserDetails,
    updateUserRole
};
