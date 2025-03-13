import React from "react";
import { Controller, useForm } from "react-hook-form";
import Input from "../components/elements/Input";
import PasswordInput from "../components/elements/PassInput";
import Button from "../components/elements/Button";
import { Link, useNavigate } from "react-router-dom";
import { useRegister } from "../hooks/use-auth";
import { RegisterInput } from "../schemas/auth";

const RegisterForm: React.FC = () => {
  const { handleSubmit, control } = useForm<RegisterInput>({
    defaultValues: {
      username: "",
      password: "",
      email: "",
    },
    mode: "onChange",
  });

  const navigate = useNavigate();

  const { mutate: Register } = useRegister();

  const onSubmit = (data: RegisterInput) => {
    Register(data);
    navigate("/Login");
  };

  return (
    <div className="w-1/2 flex flex-col justify-center">
      <div className="max-w-md mx-auto">
        <h2 className="text-primary-500 text-4xl font-semibold font-WulkanDisplayBold">
          Welcome!👋
        </h2>
        <p className="text-neutral-700 text-base font-AileronSemiBold mt-6">
          Mulai baca buku sekarang!
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-3">
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input id="email" label="Email" placeholder="username@email.com" {...field} />
            )}
          />

          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <Input id="username" label="Username" placeholder="Masukkan username" {...field} />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <PasswordInput id="password" label="Password" {...field} />
            )}
          />

          <Button type="submit" className="w-full">
            Sign-Up
          </Button>
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
