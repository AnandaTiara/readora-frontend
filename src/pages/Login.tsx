import React from "react";
import AuthLayout from "../layouts/AuthLayouts";
import LoginForm from "../fragments/LoginForm";


const Login: React.FC = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
