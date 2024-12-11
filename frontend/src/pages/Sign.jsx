import React, { useState } from "react";
import { Heading } from "../components/Heading.jsx";
import { Inputbox } from "../components/Inputbox.jsx";
import { Button } from "../components/Button.jsx";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSignInClick = async () => {
    try {
      const response = await axios.post("http://localhost:3000/user/signin", {
        email,
        password,
      });

      const data = response.data;

      if (data.success) {
        alert("Signin successful!");
        if (data.token) {
          localStorage.setItem("token", data.token); // Save token to localStorage
          console.log("Token:", data.token);

          // Debugging log
          console.log("Navigating to /dashboard...");
          navigate("/dashboard"); // Redirect to dashboard after successful sign-in
        }
      } else {
        setErrorMessage(data.message || "Signin failed.");
      }
    } catch (error) {
      console.error("Signin Error:", error);
      setErrorMessage(
        error.response?.data?.message || "An unexpected error occurred."
      );
    }
  };

  return (
    <div className="h-[600px] w-[700px] bg-gray-300 mx-auto mt-10 rounded-lg shadow-md flex items-center justify-center">
      <div className="h-[450px] w-[400px] bg-white rounded-lg shadow-md flex flex-col items-center">
        <Heading label="Sign In" />
        <h3 className="text-slate-500 mb-10">Enter your information to Sign In</h3>

        <Inputbox
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          placeholder="nishant@example.com"
        />
        <Inputbox
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          placeholder="nishant!23@F"
        />

        <Button onClick={handleSignInClick} label={"Sign In"} />

        {errorMessage && (
          <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
        )}

        <h6 className="pt-[10px] text-sm">
          Create account?{" "}
          <Link className="text-blue-500" to="/signup">
            Sign Up
          </Link>
        </h6>
      </div>
    </div>
  );
};

export default Signin;
