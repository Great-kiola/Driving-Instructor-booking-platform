import { FaLocationDot } from "react-icons/fa6";
import { LuTimer } from "react-icons/lu";

const InstructorCard = ({ instructor }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex gap-4 hover:shadow-lg transition">

      {/* Profile Image */}
      <img
        src={instructor.profileImageUrl || "https://api.dicebear.com/7.x/initials/svg?seed=" + instructor.name}
        alt={instructor.name}
        className="w-20 h-20 rounded-full object-cover"
      />

      {/* Info */}
      <div className="flex-1">
        <h2 className="text-lg font-semibold">{instructor.name}</h2>

        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <FaLocationDot />
          <span>{instructor.location}</span>
        </div>

        <p className="text-sm mt-1">
          🚗 {instructor.carType || "Not specified"}
        </p>

        <p className="text-sm">
          💷 £{instructor.hourlyRate || "N/A"} / hr
        </p>

        {/* Rating (mock for now) */}
        <p className="text-yellow-500 text-sm">
          ⭐ 4.8 (32 reviews)
        </p>

        {/* Bio */}
        {instructor.bio && (
          <p className="text-xs text-gray-600 mt-2 line-clamp-2">
            {instructor.bio}
          </p>
        )}

        {/* Buttons */}
        <div className="flex gap-2 mt-3">
          <button className="bg-gray-100 px-3 py-1 rounded-lg text-sm">
            View Profile
          </button>

          <button className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm">
            Book Lesson
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;