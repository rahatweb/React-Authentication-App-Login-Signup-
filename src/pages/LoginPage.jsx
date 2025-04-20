import React, { useState } from "react";

const LoginPage = ({ onLogin, switchToSignup }) => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(e, values);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="h-screen w-screen bg-[#0f1729] flex justify-center items-center">
      <div className="flex flex-col gap-6 p-8 items-center h-100 w-98 border-2 border-[#17a6e9] rounded-2xl shadow-xl shadow-blue-950">
        <p className="text-white text-4xl uppercase font-bold">Login</p>
        <hr className=" border-1 border-amber-50 w-full" />
        <form onSubmit={handleSubmit} className="text-white flex w-full h-full flex-col gap-4 mt-10">
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            value={values.email}
            onChange={(e) => handleChange(e)}
            className="bg-[#eeedf1] text-black p-1 border font-semibold  border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            value={values.password}
            required
            onChange={(e) => handleChange(e)}
            className="bg-[#eeedf1] text-black p-1 border font-semibold  border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          />
          <button type="submit" className="bg-[#00abed] text-white text-[20px] p-2 border font-bold  border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded uppercase hover:bg-[#1b1b80] cursor-pointer">Login</button>
          <p className="mt-3">
            Don't have an account?{" "}
            <span
              onClick={switchToSignup}
              className="text-[#00abed] underline underline-offset-2 cursor-pointer hover:text-white hover:text-[17px]"
            >
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
