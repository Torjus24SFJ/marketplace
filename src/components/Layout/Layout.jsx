import { NavBar } from "../Navbar/Navbar";

export function Layout( {children} ) {
  return (
    <div className="flex">
        <NavBar />
        <main className="p-4">
            {children}
        </main>
    </div>
  )
}