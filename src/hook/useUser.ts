import { useQuery } from "@tanstack/react-query"
import { apiRoutes } from "../../apiRoutes"
import axios from "@/lib/axios"
import { IUser } from "@/types/user"
import { AxiosError } from "axios"
import { useRouter } from "next/router"

const publicRoutes = ["/auth", "/auth/sigin"]

export const useUser = () => {
  const router = useRouter()
  return useQuery({
    queryKey: [apiRoutes.user.me],
    queryFn: async () => {
      try {
        const { data } = await axios.get<IUser>(apiRoutes.user.me)
        return data
      } catch (e) {
        const error = e as AxiosError
        const isOnPublicRoute = publicRoutes.includes(router.pathname)
        if (error?.response?.status === 401 && !isOnPublicRoute) {
          router.push("/auth/signin")
          return
        }
        throw error
      }
    },
  })
}
