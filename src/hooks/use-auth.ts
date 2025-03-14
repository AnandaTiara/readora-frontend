// @ts-ignore
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { RegisterInput, Session } from "../schemas/auth";
import { useNavigate } from "react-router-dom";
import { getSession, Login, Register } from "../api/auth";

export const useRegister = () => {
  const queryClient = useQueryClient();

  return useMutation<RegisterInput, Error, RegisterInput>({
    mutationKey: ["register"],
    mutationFn: Register,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      console.log("Registered");
    },
  });
};

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["login"],
    mutationFn: Login,
    onSuccess: (res: any) => {
      localStorage.setItem("token", res.data.token);
      queryClient.invalidateQueries({ queryKey: ["user"] });
      navigate("/");
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["logout"],
    mutationFn: async () => {
      localStorage.removeItem("token");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      window.location.reload();
    },
  });
};

export const useSession = () => {
  return useQuery<Session>({
    queryKey: ["user"],
    queryFn: getSession,
    retry: false,
    refetchOnWindowFocus: false,
  });
};