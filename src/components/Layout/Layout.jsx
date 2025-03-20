import { SideBar } from "../SideBar/SideBar";

export function Layout( {children} ) {
  return (
    <div className="flex">
        <SideBar />
        <main className="p-4">
            {children}
        </main>
    </div>
  )
}