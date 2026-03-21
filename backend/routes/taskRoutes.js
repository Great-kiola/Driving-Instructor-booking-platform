const express = require('express');
const { protect, adminOnly } = require('../middlewares/authMiddleware');
const { getDashboardData, getUserDashboardData, getTasks, getTaskById, createTask, updateTask, deleteTask, updateTaskStatus, updateTaskChecklist } = require('../controllers/taskController');

const router = express.Router();

router.get("/dashboard-data", protect, getDashboardData) // Get dashboard data for the logged-in user
router.get ("/user-dashboard-data", protect, getUserDashboardData) // Get dashboard data for the logged-in user
router.get("/", protect, getTasks) // Get all tasks for the logged-in user
router.get("/:id", protect, getTaskById) // Get task by ID for the logged-in user
router.post("/", protect, adminOnly, createTask) // Create a new task (admin only)
router.put("/:id", protect, updateTask) // Update task by ID for the logged-in user
router.delete("/:id", protect, adminOnly, deleteTask) // Delete task by ID (admin only)
router.put("/:id/status", protect, updateTaskStatus) // Update task status by ID for the logged-in user
router.put("/:id/todo", protect, updateTaskChecklist) // Update task checklist by ID for the logged-in user


module.exports = router;