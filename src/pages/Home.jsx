import React from "react";

const Home = ({user}) => {
  const {firstName, lastName, age, gender, contact, email, password} = user;
  return (
    <div className="bg-[#0f1729] text-white h-screen w-screen flex flex-col justify-center items-center gap-8 ">
      <h1 className="text-6xl">Welcome : <span className="capitalize text-blue-500 font-bold">{firstName+ " " + lastName}</span></h1>
      <p className="text-4xl">Here is your information</p>
      <ul className="text-2xl flex flex-col justify-evenly items-center h-1/2 w-1/2">
        <li>First Name: <span className="text-green-500">"{firstName}"</span></li>
        <li>Last Name: <span className="text-green-500">"{lastName}"</span></li>
        <li>Age: <span className="text-green-500">"{age}"</span></li>
        <li>Gender: <span className="text-green-500">"{gender}"</span></li>
        <li>Phone: <span className="text-green-500">"{contact}"</span></li>
        <li>Email: <span className="text-green-500">"{email}"</span></li>
        <li>Password: <span className="text-green-500">"{password}"</span></li>
      </ul>
    </div>
  );
};

export default Home;
