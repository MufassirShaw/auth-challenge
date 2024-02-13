import Image from "next/image"
import { Inter } from "next/font/google"
import { useUser } from "@/hook/useUser"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  const { data: user, isLoading, error } = useUser()

  if (isLoading) {
    return "Loading ...."
  }

  if (error) {
    return <p>error: {error.response?.data?.message || error.message}</p>
  }

  return (
    <main>
      <h1> Hello {user?.name ?? "Guest"} Welcome to the app</h1>
    </main>
  )
}
