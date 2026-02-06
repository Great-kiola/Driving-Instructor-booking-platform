const jwt = require("jsonwebtoken");
const User = require("../models/User");


const protect = async (req, res, next) => {
    try {
        let token = req.headers.authorization;

        if (token && token.startsWith("Bearer")) {
            token = token.split(" ")[1]; // Get the token part
            const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
            req.user = await User.findById(decoded.id).select("-password"); // Attach user to request, exclude password
            next(); // Proceed to the next middleware or route handler
        } else {
            res.status(401).json({ message: "Not authorized, no token" });
        }
    } catch (error) {
        res.status(401).json({ message: "Token failed", error: error.message});
    }
}

// Middleware for admin routes
const adminOnly = (req, res, next) => {
    if( req.user && req.user.role === 'instructor'){
        next() // User is an instructor, proceed to the next middleware or route handler
    } else {
        res.status(403).json({ message: "Forbidden, Instructor access only" });
    }
}

module.exports = { protect, adminOnly };