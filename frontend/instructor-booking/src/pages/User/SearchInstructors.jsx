import React from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { LuSearch, LuTimer, LuLocate } from "react-icons/lu";

const SearchInstructors = () => {
  const handleClick = (e) => {
    e.preventDefault();
    alert("Button Clicked!");
  };

  return (
    <DashboardLayout activeMenu="Search Instructors">
      {/* First layer */}
      <div className="card2 my-5">
        <h2 className="text-3xl text-center"> Enter your location </h2>

        <div className="search-bar bg-[#edf0f2] rounded-full w-20px mt-8">
          <form
            onSubmit={handleClick}
            className="flex justify-between items-center relative"
          >
            <input
              type="text"
              placeholder="Enter your location"
              className="w-full p-5 focus:outline-none ml-5 text-lg"
            ></input>

            <button className="w-30 absolute right-2 flex items-center justify-center bg-primary p-3 rounded-full m-2 text-white hover:bg-blue-700  transition delay-150 duration-300 ease-in-out hover:scale-110">
              <LuSearch className="text-xl mr-2" />
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Second Layer */}

      <div className="shadow-md rounded-2xl flex border">
        <div>
          <img
            src="https://www.fakepersongenerator.com/face/male/male1085547337250.jpg"
            alt="first Instructor"
            className="rounded-l-2xl"
          />
        </div>

        <div className="w-full">
          <div className="w-full border-b flex items-center">
            <div className="mr-10">
              <h1 className="font-bold">James Baldwin</h1>
              <p>
                About Me: I am an experienced instructor with over 200 years
                experience teaching students how to drive I have a record of 200
                passes under my belt.
              </p>
            </div>

            <div className="w-50 border-l-2 bg-red-300">
              <div>
                <LuTimer />
                <p>Work Hours</p>
                <h2>03:00pm - 10:00am</h2>
              </div>
                <LuLocate />
                <p>Experience</p>
                <h2>3 years</h2>
              <div></div>
            </div>
          </div>

          <div className="p-5">
            <h2 className="text-xl font-medium">
              {" "}
              £59.99<span className="text-gray-300">/hr</span>
            </h2>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SearchInstructors;
