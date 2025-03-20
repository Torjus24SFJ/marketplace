import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { useData } from "../../hooks/useData";
import { ProductList } from "../ProductList/ProductList";

export function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { categories, setSelectedCategory, setSearchQuery, ProductList , setProductList } = useData();
  const [isAdded, setIsAdded] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === "Browse All" ? null : category);
  };

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleAddProduct = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const newProduct = {
      id: ProductList.length + 1,
      title: formData.get("title"),
      category: formData.get("category"),
      price: parseFloat(formData.get("price")),
      description: formData.get("description"),
      image: "https://via.placeholder.com/1",
    }
    setProductList([...ProductList, newProduct])
    setIsAdded(false)
    e.target.reset()
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
          <div className="h-screen text-center overflow-y-auto">
            <ul className="flex flex-col mt-8 gap-10">
              {categories.map((category) => (
                <li
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className="rounded-[8px] bg-[#272626] p-4 cursor-pointer text-neutral-600 hover:text-neutral-500 font-bold capitalize"
                >
                  {category}
                </li>
              ))}
              <li className="rounded-[8px] bg-[#4a4949] p-4 cursor-pointer text-neutral-600">
                <form action="" className="flex" onClick={(e) => e.preventDefault()}>
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

//!TODO Search field pushes content out of page if search query is too long (mobile resolution)*/