import axios, { InternalAxiosRequestConfig } from "axios"

const requestInterceptor = (axiosConfig: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem("token")
  axiosConfig.headers.Authorization = token ? `Bearer ${token}` : null
  return axiosConfig
}

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
})

instance.interceptors.request.use(requestInterceptor)

export default instance
