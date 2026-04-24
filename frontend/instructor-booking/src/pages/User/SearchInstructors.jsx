import React, { useState } from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { LuSearch } from "react-icons/lu";
// import { FaLocationDot } from "react-icons/fa6";
import {data} from "../../../src/data"


// import axios from "axios";

import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";

const SearchInstructors = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const getResults = async (e) => {
    e.preventDefault();

    try {
      
      const res = await axiosInstance.get(API_PATHS.USERS.SEARCH_USERS(search), {
      });
      setResults(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  // const handleBook = (instructorId) => {
  //   // Implementation for booking an instructor
  //   console.log("Booking instructor with ID:", instructorId);
  //   alert(`Booking instructor with ID: ${instructorId}`);
  // };


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
        {data
        .filter((data) => {
          return search.toLowerCase() === "" ? data  : data.first_name.toLowerCase().includes(search)
        }).map((instructor) => (
        <div
          key={instructor._id}
          className="card shadow-md rounded-2xl flex border my-4 hover:shadow-lg transition-scale duration-300 hover:cursor-pointer hover:scale-90"
        >

          <div className="w-full p-4">
            <h1 className="font-bold text-lg">{instructor.first_name}</h1>

            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center">
                <p>{instructor.last_name}</p>
              </div>

              <div className="flex items-center justify-center gap-1">
                <p>{instructor.email}</p>
              </div>
            </div>

            <h2 className="text-xl font-medium mt-2">
              {instructor.gender}
            </h2>

            {/* <button className="book-btn" onClick={() => handleBook(instructor._id)}>
              <LuSearch className="text-xl mr-2" />
              Book Instructor
            </button> */}
          </div>
        </div>
      ))}
      </div>
      
    </DashboardLayout>
  );
};

export default SearchInstructors;
