import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import { useData } from "../../hooks/useData";

export function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { categories, setSelectedCategory, setSearchQuery } = useData();
  // const [isAdded, setIsAdded] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === "Browse All" ? null : category);
  };

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div
      className={`min-h-auto transition-all duration-300 bg-[#202020] ${
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
                  className="rounded-[8px] bg-[#272626] p-4 cursor-pointer mt-8 text-neutral-600 hover:text-neutral-500 font-bold capitalize"
                >
                  {category}
                </li>
              ))}
              <li className="rounded-[8px] bg-[#4a4949] p-4 cursor-pointer mt-8 text-neutral-600">
                <form action="" className="flex" onClick={(e) => e.preventDefault()}>
                  {/* <IoIosSearch size={30} className="justify-center"/> */}
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full bg-transparent focus:outline-none focus:ring-0 text-neutral-400 placeholder-neutral-400 text-center"
                    onChange={handleSearchQuery}
                  />
                </form>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

//!TODO Search field pushes content out of page if search query is too long */