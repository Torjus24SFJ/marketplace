import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { useData } from "../../hooks/useData";
import { CreateListing } from "../CreateListing/CreateListing";
import { SearchBar } from "../Searchbar/Searchbar";

export function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <div
      className={`min-h-screen transition-all duration-300 bg-[#252728] ${
        isOpen ? "w-40 md:w-72" : "w-20"
      } text-black`}
    >
      <div className="sticky top-0 left-0">
        <div className="p-4">
          <RxHamburgerMenu
            size={30}
            onClick={handleMenu}
            className="cursor-pointer text-neutral-200 hover:text-neutral-300"
          />
        </div>
        {isOpen && (
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
            <SearchBar setSearchQuery={setSearchQuery}/>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

//!TODO Search field pushes content out of page if search query is too long (mobile resolution)*/
//!TODO Search within category will only search for category products - should be all products
//!TODO Fix - Hamburger bar vanishing*/
