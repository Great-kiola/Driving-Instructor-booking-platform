import React from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { LuSearch } from "react-icons/lu";

const SearchInstructors = () => {
  const handleClick = () => {
    alert("Button Clicked!");
  };
  return (
    <DashboardLayout activeMenu="Search Instructors">
      <div className="card2 my-5 ">
        <h2 className="text-3xl text-center"> Enter your location </h2>

        <div className="search-bar bg-[#edf0f2] rounded-full w-full mt-8">
          <form
            onSubmit={handleClick}
            className="flex justify-between items-center"
          >
            <input
              type="text"
              placeholder="Enter your location"
              className="w-full p-5 focus:outline-none ml-5 text-lg"
            ></input>

            <button className="w-55 flex items-center justify-center bg-primary p-5 rounded-full m-2 text-white hover:bg-blue-700">
              <LuSearch className="text-xl mr-2"/>
              Search
            </button>
          </form>


        </div>
      </div>
    </DashboardLayout>
  );
};

export default SearchInstructors;
