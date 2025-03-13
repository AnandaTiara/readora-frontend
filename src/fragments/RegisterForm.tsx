import React, { useState } from "react";
import Input from "../components/elements/Input";
import PasswordInput from "../components/elements/PassInput";
import Button from "../components/elements/Button";
import { Link } from "react-router-dom";
import apiInstance from "../API/auth";

export const RegisterUser = async (username: string, password: string, email: string, name: string) => {
  try {
    const response = await apiInstance.post("/auth/register", {
      email,
      name,
      password,
      username,
    });

    console.log("Register success:", response.data);

    return {
      success: true,
      data: response.data.data || {},
      errors: {},
      message: response.data.message || "Registration successful",
    };
  } catch (error: any) {
    console.error("Register failed:", error.response?.data || error.message);

    return {
      success: false,
      data: error.response?.data?.data || {},
      errors: error.response?.data?.errors || {},
      message: error.response?.data?.message || "Unknown error occurred",
    };
  }
};

const RegisterForm: React.FC = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")


  return (
    <div className="w-1/2 flex flex-col justify-center">
      <div className="max-w-md mx-auto">
        <h2 className="text-primary-500 text-4xl font-semibold font-WulkanDisplayBold">
          Welcome!👋
        </h2>
        <p className="text-neutral-700 text-basefont-AileronSemiBold mt-6">
          Mulai baca buku sekarang!
        </p>

        <form className="mt-6 space-y-3">
          <Input value={name} setValue={setName} label="Nama" placeholder="Nama" />
          <Input value={email} setValue={setEmail} label="Email" placeholder="username@email.com" />
          <Input value={username} setValue={setUsername} label="Username" placeholder="username@email.com" />
          <PasswordInput value={password} setValue={setPassword} label="Password" id={"password"} />
          <Button type="submit" className="w-full">Sign-Up</Button>
        </form>

        <div className="text-center mt-4">
          <span className="text-neutral-900">Have an account?</span>
          <Link to="/Login" className="text-accent-500 cursor-pointer">
            {" "}
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
