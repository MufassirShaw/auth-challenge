import Link from "next/link"
import { useForm } from "react-hook-form"
import { useRouter } from "next/router"

import { Input, Button, Error } from "@/components"
import { AuthLayout } from "@/components/Auth/layout"
import { ISignin } from "@/types/auth"
import { useSignin } from "@/hook/useSignin"

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignin>()
  const { email, password } = errors
  const { mutateAsync, isPending, error } = useSignin()
  const router = useRouter()
  const onSubmit = async (values: ISignin) => {
    const { data } = await mutateAsync(values)
    const { access_token } = data
    localStorage.setItem("token", access_token)
    router.push("/")
  }

  return (
    <AuthLayout>
      <form
        className="grid p-10 gap-y-4 max-w-[750px] mx-auto w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-center text-4xl text-dark">Login</h2>
        <Input
          {...register("email", {
            required: {
              value: true,
              message: "email required",
            },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email format",
            },
          })}
          label="Email"
          placeholder="jhon@doe.com"
          error={email?.message}
        />
        <Input
          {...register("password", {
            required: {
              value: true,
              message: "password required",
            },
          })}
          label="Password"
          placeholder="****"
          type="password"
          error={password?.message}
        />

        <Button type="submit" className="mt-4" disabled={isPending}>
          Login
        </Button>
        <p className="text-dark">
          {"Don't"} have an account yet?{" "}
          <Link href="/auth" className="underline text-primary">
            Sign Up
          </Link>
        </p>

        {!!error && (
          <Error text={error?.response?.data?.message || error?.message} />
        )}
      </form>
    </AuthLayout>
  )
}
