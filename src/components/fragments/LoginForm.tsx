import React from "react";
import Input from "../elements/Input";
import PasswordInput from "../elements/PassInput";
import Button from "../elements/Button";
import { Link } from "react-router-dom";

const LoginForm: React.FC = () => {
  return (
    <div className="w-1/2 flex flex-col justify-center">
      <div className="max-w-md mx-auto">
        <h2 className="text-primary-500 text-4xl font-semibold font-Aileron">
          Welcome Back!👋
        </h2>
        <p className="text-neutral-700 text-basefont-AileronSemiBold mt-6 mb-6">
          Mulai baca buku sekarang!
        </p>

        <form className="w-full flex flex-col mb-6">
          <Input label="Email/username" placeholder="username@email.com" id="email" />
          <PasswordInput label="Password" id={"password"} />
          <div className="mt-4 mb-4 text-accent-500 text-base text-right cursor-pointer">
            Forgot Password?
          </div>
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
