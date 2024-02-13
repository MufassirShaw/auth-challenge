import { ReactNode } from "react"
interface IProps {
  children: ReactNode
}
export const AuthLayout: React.FC<IProps> = ({ children }) => {
  return (
    <main className="grid md:grid-cols-2 relative w-full h-[100vh]">
      <section className="bg-primary hidden md:grid content-center gap-y-4 p-10">
        <h1 className="text-white text-5xl text-center capitalize">
          Welcome to EasyGen
        </h1>
        <p className="text-balance text-center text-warmGray-200 mt-2">
          Say goodbye to the ever-growing L&D backlog. Our intuitive platform
          empowers your L&D team and employees to capture, share, and preserve
          your {"company's"} collective knowledge. 🚀
        </p>
      </section>
      <section className="grid content-center">{children}</section>
    </main>
  )
}
