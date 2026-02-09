const express = require("express");
const { protect, adminOnly } = require("../middlewares/authMiddleware");
const { getUsers, getUserById, deleteUser } = require("../controllers/userController");

const router = express.Router();


router.get("/", protect, adminOnly, getUsers) // Get all users (admin only)
router.get("/:id", protect, getUserById) // Get user by ID (admin only)
router.delete("/:id", protect, adminOnly, deleteUser) // Delete user (admin only)

module.exports = router;