import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { useData } from "../../hooks/useData";

export function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { categories, setSelectedCategory } = useData();

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === "Browse All" ? null : category);
  };

  return (
    <div
      className={`min-h-auto transition-all duration-300 bg-[#252728] ${
        isOpen ? "w-40 md:w-72" : "w-20"
      } text-black`}
    >
      <div className="sticky top-0 left-0">
        <div className="p-4">
          <RxHamburgerMenu
            size={30}
            onClick={handleMenu}
            className="cursor-pointer text-neutral-600 hover:text-neutral-500"
          />
        </div>
        {isOpen && (
          <div className="h-screen text-center">
            <ul className="flex flex-col">
              {categories.map((category) => (
                <li
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className="rounded-[8px] bg-neutral-800 p-4 cursor-pointer mt-8 text-neutral-600 hover:text-neutral-500 font-bold capitalize"
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
