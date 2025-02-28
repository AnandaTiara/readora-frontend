import React from "react";
import AuthLayout from "../components/layouts/AuthLayouts";
import RegisterForm from "../components/fragments/RegisterForm";


const Register: React.FC = () => {
  return (
    <AuthLayout>
      <RegisterForm/>
    </AuthLayout>
  );
};

export default Register;