import React, { useState } from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { LuSearch, LuTimer } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";

// import axios from "axios";

import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";

import { useEffect } from "react";

const SearchInstructors = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

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

  const getResults = async (e) => {
    e.preventDefault();
    setHasSearched(true);

    try {
      const res = await axiosInstance.get(API_PATHS.USERS.SEARCH_USERS(search));

      setResults(res.data);
    } catch (error) {
      console.error(error);
      setResults([]); // fallback
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
      <div className="grid grid-cols-2 gap-4 my-5">
        {/* ✅ Case 1: Results exist */}
        {Array.isArray(results) &&
          results.length > 0 &&
          results.map((instructor) => (
            <div
              key={instructor._id}
              className="card shadow-md rounded-2xl flex border my-4 hover:shadow-lg transition-scale duration-300 hover:cursor-pointer hover:scale-90"
            >
              <div className="w-full p-4">
                <h1 className="font-bold text-lg">{instructor.name}</h1>
                <p>{instructor.email}</p>
                <h2 className="text-xl mt-2">{instructor.location}</h2>
              </div>
            </div>
          ))}

        {/* ❌ Case 2: No results */}
        {hasSearched && results.length === 0 && (
          <div className="col-span-2 text-center mt-10">
            <h2 className="text-2xl font-semibold text-gray-600">
              No instructors found
            </h2>
            <p className="text-gray-400 mt-2">
              We currently don’t have instructors in "{search}". Try another
              location.
            </p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default SearchInstructors;
