import { Inter } from "next/font/google"
import { useUser } from "@/hook/useUser"
import { Button, Spinner } from "@/components"
import { useRouter } from "next/router"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  const { data: user, isLoading } = useUser()
  const handleLogout = () => {
    localStorage.removeItem("token")
  }

  if (isLoading || !user) {
    return <Spinner fullPage />
  }

  return (
    <main>
      <h1> Hello {user?.name ?? "Guest"} Welcome to the app</h1>
    </main>
  )
}
