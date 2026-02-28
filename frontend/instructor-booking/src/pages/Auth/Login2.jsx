import React from "react";
import Input2 from "../../components/inputs/Input2";

const Login2 = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#f5f5f6]">
      <div className="bg-[#fefffe] p-20 rounded-lg border border-[#e5e5e6]">
        <h1 className="text-2xl font-semibold">Welcome Back!</h1>

        <form>
          <Input2
            type="text"
            // value={email}
            // onChange={({ target }) => setEmail(target.value)}
            placeholder="Email Address"
            label="Email Address"
          />

          <Input2
            type="password"
            placeholder="****"
            label="Password"
          />

        </form>
      </div>
    </div>
  );
};

export default Login2;
