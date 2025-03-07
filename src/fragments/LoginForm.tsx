import React from "react";
import Input from "../components/elements/Input";
import PasswordInput from "../components/elements/PassInput";
import Button from "../components/elements/Button";
import { Link } from "react-router-dom";

const LoginForm: React.FC = () => {
  return (
    <div className="lg:w-1/2 flex flex-col justify-center">
      <div className="max-w-md mx-auto">
        <h2 className="text-primary-500 text-4xl font-WulkanDisplayBold">
          Welcome Back!👋
        </h2>
        <p className="text-neutral-700 text-basefont-AileronSemiBold mt-6 mb-6">
          Mulai baca buku sekarang!
        </p>

        <form className="w-full flex flex-col mb-6">
          <Input label="Email/username" placeholder="username@email.com" id="email" />
          <PasswordInput label="Password" id={"password"} />
          <Button type="submit">Sign-In</Button>
        </form>

        <div className="text-center mt-4">
          <span className="text-neutral-900">Don't have an account?</span>
          <Link to="/Register" className="text-accent-500 cursor-pointer">
            {" "}
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
