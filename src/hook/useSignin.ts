import { useMutation } from "@tanstack/react-query"
import { apiRoutes } from "../../apiRoutes"
import axios from "@/lib/axios"
import { ISignin, IToken } from "@/types/auth"

export const useSignin = () => {
  return useMutation({
    mutationKey: [apiRoutes.auth.login],
    mutationFn: async (user: ISignin) => {
      return await axios.post<IToken>(apiRoutes.auth.login, { ...user })
    },
  })
}
