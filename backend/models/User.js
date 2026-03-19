const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    profileImageUrl: { type: String, default: null },

    role: {
      type: String,
      enum: ["student", "instructor"],
      default: "student",
    },

    // 📍 Location
    location: {
      address: String,
      city: String,
      postcode: String,
      coordinates: {
        type: [Number], // [lng, lat]
        index: "2dsphere",
      },
    },

    // 👨‍🏫 Instructor-only fields
    experience: { type: Number, default: 0 },
    price: { type: Number, default: 0 },
    about: { type: String, default: "" },

    availability: [
      {
        day: String,
        slots: [String],
      },
    ],

    // ⭐ Ratings
    rating: { type: Number, default: 0 },
    numReviews: { type: Number, default: 0 },

  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);