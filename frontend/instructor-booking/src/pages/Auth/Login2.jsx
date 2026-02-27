import React from "react";

const Login2 = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="">
        <h1 className="text-xl">Welcome Back!</h1>

        <form>
        <label>Email Address</label>
          <input
            type="text"
            // value={email}
            // onChange={({ target }) => setEmail(target.value)}
            placeholder="Email Address"
            label="Email Address"
          />

          <input 
            type="password"
            placeholder="****"
            label="Password"
            className="border p-1.5"
          />

        </form>
      </div>
    </div>
  );
};

export default Login2;
