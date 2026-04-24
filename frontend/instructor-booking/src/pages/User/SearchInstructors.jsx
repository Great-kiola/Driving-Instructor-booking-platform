import React, { useState } from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";

import { LuSearch, LuTimer } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { FaCar, FaStar } from "react-icons/fa";

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
      <div className="grid grid-cols-3 gap-4 my-5">
        {/* ✅ Case 1: Results exist */}
        {Array.isArray(results) &&
          results.length > 0 &&
          results.map((instructor) => (
            <div
              key={instructor._id}
              className="card shadow-md rounded-2xl flex border my-4"
            >
              <div className="w-full p-4">
                <div className="mb-5">
                  <img
                    src={instructor.profileImageUrl}
                    alt="instructor image"
                    className="w-30 h-30"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="font-semibold text-[30px]">
                      {instructor.name}
                    </h1>
                    <h2 className="">{instructor.location}</h2>
                  </div>

                  <div className="price">
                    <p>Rate /hr</p>
                    <p class="amount">${results.price || 25}</p>
                  </div>
                </div>

                <p>{instructor.email}</p>

                <div className="icons mt-7 flex items-center gap-4">
                  <p className="flex gap-2">
                    <FaCar className="text-xl" />
                    <span className="">Manual</span>
                  </p>

                  <p className="flex gap-2 items-center">
                    <FaStar />
                    <span> 4.5</span>
                  </p>
                </div>
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
