import { LoginInput, RegisterInput } from "../../schemas/auth";

const base_url = import.meta.env.VITE_API_BASE_URL;

export async function Register(data: RegisterInput): Promise<RegisterInput> {
  const response = await fetch(`${base_url}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Failed to register");
  const res = await response.json();
  return res;
}

export async function Login(data: LoginInput) {
  const response = await fetch(`${base_url}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Failed to login");
  const res = await response.json();

  return res;
}
