import React, { useState } from "react";
import Input from "../components/elements/Input";
import PasswordInput from "../components/elements/PassInput";
import Button from "../components/elements/Button";
import {Link } from "react-router-dom";
import apiInstance from "../API/auth";

export const loginUser = async (username: string, password: string) => {
  try {
    const response = await apiInstance.post("/auth/login", {
      username,
      password,
    });

    console.log("Login success:", response.data);
    return response.data;
  } catch (error: any) {
    console.error("Login failed:", error.response?.data || error.message);
    return {
      success: false,
      data: {},
      errors: error.response?.data?.errors || {},
      message: error.response?.data?.message || "Unknown error occurred",
    };
  }
};


const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("")
  const [password, setPasword] = useState("")

  const handleLogin = async () => {
    const response = await loginUser(username, password)

    console.log(response)
  } 

  return (
    <div className="lg:w-1/2 flex flex-col justify-center">
      <div className="max-w-md mx-auto">
        <h2 className="text-primary-500 text-4xl font-WulkanDisplayBold">
          Welcome Back!👋
        </h2>
        <p className="text-neutral-700 text-basefont-AileronSemiBold mt-6 mb-6">
          Mulai baca buku sekarang!
        </p>

        <form className="w-full flex flex-col mb-6" onSubmit={e => e.preventDefault()}>
          <Input value={username} setValue={setUsername}  label="Email/username" placeholder="username@email.com" id="email" />
          <PasswordInput setValue={setPasword} value={password} label="Password" id={"password"} />
          <Button onClick={handleLogin} type="submit">Sign-In</Button>
        </form>

        <div className="text-center mt-4">
          <span className="text-neutral-900">Don't have an account?</span>
          <Link to="/register" className="text-accent-500 cursor-pointer">
            {" "}
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
