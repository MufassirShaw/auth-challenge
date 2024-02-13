import { useMutation } from "@tanstack/react-query"
import { apiRoutes } from "../../apiRoutes"
import axios from "@/lib/axios"
import { ISignup, IToken } from "@/types/auth"

export const useSignup = () => {
  return useMutation({
    mutationKey: [apiRoutes.auth.signup],
    mutationFn: async (user: ISignup) => {
      return await axios.post<IToken>(apiRoutes.auth.signup, { ...user })
    },
  })
}
