import { useQuery } from "@tanstack/react-query"
import { apiRoutes } from "../../apiRoutes"
import axios from "@/lib/axios"
import { IUser } from "@/types/user"

export const useUser = () => {
  return useQuery({
    queryKey: [apiRoutes.user.me],
    queryFn: async () => {
      const { data } = await axios.get<IUser>(apiRoutes.user.me)
      return data
    },
  })
}
