import React, { useState } from "react";

import Home from "./home";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // isLoggedIn is for access homepage. if value is true then you can access homepage.

  const [userInfo, setUserInfo] = useState(''); // userInfo store signup page data

  const handleSignup = (e, user) => {
    e.preventDefault();
    setUserInfo(user); // push signup page data into the variable called userInfo.
    alert("You have successfully created an account");
    setIsLogin(true); // Show login page after successful sign up

  };


  const handleLogin = (e, user ) => {
    e.preventDefault();
    //user.email and user.password this value is from login page. and here we are compare the login page email and password value with sign up page value.
    if(user.email=== userInfo.email && user.password === userInfo.password){
        setIsLoggedIn(true); // Show welcome page after login
    }
    else {
        alert("Invalid email or password");
      }
  };

  if (isLoggedIn) return <Home user={userInfo}/>;

  return isLogin ? (
    <LoginPage onLogin={handleLogin} switchToSignup={() => setIsLogin(false)} />
  ) : (
    <SignupPage
      onSignup={handleSignup}
      switchToLogin={() => setIsLogin(true)}
    />
  );
}

export default AuthPage;
