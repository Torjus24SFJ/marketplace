import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { useData } from "../../hooks/useData";
import { CreateListing } from "../CreateListing/CreateListing";
import { SearchBar } from "../Searchbar/Searchbar";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

export function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const {
    categories,
    setSelectedCategory,
    setSearchQuery,
    productList,
    setProductList,
  } = useData();

  const [modalOpen, setModalOpen] = useState(false);
  const handleMenu = () => setIsOpen(!isOpen);;
  const handleCategoryClick = (category) => {
    setSelectedCategory(category === "Browse All" ? null : category);
  };

  //* Open / close modal
  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  const filteredCategories = categories.filter(
    (category) => category !== "Browse All"
  );

  const isItemPage = pathname.startsWith("/product/")

  return (
    <div
      className={`min-h-screen transition-all duration-300 bg-[#252728] ${
        isOpen ? "w-40 md:w-72" : "w-20"
      } text-black`}
    >
      <div className="sticky top-0 left-0 z-[10]">
        <div className="p-4 flex items-center">
          <RxHamburgerMenu
            size={30}
            onClick={handleMenu}
            className="cursor-pointer text-neutral-200 hover:text-neutral-300"
          />
          {isOpen && isItemPage && (
            <Link to="/" className="ml-4">
              <IoMdArrowRoundBack
                size={30}
                className="cursor-pointer text-neutral-200 hover:text-neutral-300"
              />
            </Link>
          )}
        </div>
        {isOpen && !isItemPage && (
          <div className="h-screen text-center overflow-y-auto">
            <ul className="flex flex-col mt-8 gap-4">
              <button
                onClick={handleModal}
                className="p-4 bg-[#252728] text-neutral-200 cursor-pointer hover:bg-[#3b3d3e] rounded-2xl font-bold"
              >
                Create New Listing
              </button>
              <CreateListing
                modalOpen={modalOpen}
                handleModal={handleModal}
                filteredCategories={filteredCategories}
                productList={productList}
                setProductList={setProductList}
              />
              {categories.map((category) => (
                <li
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className="bg-[#252728] p-4 cursor-pointer text-neutral-200 hover:bg-[#3b3d3e] rounded-xl capitalize"
                >
                  {category}
                </li>
              ))}
              <SearchBar setSearchQuery={setSearchQuery} />
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
//!TODO Search within category will only search for category products - should be all products
//!TODO Fix - Hamburger bar vanishing
