import React, { useState } from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";

import { LuSearch, LuTimer } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";

const SearchInstructors = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getResults = async (e) => {
    e.preventDefault();
    setHasSearched(true);

    if (!search.trim()) {
      setResults([]);
      setHasSearched(false);
      return;
    }

    try {
      const res = await axiosInstance.get(API_PATHS.USERS.SEARCH_USERS(search));

      setResults(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error(error);
      setResults([]);
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
        <h2 className="text-3xl text-center"> Enter your Location </h2>

        <div className="search-bar bg-[#edf0f2] rounded-full mt-8">
          <form onSubmit={getResults}>
            <div className="search-bar bg-[#edf0f2] rounded-full mt-8 flex items-center">
              <input
                type="text"
                placeholder="Enter your Location"
                value={search}
                onChange={updateSearch}
                className="w-full p-5 focus:outline-none ml-5 text-lg bg-transparent"
              />

              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-full mr-2 hover:bg-blue-600"
              >
                <LuSearch />
              </button>
            </div>
          </form>
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
        {hasSearched && Array.isArray(results) && results.length === 0 && (
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
