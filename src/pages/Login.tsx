import React from "react";
import AuthLayout from "../components/layouts/AuthLayouts";
import LoginForm from "../components/fragments/LoginForm";


const Login: React.FC = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
