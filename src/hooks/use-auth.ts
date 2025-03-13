import { useMutation } from "@tanstack/react-query";
import { Login, Register } from "../lib/api/auth";
import { RegisterInput } from "../schemas/auth";
import { useCookies } from "react-cookie";

export const useRegister = () => {
  return useMutation<RegisterInput, Error, RegisterInput>({
    mutationKey: ["register"],
    mutationFn: Register,
  });
};

export const useLogin = () => {
  const [, setCookie] = useCookies(["user"]);
  return useMutation({
    mutationKey: ["login"],
    mutationFn: Login,
    onSuccess: (res) => {
      setCookie("user", res.data.token, { path: "/", httpOnly: true });
    },
  });
};

export const useLogout = () => {
  const [, , removeCookie] = useCookies(["user"]);
  return useMutation({
    mutationKey: ["logout"],
    mutationFn: async () => {
      removeCookie("user", { path: "/" });
    },
    onSuccess: () => {
      window.location.reload();
    },
  });
};
