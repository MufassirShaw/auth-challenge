export const Error: React.FC<{ text: string }> = ({ text }) => {
  return (
    <section className="bg-red bg-opacity-10 border-red  rounded-md px-2 py-4">
      <p className="text-red">🚫 {text}</p>
    </section>
  )
}
