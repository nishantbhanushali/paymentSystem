import React, { useState } from 'react';
import { Heading } from '../components/Heading.jsx';
import { Inputbox } from "../components/Inputbox.jsx";
import { Button } from '../components/Button.jsx';
import { Link } from 'react-router-dom';
import axios from "axios";

export const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  
  const handleSignUpButton = async () => {
    try {
      const response = await axios.post("http://localhost:3000/user/signup", {
        firstName,
        lastName,
        email,
        password,
      });
      const data = response.data;

      if (data.success) {
        alert("Signup successful!");
      
      } else {
        setErrorMessage(data.message || "Signup failed.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setErrorMessage(error.response?.data?.message || "An error occurred while signing up. Please try again.");
    }
  };

  return (
    <div className="h-[750px] w-[700px] bg-gray-300 mx-auto mt-10 rounded-lg shadow-md flex items-center justify-center">
      <div className="h-[650px] w-[400px] bg-white rounded-lg shadow-md flex flex-col items-center p-5">
        <Heading label="Sign Up" />
        <h3 className="text-slate-500 mb-5">
          Enter your information to create an account
        </h3>

        {errorMessage && (
          <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
        )}

        <Inputbox
          onChange={(e) => setFirstName(e.target.value)}
          label="First Name"
          placeholder="Nishant"
        />
        <Inputbox
          onChange={(e) => setLastName(e.target.value)}
          label="Last Name"
          placeholder="Bhanushali"
        />
        <Inputbox
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          placeholder="nishant@example.com"
        />
        <Inputbox
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          placeholder="Nishant@123"
        />

        <Button onClick={handleSignUpButton} label={"Sign Up"} />

        <h6 className="pt-4 text-sm">
          Already have an account?{" "}
          <Link className="text-blue-500" to="/signin">
            Sign In
          </Link>
        </h6>
      </div>
    </div>
  );
};

export default Signup;
