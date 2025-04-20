import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import Login from "./pages/LoginPage";
import SignUp from "./pages/SignupPage";
import AuthPage from "./pages/authPage";

export function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Login />
        <Routes>
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter> */}
      <AuthPage />
    </>
  );
}
