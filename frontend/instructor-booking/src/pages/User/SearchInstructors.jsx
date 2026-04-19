import React, { useState } from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { LuSearch, LuTimer } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";


// import axios from "axios";

import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";

const SearchInstructors = () => {
  const [location, setLocation] = useState("");
  const [results, setResults] = useState([]);

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      
      const res = await axiosInstance.get(API_PATHS.USERS.SEARCH_USERS(location), {
      });
      setResults(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleBook = (instructorId) => {
    // Implementation for booking an instructor
    console.log("Booking instructor with ID:", instructorId);
    alert(`Booking instructor with ID: ${instructorId}`);
  };


  return (
    <DashboardLayout activeMenu="Search Instructors">
      {/* First layer */}
      <div className="card2 my-5">
        <h2 className="text-3xl text-center"> Enter your location </h2>

        <div className="search-bar bg-[#edf0f2] rounded-full mt-8">
          <form
            onSubmit={handleClick}
            className="flex justify-between items-center relative"
          >
            <input
              type="text"
              placeholder="Enter your location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-5 focus:outline-none ml-5 text-lg"
            />

            <button className="w-30 absolute right-2 flex items-center justify-center bg-primary p-3 rounded-full m-2 text-white hover:bg-blue-700  transition delay-150 duration-300 ease-in-out hover:scale-110">
              <LuSearch className="text-xl mr-2" />
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Second Layer */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 my-5">
        {results.map((instructor) => (
        <div
          key={instructor._id}
          className="card shadow-md rounded-2xl flex border my-4"
        >
          <img
            src={instructor.profileImageUrl}
            alt="Instructor"
            className="rounded-l-2xl w-40 ml-5"
          />

          <div className="w-full p-4">
            <h1 className="font-bold text-lg">{instructor.name}</h1>

            <p className="text-gray-600">
              {instructor.about || "No description available"}
            </p>

            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center">
                <FaLocationDot /> 
                <p>{instructor.location}</p>
              </div>

              <div className="flex items-center justify-center gap-1">
                <LuTimer />
                <p>{instructor.experience} years</p>
              </div>
            </div>

            <h2 className="text-xl font-medium mt-2">
              £{instructor.price || 0}/hr
            </h2>

            <button className="book-btn" onClick={() => handleBook(instructor._id)}>
              <LuSearch className="text-xl mr-2" />
              Book Instructor
            </button>
          </div>
        </div>
      ))}
      </div>
      
    </DashboardLayout>
  );
};

export default SearchInstructors;
