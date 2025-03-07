import React from "react";
import Input from "../components/elements/Input";
import PasswordInput from "../components/elements/PassInput";
import Button from "../components/elements/Button";
import { Link } from "react-router-dom";

const RegisterForm: React.FC = () => {
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
          <Input label="Email" placeholder="username@email.com" />
          <Input label="Username" placeholder="username@email.com" />
          <PasswordInput label="Password" id={"password"} />
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
