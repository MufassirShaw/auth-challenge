interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, className = "", ...props }: ButtonProps) => {
  return (
    <button
      className={`px-4 py-2 bg-primary text-white rounded shadow-lg active:shadow-none ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
