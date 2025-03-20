import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react"

export function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className={`min-h-auto transition-all duration-300 bg-[#f1f1f1] ${
            isOpen ? "w-72" : "w-20"
        } text-black`}>
            <div className="p-4">
                <RxHamburgerMenu 
                size={30}
                onClick={handleMenu}
                className="cursor-pointer"/>
            </div>
            {isOpen && (
                <div className="bg-[#f1f1f1] h-screen text-center">
                    <ul className="flex flex-col p-8">
                        <div className="rounded-2xl bg-neutral-300 justify-between p-4"><li>Item example</li></div>
                    </ul>
                </div>
            )}

        </div>
    )
}