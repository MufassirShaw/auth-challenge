import Link from "next/link"
import { useForm } from "react-hook-form"
import { useRouter } from "next/router"

import { Input, Button, Error, Spinner } from "@/components"
import { AuthLayout } from "@/components/Auth/layout"
import { ISignup } from "@/types/auth"
import { useSignup } from "@/hook/useSignup"
import { useUser } from "@/hook/useUser"

const PASSWORD_REGX =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/

const EMAIL_REGX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function SignUp() {
  const { data } = useUser()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignup>()
  const router = useRouter()

  const { email, password, name } = errors
  const { mutateAsync, isPending, error } = useSignup()

  const onSubmit = async (values: ISignup) => {
    const { data } = await mutateAsync(values)
    const { access_token } = data
    localStorage.setItem("token", access_token)
    router.push("/")
  }

  if (data) {
    router.push("/")
    return <Spinner fullPage />
  }

  return (
    <AuthLayout>
      <form
        className="grid p-10 gap-y-4 max-w-[750px] mx-auto w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-center text-4xl text-dark">Register here 🤗</h2>
        <Input
          {...register("name", {
            required: {
              message: "name is required",
              value: true,
            },
          })}
          label="Name"
          placeholder="Jhon Doe"
          error={name?.message}
        />
        <Input
          {...register("email", {
            required: {
              message: "email is required",
              value: true,
            },
            pattern: {
              value: EMAIL_REGX,
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
              message: "password is required",
              value: true,
            },
            minLength: {
              message: "password must be at least 8 character long",
              value: 8,
            },
            pattern: {
              value: PASSWORD_REGX,
              message:
                "Password must contain at least 1 letter, 1 number, and 1 special character",
            },
          })}
          label="Password"
          placeholder="****"
          type="password"
          error={password?.message}
        />

        <Button
          type="submit"
          className="mt-4"
          aria-disabled={isPending}
          disabled={isPending}
        >
          Register
        </Button>

        <p className="text-dark">
          Already have an account?{" "}
          <Link href="/auth/signin" className="underline text-primary">
            {" "}
            Sign In{" "}
          </Link>
        </p>

        {!!error && (
          <Error text={error?.response?.data?.message || error.message} />
        )}
      </form>
    </AuthLayout>
  )
}
