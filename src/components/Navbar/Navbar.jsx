import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { useData } from "../../hooks/useData";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { categories, setSelectedCategory } = useData();

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === "All" ? null : category);
  };

  return (
    <div
      className={`min-h-auto transition-all duration-300 bg-[#f1f1f1] ${
        isOpen ? "w-72" : "w-20"
      } text-black`}
    >
      <div className="p-4">
        <RxHamburgerMenu
          size={30}
          onClick={handleMenu}
          className="cursor-pointer"
        />
      </div>
      {isOpen && (
        <div className="bg-[#f1f1f1] h-screen text-center">
          <ul className="flex flex-col p-8">
            {categories.map((category) => (
              <li
                key={category}
                onClick={() => handleCategoryClick(category)}
                className="rounded-2xl bg-neutral-300 justify-between p-4 cursor-pointer hover:bg-neutral-400"
              >{category}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
