import React from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";


const SearchInstructors = () => {
  return (
    <DashboardLayout activeMenu="Search Instructors">
      <div className="card2 my-5 ">
        <h2 className="text-3xl text-center"> Enter your location</h2>

        <div className="search-bar bg-[#edf0f2] p-5 rounded-xl w-full mt-8">
          <input
            type="text"
            placeholder="Enter your location"
            className="border-2 w-full p-5" 
          >

          </input>
        </div>


      </div>

    </DashboardLayout>
  );
};

export default SearchInstructors;
