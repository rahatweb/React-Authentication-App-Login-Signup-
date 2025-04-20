import React, { useState } from "react";

const SignupPage = ({ onSignup, switchToLogin }) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    contact: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignup(e, values);
  };
  return (
    <div className="h-screen w-screen bg-[#0f1729] flex justify-center items-center">
      <div className="flex flex-col items-center h-3/4 w-100 border-2 p-8 border-[#17a6e9] rounded-2xl shadow-xl shadow-blue-950">
        <p className="text-white text-4xl uppercase font-bold mt-4">Sign Up</p>
        <hr className=" border-1 border-amber-50 w-full mt-5" />
        <form
          onSubmit={handleSubmit}
          className="text-white flex w-full h-full flex-col gap-5 p-3 mt-10"
        >
          <label htmlFor="firstName" className="grid grid-cols-3 items-center">
            <p className="text-[16px] font-bold">First Name:</p>
            <input
              type="text"
              placeholder="Enter Your First Name"
              required
              onChange={(e) => handleChange(e)}
              name="firstName"
              value={values.firstName}
              className="bg-[#eeedf1] text-black p-1 text-[14px] border font-semibold  border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded col-span-2"
            />
          </label>
          <label htmlFor="lastName" className="grid grid-cols-3 items-center">
            <p className="text-[16px] font-bold">Last Name:</p>
            <input
              type="text"
              placeholder="Enter Your Last Name"
              required
              onChange={(e) => handleChange(e)}
              name="lastName"
              value={values.lastName}
              className="bg-[#eeedf1] text-black p-1 text-[14px] border font-semibold  border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded col-span-2"
            />
          </label>
          <label htmlFor="age" className="grid grid-cols-3 items-center">
            <p className="text-[16px] font-bold">Age:</p>
            <input
              type="text"
              placeholder="Enter Your Age"
              required
              onChange={(e) => handleChange(e)}
              name="age"
              value={values.age}
              className="bg-[#eeedf1] text-black p-1 text-[14px] border font-semibold  border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded col-span-2"
            />
          </label>
          <label htmlFor="gender" className="flex gap-1.5">
            <p className="text-[16px] font-bold mr-9">Gender:</p>
            <input
              type="radio"
              required
              onChange={(e) => handleChange(e)}
              name="gender"
              value="male"
              className="cursor-pointer"
            />{" "}
            Male
            <input
              type="radio"
              required
              onChange={(e) => handleChange(e)}
              name="gender"
              value="female"
              className="cursor-pointer"
            />{" "}
            Female
            <input
              type="radio"
              required
              onChange={(e) => handleChange(e)}
              name="gender"
              value="others"
              className="cursor-pointer"
            />
            Others
          </label>

          <label htmlFor="contact" className="grid grid-cols-3 items-center">
            <p className="text-[16px] font-bold">Phone:</p>
            <input
              type="text"
              placeholder="Enter Your Phone Number"
              required
              onChange={(e) => handleChange(e)}
              name="contact"
              value={values.contact}
              className="bg-[#eeedf1] text-black p-1 border font-semibold text-[14px] border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded col-span-2"
            />
          </label>
          <label htmlFor="email" className="grid grid-cols-3 items-center">
            <p className="text-[16px] font-bold">Email:</p>
            <input
              type="email"
              placeholder="Enter Your Email Address"
              required
              onChange={(e) => handleChange(e)}
              name="email"
              value={values.email}
              className="bg-[#eeedf1] text-black p-1 text-[14px] border font-semibold  border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded col-span-2"
            />
          </label>
          <label htmlFor="password" className="grid grid-cols-3 items-center">
            <p className="text-[16px] font-bold">Password:</p>
            <input
              type="text"
              placeholder="Enter Your Password"
              required
              onChange={(e) => handleChange(e)}
              name="password"
              value={values.password}
              className="bg-[#eeedf1] text-black p-1 text-[14px] border font-semibold  border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded col-span-2"
            />
          </label>
          <button
            type="submit"
            className="bg-[#00abed] text-white text-[20px] p-2 border font-bold  border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded uppercase hover:bg-[#1b1b80] cursor-pointer"
          >
            Sign Up
          </button>
          <p className="mt-3">
            Already have an account?{" "}
            <span
              onClick={switchToLogin}
              className="text-[#00abed] underline underline-offset-2 cursor-pointer hover:text-white hover:text-[17px]"
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
