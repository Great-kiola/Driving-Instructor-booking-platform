redundant files


// @desc Delete user (admin only)
// @route DELETE /api/users/:id
// @access Private/Admin
const deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });

        await user.deleteOne();
        res.json({ message: "User deleted successfully" });

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

// To get only instructors
// const getInstructor = async (req, res) => {
//     try{
//         const users = await User.find({ role: "instructor" }).select("-password");
//         res.json(users);
//     } catch (error) {
//         res.status(500).json({ message: "Server error", error: error.message });
//     }
// }