import { useMutation } from "@tanstack/react-query";
import { Register } from "../lib/api/auth";
import { RegisterInput } from "../schemas/auth";

export const useRegister = () => {
  return useMutation<RegisterInput, Error, RegisterInput>({
    mutationKey: ["register"],
    mutationFn: Register,
  });
};