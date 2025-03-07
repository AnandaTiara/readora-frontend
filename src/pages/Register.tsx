import React from "react";
import AuthLayout from "../layouts/AuthLayouts";
import RegisterForm from "../fragments/RegisterForm";


const Register: React.FC = () => {
  return (
    <AuthLayout>
      <RegisterForm/>
    </AuthLayout>
  );
};

export default Register;