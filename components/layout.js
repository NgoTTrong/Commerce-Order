export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      <footer className="center mt-5 flex justify-center space-x-4 bg-[#E7E8EF] p-4 text-xs">
        <p>Ecommerce </p>
      </footer>
    </>
  )
}
