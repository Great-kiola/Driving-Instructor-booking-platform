import React, { useState } from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { LuSearch, LuTimer } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { data } from "../../../src/data";

// import axios from "axios";

import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";

import { useEffect } from "react";

const SearchInstructors = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const updateSearch = async (e) => {
    const value = e.target.value;
    setSearch(value);

    if (!value.trim()) {
      setResults([]);
      return;
    }

    try {
      const res = await axiosInstance.get(API_PATHS.USERS.SEARCH_USERS(value));
      setResults(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      if (search) {
        axiosInstance
          .get(API_PATHS.USERS.SEARCH_USERS(search))
          .then((res) => setResults(res.data))
          .catch(console.error);
      }
    }, 1000);

    return () => clearTimeout(delay);
  }, [search]);

  const handleBook = (instructorId) => {
    // Implementation for booking an instructor
    console.log("Booking instructor with ID:", instructorId);
    alert(`Booking instructor with ID: ${instructorId}`);
  };

  return (
    <DashboardLayout activeMenu="Search Instructors">
      {/* First layer */}
      <div className="card2 my-5">
        <h2 className="text-3xl text-center"> Enter your Location </h2>

        <div className="search-bar bg-[#edf0f2] rounded-full mt-8">
          <input
            type="text"
            placeholder="Enter your Location"
            onChange={updateSearch}
            className="w-full p-5 focus:outline-none ml-5 text-lg"
          />
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
