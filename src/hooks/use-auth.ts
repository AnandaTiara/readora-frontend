import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Login, Register } from "../lib/api/auth";
import { RegisterInput } from "../schemas/auth";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
  const queryClient = useQueryClient();

  return useMutation<RegisterInput, Error, RegisterInput>({
    mutationKey: ["register"],
    mutationFn: Register,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
  
};

export const useLogin = () => {
  const queryClient = useQueryClient();
  const [, setCookie] = useCookies(["user"]);
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["login"],
    mutationFn: Login,
    onSuccess: (res) => {
      setCookie("user", res.data.token, { path: "/" });
      queryClient.invalidateQueries({ queryKey: ["user"] });
      navigate("/");
    },
  });

};

export const useLogout = () => {
  const queryClient = useQueryClient();
  const [, , removeCookie] = useCookies(["user"]);

  return useMutation({
    mutationKey: ["logout"],
    mutationFn: async () => {
      removeCookie("user", { path: "/" });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};
