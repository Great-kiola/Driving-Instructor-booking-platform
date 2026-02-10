import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
        <h2 className="">Ins-Book</h2>
        {children}
      </div>

      <div className="">
        <img src="" alt="" className="" />
      </div>
    </div>
  );
};

export default AuthLayout;
