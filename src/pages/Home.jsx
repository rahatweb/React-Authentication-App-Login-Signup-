import React from "react";

const Home = ({user}) => {
  const {firstName, lastName, age, gender, contact, email, password} = user;
  return (
    <div>
      <h1>Welcome : <span className="capitalize">{firstName+ " " + lastName}</span></h1>
      <ul>
        <li>First Name: {firstName}</li>
        <li>Last Name: {lastName}</li>
        <li>Age: {age}</li>
        <li>Gender: {gender}</li>
        <li>Phone: {contact}</li>
        <li>Email: {email}</li>
        <li>Password: {password}</li>
      </ul>
    </div>
  );
};

export default Home;
