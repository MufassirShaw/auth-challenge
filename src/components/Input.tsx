import { ForwardRefRenderFunction, forwardRef } from "react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  error?: string
}

const InputRaw: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, className = "", error, ...rest },
  ref
) => {
  return (
    <section>
      <label htmlFor={name} className="block text-dark">
        {label}
      </label>
      <input
        name={name}
        id={name}
        className={`rounded w-full font-xs text-dark py-1 px-3 border-primary border-opacity-60 focus-visible:border-opacity-100 outline-none border-2 placeholder-dark placeholder-opacity-60 ${
          error ? "border-red focus:border-red" : ""
        } ${className}}`}
        ref={ref}
        {...rest}
      />
      {error && <p className="text-red inline text-xs">🚫 {error} </p>}
    </section>
  )
}

const Input = forwardRef<HTMLInputElement, InputProps>(InputRaw)

export { Input }
