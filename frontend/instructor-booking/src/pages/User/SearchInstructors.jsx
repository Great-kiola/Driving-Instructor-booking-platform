import React from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";


const SearchInstructors = () => {
  return (
    <DashboardLayout activeMenu="Search Instructors">
      <div className="card2 my-5 ">
        <h2 className="text-3xl text-center font-bold"> Find Instructors Near you</h2>

        <div className="search-bar bg-amber-300 p-5 rounded-xl w-full">
          <input
            type="text"
            placeholder="Search Here"
            className="border-2 w-full p-5" 
          >

          </input>
        </div>


      </div>

    </DashboardLayout>
  );
};

export default SearchInstructors;
