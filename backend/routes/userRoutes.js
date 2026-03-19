const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { protect, adminOnly } = require("../middlewares/authMiddleware");
const { getUsers, getUserById } = require("../controllers/userController");

// 🔍 Search instructors
router.get("/search", async (req, res) => {
    try {
        const { location } = req.query;

        const instructors = await User.find({
            role: "instructor",
            $or: [
                { "location.city": { $regex: location, $options: "i" } },
                { "location.postcode": { $regex: location, $options: "i" } },
            ],
        });

        res.json(instructors);
        
        if (!location) {
            return res.status(400).json({ message: "Location required" });
        }
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

// 👤 Admin routes
router.get("/", protect, adminOnly, getUsers);
router.get("/:id", protect, getUserById);

module.exports = router;