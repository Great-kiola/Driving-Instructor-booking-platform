const Task = require("../models/Task");


// @desc Get all tasks (Admin: all, User: only assigned tasks)
// @route GET /api/tasks
// @access Private
const getTasks = async (req, res) => {
    try {
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

// @desc Get task by ID (Admin: any task, User: only assigned tasks)
// @route GET /api/tasks/:id
// @access Private
const getTaskById = async (req, res) => {
    try {
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

// @desc Create a new task (Admin only)
// @route POST /api/tasks
// @access Private/Admin
const createTask = async (req, res) => {
    try {
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

// @desc Update task by ID (Admin: any task, User: only assigned tasks)
// @route PUT /api/tasks/:id
// @access Private
const updateTask = async (req, res) => {
    try {
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

// @desc Delete task by ID (Admin only)
// @route DELETE /api/tasks/:id
// @access Private/Admin
const deleteTask = async (req, res) => {
    try {
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}


// @desc Update task status by ID (Admin: any task, User: only assigned tasks)
// @route PUT /api/tasks/:id/status
// @access Private
const updateTaskStatus = async (req, res) => {
    try {
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

// @desc Update task checklist by ID (Admin: any task, User: only assigned tasks)
// @route PUT /api/tasks/:id/todo
// @access Private
const updateTaskChecklist = async (req, res) => {
    try {
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

// @desc Dashboard Data (Admin only)
// @route GET /api/tasks/dashboard-data
// @access Private/Admin
const getDashboardData = async (req, res) => {
    try {
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

// @desc User Dashboard Data (User-specific)
// @route GET /api/tasks/user-dashboard-data
// @access Private
const getUserDashboardData = async (req, res) => {
    try {
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

module.exports = {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
    updateTaskStatus,
    updateTaskChecklist,
    getDashboardData,
    getUserDashboardData,
}