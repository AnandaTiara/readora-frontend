import React from "react";
import Input from "../components/elements/Input";
import PasswordInput from "../components/elements/PassInput";
import Button from "../components/elements/Button";
import { Link } from "react-router-dom";
import { LoginInput } from "../schemas/auth";
import { Controller, useForm } from "react-hook-form";
import { useLogin } from "../hooks/use-auth";

const LoginForm: React.FC = () => {
  const { handleSubmit, control } = useForm<LoginInput>({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onChange",
  });

  const { mutate: Login } = useLogin();

  const onSubmit = (data: LoginInput) => {
    Login(data);
  };

  return (
    <div className="lg:w-1/2 flex flex-col justify-center">
      <div className="max-w-md mx-auto">
        <h2 className="text-primary-500 text-4xl font-WulkanDisplayBold">
          Welcome Back!👋
        </h2>
        <p className="text-neutral-700 text-basefont-AileronSemiBold mt-6 mb-6">
          Mulai baca buku sekarang!
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col mb-6"
        >
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <Input
                label="Email/username"
                placeholder="username@email.com"
                id="username"
                {...field}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <PasswordInput id="password" label="Password" {...field} />
            )}
          />

          <Button type="submit">Sign-In</Button>
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